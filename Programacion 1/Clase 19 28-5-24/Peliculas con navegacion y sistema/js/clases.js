class Pelicula {
    constructor(unId, unNombre, unAnio, unGenero, unVotantes, unVotos, unNombreFoto){
        this.id = unId;
        this.nombre = unNombre;
        this.anio = unAnio;
        this.genero = unGenero;
        this.votantes = unVotantes;
        this.votos = unVotos;
        this.nombreFoto = unNombreFoto;
    }
}


class Genero {
    constructor(unId, unNombre, unaEdad){
        this.id = unId;
        this.nombre = unNombre;
        this.edad = unaEdad;
    }
}