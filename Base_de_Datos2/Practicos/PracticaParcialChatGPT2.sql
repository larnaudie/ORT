use Northwind
/*
Parcial 1 generado por chatgpt

I) [10p]
Escribir una consulta SQL que liste todos los datos de los empleados junto con la cantidad total de órdenes que hayan gestionado, siempre que:
El empleado haya atendido más de 15 órdenes de productos de la categoría 'Beverages'.
Además, que haya procesado al menos una orden de 'Beverages' en los últimos tres meses.
Y que el empleado haya procesado órdenes en algún mes del primer semestre del año pasado (usar IN para verificar meses).
Ordenar el resultado por el número total de órdenes de cada empleado en orden descendente.


II) [10p]
Escribir una consulta que devuelva el código de la categoría (CategoryID) y el nombre de la categoría (CategoryName), junto con:
'TOTALVENTAS': calculado como Quantity * UnitPrice * (1 - Discount).
'TOTALPRODUCTOS': suma total de productos vendidos.
Filtrar las categorías que cumplan al menos una de estas condiciones:
El total de ventas supere a cualquier total de ventas de otras categorías en el año anterior (usar SOME).
O bien, la cantidad de productos vendidos sea mayor al promedio general de unidades vendidas de todas las categorías el año anterior.


III) [10p]
Crear una consulta que devuelva los siguientes datos:
(CustomerID, CompanyName, TotalGastoAnual, EmpleadoResponsable, NombreEmpleado)
Seleccionar los 10 clientes que más dinero gastaron en compras en el año en curso, siempre que:
Hayan realizado órdenes en todos los trimestres del año anterior (validar trimestres con agrupaciones).
El monto total gastado por el cliente esté entre los 10 mayores gastos (usar una subconsulta con IN o ANY).
Ordenar los resultados de mayor a menor según el TotalGastoAnual.

*/

Select Employees 
from Employees