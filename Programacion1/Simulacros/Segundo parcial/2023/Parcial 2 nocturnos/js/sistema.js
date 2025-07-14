class Sistema {
    constructor() {
        this.medicamentos = [
            new Medicamento(1, "Pristidina", "Haller", 3, "Dexametasona, Ketofen"),
            new Medicamento(2, "Allerfin", "NoeLab", 1, "Prednisona, Amoxcilina"),
        ];
        this.ventas = []

        this.similares = [];
    }

    agregarVenta(venta) {
        this.ventas.push(venta);
    }

    ventaRepetida(nroSocio, idMedicamento) {
        let existe = false;
        for (const venta of this.ventas) {
            if (venta.socio === nroSocio) {
                if (venta.idMedicamento === idMedicamento) {
                    existe = true;
                    break;
                } else { alert("No se encontró medicamento") };
            } else { alert("No se encontró Socio") };
        }
        return existe;
    }

    obtenerCantidadMedicamentosSocio(idMedicamento) {
        let cantidad = 0;
        for (const venta of this.ventas) {
            if (venta.idMedicamento === idMedicamento) {
                cantidad += venta.cantidad;
            }
        }
        return cantidad;
    }

    obtenerSimilar(string) {
        for (const medicamento of this.medicamentos) {
            let propiedad = medicamento.principios
            if (propiedad.indexOf(string) !== -1) {
                this.similares.push(medicamento);
            }
        }
        return this.similares;
    }
}

