USE Northwind
SET DATEFORMAT ymd

-- Ejercicio 1
-- Conocer las tablas, visualizar los campos e información de
-- cada una de las siguientes tablas…
-- ● Shippers (Transportista)
-- ● Employees (Empleados)
-- ● Products (Productos)
-- ● Customers (Clientes)
-- ● Categories (Categorías)
-- ● Suppliers (Proveedores)
-- ● Orders (Ordenes)
-- ● OrderDetails (Detalle de Orden)

select * from Shippers
select * from Employees
select * from Products
select * from Customers
select * from Categories
select * from Suppliers
select * from Orders
select * from OrderDetails

--Ejercicio 2
--1. Insert un registro en cada una de las siguientes tablas:
-- Products (Productos)
-- Customers (Clientes)

INSERT INTO Products values ('Pablo Computadora', 1, 1, '10 boxes', 100.00, 200, 10, 10, 1)
select * from Products as p Where p.ProductName LIKE 'P%'

INSERT INTO Customers values ('PABLO', 'Pablo company', 'Pablo Contact', 'Pablo Larnaudie', 'Pablo Adress', ' Pablo city', 'Pablo Region', 'PABLOCODE', 'Uruguay', '123 123 123', 'FAx')
select * from Customers as c Where c.ContactName LIKE 'PABL%'

--2. Crear un script que permita dar de alta por lo menos 2 registros a la misma vez en
--las siguientes tablas:
--○ Shippers (Transportista)
--○ Employees (Empleados)

select * from Shippers
INSERT INTO Shippers values('Pablo Shippers', '123 123 123'),
('Pablo express', '345 345 345')

select * from Employees
INSERT INTO Employees values('Larnaudie', 'Pablo','Senior', 'Mr', '1995-06-13', '2025-03-23', 'Pablo Adress', 'Montevideo', 'Montevideo', '10000', 'UY', '123 123 123', '12AB', NULL ,'Pablo is Pablo', 3, NULL),
('Larnaudie', 'Pablo','Senior', 'Mr', '1995-06-13', '2025-03-23', 'Pablo Adress', 'Montevideo', 'Montevideo', '10000', 'UY', '123 123 123', '12AB', NULL ,'Pablo is Pablo', 3, NULL)
select * from Employees as e Where e.FirstName LIKE 'PABL%'

-- 3 y 4. Insertar un registro en la tabla Orders que contenga por lo menos los siguientes
--campos:
--○ OrderDate
--○ CustomerID
--○ EmployeeID
--○ ShipperID
select * from Orders
select * from Employees
select * from Products

INSERT INTO Orders(OrderDate, CustomerID, EmployeeID, ShipVia)
VALUES ('2025-03-16', 'PABLO', 11, 4);  -- Asumiendo que 5 es el ShipperID

select * from Orders as o
Where o.CustomerID LIKE 'PABLO%'

--4. Relacionado a la orden anterior, cargar 2 líneas de detalle.

DECLARE @OrderID INT;
-- Obtener el OrderID recién insertado
SET @OrderID = SCOPE_IDENTITY();

-- Insertar dos líneas de detalle
INSERT INTO [OrderDetails] (OrderID, ProductID, UnitPrice, Quantity, Discount)
VALUES 
    (@OrderID, 77, 300.00, 5, 0.2),  -- Producto con ProductID 77
    (@OrderID, 78, 250.00, 4, 0.1);  -- Producto con ProductID 78


SELECT * FROM OrderDetails
WHERE OrderID = @OrderID;

--5. Crear un nuevo Shipper, luego ingrese una Orden
-- que utilice dicho Shipper

select * from Shippers
select * from Orders

INSERT INTO Shippers VALUES('Pablo last shipper', '111 111 111')
DECLARE @ShipperID INT
SET @ShipperID = SCOPE_IDENTITY()

INSERT INTO Orders(OrderDate, CustomerID, EmployeeID, ShipVia)
VALUES ('2025-02-28', 'PABLO', 11, @ShipperID);  -- Asumiendo que 5 es el ShipperID

select * from Orders
Where ShipVia = @ShipperID

--6. Crear una tabla ShippersTemp y luego cargar en ella todos los registros que tiene la
--tabla Shippers.

SELECT *
INTO ShippersTemp
FROM Shippers
WHERE 1 = 0; 

-- Activar IDENTITY_INSERT para poder insertar en la columna IDENTITY
SET IDENTITY_INSERT ShippersTemp ON;

-- Insert data into ShippersTemp, explicitly specifying the column list
INSERT INTO ShippersTemp (ShipperID, CompanyName, Phone) -- Replace with actual column names
SELECT ShipperID, CompanyName, Phone -- Replace with actual column names
FROM Shippers;

-- Disable IDENTITY_INSERT after the operation
SET IDENTITY_INSERT ShippersTemp OFF;

-- Verify the data in ShippersTemp
SELECT * FROM ShippersTemp;

--7. Insertar un registro en la tabla Categories y luego ingresar un registro en la tabla
--Products que utilice la categoría antes creada
SELECT * From Categories
SELECT * From Products

INSERT INTO Categories VALUES ('Pablo Categoria', 'Esta es la categoria de Pablo', NULL)
DECLARE @CategoryID INT
SET @CategoryID = SCOPE_IDENTITY()

INSERT INTO Products (ProductName, CategoryID) Values('Pablo Producto Nuevo', @CategoryID)
