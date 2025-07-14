class Sistema {
    constructor() {
        this.listaDeAguas = [
            new Agua(1, "Sirte", "Con Gas", 30, "calcio, magnesio, hierro, cloruro, floruro, potasio, sodio, sulfatos"),
            new Agua(2, "Salus", "Sin Gas", 100, "calcio, magnesio, cloruro, floruro, potasio, sodio, sulfatos"),
        ];
        this.listaDeVentas = [];
    }

    agregarVenta(venta) {
        this.listaDeVentas.push(venta);
    }

    existeVenta(nroCliente, idAgua) {
        let existe = false;
        for(const venta of this.listaDeVentas){
            console.log(venta.nroCliente)
            console.log(nroCliente)
            if(venta.nroCliente === nroCliente && venta.idAgua === idAgua){
                existe = true;
                break;
            }
        }
        return existe;
    }

    obtenerCantidadAguasClientes(idAgua) {
        console.log(idAgua)
        let cantidad = 0;
        for(const venta of this.listaDeVentas){
        console.log(venta.idAgua)
        console.log(idAgua)
            if(venta.idAgua === idAgua){
                console.log(cantidad)
                console.log(venta.cantidad)
                cantidad += venta.cantidad;
                console.log(cantidad)
            }
        }
        return cantidad
    }


    obtenerSimilares(string) {
        let similares = [];
        for (const agua of this.listaDeAguas){
            const ingredientes = agua.ingredientesM
            let contiene = ingredientes.indexOf(string);
            if(contiene!== -1){
                similares.push(agua)
            }
        }
    }
}

