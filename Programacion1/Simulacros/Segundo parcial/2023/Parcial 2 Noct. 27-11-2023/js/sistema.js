class Sistema {
    constructor() {
        this.clientes = [
            new Cliente(1, "10058", "Martin", "Sorriba"),
            new Cliente(2, "189929", "Fabrizio", "Onetto"),
        ];
        this.drones = [
            //Si la letra no te muestra el id aca pero en la clase lo tiene, entonces aca no lo agregues
            new Dron(1, "Tricoptero", 860),
            new Dron(2, "Hexacoptero", 1050),
        ];
        this.ventas = [];
    }

    agregarVenta(venta) {
        this.ventas.push(venta);
    }
    obtenerTotalCompra(pNumeroCliente, pIdDron) {
        let cantidadTotal = 0;
        for (const venta of this.ventas) {
            if (venta.idCliente === pNumeroCliente) {
                if (venta.idDron === pIdDron) {
                    cantidadTotal += venta.cantidad
                }
            }
        }
        //me olvide del Return
        return cantidadTotal;
    }

    obtenerMayorFan(pIdDron) {
        let cantidad = 0;
        let clienteFanId = 0;


        for (const dron of this.drones) {
            console.log(dron.id)
            console.log(pIdDron)
            if (dron.id === pIdDron) {
                let precioUnidad = dron.precioUnidad;
                for (const venta of this.ventas) {
                    console.log(venta.idDron)
                    console.log(pIdDron)
                    if (venta.idDron === pIdDron) {
                        //puse precioUnitario y era precioUnidad.
                        let nuevaCantidad = venta.cantidad * precioUnidad;
                        console.log(venta.idCliente)
                        if (nuevaCantidad > cantidad) {
                            cantidad = nuevaCantidad;
                            clienteFanId = venta.idCliente;
                        }
                    }
                }
            }
        }
        return clienteFanId;
    }

    obtenerTotalGanado(pIdDron) {
        let totalGanado = 0;
        for (const dron of this.drones) {
            if (dron.id === pIdDron) {
                let precioUnidad = dron.precioUnidad;
                for (const venta of this.ventas) {
                    if (venta.idDron === pIdDron) {
                        totalGanado = precioUnidad * venta.cantidad;
                    }
                }
            }
        }
        return totalGanado;
    }
}

