
class Heroe {
    constructor(unNombre, unPoder, unaEdad, esActivo) {
        this.nombre = unNombre;
        this.poder = unPoder;
        this.edad = unaEdad;
        this.estaActivo = esActivo;
    }

    saludar() {
        console.log(`Hola soy ${this.nombre} y mi poder es ${this.poder}`)
    }

    cambiarPoder(nuevoPoder) {
        this.poder = nuevoPoder;
    }

    cambiarPoderVersion2(nuevoPoder) {
        if (this.estaActivo) {
            this.poder = nuevoPoder;
        }
    }

    pelear() {
        let pelea;
        if (this.poder === "armadura" || this.poder === "detective") {
            poder = "Pelea con la mente"
        } else {
            pelea = "Poder fisico";
        }
        return pelea;
    }

    obtenerEstaActivo() {
        let heroeActivo = "";
        if (this.estaActivo === true) {
            heroeActivo = "Esta en actividad"
        } else {
            heroeActivo = " El heroe esta retirado"
        }
        return heroeActivo;
    }
}