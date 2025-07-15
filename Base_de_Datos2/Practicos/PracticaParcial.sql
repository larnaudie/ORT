use Northwind
/* 

I) [10p] Escribir una consulta SQL que muestre: todos los datos de los clientes, el 
TotalOrdenes y TotalUnidadesPedidas  para aquellos Clientes que han realizado  
más de 5 ordenes de productos en la categoría 'Condiments', y además hayan 
realizado al menos una orden en la categoría 'Condiments'en el Primer semestre 
de 1998 y el Cliente haya colocado mas de 10 ordenes en 1997. 
 
Muestre los resultados Ordenados por el Total de ordenes de cada cliente  de 
mayor a menor. 

II) [10p] Escribir una Consulta que muestre el Código y Nombre de las 
Categorías(CategoryName) de productos y devuelva además como datos de 
salida: 
1) ‘TOTALdeVENTAS’: obtenido aplicando la formula [quantity * UnitPrice * 
(1-Discount) ]  de todos los productos para la Categoría indicada.  
2) ‘TOTALdeUNIDADES’ como la cantidad total de unidades vendidas de 
todos los productos dentro de esa categoría.  
Solamente para aquellas categorías que cumplan alguna de las siguientes 
restricciones:   
a) El total de Ventas de la categoría Supere el Promedio general de Ventas  
de todas las categorías para el año anterior al año en curso. 
b) El total unidades vendidas para la categoría Supere el Promedio general de 
Unidades vendidas de todas las categorías para el año anterior al año en 
curso.

--III) [10p] Crear una CONSULTA que Retorne los 10 primeros registros con los 
--siguientes atributos: 
--(CustomerID, CompanyName, ContactName,Id del Empleado, Nombre del 
--empleado y CantidadOrdenes)  
-- Para los 10 Clientes que más pedidos (#) han realizado en el año en curso y que 
--tengan Pedidos realizados en todos los meses del año anterior. 




I) [10p] Escribir una consulta SQL que muestre: todos los datos de los clientes, el 
TotalOrdenes y TotalUnidadesPedidas  para aquellos Clientes que han realizado  
más de 5 ordenes de productos en la categoría 'Condiments', y además hayan 
realizado al menos una orden en la categoría 'Condiments'en el Primer semestre 
de 1998 y el Cliente haya colocado mas de 10 ordenes en 1997. 
 
Muestre los resultados Ordenados por el Total de ordenes de cada cliente  de 
mayor a menor. 
*/

--SOLUCION PROFE	
SELECT c.*, T.TotalOrdenes,T.TotalUnidades 
FROM Customers c INNER JOIN 
( 
 SELECT o.CustomerID, COUNT(o.OrderID) AS TotalOrdenes, 
   SUM(od.Quantity) AS TotalUnidades 
 FROM  Orders o, OrderDetails od, Products p, Categories cc 
 WHERE o.OrderID = od.OrderID 
      AND od.ProductID = p.ProductID 
   AND p.CategoryID = cc.CategoryID 
   -- condiciones 
      AND cc.CategoryName = 'Condiments' 
   AND o.OrderDate BETWEEN '1998-01-01' AND '1998-06-01' 
      AND EXISTS (SELECT * 
                  FROM Orders o2 
                  WHERE o2.CustomerID = o.CustomerID   --referencia externa 
                        AND Year(o2.OrderDate) = 1997 
      Group by o2.CustomerID 
      HAVING Count(o2.OrderID) > 10 
    ) 
 GROUP BY o.CustomerID 
 HAVING COUNT(o.OrderID) > 5 
  )  T 
  ON c.CustomerID = T.CustomerID 
ORDER BY T.TotalOrdenes DESC 

