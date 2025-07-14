use ALGEBRA_SQL

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

--16. Para cada artículo y componente suministrado obtener los valores de C#, T# y la cantidad
--    total correspondiente.
SELECT * FROM ENVIOS

SELECT SUM(CONVERT(INT,CANTIDAD)) FROM ENVIOS

SELECT #C, SUM(CONVERT(INT,CANTIDAD)) FROM ENVIOS
GROUP BY #C
HAVING SUM(CONVERT(INT,CANTIDAD))>1000

SELECT #C,#T, SUM(CONVERT(INT,CANTIDAD))
FROM ENVIOS
GROUP BY #C,#T

--17. Obtener los valores de T# de los artículos abastecidos al menos por un proveedor que no
--    viva en MADRID y que no esté en la misma ciudad en la que se monta el artículo.
      SELECT DISTINCT E.#T 
	  FROM ENVIOS E, ARTICULOS A,PROVEEDOR P
	  WHERE E.#T = A.#T AND E.#P=P.#P AND P.CIUDAD!=A.CIUDAD   
	  AND E.#P IN (SELECT #P FROM PROVEEDOR P 
	                                 WHERE P.CIUDAD!='MADRID' )


--18. Obtener los valores de P# para los proveedores que suministran al menos un componente
--    suministrado al menos por un proveedor que suministra al menos un componente ROJO.
	SELECT DISTINCT #P
	FROM ENVIOS
	WHERE #C IN 
		(SELECT #C 
		 FROM ENVIOS 
		 WHERE #P IN 
		 (SELECT #P 
		  FROM ENVIOS JOIN COMPONENTES ON ENVIOS.#C=COMPONENTES.#C 
		  WHERE COLOR ='ROJO'));


--19. Obtener los identificadores de artículos, T#, para los que se ha suministrado algún
--    componente del que se haya suministrado una media superior a 320 artículos.

      SELECT DISTINCT #t
      FROM envios
      WHERE #c IN ( SELECT #c
                    FROM envios
                    GROUP BY #c
                    HAVING AVG(convert(integer,cantidad)) > 320 );


--20. Seleccionar los identificadores de proveedores que hayan realizado algún envío con
--    Cantidad mayor que la media de los envíos realizados para el componente a que
--    corresponda dicho envío.
SELECT distinct #p
FROM envios a
WHERE cantidad > (SELECT AVG(convert(integer,cantidad))
                  FROM envios b
                  WHERE b.#c=a.#c );


--21. Seleccionar los identificadores de componentes suministrados para el artículo 'T2' por el proveedor 'P2'.
	SELECT #c
	FROM envios
	WHERE #t = 'T2' AND #p = 'P2';

--22. Seleccionar todos los datos de los envíos realizados de componentes cuyo color no sea 'ROJO'.

	SELECT e.*
	FROM envios e, componentes c
	WHERE e.#c = c.#c AND color <> 'ROJO';

--23. Seleccionar los identificadores de componentes que se suministren para los artículos 'T1' y 'T2'.
	SELECT #c
	FROM envios
	WHERE #t ='T1'
	INTERSECT
	SELECT #c
	FROM envios
	WHERE #t ='T2';

--24. Seleccionar el identificador de proveedor y el número de envíos de componentes de color 
--   'ROJO' llevados a cabo por cada proveedor.

	SELECT #p, count(*) A
	FROM envios
	WHERE #c IN ( SELECT #c
					FROM componentes
					WHERE color = 'ROJO')
	GROUP BY #p ; 

--25. Seleccionar los colores de componentes suministrados por el proveedor 'P1'.
	SELECT DISTINCT color
	FROM componentes
	WHERE #c IN ( SELECT DISTINCT #c
					FROM envios
					WHERE #p = 'P1');
--26. Seleccionar los datos de envío y nombre de ciudad de aquellos envíos que cumplan que
--    el artículo, proveedor y componente son de la misma ciudad.
SELECT e.*, c.ciudad
FROM envios e, componentes c,articulos a, proveedor p
WHERE e.#t = a.#t AND e.#c = c.#c AND
      e.#p = p.#p AND p.ciudad=c.ciudad AND
      p.ciudad = a.ciudad;

--27. Seleccionar los nombres de los componentes que son suministrados en una cantidad total superior a 500.
		SELECT DISTINCT cnombre
		FROM componentes
		WHERE #c IN ( SELECT #c
						FROM envios
						GROUP BY #c
						HAVING SUM(convert(integer,cantidad))> 500);
--28. Seleccionar los identificadores de proveedores que residan en Sevilla y no suministren más de dos artículos distintos.
(SELECT #p
 FROM proveedor
 WHERE ciudad='SEVILLA')
except --                     MINUS
(SELECT #p
FROM envios
GROUP BY #p
HAVING COUNT(DISTINCT #t) > 2);

--29. Seleccionar los identificadores de artículos para los cuales todos sus componentes se fabrican en una misma ciudad.
	SELECT #t
	FROM envios e,componentes c
	WHERE e.#c = c.#c
	GROUP BY #t
	HAVING COUNT(DISTINCT ciudad) = 1 ; 
--30. Seleccionar los identificadores de artículos para los que se provean envíos de todos los
--    componentes existentes en la base de datos.
SELECT #t
FROM envios
GROUP BY #t
HAVING COUNT(DISTINCT #c) = ( SELECT COUNT(*) FROM Componentes) ; 

--31. Seleccionar los códigos de proveedor y artículo que suministran al menos dos
--    componentes de color 'ROJO'.
SELECT #p, #t
FROM envios e,componentes c
WHERE e.#c = c.#c AND c.color='ROJO'
GROUP BY #p, #t
HAVING COUNT (*) > 1; 

