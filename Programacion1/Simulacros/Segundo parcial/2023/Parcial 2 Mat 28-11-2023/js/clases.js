
class Persona {
    constructor(pCI, pNombre, pApellido) {
        this.ci = pCI;
        this.nombre = pNombre;
        this.apellido = pApellido;
    }
}

class Pension {
    constructor(idPension, pTipo, pMonto) {
        this.id = idPension; //se agrega como correccion.
        this.tipo = pTipo;
        this.monto = pMonto;
    }
}

class Pago {
    constructor(idPago, ci, pension, mes, anio) {
        this.id = idPago;
        this.ci = ci;
        this.idPension = pension;
        this.mes = mes;
        this.anio = anio;
    }
}