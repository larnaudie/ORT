--Anexo 1 - Script de creación de tablas (puede descargar el archivo aparte)
CREATE DATABASE Obligatorio1BD2
GO
USE Obligatorio1BD2
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

--Agregue mas empleados por que necesitaba sueldos de rangos mas amplios
INSERT INTO Empleado (NomEmp, FchNacEmp, SueldoEmp, TipoEmp) VALUES
('Camila Torres', '1986-01-10', 52000.00, 'C'),
('Diego Morales', '1984-06-12', 78000.00, 'T'),
('Valentina Gómez', '1993-09-30', 85000.00, 'C'),
('Andrés Pereira', '1990-02-14', 93000.00, 'T'),
('Martina Ruiz', '1988-12-25', 115000.00, 'C'),
('Ricardo Méndez', '1979-05-20', 125000.00, 'T'),
('Lucía Cabrera', '1991-11-03', 143000.00, 'C'),
('Gonzalo Suárez', '1985-08-08', 165000.00, 'T'),
('Paula Vázquez', '1994-07-17', 182000.00, 'C'),
('Sebastián Acosta', '1982-03-05', 198000.00, 'T');

--Actualizare los primeros creados para que no queden con sueldos bajos
UPDATE Empleado SET SueldoEmp = 52000.00 WHERE NomEmp = 'Juan Pérez';
UPDATE Empleado SET SueldoEmp = 88000.00 WHERE NomEmp = 'María García';
UPDATE Empleado SET SueldoEmp = 75000.00 WHERE NomEmp = 'Carlos López';
UPDATE Empleado SET SueldoEmp = 62000.00 WHERE NomEmp = 'Ana Martínez';
UPDATE Empleado SET SueldoEmp = 98000.00 WHERE NomEmp = 'Luis Rodríguez';
UPDATE Empleado SET SueldoEmp = 54000.00 WHERE NomEmp = 'Sofía Hernández';
UPDATE Empleado SET SueldoEmp = 103000.00 WHERE NomEmp = 'Pedro Díaz';
UPDATE Empleado SET SueldoEmp = 89000.00 WHERE NomEmp = 'Laura Sánchez';
UPDATE Empleado SET SueldoEmp = 120000.00 WHERE NomEmp = 'Jorge Ramírez';
UPDATE Empleado SET SueldoEmp = 65000.00 WHERE NomEmp = 'Mónica Flores';

select * from Empleado

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
('Disco Duro 1TB', 110, 75.00);

select * from Producto
INSERT INTO Unidad (NumSerie, IdProd, FchFab, FchVto) VALUES
('SN001X10A1', 1, '2023-01-15', '2025-01-15'),
('SN002X10A2', 1, '2023-02-20', '2025-02-20'),
('SN003TAB01', 2, '2023-03-10', '2026-03-10'),
('SN004TAB02', 2, '2023-04-05', '2026-04-05'),
('SN005LAP01', 3, '2022-11-15', '2027-11-15'),
('SN006LAP02', 3, '2022-12-10', '2027-12-10'),
('SN007SWT01', 4, '2023-05-20', '2025-05-20'),
('SN008SWT02', 4, '2023-06-15', '2025-06-15'),
('SN009AUR01', 5, '2023-07-01', '2026-07-01'),
('SN010AUR02', 5, '2023-08-12', '2026-08-12'),
('SN011MON01', 6, '2022-09-25', '2027-09-25'),
('SN012MON02', 6, '2022-10-30', '2027-10-30'),
('SN013TEC01', 7, '2023-01-10', '2028-01-10'),
('SN014TEC02', 7, '2023-02-15', '2028-02-15'),
('SN015RAT01', 8, '2023-03-20', '2026-03-20'),
('SN016RAT02', 8, '2023-04-25', '2026-04-25'),
('SN017ALT01', 9, '2022-12-05', '2025-12-05'),
('SN018ALT02', 9, '2023-01-20', '2026-01-20'),
('SN019HDD01', 10, '2022-08-15', '2027-08-15'),
('SN020HDD02', 10, '2022-09-10', '2027-09-10');
select * from Unidad

INSERT INTO Repara (NumSerie, IdProd, IdEmp, FchRepara, CostoRepara, StsRepara, IdEmpQA) VALUES
-- Reparaciones normales (Terminadas)
('SN001X10A1', 1, 1, '2023-05-10 09:30:00', 50.00, 'Terminado', 2),
('SN003TAB01', 2, 3, '2023-06-15 14:15:00', 75.00, 'Terminado', 4),
('SN005LAP01', 3, 5, '2023-07-20 10:00:00', 200.00, 'Terminado', 6),

