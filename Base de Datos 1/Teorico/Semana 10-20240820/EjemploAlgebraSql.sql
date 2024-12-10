create database algebrasql
use algebrasql

create table empleado(
nombre varchar(20) not null,
nro int not null primary key ,
depto int not null,
salario int not null
)

insert into empleado(nombre, nro,depto,salario) values('Federico Azurra', 333456, 5, 7850); 
insert into empleado(nombre, nro,depto,salario) values('Paola Valdés', 453321, 4, 6980); 
insert into empleado(nombre, nro,depto,salario) values('Héctor Torres', 889546, 5 ,8456); 

--Operacioon seleccion
--Seleccionar los empleados que trabajan en el departamento 4.
select * from empleado
where depto=4

--Seleccionar los empleados cuyo salario es mayor que 7000.
select * from empleado 
where salario>7000

--Seleccionar los empleados que trabajan en el departamento 5 cuyo
--salario es mayor que 8000.
select * from empleado 
where depto=5 and salario>8000

select * from empleado 
where depto=5 and nro in 
(select nro from empleado where salario>8000)

select * from empleado 
where salario>8000 and nro in 
(select nro from empleado where depto=5)

-- operacion Proyeccion 
--Listar el nombre y el salario de todos los empleados.

select nombre,salario from empleado


ALTER TABLE empleado ADD sexo VARCHAR(1) NULL ;
select * from empleado

--Listar el sexo y el salario de todos los empleados.

Select sexo,salario from empleado

--Listar el nombre y el salario de los empleados que trabajan en
--el departamento 5.

select nombre, salario from empleado
where depto=5

select * from empleado

drop table chofer
drop table mecanico

create table chofer (
nombre varchar(20), 
salario int, 
empresa varchar (20),
edad int)
insert into chofer(nombre, salario,empresa, edad)values ('A.Rey',1000,'Veloz',25)
insert into chofer(nombre, salario,empresa, edad)values ('S.Santos',5000,'Fast',27)
insert into chofer(nombre, salario,empresa, edad )values('J.Martin',4000,'Giro',28)

create table mecanico (
nombre varchar(20),
salario int ,
empresa varchar(20),
antiguedad int
)
insert into mecanico(nombre, salario,empresa, antiguedad)values ('A.Blanco',3000,'Fast',24)
insert into mecanico(nombre, salario,empresa, antiguedad)values ('J.Martin',4000,'Giro',28)

select * from mecanico
select * from chofer

-- Operacion Diferencia
select * from mecanico
where mecanico.nombre not in (select nombre from chofer)

-- Operacion union 
select nombre,salario,empresa from chofer
union
select nombre, salario, empresa from mecanico

-- Listar los nombres de los choferes y mecánicos que trabajan
-- para la empresa Fast.

select nombre from chofer where empresa = 'Fast'
union 
select nombre from mecanico where empresa = 'Fast'

-- ejemplo de producto

create table persona(
ci int ,
nombre varchar(20),
edad int ,
)

create table telefono(
numtel varchar(20),
ci int ,
)

insert into persona (ci, nombre, edad) values (1,'juan',25)
insert into persona (ci, nombre, edad) values (2,'pedro',25)

insert into telefono(ci, numtel) values (1,094112222)
insert into telefono(ci, numtel) values (1,095112222)
insert into telefono(ci, numtel) values (1,098112222)
insert into telefono(ci, numtel) values (2,094111222)

select * from persona
select * from telefono

select * from persona,telefono
select * from persona,telefono
where persona.ci=telefono.ci

select nombre, numtel from persona,telefono
where persona.ci=telefono.ci

select nombre, numtel from persona join telefono
on  persona.ci=telefono.ci

select nombre from mecanico
select nombre from chofer

select nombre from mecanico 
where nombre not in 
(select nombre from mecanico
    where nombre not in 
	(select nombre from chofer)
)