/*
II) [10p] Escribir una Consulta que muestre el Código y Nombre de las 
Categorías(CategoryName) de productos y devuelva además como datos de 
salida: 
1) ‘TOTALdeVENTAS’: obtenido aplicando la formula [quantity * UnitPrice * 
(1-Discount) ]  de todos los productos para la Categoría indicada.  
2) ‘TOTALdeUNIDADES’ como la cantidad total de unidades vendidas de 
todos los productos dentro de esa categoría.  
Solamente para aquellas categorías que cumplan alguna de las siguientes 
restricciones:   
a) El total de Ventas de la categoría Supere el Promedio general de Ventas  
de todas las categorías para el año anterior al año en curso. 
b) El total unidades vendidas para la categoría Supere el Promedio general de 
Unidades vendidas de todas las categorías para el año anterior al año en 
curso.
*/
--------------->MI SOLUCION
--OJO, LOS alias NO DEBEN SER IGUALES EN LOS JOINS!! 
SELECT c.CategoryID, c.CategoryName, sub1.TOTALdeVENTAS, sub1.TOTALdeUNIDADES
FROM Categories c
JOIN (
select c.CategoryID, c.CategoryName, count(od.OrderID) as TOTALdeUNIDADES, SUM(od.quantity * od.UnitPrice * (1-od.Discount)) as TOTALdeVENTAS
from OrderDetails od
JOIN Products p on p.ProductID = od.ProductID
JOIN Categories c on c.CategoryID = p.CategoryID
group by c.CategoryID, c.CategoryName
) as sub1
ON sub1.CategoryID = c.CategoryID
group by c.CategoryID, c.CategoryName, sub1.TOTALdeVENTAS, sub1.TOTALdeUNIDADES
having sub1.TOTALdeVENTAS < (
--Solamente para aquellas categorías que cumplan alguna de las siguientes 
--restricciones:   
--a) El total de Ventas de la categoría...
--Aca hay que invertir el orden, el promedio general va primero, y lo hace desde una tabla, que será la que tenga el total de ventas.
--Supere el Promedio general de Ventas  
select AVG(TOTALdeVENTAS)
from
(
select c.CategoryName, SUM(od.quantity * od.UnitPrice * (1-od.Discount)) as TOTALdeVENTAS
from OrderDetails od
JOIN Products p on p.ProductID = od.ProductID
JOIN Categories c on c.CategoryID = p.CategoryID
JOIN Orders o on o.OrderID = od.OrderID
--de todas las categorías para el año anterior al año en curso. 
Where YEAR(o.OrderDate) = YEAR(GETDATE()) - 1
group by c.CategoryName
) as TotalesPorCategorias)

--b) El total unidades vendidas para la categoría Supere el Promedio general de 
--Unidades vendidas de todas las categorías para el año anterior al año en 
--curso. 
AND sub1.TOTALdeUNIDADES > (
select AVG(TOTALdeUNIDADES)
from (
select c.CategoryName, count(od.OrderID) as TOTALdeUNIDADES
from OrderDetails od
JOIN Products p on p.ProductID = od.ProductID
JOIN Categories c on c.CategoryID = p.CategoryID
JOIN Orders o on o.OrderID = od.OrderID
Where YEAR(o.OrderDate) = YEAR(GETDATE()) - 1
group by c.CategoryName
--de todas las categorías para el año anterior al año en curso. 
) as TotalesUnidadesPorCategorias
)

--------------------> Solucion profe

SELECT c.CategoryID,c.CategoryName 
        SUM(od.UnitPrice * od.Quantity * (1-od.Discount)) as TotalVentas, 
        SUM(od.Quantity) as TotalQuantity 
    FROM 
        Products p 
        INNER JOIN OrderDetails od ON p.ProductID = od.ProductID 
        INNER JOIN Categories c ON p.CategoryID = c.CategoryID 
    WHERE 
         c.CategoryID = @CategoryNom 
    GROUP BY p.CategoryID, c.CategoryName 
    HAVING SUM(od.UnitPrice * od.Quantity * (1-Discount)) > (--Sub1) 
 --Sub1:Promedio general de Ventas de todas las categorias -- para el año anterior al año en curso 
          
        OR SUM(od.Quantity) > (--Sub2) 
 --Sub2: Promedio general de Unidades vendidas de todas las categorias  --para el año anterior al año en curso.          
 
 --Implemento las Subconsultas: 
 --Sub1: Promedio general de Ventas de todas las categorías para el año anterior al        
año en curso 
 (select SUM(od.Quantity)  
  from OrderDetails od1 INNER JOIN Orders o1  
  ON o1.OrderID = od1.OrderID 
  where year(o1.orderdate) = Year(getdate()) -1  ) 
 --Sub2: Promedio general de Unidades vendidas de todas las categorías para el año 
