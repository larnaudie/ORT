class Sistema {
    constructor(){
        this.peliculas = [];
        this.generos = [
            new Genero(1, "Comedia", 15),
            new Genero(2, "Drama", 18),
            new Genero(3, "Ciencia Ficcion", 13)
        ];
        this.usuarios = [
            new Usuario(1, "usu1", "123", "Mauro Nacimento"),
            new Usuario(2, "usu2", "321", "Ana Lopez"),
            new Usuario(3, "usu3", "222", "Joaquin Rodriguez"),
            new Usuario(4, "usu4", "111", "Maria Martinez"),
        ];
    }

    agregarPelicula(pelicula){
        this.peliculas.push(pelicula);
    }

    agregarUsuario(usuario){
        this.usuarios.push(usuario);
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

    validarCamposVaciosRegistro(nombre, clave, nombreCompleto){
        let camposValidos = false;
        if(nombre !== "" && clave !== "" && nombreCompleto !== ""){
            camposValidos = true;
        }
        return camposValidos;
    }

    verificarFormatoPass(clave){
        let valido = false;
        if(clave.length > 5){
            valido = true;
        }
        return valido;
    }

    verificarLogin(nombre, clave){
        let resultado = false;
        let unUsuario = this.obtenerObjeto(this.usuarios, "nombre", nombre);
        if(unUsuario !== null){
            if(clave === unUsuario.contrasena){
                resultado = true;
            }
        }
        return resultado;
    }
}