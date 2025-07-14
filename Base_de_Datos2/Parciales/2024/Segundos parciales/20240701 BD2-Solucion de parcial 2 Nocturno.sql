use northwind
go
/* 1. Vista */
SELECT c.CustomerID,c.CompanyName,(SELECT COUNT(o.orderid)
                                   FROM Orders o
								   WHERE o.CustomerID=c.CustomerID and
								         o.ShipRegion is null) as OrdenesSinRegion,
                                   (SELECT SUM(o.freight)
								    FROM Orders o
									WHERE o.CustomerID=c.CustomerID and
									      o.ShipCountry='UK') as OrdenesUK
FROM Customers c

/* 2. SP */
CREATE PROCEDURE sp_Ejercicio2
@CustomerID nchar(5),
@cnt_ordenes int out,
@fch_old datetime out,
@fch_new datetime out,
@mensaje varchar(100) out
AS
BEGIN

 SELECT @cnt_ordenes=count(o.orderid),@fch_old=MIN(o.orderdate),
        @fch_new=MAX(o.orderdate),
		@mensaje=
		CASE
		  WHEN count(o.orderid)=0 THEN 'El cliente no tiene ordenes'
        ELSE 'El cliente tiene ordenes'
		END
 FROM Orders o
 WHERE o.CustomerID=@CustomerID

END

/* Probamos el SP */
DECLARE 
@cnt_ordenes int,
@fch_old datetime,
@fch_new datetime,
@mensaje varchar(100)

execute sp_Ejercicio2 'ORT',@cnt_ordenes out,@fch_old out,@fch_new out,@mensaje out
PRINT @cnt_ordenes
PRINT @fch_old
PRINT @fch_new
PRINT @mensaje

/* 3. Funcion */
CREATE FUNCTION sf_Ejercicio3(@EmployeeID int)
   RETURNS varchar(100)
AS
BEGIN
DECLARE @retorno varchar(100)

 SELECT @retorno=title+' '+FirstName+' '+LastName
 FROM Employees
 WHERE EmployeeID=@EmployeeID

 RETURN @retorno

END
/* Pruebo la funcion */
SELECT northwind.dbo.sf_Ejercicio3(employeeid) as Empleado
FROM Employees
WHERE ReportsTo is null

/* 4. Trigger */
-- Creamos la tabla de log
CREATE TABLE log_employee(id_log int identity not null primary key,
                          fch_log datetime,
                          Employee_id int,
						  Salary_old money,
						  Salary_new money)


CREATE TRIGGER trg_Ejercicio4
ON Employees 
INSTEAD OF update
AS
BEGIN
  IF UPDATE(Salary)
  BEGIN
     UPDATE Employees
	 SET Salary=Salary + (SELECT sum(i.salary-d.salary)
	                      FROM inserted i, deleted d
				          WHERE i.EmployeeID=d.EmployeeID and
				                i.EmployeeID in (SELECT EmployeeID
					                             FROM orders
									WHERE YEAR(OrderDate) = YEAR(GETDATE()) AND MONTH(OrderDate) = MONTH(GETDATE())
										         GROUP BY EmployeeID
										         HAVING count(orderid) >= 2))
 
    INSERT INTO log_employee SELECT getdate(),i.EmployeeID,d.salary,i.salary
	                         FROM inserted i, deleted d
				             WHERE i.EmployeeID=d.EmployeeID and
				                   i.EmployeeID not in (SELECT EmployeeID
					                                    FROM orders
									     WHERE YEAR(OrderDate) = YEAR(GETDATE()) AND MONTH(OrderDate) = MONTH(GETDATE())
									   	                GROUP BY EmployeeID
										                HAVING count(orderid) >= 2)
   END
END

/* 5. Trigger */
CREATE TRIGGER trg_Ejercicio5
ON PurchaseDetail
AFTER insert,update,delete
AS
BEGIN
IF EXISTS (SELECT * FROM inserted) AND NOT EXISTS (SELECT * FROM deleted)
--Es un INSERT
UPDATE Products
SET UnitsInStock=UnitsInStock + (SELECT sum(i.Quantity)
                                 FROM inserted i
								 WHERE i.ProductID=Products.ProductID)
WHERE ProductID in (SELECT ProductID FROM inserted)
IF NOT EXISTS (SELECT * FROM inserted) AND EXISTS (SELECT * FROM deleted)
--Es un DELETE
UPDATE Products
SET UnitsInStock=UnitsInStock - (SELECT sum(d.Quantity)
                                 FROM deleted d
								 WHERE d.ProductID=Products.ProductID)
WHERE ProductID in (SELECT ProductID FROM deleted)

IF EXISTS (SELECT * FROM inserted) AND EXISTS (SELECT * FROM deleted)
BEGIN
IF UPDATE(Quantity)
--Es un UPDATE
UPDATE Products
SET UnitsInStock=UnitsInStock + (SELECT sum(i.Quantity-d.Quantity)
                                 FROM inserted i,deleted d
								 WHERE i.ProductID=d.ProductID and
								       i.ProductID=Products.ProductID)
WHERE ProductID in (SELECT ProductID FROM inserted)
END
END
