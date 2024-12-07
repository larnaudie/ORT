class Sistema {
    constructor() {
        this.listaDePartidas = [
            new Partida("The Witcher", 7),
            new Partida("Zelda", 4),
            new Partida("Zelda", 2),
        ];
        this.listaDeJuegos = ["Call of Duty", "The Witcher", "Zelda"];

        this.listaDeTransmisiones = [];
    }

    agregarTransmisiones(transmision) {
        this.listaDeTransmisiones.push(transmision);
    }

    agregarPartidas(partida) {
        this.listaDePartidas.push(partida);
    }

    existeTitulo(titulo) {
        let existe = false;
        for (const transmision of this.listaDeTransmisiones) {
            if (transmision.titulo === titulo) {
                existe = true;
                break;
            }
        }
        return existe;
    }

    obtenerNombreJuego(idTransmision) {
        let nombreJuego = "";
        for(const transmision of this.listaDeTransmisiones){
            if(transmision.id === idTransmision){
                for(const partida of this.listaDePartidas){
                    if(partida.id === transmision.idPartida){
                        nombreJuego = partida.juego;
                        break;
                    }
                }
            }
        }
        return nombreJuego;
    }


    obtenerDuracionPartida(idTransmision) {
        let duracionPartida = "";
        for(const transmision of this.listaDeTransmisiones){
            if(transmision.id === idTransmision){
                for(const partida of this.listaDePartidas){
                    if(partida.id === transmision.idPartida){
                        duracionPartida = partida.cantidadDeHoras;
                        break;
                    }
                }
            }
        }
        return duracionPartida;
    }
}

