----------------------------------------------------------------
-- DATOS DEL ALUMNO 
-- NRO DE ESTUDIANTE: 
-- NOMBRE DE ESTUDIANTE:
---------------------------------------------------------------

---------------------------------------------------------------
-- FUNCIONES ADICIONALES A UTILIZAR - consultar manual  
---------------------------------------------------------------
-- https://docs.microsoft.com/en-us/sql/t-sql/functions/dateadd-transact-sql?view=sql-server-ver15
---------------------------------------------------------------
-- FUNCIONES DE CASTEO Y CONVERSION CAST y CONVERT Syntax:  
-- CAST ( expression AS data_type [ ( length ) ] )  
-- CONVERT ( data_type [ ( length ) ] , expression [ , style ] )  
-- fFUNCIONES PARA MANEJO DE FECHAS
-- GETDATE()
-- YEAR ( date )  
--DATEADD (datepart , number , date )  
---------------------------------------------------------------


---------------------------------------------------------------
-- Creacion de una Base de Datos de Prueba
---------------------------------------------------------------
CREATE DATABASE Practicolaboratorio1;


USE Practicolaboratorio1;
------------------------------------------------------------------------ 

--DROP TABLE detalle;
--DROP TABLE producto;
--DROP TABLE orden;
--DROP TABLE cliente;
--DROP TABLE proveedor;
------------------------------------------------------------------------

-- CREACION DE TABLAS DE LA BASE DE DATOS
-------------------------------------------------------------------------

CREATE TABLE cliente (
    COD_CLI NUMERIC(5) NOT NULL CONSTRAINT cliente_pk PRIMARY KEY,
    NOMBRE VARCHAR(30) NOT NULL,
    CIUDAD VARCHAR(20) );

CREATE TABLE proveedor (
    COD_PROV NUMERIC(5) NOT NULL CONSTRAINT proveedor_pk PRIMARY KEY,
    NOMBRE VARCHAR(30) NOT NULL,
    CIUDAD VARCHAR(20) );

CREATE TABLE producto (
    COD_PROD NUMERIC(5) NOT NULL CONSTRAINT producto_pk PRIMARY KEY,
    NOMBRE VARCHAR(30) NOT NULL CONSTRAINT producto_uk UNIQUE,
    PRECIO NUMERIC(8),
    COD_PROV NUMERIC(5) CONSTRAINT prod_to_prov_fk REFERENCES proveedor );
    
CREATE TABLE orden (
    NUM_ORDEN NUMERIC(8) NOT NULL CONSTRAINT orden_pk PRIMARY KEY,
    COD_CLI NUMERIC(5) CONSTRAINT orden_to_cliente_fk REFERENCES cliente,
    FECHA_ORDEN DATE NOT NULL,
    FECHA_ENTREGA DATE );
    
CREATE TABLE detalle (
    NUM_ORDEN NUMERIC(8)  CONSTRAINT detalle_to_orden REFERENCES orden,
    COD_PROD  NUMERIC(5) CONSTRAINT detalle_to_prod REFERENCES producto,
    CANTIDAD NUMERIC(8) NOT NULL,
    CONSTRAINT detalle_pk PRIMARY KEY (NUM_ORDEN,COD_PROD)
    );
    
-----------------------------------------------------------------------------
--CONSTRUCCION DEL JUEGO DE PRUBA
-----------------------------------------------------------------------------
INSERT INTO cliente VALUES (1000,'PEREZ','MONTEVIDEO');
INSERT INTO cliente VALUES (1001,'GARCIA','SALTO');
INSERT INTO cliente VALUES (1002,'ABELLA','PANDO');
INSERT INTO cliente VALUES (1003,'SORIA','ROCHA');
INSERT INTO cliente VALUES (1004,'ABELLA','SALTO');
INSERT INTO cliente VALUES (1005,'RUIZ','ROCHA');
INSERT INTO cliente VALUES (1006,'MORENO','SALTO');
INSERT INTO cliente VALUES (1007,'REYES','MONTEVIDEO');
INSERT INTO cliente VALUES (1008,'AGUILAR','ROCHA');
INSERT INTO cliente VALUES (1009,'DELGADO','SALTO');
INSERT INTO cliente VALUES (1010,'ABELLA','MONTEVIDEO');
INSERT INTO cliente VALUES (1011,'ESPINOLA','MONTEVIDEO');
INSERT INTO cliente VALUES (1012,'PEREZ','MINAS');

INSERT INTO proveedor VALUES (2000,'APOLO','MONTEVIDEO');
INSERT INTO proveedor VALUES (2001,'DITEL','MONTEVIDEO');
INSERT INTO proveedor VALUES (2002,'LA CATEDRAL','PANDO');

INSERT INTO producto VALUES (110,'PINCEL',150,2000);
INSERT INTO producto VALUES (120,'ESMALTE 10L',550,2000);
INSERT INTO producto VALUES (130,'ESMALTE 25L',900,2000);
INSERT INTO producto VALUES (140,'RODILLO',210,2001);
INSERT INTO producto VALUES (150,'ESPATULA',120,2002);
INSERT INTO producto VALUES (160,'DESTORNILLADOR',200,2002);

