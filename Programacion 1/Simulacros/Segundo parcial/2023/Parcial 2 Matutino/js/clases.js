idPartida = 0;
class Partida {
    constructor(juego,cantidadDeHoras) {
        this.id = idPartida++;
        this.juego = juego;
        this.cantidadDeHoras = cantidadDeHoras;
    }
}

class Transmision {
    constructor(idTransmision, titulo,idPartida) {
        this.id = idTransmision;
        this.titulo = titulo;
        this.idPartida = idPartida;
    }
}