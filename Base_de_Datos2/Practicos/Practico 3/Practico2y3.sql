--1. Ejecutar el script NorthWind.sql y verificar que se crearon todas las estructuras con sus datos
--correspondientes

use Northwind
set dateformat ymd

--2. Mostrar los datos de los clientes (CUSTOMERS) para todas las ordenes con
--destino a Brasil (Brazil)
select * from customers

select * 
from Customers
Where Country = 'Brazil'

--3. Mostrar los nombres de las compañías de envío (SHIPPERS) utilizadas para envíos de ordenes a
--Francia (France)
select * from shippers
select * from Orders

select s.CompanyName from shippers as s
join Orders as o on s.ShipperID = o.ShipVia
where o.ShipCountry = 'France'

--4. Mostrar el nombre del comprador (ShipName) , el nombre del producto (ProductName) y el
--descuento otorgado (Discount) para todas las ordenes con un descuento menor o igual a 0,15
select o.ShipName, p.ProductName, od.Discount from Orders as o
join OrderDetails as od on o.OrderID = od.OrderID
join Products as p on od.ProductID = p.ProductID
where od.Discount <= 0.15

--5. Mostrar numero de orden, fecha de envío y datos de la región donde se
--enviaron ordenes en el año 1997
select o.OrderId, o.ShippedDate, o.ShipRegion From Orders as o
Where YEAR(o.ShippedDate) = '1997'

--6. Mostrar el nombre de los empleados que prepararon ordenes con destino
--Alemania (Germany) cuyo precio unitario es superior a 20 o cuya cantidad es mayor a 30.
select e.FirstName  from Employees as e
join Orders as o on o.EmployeeID = e.EmployeeID
join OrderDetails as od on o.OrderID = od.OrderID
join Products as p on od.ProductID = p.ProductID
where o.ShipCountry = 'Germany'
and (od.UnitPrice > 20
or od.Quantity > 30)

--7. Mostrar los nombres de los proveedores (Supplier) que venden productos que no superen las 10
--unidades en las órdenes en las que figuran. 
select su.ContactName from Suppliers as su
join Products as p on p.SupplierID = su.SupplierID
join OrderDetails as od on od.ProductID = p.ProductID
where od.Quantity <= 10

--8. Mostrar la descripción de las categorias de productos que están en ordenes que no tienen
--descuentos (discount=0).
select ca.Description from Categories as ca
join Products as p on ca.CategoryID = p.CategoryID
join OrderDetails AS od on od.ProductID=p.ProductID
where od.Discount = 0

--9. Mostrar numero de orden, nombre de la compañía cliente, contacto del cliente, código de
--producto, nombre de producto fecha de la orden,
select o.OrderID, shi.CompanyName, cu.ContactName, p.ProductID, p.ProductName, o.OrderDate
from Orders as o
join Shippers as shi on shi.ShipperID = o.ShipVia
join Customers as cu on cu.CustomerID = o.CustomerID
join OrderDetails as od on od.OrderID = o.OrderID
join Products as p on p.ProductID = od.ProductID

--10. Mostar los nombres de los proveedores que proveen productos que están en
--ordenes del año 1998 con destino USA.
select sup.ContactName from Suppliers as sup
join Products as p on p.SupplierID = sup.SupplierID
join OrderDetails as od on od.ProductID = p.ProductID
join Orders as o on o.OrderID = od.OrderID
where o.OrderDate = '1998'
And o.ShipCountry = 'USA'

--11. Mostrar los datos de las regiones a las que pertenecen los empleados que hicieron ordenes con
--destino a Rio de Janeiro
select * from Employees
select * from Orders
select e.Region from Orders as o
join Employees as e on e.EmployeeID = o.EmployeeID
where o.ShipCity = 'Rio de Janeiro'

--12. Mostrar todos los datos de los productos que se ordenaron a un precio
--diferente al establecido para cada uno.

select DISTINCT od.UnitPrice from Products as p
join OrderDetails as od on p.ProductID = od.ProductID

--13. Mostrar el importe total de las ordenes del año 1996.
select SUM(od.UnitPrice * od.Quantity) as total from OrderDetails as od
join Orders as o on o.OrderID = od.OrderID
where Year(o.OrderDate) = 1996

--14. Mostrar la cantidad promedio de las ordenes del año 1997.
select AVG(od.UnitPrice * od.Quantity) as total from OrderDetails as od
join Orders as o on o.OrderID = od.OrderID
where Year(o.OrderDate) = 1997

--15. Mostrar el mayor importe unitario, el menor importe unitario, la mayor cantidad y la menor
--cantidad de las ordenes de los años 1996 y 1997.
select MAX(od.UnitPrice) as MaximoPrecioUnitario, MIN(od.UnitPrice) as MinimoPrecioUnitario, MAX(od.Quantity) as MaximaCantidad, MIN(od.UnitPrice) as MinimaCantidad
from OrderDetails as od
join Orders as o on o.OrderID = od.OrderID
where Year(o.OrderDate) = 1997

