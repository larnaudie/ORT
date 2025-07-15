create database practicasBD2
use practicasBD2
set dateformat ymd

CREATE TABLE Clientes (
    clienteID INT PRIMARY KEY,
    nombre VARCHAR(100)
);

CREATE TABLE Compras (
    compraID INT PRIMARY KEY,
    clienteID INT,
    monto DECIMAL(10,2),
    fecha DATE,
    FOREIGN KEY (clienteID) REFERENCES Clientes(clienteID)
);

-- Insertar clientes
INSERT INTO Clientes (clienteID, nombre) VALUES
(1, 'Ana Pérez'),
(2, 'Juan Rodríguez'),
(3, 'Laura Gómez'),
(4, 'Martín López');

-- Insertar compras
INSERT INTO Compras (compraID, clienteID, monto, fecha) VALUES
(1, 1, 150, '2024-01-10'),
(2, 2, 300, '2024-01-11'),
(3, 1, 200, '2024-01-15'),
(4, 3, 100, '2024-01-18'),
(5, 2, 250, '2024-01-20'),
(6, 4, 400, '2024-01-25');


-----------------------------------------------------------
--Mostrar los nombres de los clientes cuya suma total de compras sea mayor
--al promedio de las sumas de todos los clientes.

-- Mostrar los nombres de los clientes
SELECT sub1.nombre
FROM (
    -- tabla que devuelve nombre cliente y suma total de cada cliente
    SELECT cli.nombre, SUM(co.monto) AS total
    FROM compras co
    JOIN clientes cli ON cli.clienteID = co.clienteID
    GROUP BY cli.nombre
) AS sub1
-- me quedo solo con los clientes cuya suma sea mayor al promedio de todas las sumas
WHERE sub1.total > (
    SELECT AVG(total_por_cliente)
    FROM (
        SELECT SUM(co2.monto) AS total_por_cliente
        FROM compras co2
        GROUP BY co2.clienteID
    ) AS sub2
)

--Mostrar el nombre de los clientes cuyo monto promedio por compra
--es mayor al promedio general de todas las compras.

SELECT cli.nombre
FROM compras co
JOIN clientes cli ON cli.clienteID = co.clienteID
GROUP BY cli.clienteID, cli.nombre
HAVING AVG(co.monto) > (
    SELECT AVG(monto) FROM compras
);

--Mostrar los nombres de los clientes que hayan realizado
--compras cuyo monto totalsupere el monto total de compras de
--Juan Rodríguez.

select sub1.nombre
from (
	select cli.nombre, sum(co.monto) as total_compras_cliente
	from Clientes cli
	join Compras co ON co.clienteID = cli.clienteID
	group by cli.nombre
	having sum(co.monto) > (
							select sum(co2.monto)
							from Clientes cli2
							join Compras co2 ON co2.clienteID = cli2.clienteID
							where cli2.nombre = 'Juan Rodriguez'
							)
) as sub1