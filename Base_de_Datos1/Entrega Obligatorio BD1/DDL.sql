CREATE DATABASE OBLIGATORIO_BD1_2024
USE OBLIGATORIO_BD1_2024

CREATE TABLE TURISTA_USUARIO (
	id_usuario int NOT NULL primary key,
	nombre_usuario varchar(20),
	contraseña varchar(20) not null check (LEN(contraseña) >= 8),
	fecha_nac date,
	correo varchar(50) unique,
	nombre varchar (20),
	apellido1 varchar(20),
	apellido2 varchar(20),
	id_categoria int NOT NULL, 
	foreign key (id_categoria) references CATEGORIA(id_categoria)
);

CREATE TABLE TURISTA_TELEFONOS (
	id_usuario int NOT NULL,
	telefono varchar(20),
	primary key (id_usuario, telefono),
	foreign key (id_usuario) references TURISTA_USUARIO (id_usuario)
);

CREATE TABLE TURISTA_DOCUMENTO (
	id_usuario int NOT NULL,
	tipo_documento varchar(20),
	numero_documento varchar(20),
	primary key (id_usuario, tipo_documento, numero_documento),
	foreign key (id_usuario) references TURISTA_USUARIO (id_usuario)
);

CREATE TABLE PASAJE (
    id_pasaje int primary key NOT NULL,
    fecha_compra date,
    fue_utilizado bit default 0,
    id_usuario int,
    id_destino int NOT NULL,
    id_usu_no_reg int,
    id_bus int NOT NULL,
    id_asiento int NOT NULL,
    foreign key (id_usuario) references TURISTA_USUARIO(id_usuario),
    foreign key (id_destino) references DESTINO(id_destino),
    foreign key (id_usu_no_reg) references TURISTA_NO_REGISTRADO(id_usu_no_reg),
    foreign key (id_bus) references BUS(id_bus),
    foreign key (id_asiento) references ASIENTO(id_asiento)
);

CREATE TABLE DESTINO (
    id_destino int primary key NOT NULL,
    fecha date,
    hora time,
    duracion time,
    importe decimal(10, 2),
    info_general varchar(350),
    id_ter_origen int NOT NULL,
    id_ter_destino int NOT NULL,
    id_bus int NOT NULL,
    foreign key (id_ter_origen) references TERMINAL(id_terminal),
    foreign key (id_ter_destino) references TERMINAL(id_terminal),
    foreign key (id_bus) references BUS(id_bus),
    check (id_ter_origen != id_ter_destino)
);

CREATE TABLE TERMINAL (
    id_terminal int primary key NOT NULL,
    nombre_term varchar(100),
    id_dpto int NOT NULL,
    foreign key (id_dpto) references DEPARTAMENTO(id_dpto)
);

CREATE TABLE DEPARTAMENTO (
    id_dpto int primary key NOT NULL,
    nombre varchar(100)
);

CREATE TABLE BUS (
    id_bus int primary key NOT NULL,
    marca varchar(100),
    tipo varchar(50),
    capacidad int  check (capacidad BETWEEN 10 AND 40)
);

CREATE TABLE ASIENTO (
    id_asiento int primary key NOT NULL,
    fila int,
    letra varchar(1),
    id_bus int NOT NULL,
    foreign key (id_bus) references BUS(id_bus)
);

CREATE TABLE CATEGORIA (
    id_categoria int primary key NOT NULL,
    nombre_cat varchar(100) 
);

CREATE TABLE BENEFICIO (
    id_beneficio int primary key NOT NULL,
    descripcion varchar(250),
    id_categoria int NOT NULL,
    foreign key (id_categoria) references CATEGORIA(id_categoria)
);

CREATE TABLE TURISTA_NO_REGISTRADO (
	id_usu_no_reg int primary key NOT NULL,
	fecha_nac date ,
	correo varchar(50) unique,
	nombre varchar (20),
	apellido1 varchar(20),
	apellido2 varchar(20),
	id_funcionario int NOT NULL,
	foreign key (id_funcionario) references FUNCIONARIO(id_funcionario)
);

CREATE TABLE TURISTAS_NO_REGISTRADOS_TELEFONOS (
    id_usu_no_reg int,
    telefono varchar(20) NOT NULL,
    primary key (id_usu_no_reg, telefono),
    foreign key (id_usu_no_reg) references TURISTA_NO_REGISTRADO(id_usu_no_reg)
);

CREATE TABLE TURISTAS_NO_REGISTRADO_DOCUMENTO (
    id_usu_no_reg int,
    tipo_documento varchar(50) NOT NULL,
    numero_doc varchar(50) NOT NULL,
    primary key(id_usu_no_reg, tipo_documento, numero_doc),
    foreign key (id_usu_no_reg) references TURISTA_NO_REGISTRADO(id_usu_no_reg)
);

CREATE TABLE FUNCIONARIO (
    id_funcionario int primary key NOT NULL,
    nombre varchar(100),
    apellido1 varchar(100),
    apellido2 varchar(100)
);