INSERT INTO orden VALUES (5000,1000,'2018-03-30','2018-04-01');
INSERT INTO orden VALUES (5001,1000,'2018-04-01','2018-04-01');
INSERT INTO orden VALUES (5002,1001,'2018-04-02','2018-04-03');
INSERT INTO orden VALUES (5003,1001,'2018-04-02','2018-04-03');
INSERT INTO orden VALUES (5004,1002,'2018-04-19','2018-04-20');
INSERT INTO orden VALUES (5005,1003,'2018-04-20','2018-04-21');
INSERT INTO orden VALUES (5006,1004,'2018-04-20','2018-04-21');
INSERT INTO orden VALUES (5007,1005,'2018-05-05',NULL);
INSERT INTO orden VALUES (5008,1006,'2018-05-11',NULL);


INSERT INTO detalle VALUES (5000,110,1);
INSERT INTO detalle VALUES (5000,130,2);
INSERT INTO detalle VALUES (5001,110,3);
INSERT INTO detalle VALUES (5001,120,4);
INSERT INTO detalle VALUES (5001,130,2);
INSERT INTO detalle VALUES (5002,140,2);
INSERT INTO detalle VALUES (5002,150,3);
INSERT INTO detalle VALUES (5002,160,3);
INSERT INTO detalle VALUES (5003,130,1);
INSERT INTO detalle VALUES (5004,140,5);
INSERT INTO detalle VALUES (5004,160,6);
INSERT INTO detalle VALUES (5005,120,3);
INSERT INTO detalle VALUES (5005,130,3);
INSERT INTO detalle VALUES (5006,140,2);
INSERT INTO detalle VALUES (5006,150,5);
INSERT INTO detalle VALUES (5007,110,4);
INSERT INTO detalle VALUES (5007,130,1);
INSERT INTO detalle VALUES (5008,110,2);
INSERT INTO detalle VALUES (5008,120,3);
INSERT INTO detalle VALUES (5008,130,4);
INSERT INTO detalle VALUES (5008,140,5);

COMMIT;


--CLIENTE (cod_cli, nombre, ciudad)
--PROVEEDOR (cod_prov, nombre, ciudad)
--PRODUCTO (cod_prod, nombre, precio, cod_prov)
--ORDEN (num_orden, cod_cli, fecha_orden, fecha_entrega)
--DETALLE (num_orden, cod_prod, cantidad)
---------------------------------------------------------------------------------------
-- RESOLUCION DE CONSULTAS
---------------------------------------------------------------------------------------

-- Resolver los siguientes requerimientos SQL:
--1) Seleccionar el nombre de los clientes con domicilio en Montevideo.
--2) Seleccionar todos los datos de los clientes con domicilio en Montevideo, ordenando alfabéticamente por nombre.
--3) Seleccionar el número de las órdenes con fecha anterior al 21 de abril de este año.
--4) Seleccionar el número de las órdenes pedidas o entregadas el 20 de abril de este año.
--5) Seleccionar el código y nombre de los clientes con domicilio en Montevideo, Pando o Rocha.
--6) Seleccionar el código de los productos con precio entre 100 y 500.
--7) Seleccionar el código de los clientes cuyos nombres empiecen con "A" o "M".
--8) Seleccionar el número de las órdenes no entregadas.
--9) Seleccionar todos los datos de las órdenes pedidas el 20 de abril de este año y entregadas al día siguiente.
--10) Seleccionar las ciudades donde hay clientes.
--11) Seleccionar el nombre de los clientes que hayan realizado alguna orden.
--12) Seleccionar todos los datos de los clientes que hayan realizado alguna orden antes del 30 de marzo de este año.
--13) Seleccionar el nombre y el precio de los productos de la orden 5001.
--14) Seleccionar el nombre y el precio de los productos que hayan sido ordenados por el cliente Pérez domiciliado en Montevideo.
--15) Seleccionar el número de las órdenes que han pedido alguno de los mismos productos pedidos en la orden 5001.
--16) Seleccionar el código de los clientes que han ordenado alguno de los mismos productos ordenados por el cliente García.
--17) Seleccionar el nombre de los clientes y en el caso que hayan realizado alguna orden, el número de orden.
--18) Seleccionar el mayor y el menor número de orden.
--19) Seleccionar las ciudades donde hay clientes y/o proveedores.
--20) Seleccionar las ciudades donde hay clientes y no hay proveedores.
--21) Seleccionar el número de las órdenes en donde se haya pedido solamente el producto 110.
--22) Seleccionar todos los datos de las órdenes en donde se haya pedido ESMALTE 10L o ESMALTE 25L pero no ambos productos.

------------------------------------------------------------------------------
-- RESULTADOS ESPERADOS
-------------------------------------------------------------------------------
