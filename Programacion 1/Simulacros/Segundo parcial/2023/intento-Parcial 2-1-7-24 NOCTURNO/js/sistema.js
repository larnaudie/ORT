class Sistema {
    constructor() {
        this.variedades = [
            new Variedad(1, "Cabernet Franc", "Pimientos, Frutos"),
            new Variedad(2, "Chardonnay", "Frutos Tropicales"),
            new Variedad(3, "Malbec", "Frutos negros"),
        ];
        this.cosechas = [

        ];

    }
    agregarCosecha(cosecha) {
        this.cosechas.push(cosecha);
    }

    tieneCosechaPrevia(pIdVariedad, pCantidadKg) {
        let existe = false;
        for (const cosecha of this.cosechas) {

            console.log(pIdVariedad)
            console.log(pCantidadKg)
            console.log("------------------")
            console.log(cosecha)
            console.log("------------------")
            console.log(cosecha.id)
            console.log(cosecha.IdVariedad)
            console.log(cosecha.cantidadKg)
            console.log(cosecha.cantidadHs)
            console.log(cosecha.temp)
            console.log("------------------")


            if (cosecha.Id2 === pIdVariedad) {
                
                if (cosecha.cantidadKg === pCantidadKg) {
                    existe = true;
                    break;
                }
            }
        }
        return existe
    }

    //funciona MAL cosecha.idVariedad no lo encuentra_> undefined
    // obtenerCantidadCosechasVariedad(pIdVariedad){
    //     let cantidadCosechas = 0;
    //     for(const cosecha of this.cosechas){
    //         if(cosecha.IdVariedad === pIdVariedad){
    //             if(cosecha.temp === "Baja"){
    //                 cantidadCosechas ++;
    //             }
    //         }
    //     }
    //     return cantidadCosechas;
    // }

    obtenerCantidadCosechasVariedad(pIdVariedad) {
        let cantidadCosechas = 0;
        for (const variedad of this.variedades) {
            if (variedad.id === pIdVariedad) {
                for (const cosecha of this.cosechas) {
                    if (cosecha.temp === "Baja") {
                        cantidadCosechas++;
                    }
                }
            }
            return cantidadCosechas;
        }
    }

    //funciona bien
    obtenerVariedadesNota(pNota) {
        let listaDeVariedades = [];
        for (const variedad of this.variedades) {
            let nota = variedad.notas
            if (nota.indexOf(pNota) !== -1) {
                listaDeVariedades.push(variedad);
            }
        }
        return listaDeVariedades
    }
}

