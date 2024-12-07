class Agua {
    constructor(id, nombre, tipo, tope, ingredientes) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.tope = tope
        this.ingredientes = ingredientes;
    }
}

class Venta {
    constructor(idVenta, nroCliente, idAgua, cantidad) {
        this.id = idVenta;
        this.nroCliente = nroCliente;
        this.idAgua = idAgua;
        this.cantidad = cantidad;
    }
}