-- Reparaciones en testing (empleados QA distintos al reparador)
('SN007SWT01', 4, 2, '2023-08-05 11:45:00', 30.00, 'En testing', 8),
('SN009AUR01', 5, 4, '2023-09-12 16:30:00', 25.00, 'En testing', 10),

-- Reparaciones iniciadas (sin QA asignado aún)
('SN011MON01', 6, 7, '2023-10-01 08:00:00', 90.00, 'Iniciado', NULL),
('SN013TEC01', 7, 9, '2023-10-15 13:20:00', 15.00, 'Iniciado', NULL),

-- Casos borde:
-- 1. Costo mínimo (0) y máximo (1000)
('SN015RAT01', 8, 6, '2023-11-01 10:00:00', 0.00, 'Terminado', 1),
('SN017ALT01', 9, 8, '2023-11-10 15:00:00', 1000.00, 'Terminado', 3),

-- 2. Fecha antigua y futura
('SN019HDD01', 10, 10, '2020-01-05 09:00:00', 120.00, 'Cancelado', 5),
('SN002X10A2', 1, 1, '2025-01-10 12:00:00', 60.00, 'Iniciado', NULL),

-- 3. Mismo empleado como reparador y QA (posible según modelo)
('SN004TAB02', 2, 2, '2023-12-20 14:00:00', 45.00, 'Terminado', 2),

-- 4. Reparación cancelada sin QA
('SN006LAP02', 3, 3, '2023-12-25 10:30:00', 150.00, 'Cancelado', NULL),

-- 5. Mismo producto reparado por distintos empleados
('SN008SWT02', 4, 5, '2024-01-05 11:00:00', 40.00, 'En testing', 7),
('SN008SWT02', 4, 7, '2024-01-10 09:00:00', 55.00, 'Terminado', 9),

-- 6. Unidad con múltiples reparaciones
('SN010AUR02', 5, 9, '2023-08-01 13:00:00', 20.00, 'Terminado', 1),
('SN010AUR02', 5, 2, '2023-09-01 14:00:00', 35.00, 'Terminado', 4),
('SN010AUR02', 5, 4, '2023-10-01 15:00:00', 50.00, 'Terminado', 6),

-- 7. Más reparaciones para unidades existentes
('SN012MON02', 6, 2, '2023-10-05 10:30:00', 85.00, 'Terminado', 4),
('SN014TEC02', 7, 4, '2023-10-20 15:45:00', 18.00, 'Terminado', 6),
('SN016RAT02', 8, 6, '2023-11-05 11:15:00', 5.00, 'Terminado', 8),
('SN018ALT02', 9, 8, '2023-11-15 16:30:00', 750.00, 'Terminado', 10),
('SN020HDD02', 10, 10, '2021-03-15 09:20:00', 95.00, 'Cancelado', 1),

-- 8. Reparaciones con estados variados
('SN002X10A2', 1, 3, '2023-04-12 14:00:00', 45.00, 'Terminado', 5),
('SN004TAB02', 2, 5, '2023-05-18 10:45:00', 65.00, 'Cancelado', NULL),
('SN006LAP02', 3, 7, '2023-06-22 13:30:00', 175.00, 'Terminado', 9),
('SN008SWT02', 4, 9, '2023-07-28 16:15:00', 30.00, 'En testing', 1),
('SN010AUR02', 5, 1, '2023-08-30 08:45:00', 15.00, 'Iniciado', NULL),

-- Casos especiales adicionales:
-- 9. Reparación con costo negativo (aunque money permite negativos, es un caso borde)
('SN012MON02', 6, 3, '2023-09-10 11:00:00', -10.00, 'Terminado', 5),

-- 10. Mismo empleado repara y QA en distintos momentos
('SN016RAT02', 8, 7, '2023-10-15 14:30:00', 8.00, 'Terminado', 7),
('SN018ALT02', 9, 9, '2023-11-20 09:45:00', 600.00, 'Terminado', 9),

-- 11. Reparaciones consecutivas en el mismo día
('SN020HDD02', 10, 1, '2022-02-10 08:00:00', 50.00, 'Terminado', 3),
('SN020HDD02', 10, 1, '2022-02-10 12:30:00', 75.00, 'Terminado', 3),
('SN020HDD02', 10, 3, '2022-02-10 16:45:00', 100.00, 'Terminado', 5),

-- 12. Reparaciones con diferentes formatos de hora
('SN001X10A1', 1, 2, '2023-12-01 23:59:59', 55.00, 'Terminado', 4),
('SN003TAB01', 2, 4, '2023-12-02 00:00:01', 70.00, 'Terminado', 6),
('SN005LAP01', 3, 6, '2023-12-03 12:00:00', 210.00, 'En testing', 8),

