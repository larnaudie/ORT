------------------------------------------------------
--DDL
-------------------------------------------------------

create database obligatorio;
use obligatorio

SET DATEFORMAT YMD;

-- CREACION DEL ESQUEMA RELACIONAL
create table Pais(
IdPais decimal not null Primary Key,
NombrePais varchar(50));

create table Pasajero (
IdPasajero decimal not null Primary Key,
NombrePasajero varchar(60),
APaternoPasajero varchar(60),
AMaternoPasajero varchar(60),
TipoDocumentoPasajero char(3),
NumeroDocumentoPasajero decimal,
FechaNacimientoPasajero date,
EmailPasajero varchar(60),
PasswordPasajero character(40),
IdPais decimal not null foreign key references Pais(IdPais));

--Verificar que la password debe tener al menos de 8 caracteres de longitud
ALTER TABLE Pasajero
ADD CONSTRAINT CHK_PasajeroTipoDoc CHECK (LEN(TipoDocumentoPasajero) >=2); 

create table PasajeroTelefono (
IdPasajero decimal not null foreign key references Pasajero (IdPasajero),
TelefonoPasajero varchar(60),
Primary Key (IdPasajero, TelefonoPasajero));

create table Terminal (
IdTerminal decimal not null Primary Key,
NombreTerminal varchar(60),
IdPais decimal not null foreign key references Pais(IdPais));

create table Bus (
Idbus decimal not null Primary Key,
Tipobus varchar(60),
Capacidadbus integer,
Marcabus varchar(80));

--Restricción que la capacidad de los buses debe estar entre 10 y 40
ALTER TABLE Bus
ADD CONSTRAINT CHK_BusCapacidad CHECK (Capacidadbus between 10 and 40); 

create table Asiento (
Idbus decimal not null foreign key references bus (Idbus),
FilaAsiento integer,
LetraAsiento char(2),
Primary Key (Idbus,FilaAsiento,LetraAsiento));

create table Viaje (
IdTerminalOrigenViaje decimal not null foreign key references Terminal (IdTerminal),
IdTerminalDestinoViaje decimal not null foreign key references Terminal (IdTerminal),
FechaHoraViaje datetime,
Importe float,
Idbus decimal foreign key references bus (Idbus),
IdViaje decimal not null Primary Key);

--Restricción que la terminal de salida deba ser distinta a la terminal de destino
ALTER TABLE Viaje
ADD CONSTRAINT CHK_ViajeTerminal CHECK (IdTerminalOrigenViaje <> IdTerminalDestinoViaje); 

create table Pasaje (
IdPasaje int IDENTITY(1,1) Primary Key,
IdPasajero decimal not null foreign key references Pasajero (IdPasajero),
Idbus decimal not null foreign key references bus (Idbus),
FilaAsiento integer,
LetraAsiento char(2),
FechaCompraBoleto date,
IdViaje decimal not null foreign key references Viaje (IdViaje),
Foreign key (Idbus,FilaAsiento,LetraAsiento) references
Asiento(Idbus,FilaAsiento,LetraAsiento));

create table PasajeroMercoSur (
IdPasajero decimal not null foreign key references Pasajero (IdPasajero),
PorcentajePasajeroMercoSur float,
Primary Key (IdPasajero));

create table PasajeroMercoSurBeneficio (
IdPasajero decimal not null foreign key references Pasajero (IdPasajero),
BeneficioMercoSur varchar(80),
Primary Key (IdPasajero,BeneficioMercoSur));

