-- Utilizando el siguiente esquema 

--   PROVEEDOR(#P,PNOMBRE,CATEGORIA,CIUDAD)
--   COMPONENTES(#C,CNOMBRE,COLOR, PESO, CIUDAD)
--   ARTICULOS(#T,TNOMBRE,CIUDAD)
--   ENVIOS(#P,#C,#T, CANTIDAD)

-- 1 crear la base de datos Algebra_sql
-- 2 crear las tablas correspondientes al esquema relacional
-- 3 Cargar juego de prueba 
-- 4 Resolver las consultas 

----------------------------------------------------------------------------------------
--1 CREAR LA BASE DE DATOS
-----------------------------------------------------------------------------------------
CREATE DATABASE ALGEBRA_SQL
USE ALGEBRA_SQL
----------------------------------------------------------------------------------------
--2 CREAR	ESQUEMA RELACIONAL
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
TNOMBRE VARCHAR(20),
CIUDAD VARCHAR(10),
);

CREATE TABLE ENVIOS(
#P VARCHAR(2) NOT NULL ,
#C VARCHAR(2) NOT NULL,
#T VARCHAR(2) NOT NULL, 
CANTIDAD int,
FOREIGN KEY(#P) REFERENCES PROVEEDOR(#P),
FOREIGN KEY(#C) REFERENCES COMPONENTES(#C),
FOREIGN KEY(#T) REFERENCES ARTICULOS(#T),
);
-----------------------------------------------------------------------------------------
--3 CARGAR LOS DATOS CORRESPONDIENTES
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
INSERT INTO ENVIOS VALUES ('P1',	'C1',	'T1',	2500);

---------------------------------------------------------------------------------------
-- consulta del juego de prueba
---------------------------------------------------------------------------------------
SELECT * FROM PROVEEDOR
SELECT * FROM COMPONENTES
SELECT * FROM ARTICULOS
SELECT * FROM ENVIOS


----------------------------------------------------------------------------------------
--A RESOLVER LAS SIGUIENTES CONSULTAS
-----------------------------------------------------------------------------------------


--1. Obtener todos los detalles de todos los artículos de LA CIUDAD CACERES.
	SELECT * FROM ARTICULOS WHERE CIUDAD='CACERES'

--2. Obtener todos los valores de P# para los proveedores que abastecen el artículo T1.
	SELECT  #P FROM ENVIOS WHERE #T='T1'

--3. Obtener la lista de pares de atributos (COLOR, CIUDAD) de la tabla componentes 
--   eliminando los pares duplicados.
	SELECT DISTINCT COLOR,CIUDAD FROM COMPONENTES 

	-- OTRA FORMA DE HACERLO SERIA AGRUPANDO 
	SELECT COLOR,CIUDAD FROM COMPONENTES
	GROUP BY COLOR,CIUDAD


--4. Obtener de la tabla de artículos los valores de T# y CIUDAD donde el nombre de la 
--   ciudad acaba en D o contiene al menos una E.
	SELECT #T,CIUDAD FROM ARTICULOS WHERE CIUDAD LIKE '%D' OR CIUDAD LIKE '%E%'

--5. Obtener los valores de P# para los proveedores que suministran para el artículo T1 el componente C1.

    SELECT #P FROM ENVIOS WHERE #T='T1' AND #C='C1'

--6. Obtener los valores de TNOMBRE en orden alfabético para los artículos abastecidos por el proveedor P2.

	SELECT TNOMBRE FROM ARTICULOS AS A,ENVIOS AS E 
	WHERE A.#T=E.#T AND E.#P='P2'

	SELECT TNOMBRE FROM ARTICULOS AS A JOIN ENVIOS AS E ON A.#T=E.#T
	WHERE E.#P='P2'

--7. Obtener los valores de C# para los componentes suministrados para cualquier artículo de MADRID.
SELECT DISTINCT #C FROM ENVIOS
WHERE #T IN (SELECT #T FROM ARTICULOS WHERE CIUDAD='MADRID')

-- SE PUEDE RESOLVER TAMBIEN CON UN PRODUCTO Y UNA SELECCION

SELECT DISTINCT #C FROM ARTICULOS AS A, ENVIOS AS E
WHERE A.#T=E.#T AND CIUDAD= 'MADRID'

SELECT DISTINCT #C FROM ARTICULOS AS A JOIN ENVIOS AS E ON A.#T=E.#T 
WHERE CIUDAD= 'MADRID'

--8. Obtener todos los valores de C# de los componentes tales que ningún otro componente tenga
--   un valor de peso inferior.

SELECT #C FROM COMPONENTES
WHERE PESO=(SELECT MIN(PESO) AS PESOMINIMO FROM COMPONENTES)

--9. Obtener los valores de P# para los proveedores que suministren los artículos T1 y T2.

    SELECT DISTINCT #P FROM ENVIOS WHERE #T='T1'
	INTERSECT
	SELECT DISTINCT #P FROM ENVIOS WHERE #T='T2'

--10. Obtener los valores de P# para los proveedores que suministran para un artículo de SEVILLA o MADRID 
--    un componente ROJO.
      SELECT #P FROM ENVIOS E, COMPONENTES C, ARTICULOS A
      WHERE E.#C=C.#C AND E.#T=A.#T AND 
	        C.COLOR='ROJO' AND A.CIUDAD IN ('SEVILLA','MADRID')

--11. Obtener, mediante subconsultas, los valores de C# para los componentes suministrados
--    para algún artículo de SEVILLA por un proveedor de SEVILLA.

              SELECT #C FROM ENVIOS --obtener #c de la tabla envios
			  --que cumplan que su #t este contenido entre los #t de la ciudad sevilla
			  WHERE #T IN (SELECT #T FROM ARTICULOS WHERE CIUDAD = 'SEVILLA')			  
			  -- y su proveedor #P este contenido entre los proveedores de la ciudad de sevilla
			  AND #P IN (SELECT #P FROM PROVEEDOR WHERE CIUDAD = 'SEVILLA')

--12. Obtener los valores de T# para los artículos que usan al menos un componente que se
--    puede obtener con el proveedor P1.
            SELECT DISTINCT #T FROM ENVIOS 
			WHERE #C IN
			           (SELECT DISTINCT #C FROM ENVIOS WHERE #P='P1')

--13. Obtener todas las ternas (CIUDAD, C#, CIUDAD) tales que un proveedor de la primera
--    ciudad suministre el componente especificado para un artículo montado en la segunda ciudad.

		SELECT P.CIUDAD, E.#C, A.CIUDAD 
		FROM ENVIOS E, PROVEEDOR P, ARTICULOS A
		WHERE E.#P=P.#P AND E.#T=A.#T

    	SELECT P.CIUDAD, E.#C, A.CIUDAD 
		FROM ENVIOS E JOIN PROVEEDOR P ON E.#P=P.#P
		              JOIN  ARTICULOS A ON E.#T=A.#T


--14. Repetir el ejercicio anterior pero sin recuperar las ternas en los que los dos
--   valores de ciudad sean los mismos.  BD 2006/2007 Álgebra relacional y SQL 3/12

		SELECT P.CIUDAD, E.#C, A.CIUDAD 
		FROM ENVIOS E, PROVEEDOR P, ARTICULOS A
		WHERE E.#P=P.#P AND E.#T=A.#T AND P.CIUDAD!=A.CIUDAD

--15. Obtener el número de suministros, el de artículos distintos suministrados y la cantidad
--    total de artículos suministrados por el proveedor P2.

SELECT * FROM ENVIOS

SELECT COUNT(*) AS NUMERO_DE_SUMINISTROS, COUNT(DISTINCT #T) AS ARTICULOSSUMINISTRADOS, SUM(CONVERT(INT,CANTIDAD)) AS TOTAL
FROM ENVIOS
WHERE ENVIOS.#P='P2'

--16. Para cada artículo y componente suministrado obtener los valores de 
--    C#, T# y la cantidad total correspondiente.

	select distinct #c,#t,sum(cantidad) as total
	from ENVIOS
	group by #C,#T

	select distinct #c,sum(cantidad) as total
	from ENVIOS
	group by #C
	having sum(cantidad)>=all(select sum(cantidad) as total
	                          from ENVIOS
	                           group by #C)


--17. Obtener los valores de T# de los artículos abastecidos al menos 
--    por un proveedor que no viva en MADRID y que no esté en la misma 
--    ciudad en la que se monta el artículo.

	select distinct e.#t
	from envios as e, articulos a, proveedor p
    where e.#T=a.#T and e.#p=p.#P and p.CIUDAD = a.CIUDAD and 
	p.#p not in (select #p from proveedor p
	where p.ciudad ='Madrid')

--18. Obtener los valores de P# para los proveedores que suministran 
--    al menos un componente suministrado al menos por un 
--    proveedor que suministra al menos un componente ROJO.

	select distinct #p
	from ENVIOS
	where #c in
	(select  #c from envios
	    where #p in
	    (select #p 
	     from envios join componentes on(envios.#C=componentes.#C) 
	     where componentes.COLOR='rojo'))

--19. Obtener los identificadores de artículos, T#, para los que se ha 
--    suministrado algún componente del que se haya suministrado 
--    una media superior a 320 artículos.

		select distinct #t
		from envios 
		where #C in (select #c 
		             from envios 
					 group by #C
					 having avg(cantidad)>320)


--20. Seleccionar los identificadores de proveedores que hayan 
--    realizado algún envío con Cantidad mayor que la media de 
--    los envíos realizados para el componente a que
--    corresponda dicho envío.

	  select distinct #p
	  from envios as e1
	  where CANTIDAD > (select avg(cantidad) 
	                    from envios e2 where e2.#c=e1.#C  )	

--21. Seleccionar los identificadores de componentes suministrados 
--    para el artículo 'T2' por el proveedor 'P2'.
		
		select distinct #c
		from envios
		where #t='t2' and #p='p2'

--22. Seleccionar todos los datos de los envíos realizados de 
--    componentes cuyo color no sea 'ROJO'.

      select e.*
	  from envios e, componentes c
	  where e.#C=c.#C and c.COLOR!='rojo'


--23. Seleccionar los identificadores de componentes que se 
--    suministren para los artículos 'T1' y 'T2'.

select distinct #c from envios where #t='t1'
intersect
select distinct #c from envios where #t='t2'

--24. Seleccionar el identificador de proveedor y el número de envíos 
--    de componentes de color 
--   'ROJO' llevados a cabo por cada proveedor.

	  select #p,count(*) 
	  from envios 
	  where #c in (select #c from componentes where color='rojo')
	  group by #p

	
--25. Seleccionar los colores de componentes suministrados por el proveedor 'P1'.

	select distinct color
	from componentes
	where #c in (select distinct #c
					from envios 
					where #p='p1')

   select distinct color
   from componentes,envios
   where componentes.#c=envios.#C and envios.#p='p1'

   select distinct color
   from componentes join envios on (componentes.#c=envios.#C)
   where envios.#p='p1'

--26. Seleccionar los datos de envío y nombre de ciudad de aquellos envíos que cumplan que
--    el artículo, proveedor y componente son de la misma ciudad.

		select e.*,c.ciudad
		from envios e, COMPONENTES c, articulos a, proveedor p
		where e.#T=a.#T and
			  e.#c=c.#C and
			  e.#p=p.#P and 
			  p.CIUDAD=a.CIUDAD and
			  p.CIUDAD=c.CIUDAD

--27. Seleccionar los nombres de los componentes que son suministrados en una cantidad total superior a 500.
	
	select distinct c.CNOMBRE
	from COMPONENTES c
	where #c in (select #c from envios
				 group by #c
				 having sum(cantidad) > 500)


--28. Seleccionar los identificadores de proveedores que residan en Sevilla y no suministren más de dos artículos distintos.
       
	   select #p from PROVEEDOR where CIUDAD='sevilla'
	   except 
	   select  #p from envios  
	   group by #p
	   having count(distinct #t)>2


--29. Seleccionar los identificadores de artículos para los cuales todos sus componentes se fabrican en una misma ciudad.
	select #t from envios e, COMPONENTES c
	where e.#C=c.#C
	group by #t
	having count(distinct ciudad)=1


--30. Seleccionar los identificadores de artículos para los que se provean envíos de todos los
--    componentes existentes en la base de datos.
select #t from envios 
group by #T
having count(distinct #c) = (select count(*) from componentes)


--31. Seleccionar los códigos de proveedor y artículo que suministran al menos dos
--    componentes de color 'ROJO'.
select #p,#t from envios e, componentes c
where e.#C=c.#C and c.color='rojo'
group by #P,#t
having count(*)>1


--32. Propón tu mismo consultas que puedan realizarse sobre esta base de datos de ejemplo.
--    Intenta responderla, y si te parece un problema interesante o no estás seguro de su
--    solución, puedes exponerlos en la clases prácticas para su resolución en grupo. 


-- agregar a envios la fecha

ALTER TABLE envios 
ADD fecha date null, cantidadminima varchar(10) ;

UPDATE envios
SET fecha=getdate()  
WHERE #p = 'p1';  

-- poner fecha de ayer a los renglones del #p= 'p2'
UPDATE envios
SET fecha=dateadd(day,-1,getdate())  
WHERE #p = 'p2';  

-- restarle 2 meses a los renglones de p2
UPDATE envios
SET fecha=dateadd(month,-2,getdate())  
WHERE #p = 'p2';  

-- restar 2 años a los renglones de p2
UPDATE envios
SET fecha=dateadd(year,-2,getdate())  
WHERE #p = 'p2'; 

--borrar los registros con cantidad =2500
DELETE FROM envios   
WHERE #p='p1' and cantidad=2500

-- mostrar los rgistros del año 2022

select * from envios
where year(fecha)=2022

select * from envios
where month(fecha)=10 and year(fecha)=2022

UPDATE envios
SET cantidadminima='cien mil'
WHERE #p = 'p2';  

UPDATE envios
SET cantidadminima='cuatro mil'
WHERE #p = 'p1'; 

select * from envios
where cantidadminima like 'cu%'

select * from envios
where substring(cantidadminima,1,2) like 'cu'

select * from envios
where upper(substring(cantidadminima,1,2)) like 'CU'

select * from envios
where lower(substring(cantidadminima,1,2)) like 'cu'


