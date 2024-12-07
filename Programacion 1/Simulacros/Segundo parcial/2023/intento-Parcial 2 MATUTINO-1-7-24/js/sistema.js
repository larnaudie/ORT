class Sistema {
    constructor() {
        this.libros = [
            new Libro(1, "El Diario de Noa", "un Autor"),
            new Libro(2, "La Diaria Comedia", "Homero"),
            new Libro(3, "Don Quijote de la Mancha", "Servantes"),
        ];
        this.prestamos = [];

    }

    agregarPrestamo(prestamo) {
        this.prestamos.push(prestamo);
    }

    buscarLibro(idLibro) {
        let objeto = null;
        for (const libro of this.libros) {
            if (libro.id === idLibro) {
                objeto = libro;
                break;
            }
        }
        return objeto;
    }

    buscarPrestamo(cedula, idLibro) {
        let existe = false;
        for (const prestamo of this.prestamos) {
            if (prestamo.cedula === cedula && prestamo.libro.id === idLibro) {
                existe = true;
                break;
            }
        }
        return existe;
    }

    cantidadDePrestamos(idLibro) {
        let cantidad = 0;
        let libroEncontrado = sistema.buscarLibro(idLibro);
        for (const prestamo of this.prestamos) {
            //prestamo.libro.id no funciona, es libroEncontrado.id
            if (libroEncontrado.id === idLibro) {
                cantidad++;
            }
        }
        return cantidad;
    }


}

