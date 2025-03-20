
class Viajero {
    constructor(idViajero, nombre, cedula, mail) {
        this.id = idViajero;
        this.nombre = nombre;
        this.cedula = cedula;
        this.apellido = mail;
    }
}

class Viaje {
    constructor(idViaje, destino, costo, viajeroId, fecha, tipo) {
        this.id = idViaje; 
        this.destino = destino;
        this.costo = costo;
        this.idViajero = viajeroId;
        this.fecha = fecha;
        this.tipo = tipo;
    }
}
