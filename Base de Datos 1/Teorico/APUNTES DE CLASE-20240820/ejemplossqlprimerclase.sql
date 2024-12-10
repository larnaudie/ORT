create database base1
use base1

create table empleado(
ide int not null, 
nombre varchar(20),
edad int ,
primary key(ide),
);

create table chofer(
ide int not null foreign key references empleado,
libreta varchar(10),
);
insert into chofer(ide,libreta) values (1,'A');
insert into chofer(ide,libreta) values (2,'B');

create table proyecto(
idp int not null, 
nombre varchar(20),
primary key(idp),
);




create table trabaja(
ide int not null,
idp int not null,
foreign key(ide) references empleado(ide),
foreign key(idp) references proyecto(idp),
primary key(ide,idp),
);

ALTER TABLE trabaja
ADD horas int;


--juego de prueba
-- datos de empleados
insert into empleado(ide,nombre,edad) values(1,'Juan',25);
insert into empleado(ide,nombre,edad) values(2,'Pedro',25);
insert into empleado(ide,nombre,edad) values(3,'Ana',35);
insert into empleado(ide,nombre,edad) values(4,'Maria',28);

--datos de proyectos
insert into proyecto(idp,nombre) values(1,'PY1');
insert into proyecto(idp,nombre) values(2,'PY2');

--datos de trabaja
insert into trabaja(ide,idp,horas) values (1,1,10);
insert into trabaja(ide,idp,horas) values (2,1,5);
insert into trabaja(ide,idp,horas) values (3,2,10);
insert into trabaja(ide,idp,horas) values (4,2,15);


-- consultas
-- listar todos los datos de los empleados
select * from empleado

-- listaar los datos de la tabla trabaja
select * from trabaja

--listar los datos de la tabla proyecto
select * from proyecto


-- listar el nombre de los empleados, el nombre del proyecto en el que trabaja
-- y la cantidad de horas que trabaja en ese proyecto
select empleado.nombre,proyecto.nombre,horas from empleado,trabaja,proyecto
where trabaja.ide=empleado.ide and trabaja.idp=proyecto.idp

-- listar los nombres de los choferes

select nombre,libreta from empleado,chofer
where empleado.ide=chofer.ide

--listar los nombres de los empleados que no son choferes

select * from chofer

select * from empleado
where ide not in
(select ide from chofer)