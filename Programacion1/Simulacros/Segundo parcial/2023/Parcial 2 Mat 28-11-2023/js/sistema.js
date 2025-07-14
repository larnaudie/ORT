class Sistema {
    constructor() {
        this.personas = [
            new Persona("3851247", "Juan", "Perez"),
            new Persona("52345127", "Ana", "Silva"),
        ];
        this.pensiones = [
            new Pension(1, "Vejez", 12000),
            new Pension(2, "Invalidez", 10000)
        ];

        this.pagos = [];
    }

    agregarPago(pago) {
        this.pagos.push(pago);
    }

    //cree un metodo pero no era necesario
    // obtenerObjeto(idPension){
    //     let objeto = null;
    //     for(const pension of this.pensiones){
    //         if(pension.id === idPension){
    //             objeto = pension;
    //         }
    //     }
    //     return objeto;
    // }

    obtenerCantidadPagosDeUnaPension(pCI, pTipoPension) {
        let cantidadPagos = 0;
        for (const pago of this.pagos) {
            if (pago.ci === pCI) {
                for(const pension of this.pensiones){
                    if(pension.tipo === pTipoPension){
                        cantidadPagos += pension.monto
                    }
                }
                /**
                 * cantidadPagos += pago.pension.monto
                 */
            }
        }
        return cantidadPagos;
    }

    obtenerCantidadPensionesPagosEnMesAnio(pMes, pAnio) {
        let totalPensiones = 0;
        for (const pago of this.pagos) {
            if(pago.mes === pMes){
                if(pago.anio === pAnio){
                    for(const pension of this.pensiones){
                        totalPensiones += pension.monto;
                    }
                }
            }
        }
        return totalPensiones;
    }

    obtenerTotalPagoPension(pTipoPension) {
        let totalPago = 0;
        for (const pago of this.pagos) {
            if (pago.idPension === pTipoPension) {
                for(const pension of this.pensiones){
                    if(pension.id === pTipoPension){
                        totalPago += pension.monto;
                    }
                }
            }
        }
        return totalPago;
    }
}

