
let idCamion = 1;
class Camion {
    constructor(marca, modelo, km, anio) {
        this.id = idCamion++;
        this.marca = marca;
        this.modelo = modelo;
        this.km = km;
        this.anio = anio;
    }
}

class Compra {
    constructor(idCompra, nombre, cedula, cantidad, fecha, costo, camion, tipoCompra) {
        this.id = idCompra;
        this.nombre = nombre;
        this.ci = cedula;
        this.cantidad = cantidad;
        this.fecha = fecha;
        this.costo = costo;
        this.camion = camion;
        this.tipo = tipoCompra;
    }
}