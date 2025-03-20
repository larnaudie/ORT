class Medicamento {
    constructor(id, nombre, laboratiorio, tope, principiosActivos) {
        this.id = id;
        this.nombre = nombre;
        this.laboratiorio = laboratiorio;
        this.tope = tope;
        this.principios = principiosActivos;
    }
}

class Venta {
    constructor(idVenta, nroSocio, idMedicamento, cantidad) {
        this.id = idVenta;
        this.socio = nroSocio;
        this.idMedicamento = idMedicamento;
        this.cantidad = cantidad;
    }
}