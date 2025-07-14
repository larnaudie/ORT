-- Utilizando el siguiente esquema 
--   PROVEEDOR(#P,PNOMBRE,CATEGORIA,CIUDAD)
--   COMPONENTES(#C,CNOMBRE,COLOR, PESO, CIUDAD)
--   ARTICULOS(#T,TNOMBE,CIUDAD)
--   ENVIOS(#P,#C,#T, CANTIDAD)

-- 1 crear la base de datos Algebra_sql
-- 2 crear las tablas correspondientes al esquema relacional
-- 3 Cargar juego de prueba 
-- 4 Resolver las consultas 

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


--1. Obtener todos los detalles de todos los artículos de LA CIUDAD CACERES.
	select * from articulos
	where articulos.CIUDAD='caceres'



--2. Obtener todos los valores de P# para los proveedores que abastecen
--   el artículo T1.

select #p from envios
where #t='t1'

--3. Obtener la lista de pares de atributos (COLOR, CIUDAD) de la tabla componentes 
--   eliminando los pares duplicados.
	select distinct color,ciudad 
	from COMPONENTES

--4. Obtener de la tabla de artículos los valores de T# y CIUDAD donde el nombre de la 
--   ciudad acaba en D o contiene al menos una E.

	select #t,ciudad from articulos
	where ciudad like '%d' or ciudad like '%e%'

--5. Obtener los valores de P# para los proveedores que suministran 
--   para el artículo T1 el componente C1.

	select #p
	from envios
	where #t='t1' and #c='c1'

--6. Obtener los valores de TNOMBRE en orden alfabético para 
--   los artículos abastecidos por el proveedor P2.

	select distinct tnombe 
	from articulos,envios
	where articulos.#T=envios.#T and envios.#P='p2'
	order by tnombe

-- otra forma de resolverlo usando join
	
	select distinct tnombe 
	from articulos join envios
	on articulos.#T=envios.#T and envios.#P='p2'
	order by tnombe



--7. Obtener los valores de C# para los componentes suministrados 
--   para cualquier artículo de MADRID.
     
	 select distinct #c from articulos,envios
     where articulos.#T=envios.#T and ciudad='madrid'

	 --otra forma 

	 select distinct #c from envios
	 where #t in
	            (select #t from ARTICULOS
	             where ciudad='madrid')


--8. Obtener todos los valores de C# de los componentes tales 
--   que ningún otro componente tenga un valor de peso inferior.
select #c from COMPONENTES
where peso = (select min(peso) from componentes)
		

--9. Obtener los valores de P# para los proveedores que suministren los artículos T1 y T2.

select distinct #p from envios e
where e.#T='t1'
intersect 
select distinct #p from envios e
where e.#T='t2'


--10. Obtener los valores de P# para los proveedores que suministran para 
--    un artículo de SEVILLA o MADRID un componente ROJO.
	   select #p 
	   from ENVIOS e, COMPONENTES c, ARTICULOS a 
	   where e.#C=c.#C and e.#T=a.#T and color ='rojo' and 
	   a.CIUDAD in ('sevilla','madrid')


--11. Obtener, mediante subconsultas, los valores de C# para 
--    los componentes suministrados para algún artículo de SEVILLA 
--    por un proveedor de SEVILLA.

	select #c
	from envios
	where #t in (select #t from articulos where ciudad='sevilla') and
		  #p in (select #p from PROVEEDOR where ciudad='sevilla')

--12. Obtener los valores de T# para los artículos que usan al menos un componente 
--    que se puede obtener con el proveedor P1.

	select distinct #T from envios
	where #C in (select distinct #c from envios where #p='p1')


--13. Obtener todas las ternas (CIUDAD, C#, CIUDAD) tales que un proveedor de la primera
--    ciudad suministre el componente especificado para un artículo montado en la segunda ciudad.

	select p.ciudad,#c,a.Ciudad
	from envios e, proveedor p,articulos a
	where e.#P=p.#P and e.#T=a.#T



--14. Repetir el ejercicio anterior pero sin recuperar las ternas en los que los dos 
--    valores de ciudad sean los mismos.


	select distinct p.ciudad,#c,a.Ciudad
	from envios e, proveedor p,articulos a
	where e.#P=p.#P and e.#T=a.#T and p.CIUDAD!=a.CIUDAD



--15. Obtener el número de suministros, el de artículos distintos suministrados y la cantidad
--    total de artículos suministrados por el proveedor P2.


       select count(*) as numerodesuministros, 
	          count(distinct #t) as articulosdistintos, 
			  sum(convert(int,cantidad)) as total from envios
	   where #p='p2'

--16. Para cada artículo y componente suministrado obtener los valores de C#, T# y la cantidad
--    total correspondiente.
	   
	   select #c,#t,CANTIDAD from envios
	   order by #c,#t

      select #c,#t,sum(convert(int, cantidad)) from envios
	  group by #c,#t

--17. Obtener los valores de T# de los artículos abastecidos al menos por un proveedor que no
--    viva en MADRID y que no esté en la misma ciudad en la que se monta el artículo.
     
	 select distinct e.#t
	 from envios e, articulos a
	 where e.#P not in
	                 (select #p from PROVEEDOR p where p.ciudad='madrid' and p.#P=e.#P and
		            	 p.ciudad!=a.ciudad )


--18. Obtener los valores de P# para los proveedores que suministran al menos un componente
--    suministrado al menos por un proveedor que suministra al menos un componente ROJO.





--19. Obtener los identificadores de artículos, T#, para los que se ha suministrado algún
--    componente del que se haya suministrado una media superior a 320 artículos.

select distinct #t from envios
where #c in (select #c from envios 
             group by #c
			 having avg(convert(int,cantidad))>320);

			 select #c,avg(convert(int,cantidad))from envios 
             group by #c
			 having avg(convert(int,cantidad))>320;


--20. Seleccionar los identificadores de proveedores que hayan realizado algún envío con
--    Cantidad mayor que la media de los envíos realizados para el componente a que
--    corresponda dicho envío.

SELECT distinct #p from ENVIOS as a
where cantidad > (SELECT AVG(CONVERT(INT,CANTIDAD))
                  FROM ENVIOS as b where a.#c= b.#c)

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