-- 13. Más reparaciones para unidades populares
('SN007SWT01', 4, 8, '2023-12-04 13:15:00', 35.00, 'Terminado', 10),
('SN009AUR01', 5, 10, '2023-12-05 14:30:00', 22.00, 'Terminado', 2),
('SN011MON01', 6, 2, '2023-12-06 15:45:00', 92.00, 'Terminado', 4),
('SN013TEC01', 7, 4, '2023-12-07 16:00:00', 17.00, 'Terminado', 6),
('SN015RAT01', 8, 6, '2023-12-08 17:15:00', 3.00, 'Terminado', 8),

-- 14. Reparaciones con empleados de diferentes tipos (T y C)
('SN019HDD01', 10, 1, '2021-06-20 10:00:00', 110.00, 'Terminado', 2),  -- T -> C
('SN002X10A2', 1, 2, '2023-07-25 11:00:00', 48.00, 'Terminado', 1),     -- C -> T
('SN004TAB02', 2, 3, '2023-08-30 12:00:00', 62.00, 'Terminado', 4),     -- T -> C
('SN006LAP02', 3, 4, '2023-10-05 13:00:00', 180.00, 'Terminado', 3);    -- C -> T
select * from Repara


--3. Utilizando SQL implementar las siguientes consultas:
--	a. Para todos los productos existentes, mostrar código y descripción, cantidad de
--	reparaciones con control de calidad realizado, cantidad sin control realizado y
--	cantidad de reparaciones cuyo valor fue superior a $100.

SELECT 
    p.IdProd AS CodigoProducto,
    p.DscProd AS Descripcion,
    (SELECT COUNT(*) 
     FROM Repara r1 
     WHERE r1.IdProd = p.IdProd AND r1.IdEmpQA IS NOT NULL) AS ConControlCalidad,
    (SELECT COUNT(*) 
     FROM Repara r2 
     WHERE r2.IdProd = p.IdProd AND r2.IdEmpQA IS NULL) AS SinControlCalidad,
    (SELECT COUNT(*) 
     FROM Repara r3 
     WHERE r3.IdProd = p.IdProd AND r3.CostoRepara > 100) AS ReparacionesMayores100
FROM  Producto p
ORDER BY p.IdProd;

--3) b. Muestra los datos del Empleado con mayor cantidad de reparaciones realizadas
SELECT TOP 1 e.IdEmp, e.NomEmp,  e.FchNacEmp, e.SueldoEmp, e.TipoEmp, COUNT(r.IdRepara) AS CantidadReparaciones
FROM  Empleado e
JOIN  Repara r ON e.IdEmp = r.IdEmp
GROUP BY e.IdEmp, e.NomEmp, e.FchNacEmp, e.SueldoEmp, e.TipoEmp
ORDER BY CantidadReparaciones DESC


--3) c. Muestra datos del producto y costo total de reparaciones por producto, 
--	mostrando solo los productos con un costo total superior a $200.
SELECT p.IdProd, p.DscProd, SUM(r.CostoRepara) AS CostoTotalReparaciones
FROM Producto p
JOIN  Repara r ON p.IdProd = r.IdProd
GROUP BY p.IdProd, p.DscProd
HAVING SUM(r.CostoRepara) > 200;

--3) d. Datos del producto más reparado.
SELECT TOP 1 p.IdProd, p.DscProd, COUNT(*) AS CantReparaciones
FROM Repara r
JOIN Producto p ON r.IdProd = p.IdProd
GROUP BY p.IdProd, p.DscProd
ORDER BY COUNT(*) DESC

--3) e. Escribe una consulta que muestre información detallada de los empleados, incluyendo:
-- Clasificación del salario en tres niveles (Alto, Medio, Bajo)
-- Categoría del empleado según su tipo (Tiempo Completo o Contratado) y nivel salarial (Senior, Junior, Experimentado).
-- Cantidad de reparaciones realizadas por cada empleado.
-- Ordenar la consulta por salario en orden descendente y, en caso de empate, por el número de reparaciones en orden descendente.
-- Elige los rangos de clasificación de acuerdo con tu criterio (justifica).

--Justificacion:
--	Como hablamos en clase, vamos a separar en partes las diferentes partes del sueldo, la primera mitad se desprecia.
--	|---se descarta—|
--	0-------------------50mil—------------------------------------200mil
--	Partiendo de esta base y subdividiendo, nos queda algo asi;
--	min				   avgmin				avg				avgmax              			  max
--	|—-----BAJO---------|-------------------MEDIO—------------|-----------------ALTO—----------|
--	50mil				85mil				125mil			165mil							200mil

