-- DQL
-----------------------------------------------------
use obligatorio
Set dateformat ymd;

--1. Listar el o los nombres de los pasajeros 
--con la mayor cantidad de pasajes comprados a su nombre.

select p.NombrePasajero, COUNT(pa.IdPasaje) as totalPasajes
from Pasajero as p
join Pasaje as pa 
on p.IdPasajero = pa.IdPasajero
group by p.IdPasajero, p.NombrePasajero
having COUNT(pa.IdPasaje)=(
select MAX(cantidadPasajes)
from (
select COUNT(idPasaje) as cantidadPasajes
from Pasaje
group by IdPasajero
) as maximaCantidad
);

---------------------------------------------------------------------------------------

--2. Listar todos los datos de los buses con más de 35 asientos
-- que no tengan asignado ningún destino que parta el día de mañana.

select bu.*
from Bus as bu
left join Viaje as vi
on bu.Idbus = vi.Idbus
and vi.FechaHoraViaje = CAST(DATEADD(day,1,getdate()) as date)
where Capacidadbus > 35
and vi.IdTerminalDestinoViaje is null 



------------------

--3. Listar todos los datos de los pasajeros para los cuales
-- haya registrados en el sistema más de 5 pasajes comprados.


select p.*
from Pasajero as p
left join Pasaje as pa
on p.IdPasajero = pa.IdPasajero
group by
p.IdPasajero, p.NombrePasajero, p.APaternoPasajero,p.AMaternoPasajero, p.TipoDocumentoPasajero, p.NumeroDocumentoPasajero, p.FechaNacimientoPasajero, p.EmailPasajero, p.PasswordPasajero, p.IdPais
having COUNT(pa.IdPasaje) > 5


---------------------------------------------------------------------------------------

--4. Listar idpasajero, nombre, apellidos y asiento (idasiento y fila) que
-- correspondan a pasajes comprados para el destino cuyo idviaje es 255.


select pa.IdPasajero, p.NombrePasajero, p.APaternoPasajero, a.LetraAsiento, a.FilaAsiento
from Pasaje as pa
join Pasajero as p
on p.IdPasajero = pa.IdPasajero
join Asiento as a
on pa.Idbus = a.Idbus
and pa.FilaAsiento = a.FilaAsiento
and pa.LetraAsiento = a.LetraAsiento
where pa.IdViaje = 255


---------------------------------------------------------------------------------------

-- 5. Listar todos los idviaje y cantidad de pasajes para c/u de los destinos del
-- pasajero cuyo correo es soyturista@gmail.com.
-- comprados en Setiembre del 2017
-- La lista debe estar ordenada por idviaje
-- ascendente.


select pa.IdViaje, COUNT(pa.IdViaje) as cantidadBoletos
from Pasajero as p
join Pasaje as pa
on pa.IdPasajero = p.IdPasajero
where p.EmailPasajero = 'soyturista@gmail.com'
and month(pa.FechaCompraBoleto) = 09
and year(pa.FechaCompraBoleto) = 2017
group by
pa.IdViaje


--6. Listar la cantidad de pasajeros distintos que viajaron a Colombia o Argentina en asientos de letra A

select COUNT(distinct p.IdPasajero) as cantidadPasajeros
from Pasaje as p
join Viaje as vi
on vi.IdViaje = p.IdViaje
join Terminal as t
on vi.IdTerminalDestinoViaje = t.IdTerminal
where (t.IdPais = 6
or t.IdPais = 3)
and p.LetraAsiento = 'A'


--7. Listar la cantidad de boletos vendidos a Colombia o Argentina en buses de 35 o más asientos

select COUNT(pa.IdPasajero) as cantidadBoletos
from Pasaje as pa
join Viaje as vi
on vi.IdViaje = pa.IdViaje
join Bus as bu
on bu.Idbus = pa.Idbus
join Terminal as t
on vi.IdTerminalDestinoViaje = t.IdTerminal
where (t.IdPais = 6
or t.IdPais = 3)
and bu.Capacidadbus >= 35


----------------------------------------------------------------------



