-- Utilizando el siguiente esquema 
--   PROVEEDOR(#P,PNOMBRE,CATEGORIA,CIUDAD)
--   COMPONENTES(#C,CNOMBRE,COLOR, PESO, CIUDAD)
--   ARTICULOS(#T,TNOMBE,CIUDAD)
--   ENVIOS(#P,#C,#T, CANTIDAD)

-- 1 crear la base de datos Algebra_sql
-- 2 crear las tablas correspondientes al esquema relacional
-- 3 Cargar juego de prueba 
-- Resolver las consultas 

CREATE DATABASE ALGEBRA_SQL
USE ALGEBRA_SQL
----------------------------------------------------------------------------------------
--1 CREAR LA BASE DE DATOS
-----------------------------------------------------------------------------------------
CREATE TABLE PROVEEDOR(
#P VARCHAR(2) NOT NULL PRIMARY KEY,
PNOMBRE VARCHAR(10),
CATEGORIA INT,
CIUDAD VARCHAR(10),
);

CREATE TABLE COMPONENTES(
#C VARCHAR(2) NOT NULL PRIMARY KEY,
CNOMBRE VARCHAR(10),
COLOR VARCHAR(10), 
PESO INT , 
CIUDAD VARCHAR(10)
);

CREATE TABLE ARTICULOS(
#T VARCHAR(2) NOT NULL PRIMARY KEY,
TNOMBE VARCHAR(20),
CIUDAD VARCHAR(10),
);

CREATE TABLE ENVIOS(
#P VARCHAR(2) NOT NULL ,
#C VARCHAR(2) NOT NULL,
#T VARCHAR(2) NOT NULL, 
CANTIDAD VARCHAR(10),
FOREIGN KEY(#P) REFERENCES PROVEEDOR(#P),
FOREIGN KEY(#C) REFERENCES COMPONENTES(#C),
FOREIGN KEY(#T) REFERENCES ARTICULOS(#T),
);
-----------------------------------------------------------------------------------------
--2 CARGAR LOS DATOS CORRESPONDIENTES
--------------------------------------------------------------------------

-- Carga de datos en  proveedor
INSERT INTO PROVEEDOR(#P,PNOMBRE,CATEGORIA,CIUDAD) VALUES ('P1','CARLOS',20,'SEVILLA');
INSERT INTO PROVEEDOR(#P,PNOMBRE,CATEGORIA,CIUDAD) VALUES ('P2','JUAN',10,'MADRID');
INSERT INTO PROVEEDOR(#P,PNOMBRE,CATEGORIA,CIUDAD) VALUES ('P3','JOSE',30,'SEVILLA');
INSERT INTO PROVEEDOR(#P,PNOMBRE,CATEGORIA,CIUDAD) VALUES ('P4','INMA',20,'SEVILLA');
INSERT INTO PROVEEDOR(#P,PNOMBRE,CATEGORIA,CIUDAD) VALUES ('P5','EVA',30,'CACERES');

-- Carga de datos en  componentes
INSERT INTO COMPONENTES VALUES ('C1',	'X3A',	'ROJO',	12,	'SEVILLA');
INSERT INTO COMPONENTES VALUES ('C2',	'B85',	'VERDE',17,	'MADRID');
INSERT INTO COMPONENTES VALUES ('C3',	'C4B',	'AZUL',	17,	'MALAGA');
INSERT INTO COMPONENTES VALUES ('C4',	'C4B',	'ROJO',	14,	'SEVILLA');
INSERT INTO COMPONENTES VALUES ('C5',	'VT8',	'AZUL',	12,	'MADRID');
INSERT INTO COMPONENTES VALUES ('C6',	'C30',	'ROJO',	19,	'SEVILLA');

-- Carga de datos en  articulos
INSERT INTO ARTICULOS VALUES ('T1',	'CLASIFICADORA',	'MADRID');

INSERT INTO ARTICULOS VALUES ('T2',	'PERFORADORA',	'MALAGA');
INSERT INTO ARTICULOS VALUES ('T3',	'LECTORA',	'CACERES');
INSERT INTO ARTICULOS VALUES ('T4',	'CONSOLA',	'CACERES');
INSERT INTO ARTICULOS VALUES ('T5',	'MEZCLADORA',	'SEVILLA');
INSERT INTO ARTICULOS VALUES ('T6',	'TERMINAL',	'BARCELONA');
INSERT INTO ARTICULOS VALUES ('T7',	'CINTA',	'SEVILLA');

-- Carga de datos en  envios
INSERT INTO ENVIOS VALUES ('P1',	'C1',	'T1',	200);
INSERT INTO ENVIOS VALUES ('P1',    'C1',	'T4',	700);
INSERT INTO ENVIOS VALUES ('P2',	'C3',	'T1',	400);
INSERT INTO ENVIOS VALUES ('P2',	'C3',	'T2',	200);
INSERT INTO ENVIOS VALUES ('P2',	'C3',	'T3',	200);
INSERT INTO ENVIOS VALUES ('P2',	'C3',	'T4',	500);
INSERT INTO ENVIOS VALUES ('P2',	'C3',	'T5',	600);
INSERT INTO ENVIOS VALUES ('P2',	'C3',	'T6',	400);
INSERT INTO ENVIOS VALUES ('P2',	'C3',	'T7',	800);
INSERT INTO ENVIOS VALUES ('P2',	'C5',	'T2',	100);
INSERT INTO ENVIOS VALUES ('P3',	'C3',	'T1',	200);
INSERT INTO ENVIOS VALUES ('P3',	'C4',	'T2',	500);
INSERT INTO ENVIOS VALUES ('P4',	'C6',	'T3',	300);
INSERT INTO ENVIOS VALUES ('P4',	'C6',	'T7',	300);
INSERT INTO ENVIOS VALUES ('P5',	'C2',	'T2',	200);
INSERT INTO ENVIOS VALUES ('P5',	'C2',	'T4',	100);
INSERT INTO ENVIOS VALUES ('P5',	'C5',	'T4',	500);
INSERT INTO ENVIOS VALUES ('P5',	'C5',	'T7',	100);
INSERT INTO ENVIOS VALUES ('P5',	'C6',	'T2',	200);
INSERT INTO ENVIOS VALUES ('P5',	'C1',	'T4',	100);
INSERT INTO ENVIOS VALUES ('P5',	'C3',	'T4',	200);
INSERT INTO ENVIOS VALUES ('P5',	'C4',	'T4',	800);
INSERT INTO ENVIOS VALUES ('P5',	'C5',	'T5',	400);
INSERT INTO ENVIOS VALUES ('P5',	'C6',	'T4' ,   500);

---------------------------------------------------------------------------------------
-- consulta del juego de prueba
---------------------------------------------------------------------------------------
SELECT * FROM PROVEEDOR
SELECT * FROM COMPONENTES
SELECT * FROM ARTICULOS
SELECT * FROM ENVIOS


----------------------------------------------------------------------------------------
--3 RESOLVER LAS SIGUIENTES CONSULTAS
-----------------------------------------------------------------------------------------


--1. Obtener todos los detalles de todos los art�culos de LA CIUDAD CACERES.


--2. Obtener todos los valores de P# para los proveedores que abastecen el art�culo T1.


--3. Obtener la lista de pares de atributos (COLOR, CIUDAD) de la tabla componentes 
--   eliminando los pares duplicados.


--4. Obtener de la tabla de art�culos los valores de T# y CIUDAD donde el nombre de la 
--   ciudad acaba en D o contiene al menos una E.



--5. Obtener los valores de P# para los proveedores que suministran para el art�culo T1 el componente C1.


--6. Obtener los valores de TNOMBRE en orden alfab�tico para los art�culos abastecidos por el proveedor P2.

--7. Obtener los valores de C# para los componentes suministrados para cualquier art�culo de MADRID.

--8. Obtener todos los valores de C# de los componentes tales que ning�n otro componente tenga un valor de peso inferior.

--9. Obtener los valores de P# para los proveedores que suministren los art�culos T1 y T2.

--10. Obtener los valores de P# para los proveedores que suministran para un art�culo de SEVILLA o MADRID un componente ROJO.

--11. Obtener, mediante subconsultas, los valores de C# para los componentes suministrados
--    para alg�n art�culo de SEVILLA por un proveedor de SEVILLA.

--12. Obtener los valores de T# para los art�culos que usan al menos un componente que se
--    puede obtener con el proveedor P1.

--13. Obtener todas las ternas (CIUDAD, C#, CIUDAD) tales que un proveedor de la primera
--    ciudad suministre el componente especificado para un art�culo montado en la segunda ciudad.

--14. Repetir el ejercicio anterior pero sin recuperar las ternas en los que los dos valores de ciudad sean los mismos.
--    BD 2006/2007 �lgebra relacional y SQL 3/12

--15. Obtener el n�mero de suministros, el de art�culos distintos suministrados y la cantidad
--    total de art�culos suministrados por el proveedor P2.

--16. Para cada art�culo y componente suministrado obtener los valores de C#, T# y la cantidad
--    total correspondiente.
--17. Obtener los valores de T# de los art�culos abastecidos al menos por un proveedor que no
--    viva en MADRID y que no est� en la misma ciudad en la que se monta el art�culo.

--18. Obtener los valores de P# para los proveedores que suministran al menos un componente
--    suministrado al menos por un proveedor que suministra al menos un componente ROJO.

--19. Obtener los identificadores de art�culos, T#, para los que se ha suministrado alg�n
--    componente del que se haya suministrado una media superior a 320 art�culos.

--20. Seleccionar los identificadores de proveedores que hayan realizado alg�n env�o con
--    Cantidad mayor que la media de los env�os realizados para el componente a que
--    corresponda dicho env�o.

--21. Seleccionar los identificadores de componentes suministrados para el art�culo 'T2' por el proveedor 'P2'.

--22. Seleccionar todos los datos de los env�os realizados de componentes cuyo color no sea 'ROJO'.

--23. Seleccionar los identificadores de componentes que se suministren para los art�culos 'T1' y 'T2'.

--24. Seleccionar el identificador de proveedor y el n�mero de env�os de componentes de color 
--   'ROJO' llevados a cabo por cada proveedor.

--25. Seleccionar los colores de componentes suministrados por el proveedor 'P1'.

--26. Seleccionar los datos de env�o y nombre de ciudad de aquellos env�os que cumplan que
--    el art�culo, proveedor y componente son de la misma ciudad.

--27. Seleccionar los nombres de los componentes que son suministrados en una cantidad total superior a 500.

--28. Seleccionar los identificadores de proveedores que residan en Sevilla y no suministren m�s de dos art�culos distintos.

--29. Seleccionar los identificadores de art�culos para los cuales todos sus componentes se fabrican en una misma ciudad.

--30. Seleccionar los identificadores de art�culos para los que se provean env�os de todos los
--    componentes existentes en la base de datos.

--31. Seleccionar los c�digos de proveedor y art�culo que suministran al menos dos
--    componentes de color 'ROJO'.

--32. Prop�n tu mismo consultas que puedan realizarse sobre esta base de datos de ejemplo.
--    Intenta responderla, y si te parece un problema interesante o no est�s seguro de su
--    soluci�n, puedes exponerlos en la clases pr�cticas para su resoluci�n en grupo. 