select MAX(od.UnitPrice) as MaximoPrecioUnitario, MIN(od.UnitPrice) as MinimoPrecioUnitario, MAX(od.Quantity) as MaximaCantidad, MIN(od.UnitPrice) as MinimaCantidad
from OrderDetails as od
join Orders as o on o.OrderID = od.OrderID
where Year(o.OrderDate) = 1996

--16. Mostrar la menor fecha de envío de todas las ordenes de 1998 con destino a
--Bélgica (Belgium).
select Min(o.OrderDate) as FechaMinima from Orders as o
Where YEAR(o.OrderDate) = 1998
and ShipCountry = 'Belgium'

--17. Mostrar la cantidad de países diferentes a los que se le envían ordenes.
select COUNT(distinct o.shipcountry) as Cantidad_Paises_Distintos from orders as o

--18. Mostrar para cada cliente su nombre, la cantidad de ordenes procesadas y el importe total de las
--mismas en el año 1996 (ordenar los resultados de mayor importe a menor importe)

--AYUDA CHATGPT
select cu.ContactName, count(o.OrderID) as Cantidad_Ordenes, SUM(od.UnitPrice * od.Quantity) as Importe_Total  from Customers as cu
join orders as o on o.CustomerID = cu.CustomerID
join OrderDetails as od on o.OrderID = od.OrderID
where Year(o.OrderDate) = 1996
Group by ContactName
ORDER BY Importe_Total DESC;

--19. Mostrar los datos de los productos y el mayor descuento aplicado a cada uno de ellos.

--AYUDA CHATGPT
SELECT 
    p.ProductID, 
    p.ProductName, 
    p.UnitPrice, 
    p.UnitsInStock,
    MAX(od.Discount) AS MayorDescuento
FROM Products AS p
JOIN OrderDetails AS od ON od.ProductID = p.ProductID
GROUP BY 
    p.ProductID, 
    p.ProductName, 
    p.UnitPrice, 
    p.UnitsInStock;

--20. Mostrar la cantidad enviada por día para el mes de noviembre de 1996.
select DAY(o.OrderDate) as dia, count(o.OrderID) as  cantidad_enviada from Orders as o
where MONTH(o.orderDate) = 11
and YEAR(o.OrderDate) = 1996
group by DAY(o.OrderDate)
order by dia

--21. Mostrar los nombres de los productos y la cantidad de ordenes en las que cada uno aparece.
select p.ProductName, count(o.OrderID) as Cantidad_Ordenes_Por_Producto from Products as p
join OrderDetails as od on od.ProductID = p.ProductID
join Orders as o on o.OrderID = od.OrderID
Group by ProductName
Order By Cantidad_Ordenes_Por_Producto DESC

--22. Mostrar los nombres de los productos cuya cantidad de órdenes es mayor a 50
select p.ProductName, count(o.OrderID) as Cantidad_Ordenes_Por_Producto from Products as p
join OrderDetails as od on od.ProductID = p.ProductID
join Orders as o on o.OrderID = od.OrderID
Group by ProductName
Having count(o.OrderID) > 50
Order By Cantidad_Ordenes_Por_Producto DESC

--23. Mostrar los datos de los productos cuyo mayor descuento aplicado supera el 0.20
SELECT 
    p.ProductID, 
    p.ProductName, 
    p.UnitPrice, 
    p.UnitsInStock,
    MAX(od.Discount) AS MayorDescuento
FROM Products AS p
JOIN OrderDetails AS od ON od.ProductID = p.ProductID
GROUP BY 
    p.ProductID, 
    p.ProductName, 
    p.UnitPrice, 
    p.UnitsInStock
HAVING MAX(od.Discount) > 0.2

--24. Mostrar nombre de cliente y contacto para todos los clientes que hicieron más de 8 pedidos en el
--año 1998
SELECT cu.ContactName, cu.ContactTitle, count(o.OrderID) as Cantidad_Pedidos from customers as cu
join Orders as o on o.CustomerID = cu.CustomerID
where YEAR(o.OrderDate) = 1998
Group By cu.ContactName, cu.ContactTitle
Having count(o.OrderID) > 8

--25. Mostrar nombre de cliente, contacto y país para todos los clientes que tienen un promedio de
--cantidad ordenada mayor a 30 en el segundo semestre de 1997
SELECT cu.ContactName, cu.ContactTitle, cu.Country, AVG(o.OrderID) as Promedio_Pedido from customers as cu
join Orders as o on o.CustomerID = cu.CustomerID
where YEAR(o.OrderDate) = 1997
Group By cu.ContactName, cu.ContactTitle, cu.Country
Having AVG(o.OrderID) > 30

--26. Obtener todos los datos de los empleados que prepararon las órdenes en la fecha más reciente

--ChatGPT me guio
select * from Employees as e
join Orders as o on o.EmployeeID = e.EmployeeID
where o.orderDate = 
(select max(o.OrderDate) as Fecha_Cercana from Orders as o)

