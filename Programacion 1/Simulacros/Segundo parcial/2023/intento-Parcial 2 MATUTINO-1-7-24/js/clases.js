
class Libro {
    constructor(pId, pNombre, pAutor) {
        this.id = pId;
        this.nombre = pNombre;
        this.autor = pAutor;
    }
}

class Prestamo {
    constructor(idPrestamo, libro, nombre, cedula, duracion) {
        this.id = idPrestamo; 
        this.libro = libro;
        this.nombre = nombre;
        this.cedula = cedula;
        this.duracion = duracion;
    }
}
