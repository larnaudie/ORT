USE OBLIGATORIO_BD1_2024

--Inserción de turistas registrados

INSERT INTO TURISTA_USUARIO (id_usuario, nombre_usuario, contraseña, fecha_nac, correo, nombre, apellido1, apellido2, id_categoria)
VALUES
(1, 'juanperez', 'password123', '1985-05-12', 'juanp@gmail.com', 'Juan', 'Perez', 'Gomez', 1),
(2, 'sofia_lopez', 'SofiLopez123', '1990-08-21', 'sofi@gmail.com', 'Sofia', 'Lopez', 'Martinez', 2),
(3, 'maria_gonz', 'MariaGonz1234', '1988-03-30', 'maria@gmail.com', 'Maria', 'Gonzalez', 'Sanchez', 1),
(4, 'soyturista', 'SoyTurista2017', '1992-01-15', 'soyturista@gmail.com', 'Carlos', 'Gomez', 'Rodriguez', 1);


--Inserción de turistas registrados telefonos

INSERT INTO TURISTA_TELEFONOS (id_usuario, telefono)
VALUES
(1, '091234567'),
(2, '092345678'),
(3, '093456789'),
(4, '094567890');


--Inserción de turistas registrados documento

INSERT INTO TURISTA_DOCUMENTO (id_usuario, tipo_documento, numero_documento)
VALUES
(1, 'CI', '45678912'),
(2, 'CI', '56789123'),
(3, 'Pasaporte', 'AB123456'),
(4, 'CI', '67891234');


--Inserción de pasaje

INSERT INTO PASAJE (id_pasaje, fecha_compra, fue_utilizado, id_usuario, id_destino, id_usu_no_reg, id_bus, id_asiento)
VALUES
(101, '2023-09-01', 1, 1, 250, NULL, 301, 401),
(102, '2023-09-05', 1, 1, 254, NULL, 302, 402),
(103, '2023-09-10', 1, 2, 250, NULL, 303, 403),
(104, '2023-09-15', 0, 2, 248, NULL, 304, 404),
(105, '2023-09-20', 0, 3, 255, NULL, 305, 405),
(106, '2023-09-25', 1, 3, 255, NULL, 305, 406),
(107, '2023-09-01', 1, 4, 248, NULL, 301, 407),
(108, '2023-09-05', 1, 4, 249, NULL, 302, 408),
(109, '2023-09-10', 1, 4, 250, NULL, 303, 409),
(110, '2023-09-15', 1, 4, 251, NULL, 304, 410),
(111, '2023-09-20', 1, 4, 252, NULL, 305, 411),
(112, '2017-09-01', 1, 4, 253, NULL, 306, 412), -- Pasaje del 2017
(113, '2017-09-10', 1, 4, 254, NULL, 306, 413); -- Pasaje del 2017


INSERT INTO PASAJE (id_pasaje, fecha_compra, fue_utilizado, id_usuario, id_destino, id_usu_no_reg, id_bus, id_asiento)
VALUES
    (114, '2023-09-10', 1, 1, 249, NULL, 303, 403),
    (115, '2023-09-12', 0, 1, 248, NULL, 304, 404),
    (116, '2023-09-15', 1, 1, 250, NULL, 305, 405),
    (117, '2023-09-18', 0, 1, 255, NULL, 306, 406);


INSERT INTO PASAJE (id_pasaje, fecha_compra, fue_utilizado, id_usuario, id_destino, id_usu_no_reg, id_bus, id_asiento)
VALUES
	(120, '2024-09-23', 1, 4, 253, NULL, 306, 406), -- Pasaje en septiembre de 2024
	(121, '2024-09-18', 1, 4, 254, NULL, 305, 405); -- Pasaje en septiembre de 2024



--Inserción de destino

INSERT INTO DESTINO (id_destino, fecha, hora, duracion, importe, info_general, id_ter_origen, id_ter_destino, id_bus)
VALUES
(248, '2024-10-25', '10:00:00', '02:00:00', 150.00, 'Destino a la ciudad', 101, 102, 301),
(249, '2024-10-26', '15:00:00', '03:00:00', 200.00, 'Destino a la playa', 103, 104, 302),
(250, '2024-10-27', '09:00:00', '01:30:00', 120.00, 'Destino a la montaña', 105, 106, 305),
(251, '2024-10-28', '14:00:00', '02:30:00', 180.00, 'Destino a la selva', 107, 108, 303),
(252, '2024-10-29', '16:00:00', '03:00:00', 220.00, 'Destino a la playa norte', 109, 110, 304),
(253, '2017-09-01', '10:00:00', '02:00:00', 150.00, 'Destino a la ciudad', 101, 102, 306),
(254, '2017-09-10', '12:00:00', '01:30:00', 120.00, 'Destino a la playa', 103, 104, 306),
(255, '2024-10-27', '09:00:00', '01:30:00', 120.00, 'Destino a la montaña', 105, 106, 305);


