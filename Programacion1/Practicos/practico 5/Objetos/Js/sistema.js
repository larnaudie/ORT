class Sistema {
    constructor() {
        

        //--LISTAS EJERCICIO 8 --//
        this.peliculas = [];
        this.generos = [
            new Genero(1, "Comedia", 15),
            new Genero(2, "Drama", 18),
            new Genero(3, "Ciencia Ficcion", 13)
        ];
        //--FIN LISTAS EJERCICIO 8 --//
    }

    agregarPelicula(pelicula) {
        this.peliculas.push(pelicula);
    }

    buscarElementos(lista, algunaPropiedad, busqueda) {
        let existe = false;
        for (let i = 0; i < lista.length; i++) {
            const item = lista[i];
            if (item[algunaPropiedad] === busqueda) {
                existe = true
                break;
            }
        }
        return existe;
    }

    obtenerObjeto(lista, algunaPropiedad, busqueda){
        let objeto = null;
        for (let i = 0; i < lista.length; i++) {
            const item = lista[i];
            if (item[algunaPropiedad] === busqueda) {
                objeto = item;
                break;
            }
        }
        return objeto;
    }

}