--27. Mostrar los datos de las categorías que no están en ninguna orden
----------------------------
--Dividimos el problema: 1) Primero busqueda de categorias que si esten en ordenes
select * from Orders as o
join OrderDetails as od on od.OrderID = o.OrderID
join Products as p on p.ProductID = od.ProductID
join Categories as c on c.CategoryID = p.CategoryID

--Luego vamos a hacer lo inverso, enfocandonos en c.categoryID
select * from Categories as c
where c.CategoryID NOT IN
	(select c.CategoryID from Orders as o
	join OrderDetails as od on od.OrderID = o.OrderID
	join Products as p on p.ProductID = od.ProductID
	join Categories as c on c.CategoryID = p.CategoryID)

--28. Mostrar el nombre de las empresas que tienen órdenes destino Brazil que tengan productos con
--un promedio de descuento superior al promedio de los descuentos de todas las órdenes
select cu.CompanyName, AVG(od.discount) as Promedio_Descuento from Customers as cu
join Orders o on o.CustomerID = cu.CustomerID
join OrderDetails od on od.OrderID = o.OrderID
where o.ShipCountry = 'Brazil'
Group By cu.CompanyName
having AVG(od.discount) > 
(select AVG(od.discount) as Promedio_Descuento from Orders as o
join OrderDetails od on od.OrderID = o.OrderID)

--29. Mostrar los nombres de todos los empleados, su cantidad de ordenes realizadas en los
--10 primeros días de julio de 1997 y la fecha de la última orden realizada en los primeros 10 días de julio
--de 1997. En caso que el empleado no preparara ninguna orden en dicha fecha, igual deben mostrarse sus
--datos


--30. Mostrar los datos de los clientes que tengan órdenes con más de 2 productos y que no tengan más
--de 3 órdenes con menos de 7 productos


--31. Mostrar los datos de los Shippers que nuca enviaron órdenes a la región oeste (Western)
--pero que si enviaron órdenes a la región este (Eastern)


--32. Obtener los datos de los clientes de ‘USA’ que en el 1997 hayan tenido en algún mes una
--orden de cantidad superior a 100 y que también hayan tenido algún mes con una inferior a
--20.


--33. Mostrar los datos de los clientes que tengan mas de 2 ordenes y que la cantidad total de
--productos del año 1997 supere los 50


--34. Implementar una consulta que retorne los datos de los empleados, la cantidad de
--ordenes que preparó en 1996 y el valor unitario máximo de ese período, para todos los
--empleados que hayan preparado al menos 20 ordenes en el período indicado.


--35. Mostrar los datos de los empleados que no han preparado ordenes en el segundo semestre del
--1997, registraron alguna orden en el 1996 y solo han preparado ordenes a empresas de France.


--36. Mostrar los datos de los clientes que tengan ordenes con mas de 3 renglones y
--que no tengan mas de 2 ordenes con menos de 5 renglones en el año 1996.


--37. Utilizando EXISTS mostrar código de cliente y nombre de empresa para todos los
--clientes que ordenaron el producto 40


--38. Utilizando ANY l istar los nombres de productos para los que exista alguna orden con cantidad
--igual a 10


--39. Mostrarlos nombres de los Shipper que enviaron todas las ordenes del cliente
--SEVES


--40. Mostrar los datos de los clientes que hicieron ordenes de mas de 10 productos diferentes y que
--no han realizado ordenes de mas de 20 productos en el año 1997


--41. Mostrar el nombre de las ciudades y el nombre del país para todas las ordenes que tienen
--descuentos en todas sus líneas o las que no tienen descuentos en ninguna de sus líneas


--42. Para cada producto que no esté discontinuado, mostrar sus datos, la fecha de la última orden
--en la que participó, el importe mas alto en que se vendió y el nombre a la categoría que
--pertenece.


--43. Marcar como discontinuado todos los productos que no se vendieron en todo el año 1997


--44. Bajar el precio en un 10% a todos los productos que no tienen stock y que se vendieron
--menos de 50 unidades en el año 1997.


--45. Utilizando ALL listar los nombres de los productos que tengan todas las ordenes con
--cantidad igual a 10


--46. Utilizando EXISTS listar los proveedores que provean productos de precio igual a 22

-- Uso de la cláusula ALL

--47. Obtener los productos cuyo precio es mayor que el precio de todos los productos en la categoría
--'Seafood':

--48. Obtener los clientes que tienen pedidos en todos los países

--49. Obtener todos los clientes que han realizado pedidos exclusivamente a USA.
---- Uso de la cláusula ANY

--50. Obtener los clientes que han realizado una orden con un número menor que cualquier orden realizada
-- por el cliente con ID 'ALFKI':

--51. Obtener los productos cuyo precio es mayor que el precio de algún producto en la categoría 'Beverages':

--52. Obtener todos los pedidos que contengan al menos un producto cuyo precio de venta sea mayor que el
--precio de lista.

---- Uso de la cláusula SOME

--53. Obtener los clientes que han realizado un pedido con un valor mayor que el valor mínimo de algún pedido
--realizado por el cliente con ID 'ALFKI': 