--Inserción de terminal 

INSERT INTO TERMINAL (id_terminal, nombre_term, id_dpto)
VALUES
(101, 'Terminal Central', 10),
(102, 'Terminal Norte', 11),
(103, 'Terminal Sur', 12),
(104, 'Terminal Este', 13),
(105, 'Terminal Oeste', 14),
(106, 'Terminal Interurbano', 15),
(107, 'Terminal Norte 2', 10),
(108, 'Terminal Sur 2', 11),
(109, 'Terminal Este 2', 12),
(110, 'Terminal Oeste 2', 13);


--Inserción de departamento


INSERT INTO DEPARTAMENTO (id_dpto, nombre)
VALUES
(10, 'Montevideo'),
(11, 'Canelones'),
(12, 'Maldonado'),
(13, 'Colonia'),
(14, 'Paysandú'),
(15, 'Salto');


--Inserción de bus

INSERT INTO BUS (id_bus, marca, tipo, capacidad)
VALUES
(301, 'Mercedes', 'Semi-Cama', 40),
(302, 'Volvo', 'Común', 36),
(303, 'Scania', 'Cama', 38),
(304, 'Mercedes', 'Semi-Cama', 40),
(305, 'Volvo', 'Común', 39),
(306, 'Scania', 'Cama', 40);


INSERT INTO BUS(id_bus, marca, tipo, capacidad)
VALUES
   (307, 'Volvo', 'Semi-Cama', 25),
   (308, 'Scania', 'Común', 28);

--Inserción de asiento

INSERT INTO ASIENTO (id_asiento, fila, letra, id_bus)
VALUES
(401, 1, 'A', 301),
(402, 2, 'B', 302),
(403, 3, 'C', 303),
(404, 4, 'D', 304),
(405, 5, 'E', 305),
(406, 6, 'F', 305),
(407, 7, 'G', 301),
(408, 8, 'H', 302),
(409, 9, 'I', 303),
(410, 10, 'J', 304),
(411, 11, 'K', 305),
(412, 12, 'L', 306),
(413, 13, 'M', 306);


--Inserción de categoria

INSERT INTO CATEGORIA (id_categoria, nombre_cat)
VALUES
(1, 'Regular'),
(2, 'VIP');


--Inserción de beneficio

INSERT INTO BENEFICIO (id_beneficio, descripcion, id_categoria)
VALUES
(1, 'Descuento 10%', 1),
(2, 'Acceso a sala VIP', 2);


--Inserción de turista no registrado

INSERT INTO TURISTA_NO_REGISTRADO (id_usu_no_reg, fecha_nac, correo, nombre, apellido1, apellido2, id_funcionario)
VALUES
(1, '1995-12-05', 'no_registrado1@gmail.com', 'Pedro', 'Fernandez', 'Garcia', 1),
(2, '1987-06-10', 'no_registrado2@gmail.com', 'Ana', 'Lopez', 'Mendez', 2);


--Inserción de turista no registrado telefono

INSERT INTO TURISTAS_NO_REGISTRADOS_TELEFONOS (id_usu_no_reg, telefono)
VALUES
(1, '099876543'),
(2, '098765432');


--Inserción de turista no registrado documento

INSERT INTO TURISTAS_NO_REGISTRADO_DOCUMENTO (id_usu_no_reg, tipo_documento, numero_doc)
VALUES
(1, 'CI', '12345678'),
(1, 'Pasaporte', 'AB987654'),
(2, 'CI', '23456789'),
(2, 'Pasaporte', 'CD876543');


--Inserción de funcionario

INSERT INTO FUNCIONARIO (id_funcionario, nombre, apellido1, apellido2)
VALUES
(1, 'Laura', 'Rodriguez', 'Perez'),
(2, 'Mario', 'Gomez', 'Silva');




