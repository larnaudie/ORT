use Northwind
/*
Parcial 1 generado por chatgpt

I) [10p]
Escribir una consulta SQL que liste todos los datos de los empleados junto con la cantidad total de �rdenes que hayan gestionado, siempre que:
El empleado haya atendido m�s de 15 �rdenes de productos de la categor�a 'Beverages'.
Adem�s, que haya procesado al menos una orden de 'Beverages' en los �ltimos tres meses.
Y que el empleado haya procesado �rdenes en alg�n mes del primer semestre del a�o pasado (usar IN para verificar meses).
Ordenar el resultado por el n�mero total de �rdenes de cada empleado en orden descendente.


II) [10p]
Escribir una consulta que devuelva el c�digo de la categor�a (CategoryID) y el nombre de la categor�a (CategoryName), junto con:
'TOTALVENTAS': calculado como Quantity * UnitPrice * (1 - Discount).
'TOTALPRODUCTOS': suma total de productos vendidos.
Filtrar las categor�as que cumplan al menos una de estas condiciones:
El total de ventas supere a cualquier total de ventas de otras categor�as en el a�o anterior (usar SOME).
O bien, la cantidad de productos vendidos sea mayor al promedio general de unidades vendidas de todas las categor�as el a�o anterior.


III) [10p]
Crear una consulta que devuelva los siguientes datos:
(CustomerID, CompanyName, TotalGastoAnual, EmpleadoResponsable, NombreEmpleado)
Seleccionar los 10 clientes que m�s dinero gastaron en compras en el a�o en curso, siempre que:
Hayan realizado �rdenes en todos los trimestres del a�o anterior (validar trimestres con agrupaciones).
El monto total gastado por el cliente est� entre los 10 mayores gastos (usar una subconsulta con IN o ANY).
Ordenar los resultados de mayor a menor seg�n el TotalGastoAnual.

*/

Select Employees 
from Employees