SELECT e.IdEmp, e.NomEmp, e.SueldoEmp, e.TipoEmp,
    CASE 
        WHEN e.SueldoEmp < 85000 THEN 'Bajo'
        WHEN e.SueldoEmp BETWEEN 85000 AND 165000 THEN 'Medio'
        ELSE 'Alto'
    END AS Nivel_Salarial,
    CASE 
		--Si es de tiempo completo y su sueldo es mayor a 165mil es Senior
        WHEN e.TipoEmp = 'T' AND e.SueldoEmp >= 165000 THEN 'Senior'
		--si es de tiempo completo y el sueldo es menos a 165mil es Experimentado
        WHEN e.TipoEmp = 'T' AND e.SueldoEmp < 165000 THEN 'Experimentado'
		--Si es Contratado pero tiene sueldo mayor a 165mil es Senior
        WHEN e.TipoEmp = 'C' AND e.SueldoEmp >= 165000 THEN 'Senior'
		--Si es Contratado pero tiene sueldo entre 85mil y 165mil es Experimentado
        WHEN e.TipoEmp = 'C' AND e.SueldoEmp BETWEEN 85000 AND 165000 THEN 'Experimentado'
		--Sino, es Junior
        ELSE 'Junior'
    END AS Categoria_Empleado,
    COUNT(r.IdRepara) AS Cant_Reparaciones
FROM Empleado e
JOIN Repara r ON e.IdEmp = r.IdRepara
GROUP BY e.IdEmp, e.NomEmp, e.SueldoEmp, e.TipoEmp
ORDER BY e.SueldoEmp DESC, Cant_Reparaciones DESC;

--3) f. Muestra el costo total de reparaciones por empleado y un resumen general
SELECT e.IdEmp, e.NomEmp, SUM(r.CostoRepara) AS CostoTotal
FROM Empleado e
JOIN  Repara r ON r.IdEmp = e.IdEmp
GROUP BY e.IdEmp, e.NomEmp WITH ROLLUP
HAVING e.IdEmp IS NOT NULL AND e.NomEmp IS NOT NULL
ORDER BY e.IdEmp;

--g. Muestra los datos de los Empleados Técnicos que repararon todos los productos.
SELECT e.IdEmp, e.NomEmp, e.TipoEmp
FROM Empleado e
JOIN  Repara r ON e.IdEmp = r.IdEmp
WHERE e.TipoEmp = 'T'
GROUP BY e.IdEmp, e.NomEmp, e.TipoEmp

--4)	
--	a. Crea un procedimiento almacenado llamado sp_RegistrarReparacion, que
		--	permita registrar una nueva reparación en la tabla Repara, cumpliendo con las
		--	siguientes reglas:
		--	Parámetros de entrada:
		--	@NumSerie (char(10)): Número de serie de la unidad.
		--	@IdProd (int): ID del producto asociado.
		--	@IdEmp (int): ID del empleado que realiza la reparación.
		--	@CostoRepara (money): Costo de la reparación.

		--	Validaciones:

		--	La unidad (@NumSerie, @IdProd) debe existir en la tabla Unidad.
		--	El empleado (@IdEmp) debe existir en la tabla Empleado.
		--	Un empleado no puede registrar más de una reparación para la misma unidad
		--	en el mismo día.
		--	El costo de reparación no puede ser negativo.

		--	Operación:
		--	Insertar la nueva reparación en la tabla Repara, con el estado 'Iniciado' y la
		--	fecha/hora actual.
		--	Retornar un mensaje indicando el éxito o el motivo del fallo.





--	b. Crea una función escalar llamada fn_CalcularTiempoReparacion, que reciba el
			--	número de serie y el ID del producto y devuelva el tiempo total (en días) que ha	
			--	estado en reparación.

			--	Parámetros de entrada:
			--	@NumSerie (char(10)): Número de serie de la unidad.
			--	@IdProd (int): ID del producto.

			--	Contar todos los días únicos en los que la unidad ha estado en reparación, sin
			--	importar el número de reparaciones en un mismo día.
			--	Usar la columna FchRepara de la tabla Repara.
			--	Si la unidad no tiene reparaciones registradas, debe devolver NULL.

			--	Salida:
			--	Un int con la cantidad de días distintos en los que se ha reparado la unidad.




