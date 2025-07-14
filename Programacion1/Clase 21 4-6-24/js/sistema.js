class Sistema {
    constructor(){
        this.partidos = [
            new Partido(1, "Partido A"),
            new Partido(2, "Partido B"),
            new Partido(3, "Partido C"),
            new Partido(4, "Partido D"),
        ];
    }

    agregarPartido(partido){
        this.partidos.push(partido);
    }

    eliminarPartido(posicion){
        this.partidos.splice(posicion,1);
    }

    actualizarVotos(id, cantidadVotos){
        let partido = this.obtenerObjeto(this.partidos, "id", id);
        partido.votos = cantidadVotos;
    }

    actualizarRepresentantes(id, representantesDirectos, votosPorRespresentante){
        let partido = this.obtenerObjeto(this.partidos, "id", id);
        partido.representantes = representantesDirectos;
        partido.votosCociente = representantesDirectos * votosPorRespresentante;
        partido.votosResiduo = partido.votos - partido.votosCociente;
    }

    ordenarLista(){
        this.partidos.sort(this.criterio);
    }

    criterio(a,b){
        let dev = 1;
        if(a.votosResiduo > b.votosResiduo){
            dev = -1;
        }
        return dev
    }

    obtenerObjeto(arrElementos, propiedad, busqueda) {
        let objeto = null;
        for (let i = 0; i < arrElementos.length; i++) {
            const unElemento = arrElementos[i];
            if (unElemento[propiedad] === busqueda) {
                objeto = unElemento;
                break
            }
        }
        return objeto;
    }
}