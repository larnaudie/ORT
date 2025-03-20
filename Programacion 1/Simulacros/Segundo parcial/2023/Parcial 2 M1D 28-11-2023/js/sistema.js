class Sistema {
    constructor() {
        this.viajeros = [
            new Viajero(1,"Guille", "123456", "guille@ort.com"),
            new Viajero(2,"Maria", "12345", "maria@ort.com"),
        ];
        this.tipoDeViajes = ["Premium", "Estandar", "Casual"];

        this.viajes = [];
    }

    agregarViaje(viaje) {
        this.viajes.push(viaje);
    }

    obtenerViajeroPorId(idViajero) {
        let objeto = null;
        for(const viajero of this.viajeros){
            if(viajero.id === idViajero){
                objeto = viajero;
                break;
            }
        }
        return objeto;
    }

    existeViaje(idViajero, fecha){
        let existe = false;//innecesario
        for(const viajero of this.viajeros){//innecesario
            if(viajero.id === idViajero){
                for(const viaje of this.viajes){
                    if(viaje.fehca === fecha){
                        existe = true;
                        break;
                    }
                }
            }//n
        }//n
        return existe;
    }

    obtenerViajesPorTipo(tipoViaje){
        let viajesPorTipo = [];
        for (const viaje of this.viajes){
            if(viaje.tipo===tipoViaje){
                viajesPorTipo.push(viaje);
            }
        }
        return viajesPorTipo;
    }


}

