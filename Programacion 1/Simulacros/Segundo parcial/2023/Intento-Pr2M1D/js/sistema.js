class Sistema {
    constructor(){
        this.opcionesDeMenu = [
            new Menu (1,"Saludable", "bocadillos y parrilla de verduras", 400),
            new Menu (2,"Parrilla", "varias carnes asadas", 500),
            new Menu (3,"Pizzas varias", "degustacion de pizzas con gustos", 350),
        ];
        this.listaDeFiestas = [
        ];
    }

    buscarMenu(unNumero){
        let objetoMenu = null;
        for(const menu of this.opcionesDeMenu){
            if (Number(unNumero) === menu.numero){
                objetoMenu = menu
                break;
            }
        }
        return objetoMenu;
    }
    
    hayFiesta(fecha) {
        let existeFiesta = false;
        for (const fiesta of this.listaDeFiestas){
            if(fecha === fiesta.fecha){
                existeFiesta = true;
                break;
            }
        }
        return existeFiesta;
    }

    agregarFiesta(fiesta){
        this.listaDeFiestas.push(fiesta);
    }

    obtenerCostoTotalMenu(idMenu){
        console.log(idMenu)
        let costo = 0;
        let menu = this.buscarMenu(idMenu);
        console.log(menu);

        for(const fiesta of this.listaDeFiestas){
            console.log(fiesta);
            if(fiesta.tipoMenu === idMenu){
                console.log(fiesta.invitados)
                costo += fiesta.invitados * menu.precioPorPersona;
            }
        }
        return costo;
    }
}

