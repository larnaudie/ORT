class Sistema {
    constructor() {
        this.camiones = [
            new Camion("Scania", "Serie R", 14000,2022),
            new Camion("Mercedes Benz", "Actros", 0, 2023),
        ];
        this.tiposCompra = ["Efectivo", "Credito", "Canje", "Diferenciado"];

        this.compras = [];
    }

    agregarCompra(compra) {
        this.compras.push(compra);
    }

    obtenerCamionPorId(idCamion) {
        let objeto = null;
        for (const camion of this.camiones) {
            if (camion.id === idCamion) {
                objeto = camion;
                break;
            }
        }
        return objeto;
    }

    existeCompra(ci, idCamion, fecha) {
        let existe = false;
        for (const compra of this.compras) {
            if (compra.camion.id === idCamion) {
                if(compra.ci === ci){
                    if(compra.fecha === fecha){
                        existe = true;
                        break;
                    }else{document.querySelector("#errores").innerHTML = 'Existe una compra en fecha'};
                }//else{document.querySelector("#errores").innerHTML = 'No se encontro CI'};
            }//else{document.querySelector("#errores").innerHTML = 'No se encontro camion'};
        }
        console.log(existe);
        return existe;
    }

    obtenerCantidadDeCompra(tipoCompra) {
        let cantidad = 0;
        for (const compra of this.compras) {
            if (compra.tipo === tipoCompra) {
                cantidad += compra.cantidad;
            }
        }
        return cantidad;
    }

    obtenerCostoPromedio(tipoCompra) {
        let promedio = 0;
        let cantidad = this.obtenerCantidadDeCompra(tipoCompra);
        let costos = 0;
        for (const compra of this.compras) {
            if (compra.tipo === tipoCompra) {
                costos += compra.costo;
            }
        }
        promedio = costos / cantidad
        return promedio;
    }
}

