use Northwind

/* Parcial por ChatGPT

I) [10p]
La gerencia comercial desea identificar a los empleados que han gestionado órdenes para productos cuyos precios unitarios superan a todos los precios de los productos de la categoría "Seafood".
Se solicita listar:

EmployeeID, FirstName, LastName

La cantidad total de órdenes que ha gestionado el empleado.

El precio unitario promedio de los productos que ha vendido.

Sólo se deben incluir empleados que hayan gestionado más de 15 órdenes.
Ordenar el resultado por el precio unitario promedio, de mayor a menor.

II) [10p]
El área de logística necesita conocer qué transportistas (Shippers) han participado en órdenes que involucraron productos de la categoría 'Beverages' o 'Confections'.
Se pide listar:

ShipperID, CompanyName

Cantidad total de órdenes transportadas

Total de unidades transportadas (sumando cantidades de los productos de esas órdenes)

Considerar sólo aquellos transportistas cuyo total de unidades transportadas supere el promedio general de unidades transportadas por todos los transportistas en el último año.

Tip: pueden ser necesarias subconsultas para calcular los promedios.

III) [10p]
El área de marketing busca saber cuáles clientes (Customers) han comprado productos cuyos precios unitarios sean menores que el precio unitario promedio de cualquier producto vendido por los proveedores (Suppliers) cuyo país sea 'USA'.
Se pide devolver:

CustomerID, CompanyName

Cantidad total de productos comprados bajo esta condición.

Monto total gastado en esos productos (aplicando descuento si corresponde).

Mostrar solamente los clientes que hayan comprado al menos 50 unidades en total bajo esa condición.
Ordenar de mayor a menor según el monto total gastado.
*/

/*I) [10p]
La gerencia comercial desea identificar a los empleados que han gestionado órdenes
para productos cuyos precios unitarios superan a todos los precios de los productos de la categoría "Seafood".
Se solicita listar: EmployeeID, FirstName, LastName
La cantidad total de órdenes que ha gestionado el empleado.
El precio unitario promedio de los productos que ha vendido.
Sólo se deben incluir empleados que hayan gestionado más de 15 órdenes.
Ordenar el resultado por el precio unitario promedio, de mayor a menor.
*/

-----> Mi INTENTO

-- Se solicita listar: EmployeeID, FirstName, LastName
-- La cantidad total de órdenes que ha gestionado el empleado. -> sub1
-- El precio unitario promedio de los productos que ha vendido. 
--(Veo que todo es en base al empleadoID)
select Distinct sub1.EmployeeID, sub1.FirstName, sub1.LastName, sub1.CantidadTotalOrdenes, sub1.promedioPrecioUnitarioProductos
--(Voy a obtener aca la cantidad total de Ordenes)
from (	select sub2.EmployeeID, sub2.FirstName, sub2.LastName, COUNT(o1.OrderID) as CantidadTotalOrdenes, sub2.promedioPrecioUnitarioProductos
		-- (El precio unitario que vendió el empleado)
		from (	select sub3.EmployeeID, sub3.FirstName, sub3.LastName, AVG(sub3.precioUnitario) as promedioPrecioUnitarioProductos
				from (	select  e2.EmployeeID, e2.FirstName, e2.LastName, SUM(od2.UnitPrice) as precioUnitario
						from Employees e2
						JOIN Orders o2 ON o2.EmployeeID = e2.EmployeeID
						JOIN OrderDetails od2 ON od2.OrderID = o2.OrderID
						group by e2.EmployeeID, e2.FirstName, e2.LastName
						having SUM(od2.UnitPrice) > (	-- precios de los productos de la categoría "Seafood". --
														select SUM(od3.UnitPrice) as precioUnitario
														from Employees e3
														JOIN Orders o3 ON o3.EmployeeID = e3.EmployeeID
														JOIN OrderDetails od3 ON od3.OrderID = o3.OrderID
														JOIN Products p3 ON od3.ProductID = p3.ProductID
														JOIN Categories c3 ON c3.CategoryID = p3.CategoryID
														where c3.CategoryName = 'Seafood'
														)
						) as sub3
				group by sub3.EmployeeID, sub3.FirstName, sub3.LastName
		)as sub2
		JOIN Orders o1 on sub2.EmployeeID = o1.EmployeeID
		Group by sub2.EmployeeID, sub2.FirstName, sub2.LastName, sub2.promedioPrecioUnitarioProductos
		--Sólo se deben incluir empleados que hayan gestionado más de 15 órdenes.
		Having COUNT(o1.OrderID) > 15
		) as sub1
JOIN Orders o ON o.EmployeeID=sub1.EmployeeID
JOIN OrderDetails od ON od.OrderID = o.OrderID
JOIN Products p ON p.ProductID = od.ProductID
JOIN Categories c ON c.CategoryID = p.CategoryID

-----> CHAT GPT:
SELECT 
    e.EmployeeID,
    e.FirstName,
    e.LastName,
    COUNT(DISTINCT o.OrderID) AS CantidadTotalOrdenes,
    AVG(od.UnitPrice) AS PromedioPrecioUnitarioProductos
