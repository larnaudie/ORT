-----------------------------------------------------------------------------------------------------
--SCRIPT JUEGO DE PRUEBA
-- DDL
------------------------------------------------------------------------------------------------------
Insert into Pais
values
(1,'Uruguay'),(2,'Brasil'),(3,'Argentina'),(4,'Paraguay'),(5,'Peru'),(6,'Colombia'),(7,'Chile');

insert into Pasajero
values (1,'Lionel','Messi','','AAA',1111,'1992-12-12','adrimede@hotmail.com','adr123',1),
(2,'Neymar','Junior','','BBB',2222,'1990-12-24','brupic@hotmail.com','bru123',3),
(3,'Paulo','Dybala','','CCC',3333,'1960-05-10','juanan@hotmail.com','jua123',2),
(4,'Thiago','Silva','','DDD',4444,'1980-07-12','soyturista@gmail.com','seb123',2),
(5,'Gonzalo','Higuain','','EEE',5555,'1995-10-28','fedemede@hotmail.com','fed123',1),
(10,'Fernando','Muslera','','AAA',1111,'1992-12-12','fernandomuslera@hotmail.com','xxx',1),
(11,'Diego','Godin','','BBB',2222,'1990-12-24','diegogodin@hotmail.com','yyy',1),
(12,'José María','Gimenez','','CCC',3333,'1960-05-10','josema@hotmail.com','zzz',1),
(13,'Luis','Suarez','','DDD',4444,'1980-07-12','luchosuarez@gmail.com','ttt',1),
(14,'Edinson','Cavani','','EEE',5555,'1995-10-28','edicavani@hotmail.com','www',1),
(15,'Arturo','Vidal','','EEE',5555,'1995-10-28','artrito@hotmail.com','www',7);

insert into PasajeroTelefono
values(1,'095237627'),
(2,'095223234'),
(3,'092232327'),
(4,'094237627'),
(5,'092237627'),
(1,'097237237');

--(1,'Uruguay'),(2,'Brasil'),(3,'Argentina'),(4,'Paraguay'),(5,'Peru'),(6,'Colombia'),(7,'Chile');

insert into Terminal
values(1,'Montevideo',1),
(2,'San Pablo',2),
(3,'Buenos Aires',3),
(4,'Rio',2),
(5,'Asuncion',4),
(6,'Santiago de chile',7),
(7,'Bogota',6),
(8,'Barranquila',6);

insert into Bus
values(1,'Internacional',40,'CUTCSA'),
(2,'Urbano',32,'CUTCSA'),
(3,'Internacional',40,'COME'),
(4,'Urbano',32,'COME');

insert into Asiento
values (1,1,'A'),(1,2,'A'),(1,3,'A'),(1,4,'A'),
(1,1,'B'),(1,2,'B'),(1,3,'B'),(1,4,'B'),
(1,1,'C'),(1,2,'C'),(1,3,'C'),(1,4,'C'),
(1,1,'D'),(1,2,'D'),(1,3,'D'),(1,4,'D'),
(2,1,'A'),(2,2,'A'),(2,3,'A'),(2,4,'A'),
(2,1,'B'),(2,2,'B'),(2,3,'B'),(2,4,'B'),
(2,1,'C'),(2,2,'C'),(2,3,'C'),(2,4,'C'),
(2,1,'D'),(2,2,'D'),(2,3,'D'),(2,4,'D'),
(3,1,'A'),(3,2,'A'),(3,3,'A'),(3,4,'A'),
(3,1,'B'),(3,2,'B'),(3,3,'B'),(3,4,'B'),
(3,1,'C'),(3,2,'C'),(3,3,'C'),(3,4,'C'),
(3,1,'D'),(3,2,'D'),(3,3,'D'),(3,4,'D'),
(4,1,'A'),(4,2,'A'),(4,3,'A'),(4,4,'A'),
(4,1,'B'),(4,2,'B'),(4,3,'B'),(4,4,'B'),
(4,1,'C'),(4,2,'C'),(4,3,'C'),(4,4,'C'),
(4,1,'D'),(4,2,'D'),(4,3,'D'),(4,4,'D');

insert into
Viaje(IdTerminalOrigenViaje,IdTerminalDestinoViaje,FechaHoraViaje,Importe,Idbus,IdViaje)
values (1,2,'2018-06-01 12:30:40',150,1,1), -- Montevideo San Pablo
(1,2,'2017-05-12 12:30:40',150,1,2), -- Montevideo San Pablo
(5,1,'2017-07-17 15:40:10',120,2,3), -- Asuncion Montevideo
(2,3,'2017-08-28 19:00:15',100,3,4), -- San Pablo Buenos Aires
(4,8,'2017-09-04 21:45:55',150,4,5), -- Rio Bogota
(1,2,'2017-11-16 00:00:00',150,3,6), -- Montevideo San Pablo modificar esta fecha para el bus que sale mañana
(5,1,'2017-11-15 12:40:00',150,3,7),--viaje del boleto del mes 9
(1,4,'2017-12-21 05:10:00',250,1,8),--viaje del boleto del mes 9
(5,2,'2017-10-02 21:20:00',120,3,9),--viaje del boleto del mes 9
(1,3,'2017-11-20 00:00:00',150,3,255), --Montevideo Buenos Aires
(5,3,'2017-12-13 00:00:00',130,4,256), -- Asuncion Buenos Aires
(1,8,'2018-06-01 12:30:40',150,1,100), -- montevideo Bogota
(1,6,'2018-06-01 12:30:40',150,1,101); -- montevideo santiago

insert into Pasaje
values (1,1,1,'A','2017-01-01',1),
(1,1,1,'B','2017-01-01',1),
(1,1,1,'C','2017-01-01',1),
(1,1,1,'D','2017-01-01',1),
(2,1,2,'A','2017-02-05',2),
(4,3,2,'A','2017-09-15',7),--boleto del mes 9 del mail soyturista@gmail.com
(4,1,4,'C','2017-09-22',8),--boleto del mes 9 del mail soyturista@gmail.com
(4,3,3,'A','2017-09-05',9),--boleto del mes 9 del mail soyturista@gmail.com
(4,3,2,'A','2017-09-05',9),--boleto del mes 9 del mail soyturista@gmail.com
(2,1,2,'B','2017-02-05',2),
(3,2,2,'A','2017-03-17',3),
(4,3,1,'B','2017-05-15',4),
(5,4,3,'C','2017-07-25',5),
(2,1,3,'A','2017-02-05',2),
(2,1,3,'B','2017-02-05',2),
(2,1,1,'A','2017-02-05',2),
(2,1,1,'B','2017-02-05',2),
(4,3,4,'B','2017-01-09',255),
(10,1,1,'A','2017-01-01',100),
(11,1,1,'B','2017-01-01',100),
(12,1,1,'C','2017-01-01',100),
(13,1,1,'D','2017-01-01',100),
(14,1,2,'A','2017-02-05',100),
(15,1,2,'A','2017-02-05',101);

insert into PasajeroMercoSur
values (1,5),
(2,5),
(5,10);

insert into PasajeroMercoSurBeneficio
values (1,'Beneficio por ser pasajero mercosur'),
(2,'Beneficio por ser pasajero mercosur'),
(5,'Beneficio por ser pasajero mercosur');


