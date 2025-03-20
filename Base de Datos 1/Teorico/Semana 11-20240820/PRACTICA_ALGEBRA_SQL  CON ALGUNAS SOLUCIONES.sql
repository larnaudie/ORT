-- Utilizando el siguiente esquema 
--   PROVEEDOR(#P,PNOMBRE,CATEGORIA,CIUDAD)
--   COMPONENTES(#C,CNOMBRE,COLOR, PESO, CIUDAD)
--   ARTICULOS(#T,TNOMBE,CIUDAD)
--   ENVIOS(#P,#C,#T, CANTIDAD)

-- 1 crear la base de datos Algebra_sql
-- 2 crear las tablas correspondientes al esquema relacional
-- 3 Cargar juego de prueba 
-- Resolver las consultas 

--drop table envios
--drop table proveedor
--drop table articulos
--drop table componentes

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
edad int,
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
INSERT INTO PROVEEDOR(#P,PNOMBRE,CATEGORIA,CIUDAD,edad) VALUES ('P1','CARLOS',20,'SEVILLA',22);
INSERT INTO PROVEEDOR(#P,PNOMBRE,CATEGORIA,CIUDAD,EDAD) VALUES ('P2','JUAN',10,'MADRID',23);
INSERT INTO PROVEEDOR(#P,PNOMBRE,CATEGORIA,CIUDAD,EDAD) VALUES ('P3','JOSE',30,'SEVILLA',34);
INSERT INTO PROVEEDOR(#P,PNOMBRE,CATEGORIA,CIUDAD, EDAD) VALUES ('P4','INMA',20,'SEVILLA',18);
INSERT INTO PROVEEDOR(#P,PNOMBRE,CATEGORIA,CIUDAD,EDAD) VALUES ('P5','EVA',30,'CACERES',43);
INSERT INTO PROVEEDOR(#P,PNOMBRE,CATEGORIA,CIUDAD,EDAD) VALUES ('P6','ANDRES',30,'CACERES',43);

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
--   PROVEEDOR(#P,PNOMBRE,CATEGORIA,CIUDAD)
--   COMPONENTES(#C,CNOMBRE,COLOR, PESO, CIUDAD)
--   ARTICULOS(#T,TNOMBE,CIUDAD)
--   ENVIOS(#P,#C,#T, CANTIDAD)

--1. Obtener todos los detalles de todos los artículos de LA CIUDAD CACERES.
	select * from ARTICULOS
	where articulos.CIUDAD='caceres'

--2. Obtener todos los valores de P# para los proveedores que abastecen el artículo T1.
--caso 1
	select distinct #p from ENVIOS
	where envios.#T='t1'

--caso 2
	select #t,proveedor.#P,proveedor.PNOMBRE from ENVIOS,PROVEEDOR
	where envios.#p= PROVEEDOR.#p and envios.#T='t1'

--3. Obtener la lista de pares de atributos (COLOR, CIUDAD) de la tabla componentes 
--   eliminando los pares duplicados.
	
	SELECT DISTINCT COLOR,CIUDAD 
	FROM COMPONENTES

--4. Obtener de la tabla de artículos los valores de T# y CIUDAD donde el nombre de la 
--   ciudad acaba en D o contiene al menos una E.

SELECT #T,CIUDAD
FROM ARTICULOS
WHERE CIUDAD LIKE '%D' OR CIUDAD LIKE '%E%'


--5. Obtener los valores de P# para los proveedores que suministran para el artículo T1 el componente C1.

SELECT #P FROM ENVIOS
WHERE #T ='T1' AND #C='C1'

--6. Obtener los valores de TNOMBRE en orden alfabético para los artículos abastecidos por el proveedor P2.


SELECT DISTINCT TNOMBE FROM ARTICULOS,ENVIOS
WHERE ARTICULOS.#T=ENVIOS.#T AND ENVIOS.#P='P2'
ORDER BY TNOMBE

--7. Obtener los valores de C# para los componentes suministrados para cualquier artículo de MADRID.

SELECT DISTINCT #C FROM ENVIOS
WHERE #T IN 
         (SELECT #T FROM ARTICULOS WHERE CIUDAD='MADRID')


--8. Obtener todos los valores de C# de los componentes tales que ningún otro componente tenga un valor de peso inferior.

SELECT #C FROM COMPONENTES
WHERE PESO= ( SELECT MIN(PESO) FROM COMPONENTES)

--9. Obtener los valores de P# para los proveedores que suministren los artículos T1 y T2.

--10. Obtener los valores de P# para los proveedores que suministran para un artículo de SEVILLA o MADRID un componente ROJO.

--11. Obtener, mediante subconsultas, los valores de C# para los componentes suministrados
--    para algún artículo de SEVILLA por un proveedor de SEVILLA.

--12. Obtener los valores de T# para los artículos que usan al menos un componente que se
--    puede obtener con el proveedor P1.

--13. Obtener todas las ternas (CIUDAD, C#, CIUDAD) tales que un proveedor de la primera
--    ciudad suministre el componente especificado para un artículo montado en la segunda ciudad.

--14. Repetir el ejercicio anterior pero sin recuperar las ternas en los que los dos valores de ciudad sean los mismos.
--    BD 2006/2007 Álgebra relacional y SQL 3/12

--15. Obtener el número de suministros, el de artículos distintos suministrados y la cantidad
--    total de artículos suministrados por el proveedor P2.

--16. Para cada artículo y componente suministrado obtener los valores de C#, T# y la cantidad
--    total correspondiente.
--17. Obtener los valores de T# de los artículos abastecidos al menos por un proveedor que no
--    viva en MADRID y que no esté en la misma ciudad en la que se monta el artículo.

--18. Obtener los valores de P# para los proveedores que suministran al menos un componente
--    suministrado al menos por un proveedor que suministra al menos un componente ROJO.

--19. Obtener los identificadores de artículos, T#, para los que se ha suministrado algún
--    componente del que se haya suministrado una media superior a 320 artículos.

--20. Seleccionar los identificadores de proveedores que hayan realizado algún envío con
--    Cantidad mayor que la media de los envíos realizados para el componente a que
--    corresponda dicho envío.

--21. Seleccionar los identificadores de componentes suministrados para el artículo 'T2' por el proveedor 'P2'.

--22. Seleccionar todos los datos de los envíos realizados de componentes cuyo color no sea 'ROJO'.

--23. Seleccionar los identificadores de componentes que se suministren para los artículos 'T1' y 'T2'.

--24. Seleccionar el identificador de proveedor y el número de envíos de componentes de color 
--   'ROJO' llevados a cabo por cada proveedor.

--25. Seleccionar los colores de componentes suministrados por el proveedor 'P1'.

--26. Seleccionar los datos de envío y nombre de ciudad de aquellos envíos que cumplan que
--    el artículo, proveedor y componente son de la misma ciudad.

--27. Seleccionar los nombres de los componentes que son suministrados en una cantidad total superior a 500.

--28. Seleccionar los identificadores de proveedores que residan en Sevilla y no suministren más de dos artículos distintos.

--29. Seleccionar los identificadores de artículos para los cuales todos sus componentes se fabrican en una misma ciudad.

--30. Seleccionar los identificadores de artículos para los que se provean envíos de todos los
--    componentes existentes en la base de datos.

--31. Seleccionar los códigos de proveedor y artículo que suministran al menos dos
--    componentes de color 'ROJO'.

--32. Propón tu mismo consultas que puedan realizarse sobre esta base de datos de ejemplo.
--    Intenta responderla, y si te parece un problema interesante o no estás seguro de su
--    solución, puedes exponerlos en la clases prácticas para su resolución en grupo. 


-----------------------------------------------------------------------------------------------------
-- EJERCICIO AGREGADO PARA VERE EL RESTO DE LA SINTAXIS DE LA SENTINCIA SELECT Y EL USO DE FUNCIONES
--  NOMBRE DEL PROVEEDOR DE MAYOR EDAD
------------------------------------------------------------------------------------------------------

SELECT DISTINCT A.PNOMBRE FROM PROVEEDOR AS A,PROVEEDOR AS B
WHERE A.EDAD<B.EDAD


SELECT PNOMBRE,EDAD FROM PROVEEDOR
WHERE PNOMBRE NOT IN
              ( SELECT DISTINCT A.PNOMBRE FROM PROVEEDOR AS A,PROVEEDOR AS B
                WHERE A.EDAD<B.EDAD )

SELECT PNOMBRE, EDAD FROM PROVEEDOR 
WHERE EDAD=(SELECT MAX(EDAD) FROM PROVEEDOR)

SELECT MAX(EDAD) FROM PROVEEDOR

SELECT A.PNOMBRE,B.PNOMBRE FROM PROVEEDOR AS A,PROVEEDOR AS B
GROUP BY A.PNOMBRE,B.PNOMBRE

CREATE TABLE VENTAS(
ZONA VARCHAR(10) NOT NULL,
VENDEDOR VARCHAR(10),
IMPORTE INT 
)
INSERT INTO VENTAS(ZONA,VENDEDOR,IMPORTE) VALUES ('CENTRO', 'JUAN',1000);
INSERT INTO VENTAS(ZONA,VENDEDOR,IMPORTE) VALUES ('CENTRO', 'JUAN',1500);
INSERT INTO VENTAS(ZONA,VENDEDOR,IMPORTE) VALUES ('CENTRO', 'PEDRO',5000);
INSERT INTO VENTAS(ZONA,VENDEDOR,IMPORTE) VALUES ('CENTRO', 'PEDRO',1000);

INSERT INTO VENTAS(ZONA,VENDEDOR,IMPORTE) VALUES ('CORDON', 'ANA',1000);
INSERT INTO VENTAS(ZONA,VENDEDOR,IMPORTE) VALUES ('CORDON', 'ANA',1500);
INSERT INTO VENTAS(ZONA,VENDEDOR,IMPORTE) VALUES ('CORDON', 'ANA',5000);
INSERT INTO VENTAS(ZONA,VENDEDOR,IMPORTE) VALUES ('CORDON', 'ANA',1000);

INSERT INTO VENTAS(ZONA,VENDEDOR,IMPORTE) VALUES ('POCITOS', 'MARIANA',1000);
INSERT INTO VENTAS(ZONA,VENDEDOR,IMPORTE) VALUES ('POCITOS', 'MARIANA',1500);
INSERT INTO VENTAS(ZONA,VENDEDOR,IMPORTE) VALUES ('POCITOS', 'MARIA',5000);
INSERT INTO VENTAS(ZONA,VENDEDOR,IMPORTE) VALUES ('POCITOS', 'MARIA',1000);
INSERT INTO VENTAS(ZONA,VENDEDOR,IMPORTE) VALUES ('POCITOS', 'MARIA',1000);

INSERT INTO VENTAS(ZONA,VENDEDOR,IMPORTE) VALUES ('MALVIN', 'CARLOS',12000);
INSERT INTO VENTAS(ZONA,VENDEDOR,IMPORTE) VALUES ('MALVIN', 'CARLOS',13500);
INSERT INTO VENTAS(ZONA,VENDEDOR,IMPORTE) VALUES ('MALVIN', 'CARLOS',5000);
INSERT INTO VENTAS(ZONA,VENDEDOR,IMPORTE) VALUES ('MALVIN', 'CARLOS',1000);
INSERT INTO VENTAS(ZONA,VENDEDOR,IMPORTE) VALUES ('MALVIN', 'CARLOS',1000);


SELECT SUM(IMPORTE) FROM VENTAS

SELECT ZONA,SUM(IMPORTE) FROM VENTAS
GROUP BY ZONA
HAVING SUM(IMPORTE)>8500


SELECT * FROM VENTAS
ORDER BY IMPORTE DESC