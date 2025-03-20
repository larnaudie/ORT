create database ejemplo
use ejemplo

--DROP TABLE TELEFONO;
--DROP TABLE FUNCIONARIO;

create table funcionario(
	IDF INT NOT NULL PRIMARY KEY,
	NOMBRE VARCHAR(20),
	DIRECCION VARCHAR(60),
);

INSERT INTO funcionario(IDF,NOMBRE,DIRECCION) VALUES(1,'JUAN','DIRECCION 1');

CREATE TABLE TELEFONO(
	IDF INT NOT NULL FOREIGN KEY REFERENCES FUNCIONARIO,
	TEL VARCHAR(10) NOT NULL PRIMARY KEY,
);

INSERT INTO TELEFONO(IDF,TEL) VALUES (1,'0991234');

SELECT * FROM funcionario
SELECT * FROM TELEFONO

-- TRABAJAMOS CON EL DOCUMENTO ALGEBRA QUE ESTA EN AULAS

CREATE TABLE EMPLEADOS(
	NOMBRE VARCHAR(20),
	NRO INT NOT NULL PRIMARY KEY,
	DEPTO INT,
	SALARIO INT,
);
INSERT INTO EMPLEADOS(NOMBRE,NRO,DEPTO,SALARIO) VALUES('Federico Azurra', 333456, 5, 7850);
INSERT INTO EMPLEADOS(NOMBRE,NRO,DEPTO,SALARIO) VALUES('Paola Valdés', 453321, 4, 6980);
INSERT INTO EMPLEADOS(NOMBRE,NRO,DEPTO,SALARIO) VALUES('Héctor Torres', 889546, 5, 8456);

SELECT * FROM EMPLEADOS

--Seleccionar los empleados que trabajan en el departamento 4.
-- σDepto. = 4 (Empleados)

SELECT *
FROM EMPLEADOS
WHERE DEPTO=4

--Seleccionar los empleados cuyo salario es mayor que 7000.
-- σSalario > 7000 (Empleados)

SELECT *
FROM EMPLEADOS
WHERE SALARIO>7000

--Seleccionar los empleados que trabajan en el departamento 5 cuyo
--salario es mayor que 8000.

SELECT *
FROM EMPLEADOS
WHERE DEPTO=5 AND SALARIO>8000

--Listar el nombre y el salario de todos los empleados.
--πNombre, Salario (Empleados)

SELECT NOMBRE,SALARIO
FROM EMPLEADOS

--Listar el sexo y el salario de todos los empleados.
--πSexo, Salario (Empleados)

ALTER TABLE EMPLEADOS
ADD SEXO VARCHAR(1) NULL;

SELECT * FROM EMPLEADOS

SELECT SEXO, SALARIO
FROM EMPLEADOS

--Listar el nombre y el salario de los empleados que trabajan en
--el departamento 5.
--πNombre, Salario ( σDepto. = 5 (Empleados) )

SELECT NOMBRE, SALARIO
FROM EMPLEADOS
WHERE DEPTO=5 