anterior al año en curso. 
 (select AVG(od1.UnitPrice * od1.Quantity* (1-od1.Discount))  
  from OrderDetails od1 INNER JOIN Orders o1  
  ON o1.OrderID = od1.OrderID 
  where year(o1.orderdate) = Year(getdate()) -1  ) 
GO

-------------------------------------

--III) [10p] Crear una CONSULTA que Retorne los 10 primeros registros con los 
--siguientes atributos: 
--(CustomerID, CompanyName, ContactName,Id del Empleado, Nombre del 
--empleado y CantidadOrdenes)  
-- Para los 10 Clientes que más pedidos (#) han realizado en el año en curso y que 
--tengan Pedidos realizados en todos los meses del año anterior. 


------------------> MI SOLUCION
select top 10 c.CustomerID, c.CompanyName, c.ContactName, e.EmployeeID, e.FirstName, sub1.CantidadOrdenesEmpleado
From Orders o
JOIN Employees e ON o.EmployeeID=e.EmployeeID
JOIN Customers c on c.CustomerID = o.CustomerID
JOIN (
select Distinct e1.FirstName, count(o1.OrderID) as CantidadOrdenesEmpleado
from Orders o1
JOIN Employees e1 ON o1.EmployeeID = e1.EmployeeID
group by e1.FirstName
) as sub1 ON sub1.FirstName = e.FirstName
Where YEAR(o.OrderDate) = YEAR(GETDATE()) - 1
Order by sub1.CantidadOrdenesEmpleado DESC


---------------------> MI SOLUCION Corregida
SELECT TOP 10 
    c.CustomerID, 
    c.CompanyName, 
    c.ContactName, 
    o.EmployeeID, 
    e.FirstName, 
    sub.CantidadOrdenes
FROM (
    -- Subconsulta que devuelve los CustomerID con pedidos en el año actual y la cantidad de órdenes
    SELECT o.CustomerID, COUNT(*) AS CantidadOrdenes
    FROM Orders o
    WHERE YEAR(o.OrderDate) = YEAR(GETDATE())
      AND o.CustomerID IN (
          -- Clientes que realizaron pedidos en TODOS los meses del año anterior
          SELECT o2.CustomerID
          FROM Orders o2
          WHERE YEAR(o2.OrderDate) = YEAR(GETDATE()) - 1
          GROUP BY o2.CustomerID
          HAVING COUNT(DISTINCT MONTH(o2.OrderDate)) = 12
      )
    GROUP BY o.CustomerID
) AS sub
JOIN Customers c ON sub.CustomerID = c.CustomerID
JOIN Orders o ON o.CustomerID = c.CustomerID AND YEAR(o.OrderDate) = YEAR(GETDATE())
JOIN Employees e ON o.EmployeeID = e.EmployeeID
ORDER BY sub.CantidadOrdenes DESC;


---------------------> SOLUCION Profesor

SELECT TOP 10 c.CustomerID, c.CompanyName, c.ContactName,o2.employeeID, 
     e.FirstName,e.Lastname,T1.TotalOrdenes 
FROM Customers c , Employees e, Orders o2, 
 ( -- lOS Clientes CON MAS PEDIDOS, y con pedidos ORDENADOS EN TODOS LOS MESES AÑO ANTERIOR 
 SELECT o.CustomerID,COUNT(o.OrderID) as TotalOrdenes 
 FROM ORDERS o 
 WHERE o.CustomerID IN (select T.CustomerID   
       From  
     ( 
     SELECT o1.CustomerID,month(o1.orderdate) as mes  
     from Orders o1  
     where year(o1.orderdate) = year(getdate())-1 
     group by o1.CustomerID,month(o1.orderdate) 
     having Count(o1.orderID) > 0  
     ) T 
       group by T.CustomerID 
       having Count(*) = 12 
      ) 
 GROUP BY o.CustomerID  
 ) T1 
 WHERE T1.CustomerID = o2.CustomerID  
 and c.CustomerID = T1.CustomerID 
 and e.EmployeeID = o2.employeeID 
 ORDER by T1.TotalOrdenes dESC 