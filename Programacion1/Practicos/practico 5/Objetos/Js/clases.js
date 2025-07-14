//---CLASES EJERCICIO 7 ----//
class Usuario {
    constructor(unNombre, unaEdad, unaNacionalidad){
        this.nombre = unNombre;
        this.edad = unaEdad;
        this.nacionalidad = unaNacionalidad;
    }
}

//---CLASES EJERCICIO 8 ----//

class Pelicula {
    constructor(unId, unNombre, unAnio, unGenero, unVotantes, unVotos,fotoNombre) {
        this.id = unId;
        this.nombre = unNombre;
        this.anio = unAnio;
        this.unGenero = unGenero;
        this.votantes = unVotantes;
        this.votos = unVotos;
        this.nombreFoto = fotoNombre;
    }
}

class Genero {
    constructor(unId, unNombre, unaEdad) {
        this.id = unId;
        this.nombre = unNombre;
        this.edad = unaEdad;
    }
}

//---FIN CLASES EJERCICIO 8 ----//