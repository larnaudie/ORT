class Cliente {
    constructor(pNumeroCliente, pNombre, pApellido) {
        this.numeroCliente = pNumeroCliente++;
        this.nombre = pNombre;
        this.apellido = pApellido;
    }
}

class Dron {
    constructor(idDron, pTipoDron, pPrecioUnidad) {
        this.id = idDron++;
        this.tipoDron = pTipoDron;
        this.precioUnidad = pPrecioUnidad;
    }
}
//puede dar un error debe de ser idDrone = 3 ya que existen 2.
let idDron = 3;
class Venta{
    constructor(idVenta, idCliente, idDron, cantidad){
        this.id = idVenta;
        this.idCliente = idCliente;
        this.idDron = idDron;
        this.cantidad = cantidad;
    }
}
