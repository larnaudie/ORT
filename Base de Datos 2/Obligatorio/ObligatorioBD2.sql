--Anexo 1 - Script de creación de tablas (puede descargar el archivo aparte)
CREATE DATABASE DeviceService
GO
USE DeviceService
GO
CREATE TABLE Empleado(
IdEmp int identity not null,
NomEmp varchar(30) not null,
FchNacEmp date not null,
SueldoEmp money,
TipoEmp char(1) not null,
constraint pk_Empleado primary key(IdEmp),
constraint ck_TipoEmp check(TipoEmp in ('T','C')))

GO
CREATE TABLE Producto(
IdProd int identity not null,
DscProd varchar(30) not null,
StkProd int,
CostoProd money,
constraint pk_Producto primary key(IdProd))

GO
CREATE TABLE Unidad(
NumSerie character(10) not null,
IdProd int not null,
FchFab date,
FchVto date,
constraint pk_Unidad primary key(NumSerie,IdProd),
constraint fk_ProdUnidad foreign key(IdProd) references Producto(IdProd))

GO
CREATE TABLE Repara(
IdRepara int identity not null,
NumSerie character(10) not null,
IdProd int not null,
IdEmp int not null,
FchRepara datetime not null,
CostoRepara money,
StsRepara varchar(20) default 'Iniciado',
IdEmpQA int,
constraint pk_Repara primary key(IdRepara),
constraint uk_Repara
unique(NumSerie,IdProd,IdEmp,FchRepara),
constraint ck_StsRepara check(StsRepara in ('Iniciado','En testing','Terminado','Cancelado')),
constraint fk_UnidadRepara foreign key(NumSerie,IdProd) references Unidad(NumSerie,IdProd),
constraint fk_EmpRepara foreign key(IdEmp) references Empleado(IdEmp),
constraint fk_EmpQA foreign key(IdEmpQA) references Empleado(IdEmp))
GO

--1. Creación de índices que considere puedan ser útiles para optimizar las consultas (según
--criterio establecido en el curso).

create index idx_Empleado_Id on Empleado(TipoEmp);
create index idx_Tipo_Empleado_Id on Empleado(TipoEmp);

create index idx_Producto_Id on Producto(idProd);

create index idx_Repara_id on Repara(idRepara);
create index idx_Repara_NumSerie on Repara(NumSerie);
create index idx_Repara_idProd on Repara(idProd);
create index idx_Repara_idEmp on Repara(idEmp);

create index idx_Unidad_NumSerie_Con_idProd on Unidad(NumSerie,idProd);

--2. Ingreso de un juego completo de datos de prueba (será más valorada la calidad de los
--datos que la cantidad)

--Con ayuda de DeepSeek
INSERT INTO Empleado (NomEmp, FchNacEmp, SueldoEmp, TipoEmp) VALUES
('Juan Pérez', '1985-03-15', 2500.00, 'T'),
('María García', '1990-07-22', 2800.00, 'C'),
('Carlos López', '1988-11-30', 2200.00, 'T'),
('Ana Martínez', '1992-05-18', 2600.00, 'C'),
('Luis Rodríguez', '1983-09-10', 3000.00, 'T'),
('Sofía Hernández', '1995-02-28', 2400.00, 'C'),
('Pedro Díaz', '1987-12-05', 2700.00, 'T'),
('Laura Sánchez', '1991-04-20', 2900.00, 'C'),
('Jorge Ramírez', '1980-08-15', 3200.00, 'T'),
('Mónica Flores', '1993-06-25', 2550.00, 'C');

INSERT INTO Producto (DscProd, StkProd, CostoProd) VALUES
('Smartphone X10', 100, 450.00),
('Tablet Pro 8', 75, 320.00),
('Laptop Elite', 50, 1200.00),
('Smartwatch Fit', 120, 180.00),
('Auriculares BT', 200, 85.00),
('Monitor 24"', 60, 220.00),
('Teclado Mecánico', 150, 65.00),
('Ratón Inalámbrico', 180, 35.00),
('Altavoz Bluetooth', 90, 120.00),
('Disco Duro 1TB', 110, 75.00),
('Disco Duro 2TB', 0, 100.00);

INSERT INTO Unidad (NumSerie, IdProd, FchFab, FchVto) VALUES


INSERT INTO Repara (NumSerie, IdProd, IdEmp, FchRepara, CostoRepara, StsRepara, IdEmpQA) VALUES


DELETE FROM Empleado
SELECT * FROM Empleado
DELETE FROM Unidad
SELECT * FROM Unidad
DELETE FROM Producto
DELETE FROM Repara


--3. Utilizando SQL implementar las siguientes consultas:
--	a. Para todos los productos existentes, mostrar código y descripción, cantidad de
--	reparaciones con control de calidad realizado, cantidad sin control realizado y
--	cantidad de reparaciones cuyo valor fue superior a $100.select u.NumSerie, p.DscProd, COUNT(r.StsRepara)from Producto as pjoin Unidad u on u.IdProd = p.IdProdjoin Repara r on r.NumSerie = u.NumSerieWhere r.StsRepara = 'Terminado'Group by u.NumSerie, p.DscProd