FROM 
    Employees e
    JOIN Orders o ON e.EmployeeID = o.EmployeeID
    JOIN OrderDetails od ON o.OrderID = od.OrderID
WHERE 
    od.UnitPrice > ALL (
        SELECT p.UnitPrice
        FROM Products p
        JOIN Categories c ON p.CategoryID = c.CategoryID
        WHERE c.CategoryName = 'Seafood'
    )
GROUP BY 
    e.EmployeeID, e.FirstName, e.LastName
HAVING 
    COUNT(DISTINCT o.OrderID) > 15
ORDER BY 
    PromedioPrecioUnitarioProductos DESC;

/*
II) [10p]
El área de logística necesita conocer qué transportistas (Shippers) 
han participado en órdenes que involucraron productos de la categoría 'Beverages' o 'Confections'.
Se pide listar:
ShipperID, CompanyName
Cantidad total de órdenes transportadas
Total de unidades transportadas (sumando cantidades de los productos de esas órdenes)
Considerar sólo aquellos transportistas cuyo total de unidades transportadas
supere el promedio general de unidades transportadas por todos los transportistas en el último año.
*/
--cantidadTotalOrdenesTransportadas
select COUNT(o.OrderID)
from Orders o
JOIN Shippers s on o.ShipVia = s.ShipperID

--totalUnidadesTransportadas
select COUNT(p.ProductID)
from Products p
JOIN OrderDetails od ON od.ProductID = p.ProductID
JOIN Orders o ON o.OrderID = od.OrderID

select sub1.ShipperID, sub1.CompanyName, sub1.cantidadTotalOrdenesTransportadas, sub2.totalUnidadesTransportadas
from (	--cantidadTotalOrdenesTransportadas
		select s2.ShipperID, s2.CompanyName, COUNT(o2.OrderID) as cantidadTotalOrdenesTransportadas
		from Orders o2
		JOIN Shippers s2 on o2.ShipVia = s2.ShipperID
		group by s2.ShipperID, s2.CompanyName
		) as sub1
JOIN (  --totalUnidadesTransportadas
		select s3.ShipperID, s3.CompanyName, COUNT(p3.ProductID) as totalUnidadesTransportadas
		from Products p3
		JOIN OrderDetails od3 ON od3.ProductID = p3.ProductID
		JOIN Orders o3 ON o3.OrderID = od3.OrderID
		JOIN Shippers s3 ON s3.ShipperID = o3.ShipVia
		JOIN Categories c3 ON c3.CategoryID = p3.CategoryID
		--en órdenes que involucraron productos de la categoría 'Beverages' o 'Confections'.
		where (c3.CategoryName = 'Beverages' 
		OR c3.CategoryName = 'Confections')
		group by s3.ShipperID, s3.CompanyName
) as sub2 ON sub2.ShipperID = sub1.ShipperID

--------------> Correccion CHATGPT
select s3.ShipperID, s3.CompanyName, SUM(od3.Quantity) as totalUnidadesTransportadas
from Products p3
JOIN OrderDetails od3 ON od3.ProductID = p3.ProductID
JOIN Orders o3 ON o3.OrderID = od3.OrderID
JOIN Shippers s3 ON s3.ShipperID = o3.ShipVia
JOIN Categories c3 ON c3.CategoryID = p3.CategoryID
where (c3.CategoryName = 'Beverages' OR c3.CategoryName = 'Confections')
--(Nunca le agregué el filtro de año)
  AND o3.OrderDate >= DATEADD(YEAR, -1, GETDATE()) -- Agregamos el filtro del último año
group by s3.ShipperID, s3.CompanyName
--Me faltó filtrar por promedio general)
HAVING SUM(od3.Quantity) > ( 
    --  Subconsulta que calcula el promedio general
    select AVG(subquery.totalUnidades)
    from (
        select SUM(od4.Quantity) as totalUnidades
        from Products p4
        JOIN OrderDetails od4 ON od4.ProductID = p4.ProductID
        JOIN Orders o4 ON o4.OrderID = od4.OrderID
        JOIN Shippers s4 ON s4.ShipperID = o4.ShipVia
        JOIN Categories c4 ON c4.CategoryID = p4.CategoryID
        where (c4.CategoryName = 'Beverages' OR c4.CategoryName = 'Confections')
          AND o4.OrderDate >= DATEADD(YEAR, -1, GETDATE()) -- Último año
        group by s4.ShipperID
    ) as subquery
)

/*
III) [10p]
El área de marketing busca saber cuáles clientes (Customers) han comprado productos 
cuyos precios unitarios sean menores que el precio unitario promedio de cualquier producto vendido por los proveedores (Suppliers)
cuyo país sea 'USA'.

Se pide devolver:
CustomerID, CompanyName
Cantidad total de productos comprados bajo esta condición.
Monto total gastado en esos productos (aplicando descuento si corresponde).

Mostrar solamente los clientes que hayan comprado al menos 50 unidades en total bajo esa condición.
Ordenar de mayor a menor según el monto total gastado.
*/

