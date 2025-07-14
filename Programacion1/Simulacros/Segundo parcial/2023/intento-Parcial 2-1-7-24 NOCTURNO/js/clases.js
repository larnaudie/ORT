
class Variedad {
    constructor(id, nombre, notas) {
        this.id = id;
        this.nombre = nombre;
        this.notas = notas;
    }
}

class Cosecha {
    constructor(idCosecha, pIdVariedad, cantidadKg, cantidadHs, temp) {
        this.id = idCosecha;
        this.IdVariedad = pIdVariedad;
        this.cantidadKg = cantidadKg;
        this.cantidadHs = cantidadHs;
        this.temp = temp
    }
}
