//Aca van a ir las clases; Objetos que nos permiten crear mas objetos

class Usuario {
    constructor(unId, unNombreUsuario, unaClave, unSaldo, nroTarjeta, nroCVC) {
        this.id = unId;
        this.nombre = unNombreUsuario;
        this.contrasena = unaClave;
        this.saldo = unSaldo;
        this.tarjeta = nroTarjeta;
        this.cvc = nroCVC;
    }
}

class Admin {
    constructor(unId, unNombreUsuarioAdmin, unaClave) {
        this.id = unId;
        this.nombre = unNombreUsuarioAdmin;
        this.contrasena = unaClave;
    }
}

class Producto {
    constructor(unId, unNombreProducto ,unaFoto,unaDescripcion, unPrecio, unaCondicion, unStock, unEstado) {
        this.id = unId;
        this.nombre = unNombreProducto;
        this.imagen = unaFoto;
        this.descripcion = unaDescripcion;
        this.precio = unPrecio;
        this.condicion = unaCondicion;
        this.stock = unStock;
        this.estado = unEstado;

    }
}

//REVISAR -> CAMBIÓ LAS PROPIEDADES 
// class ListadoCompras {
//     constructor(unId, unNombre, unaImagen ,cantidades, montoTotal, estadoCompra) {
//         this.id = unId;
//         this.nombre = unNombre;
//         this.img = unaImagen;
//         this.cantidad = cantidades;
//         this.monto = montoTotal;
//         this.estadoCompra = estadoCompra;
//     }
// }

class ListadoCompras {
    constructor(unId, unIdProducto, unIdCliente ,cantidades, montoTotal, estadoCompra) {
        this.id = unId;
        this.idProductoCompra = unIdProducto;
        this.idCliente = unIdCliente;
        this.cantidad = cantidades;
        this.monto = montoTotal;
        this.estadoCompra = estadoCompra;
    }
}