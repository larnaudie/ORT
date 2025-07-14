USE OBLIGATORIO_BD1_2024

--CONSULTA 1 - Listar el o los nombres de los pasajeros con la mayor cantidad de pasajes comprados a su nombre

SELECT turista.nombre, COUNT (pasaje.Id_Usuario) as pasajesPorPersona
FROM TURISTA_USUARIO AS turista
JOIN PASAJE AS pasaje
ON turista.Id_Usuario = pasaje.Id_Usuario
GROUP BY turista.Id_Usuario, turista.nombre
HAVING COUNT (pasaje.Id_Usuario) = (
SELECT MAX (pasajesPorPersona)
FROM (
	SELECT COUNT (Id_Pasaje) as pasajesPorPersona
FROM Pasaje
GROUP BY Id_Usuario
) as subconsulta
);



--CONSULTA 2 - Listar todos los datos de los buses con más de 35 asientos que no tengan asignado ningún destino que parta el día de mañana.

SELECT bus.*
FROM BUS as bus
LEFT JOIN DESTINO  as destino
ON bus.Id_Bus = destino.Id_Bus
AND destino.fecha = CAST (DATEADD(day, 1, GETDATE()) AS DATE)
WHERE bus.Capacidad > 35
AND destino.Id_Destino IS NULL;




--CONSULTA 3 - Listar todos los datos de los pasajeros para los cuales haya registrados en el sistema más de 5 pasajes comprados

SELECT turista.*, COUNT (pasaje.id_pasaje) AS cantidadPasajes
FROM TURISTA_USUARIO as turista
LEFT JOIN PASAJE as pasaje
ON turista.id_usuario = pasaje.id_usuario
GROUP BY turista.id_usuario, turista.nombre_usuario, turista.contraseña, turista.fecha_nac, turista.correo, turista.nombre, turista.apellido1, turista.apellido2, turista.id_categoria
HAVING COUNT (pasaje.id_pasaje) > 5;


--CONSULTA 4 - Listar idpasajero, nombre, apellidos y asiento (idasiento y fila) que correspondan a pasajes comprados para el destino cuyo idviaje es 255

SELECT turista.Id_Usuario, turista.Nombre, turista.Apellido1, turista.Apellido2, pasaje.Id_Asiento, asiento.fila
FROM TURISTA_USUARIO as turista
JOIN PASAJE as pasaje
ON turista.Id_Usuario = pasaje.Id_Usuario
JOIN ASIENTO as asiento
ON pasaje.Id_Asiento = asiento.Id_Asiento
WHERE pasaje.Id_Destino = 255;


--CONSULTA 5 A- Listar todos los idviaje y cantidad de pasajes comprados durante el mes de Setiembre de este año para c/u de los destinos del pasajero cuyo correo es soyturista@gmail.com comprados en Setiembre del 2017. La lista debe estar ordenada por idviaje ascendente

SELECT pasaje.id_destino AS Id_Viaje, COUNT(pasaje.id_pasaje) AS Cantidad_Pasajes
FROM TURISTA_USUARIO as turista
JOIN PASAJE as pasaje 
ON turista.id_usuario = pasaje.id_usuario
WHERE turista.correo = 'soyturista@gmail.com'
AND pasaje.fecha_compra >= '2024-09-01'
AND pasaje.fecha_compra < '2024-10-01'
AND pasaje.id_destino IN (
    SELECT DISTINCT pasaje_2017.id_destino
    FROM TURISTA_USUARIO as turista_2017
    JOIN PASAJE as pasaje_2017 
    ON turista_2017.id_usuario = pasaje_2017.id_usuario
    WHERE turista_2017.correo = 'soyturista@gmail.com'
    AND pasaje_2017.fecha_compra >= '2017-09-01'
    AND pasaje_2017.fecha_compra < '2017-10-01'
)
GROUP BY pasaje.id_destino
ORDER BY pasaje.id_destino ASC;


--CONSULTA 5 B- Listar los idviaje y cantidad de pasajes comprados durante el mes de Setiembre de este año para c/u de los destinos del pasajero cuyo correo es soyturista@gmail.com - Lista ordenada por idviaje ascendente

SELECT pasaje.id_destino AS Id_Viaje, COUNT(pasaje.id_pasaje) AS Cantidad_Pasajes
FROM TURISTA_USUARIO AS turista
JOIN PASAJE AS pasaje 
ON turista.id_usuario = pasaje.id_usuario
WHERE turista.correo = 'soyturista@gmail.com'
AND pasaje.fecha_compra >= '2024-09-01'
AND pasaje.fecha_compra < '2024-10-01'
GROUP BY pasaje.id_destino
ORDER BY pasaje.id_destino ASC;


--CONSULTA 5 C- Listar los idviaje y cantidad de pasajes comprados durante el mes de Setiembre de 2017 para c/u de los destinos del pasajero cuyo correo es soyturista@gmail.com - Lista ordenada por idviaje ascendente

SELECT pasaje.id_destino AS Id_Viaje, COUNT(pasaje.id_pasaje) AS Cantidad_Pasajes
FROM TURISTA_USUARIO AS turista
JOIN PASAJE AS pasaje 
ON turista.id_usuario = pasaje.id_usuario
WHERE turista.correo = 'soyturista@gmail.com'
AND pasaje.fecha_compra >= '2017-09-01'
AND pasaje.fecha_compra < '2017-10-01'
GROUP BY pasaje.id_destino
ORDER BY pasaje.id_destino ASC;