--1. mostrar para cada cliente, cual fue el monto maximo del total de importe de las orden,el minimo y el promedio total de importe de las orden.
--Ordenar por el monto maximo.
--NOTA: El importe total de la orden es la suma de todas las lineas(UnitPrice * Quantity) de la orden.

select c.ContactName, MAX(subquery.OrderTotal) AS MontoMaximo,AVG(subquery.OrderTotal) AS MontPromedio,MIN(subquery.OrderTotal) AS Montmin
FROM Customers c,orders o, ( SELECT OrderID, SUM(UnitPrice * Quantity) AS OrderTotal
							FROM OrderDetails
							GROUP BY OrderID)as subquery
where c.CustomerID = o.CustomerID and o.OrderID=subquery.OrderID
GROUP BY c.ContactName
Order by MontoMaximo

--2. Mostrar los datos de los empleados que no han preparado almenos 3 ordenes en el semestre pasado
--que registraron mas de 3 ordenes en este semestre y solo han realizado ordenes a empresas de Belgium.

set dateformat DMY 
SELECT employeeid,LastName
FROM employees
WHERE employeeid IN (SELECT employeeid
                     FROM orders
                     WHERE ShipCountry='Belgium') AND
      employeeid NOT IN (SELECT employeeid
                         FROM orders
                         WHERE ShipCountry <> 'Belgium') AND
      employeeid NOT IN (SELECT employeeid
                         FROM orders
                         WHERE orderdate >= '01/07/1997' and
                               orderdate <= '31/12/1997'
							   group by employeeid
							   having count(OrderID) > 3
							   ) AND
      employeeid IN (SELECT employeeid
                     FROM orders
                     WHERE orderdate >= '01/01/1996' and
                           orderdate <= '31/12/1996')


--3. mostrar empleados que solo vendieron ordenes a un unico pais, mostrar cual es el pais.

SELECT distinct o.employeeid,o.ShipCountry
FROM Orders o
WHERE o.ShipCountry =ALL (SELECT oo.ShipCountry
                     FROM orders oo
                     WHERE  oo.EmployeeID=o.EmployeeID )

---4 Mostrar empleados que han realizado ordenes de clientes de más de 5 países y muestra sus nombres, apellidos y la cantidad de países de los clientes a los que han atendido.

SELECT Employees.FirstName, Employees.LastName, COUNT(DISTINCT Customers.Country) AS PaisesClientes
FROM Employees
JOIN Orders ON Employees.EmployeeID = Orders.EmployeeID
JOIN Customers ON Orders.CustomerID = Customers.CustomerID

GROUP BY Employees.FirstName, Employees.LastName
HAVING COUNT(DISTINCT Customers.Country) > 3;

--son 21 paises
select DISTINCT Customers.Country from Customers
( 'Germany','Finland','Denmark')
select * from Orders
--5 --Mostrar los nombres de todos los empleados, su cantidad de órdenes realizadas en los
--Paises(COUNTRY) ( 'Germany','Finland','Denmark') y 
--la fecha de la última orden realizada Paises(COUNTRY) ( 'Germany','Finland','Denmark'). 
--En caso que el empleado no preparara ninguna orden a dichos paises, igual deben mostrarse sus datos

set dateformat DMY
SELECT firstname,(SELECT COUNT(orderid)
                  FROM orders
				  WHERE Employees.EmployeeID=orders.EmployeeID and
				        ShipCountry in ( 'Germany','Finland','Denmark')) as cant,
                (SELECT MAX(OrderDate)
                  FROM orders
				  WHERE Employees.EmployeeID=orders.EmployeeID and
				         ShipCountry in ( 'Germany','Finland','Denmark')) as fecha
FROM Employees

-------------------------------------------------

insert into Employees (LastName,FirstName)values('test','test')
select * from Employees
set identity_insert "Orders" on
INSERT INTO Orders ("OrderID","CustomerID" , "EmployeeID","OrderDate","RequiredDate",
	"ShippedDate","ShipVia","Freight","ShipName","ShipAddress",
	"ShipCity","ShipRegion","ShipPostalCode","ShipCountry")
VALUES ('2',N'TOMSP',9,'7/5/1996','8/16/1996','7/10/1996',1,11.61,
	N'Toms Spezialitäten',N'Luisenstr. 48',N'Münster',
	NULL,N'44087',N'Germany')
select * from Orders 