--	5. Escribir los siguientes disparadores (por supuesto: considerando modificaciones múltiples)
--	a. Crea un disparador llamado trg_ControlEstadoReparacion, que se active
			--	cuando se modifique la columna StsRepara en la tabla Repara.

			--	El trigger debe ejecutarse cuando:
			--	El estado de reparación (StsRepara) cambie a "Terminado" o "Cancelado".
			--	No debe activarse si el estado no cambió.

			--	Acciones a realizar:
			--	Registrar el cambio en una tabla llamada HistoricoReparacion, que debe
			--	crearse con los siguientes campos:
			--	CREATE TABLE HistoricoReparacion (
			--	IdHist INT IDENTITY PRIMARY KEY,
			--	IdRepara INT NOT NULL,
			--	NumSerie CHAR(10) NOT NULL,
			--	IdProd INT NOT NULL,
			--	EstadoAnterior VARCHAR(20) NOT NULL,
			--	EstadoNuevo VARCHAR(20) NOT NULL,
			--	FchCambio DATETIME DEFAULT GETDATE());

			--	Insertar en esta tabla el IdRepara, NumSerie, IdProd, el estado anterior, el
			--	estado nuevo y la fecha del cambio.



--	b. Crea un disparador llamado trg_PrevenirEliminacionReparaciones, que impida
			--	la eliminación de registros en la tabla Repara si la reparación tiene el estado
			--	"Terminado" o "En testing".

			--	El trigger debe activarse cuando se intente eliminar un registro en Repara.
			--	Debe permitir eliminar reparaciones solo si su estado es "Iniciado" o
			--	"Cancelado".

			--	Si el estado es "En testing" o "Terminado", debe bloquear la eliminación y
			--	mostrar un mensaje de error.
			--	Si la eliminación es permitida, debe registrarse en una tabla de auditoría
			--	HistoricoEliminacionReparaciones, con los siguientes datos:
			--	CREATE TABLE HistoricoEliminacionReparaciones (
			--	IdHist INT IDENTITY PRIMARY KEY,
			--	IdRepara INT NOT NULL,
			--	NumSerie CHAR(10) NOT NULL,
			--	IdProd INT NOT NULL,
			--	StsRepara VARCHAR(20) NOT NULL,
			--	FchEliminacion DATETIME DEFAULT GETDATE()
			--	);


--6. Crea una vista llamada vw_ReparacionesActivas, que muestre información detallada
			--de las reparaciones en curso, es decir, aquellas cuyo estado sea "Iniciado" o "En
			--testing".

			--La vista debe incluir la siguiente información:
			--IdRepara (ID de la reparación).
			--NumSerie (Número de serie de la unidad).
			--IdProd (ID del producto).
			--DscProd (Descripción del producto, obtenida de la tabla Producto).
			--NomEmp (Nombre del empleado que está realizando la reparación, obtenido de
			--Empleado).
			--FchRepara (Fecha de reparación).
			--StsRepara (Estado de la reparación).

			--Filtrar solo las reparaciones activas, es decir, aquellas con StsRepara = 'Iniciado' o
			--StsRepara = 'En testing'.




--7. Como se sabe, la empresa de servicio técnico gestiona reparaciones de dispositivos
			--electrónicos y su base de datos en SQL Server (DeviceService) maneja información
			--estructurada sobre empleados, productos y reparaciones en curso.
			--Sin embargo, necesitan almacenar un historial detallado de cada reparación,
			--incluyendo:

					--a. Eventos y cambios de estado de la reparación (ejemplo: "Se cambió una pieza",
					--"Se realizó prueba funcional").

					--b. Notas de los técnicos sobre el diagnóstico y acciones tomadas.

					--c. Imágenes o documentos adjuntos relacionados con la reparación (ejemplo:
					--fotos de fallas, informes de pruebas).

			--Dado que estos datos son altamente flexibles y varían entre reparaciones, se decide
			--almacenarlos en MongoDB, mientras que la estructura transaccional sigue en SQL
			--Server.
			--Cree una estructura en MongoDB para esta realidad, con dicha estructura el usuario
			--debe poder resolver por lo menos los siguientes escenarios:

					--a. Dado un IdRepara, queremos ver todos los eventos asociados a esa reparación,
					--incluyendo las notas y fechas de cada acción realizada.


					--b. Queremos encontrar todas las reparaciones donde en los eventos haya una
					--referencia a "placa", por ejemplo, para identificar equipos con problemas en la
					--placa base.


					--c. Queremos recuperar todas las reparaciones donde se han adjuntado imágenes del
					--proceso de reparación.


					--d. Queremos saber cuántas reparaciones han pasado por una acción específica,
					--como "Reemplazo de pieza", para evaluar la frecuencia de este tipo de intervención.