class Sistema {
    constructor(){
        this.peliculas = [];
        this.generos = [
            new Genero(1, "Comedia", 15),
            new Genero(2, "Drama", 18),
            new Genero(3, "Ciencia Ficcion", 13)
        ];
    }

    agregarPelicula(pelicula){
        this.peliculas.push(pelicula);
    }

    buscarElemento(arrElementos, propiedad, busqueda){// peliculas, "nombre", "spiderman"
        let existe = false;
        for (let i = 0; i < arrElementos.length; i++) {
            const unElemento = arrElementos[i];
            if(unElemento[propiedad] === busqueda){//peliculas[i].nombre === peliculas[i]["nombre"] => unaPelicula.nombre === unaPelicula["nombre"] === "spiderman"
                existe = true;
                break;
            }
        }
        return existe;
    }

    obtenerObjeto(arrElementos, propiedad, busqueda){
        let objeto = null;
        for (let i = 0; i < arrElementos.length; i++) {
            const unElemento = arrElementos[i];
            if(unElemento[propiedad] === busqueda){//peliculas[i].nombre === peliculas[i]["nombre"] => unaPelicula.nombre === unaPelicula["nombre"] === "spiderman"
                objeto = unElemento;
                break;
            }
        }
        return objeto;
    }
}