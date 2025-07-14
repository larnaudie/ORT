class Sistema {
    constructor() {
        this.usuarios = [
            new Usuario(1, "P", "1", 2025, "1111-1111-1111-1111", 123),
            new Usuario(2, "N", "1", 3210012, "1111-1111-1111-1111", 123),
            new Usuario(3, "usu3", "222", 3000, "1111-1111-1111-1111", 123),
            new Usuario(4, "usu4", "111", 3000, "1111-1111-1111-1111", 123),
        ];
        this.usuariosAdmin = [
            new Admin(0, "a", "a")
        ]
        this.productos = [
            // new Producto(1, "Botella","botella.jpg" ,"Botella de plastico duro", 600, "Precio Regular", 30, "Activo"),
            // new Producto(2, "Inflador","inflador.jpg", "Un inflador de petola con múltiples punteros", 450, "Oferta", 35, "Activo"),
            // new Producto(3, "Mesa de Juego","mesa_juego.jpg", "Esa de Tejo para tu diversion", 3500, "Precio Regular", 25, "Inactivo")

            new Producto("PROD_ID_1", "Botella", "botella.jpg", "Botella de plastico duro", 600, "Precio Regular", 30, "Activo"),
            new Producto("PROD_ID_2", "Inflador", "inflador.jpg", "Un inflador de petola con múltiples punteros", 450, "Oferta", 35, "Activo"),
            new Producto("PROD_ID_3", "Mesa de Juego", "mesa_juego.jpg", "Esa de Tejo para tu diversion", 3500, "Precio Regular", 25, "Inactivo")
        ]

        //REVISAR -> Cambiaron propiedades del elemento misCompras
        this.misCompras = [
         //posicion del ob  | id |  idProductoCompra  | idCliente       | cantidad | monto                 |   estado |
            new ListadoCompras(1, this.productos[0].id, this.usuarios[0].id, 2, this.productos[0].precio, "Pendiente"),
            new ListadoCompras(2, this.productos[1].id, this.usuarios[1].id, 2, this.productos[1].precio, "Aprobado"),
            new ListadoCompras(3, this.productos[2].id, this.usuarios[2].id, 2, this.productos[2].precio, "Aprobado"),
            new ListadoCompras(4, this.productos[1].id, this.usuarios[1].id, 2, this.productos[1].precio, "Cancelada")
        ]
    }

    buscarNombre(arrElementos, propiedad, busqueda) {// usuarios, "nombre", "Pablo"
        let existe = false;

        for (let i = 0; i < arrElementos.length; i++) {
            const unElemento = arrElementos[i];
            const valorPropiedad = unElemento[propiedad]
            if (valorPropiedad.toLowerCase() === busqueda.toLowerCase()) {//usuarios[i].nombre === usuarios[i]["nombre"] => unaPelicula.nombre === unaPelicula["nombre"] === "spiderman"
                existe = true;
                break;
            }
        }
        return existe;
    }

    buscarElemento(arrElementos, propiedad, busqueda) {// productos, "condicion", "Oferta"
        let existe = false;

        for (let i = 0; i < arrElementos.length; i++) {
            const unElemento = arrElementos[i];
            if (unElemento[propiedad] === busqueda) {//usuarios[i].nombre === usuarios[i]["nombre"] => unaPelicula.nombre === unaPelicula["nombre"] === "spiderman"
                existe = true;
                break;
            }
        }
        return existe;
    }

    // sumarObjetos(arrElementos, propiedad, busqueda) { //array[], idProductoCompra, "PROD_1"
    //     let objeto = null;
    //     let precioNuevo = 0;
    //     let cantidadNueva = 0;
    //     console.log(arrElementos, arrElementos.length)

    //     //falta chequear si esta duplicado el objeto, solo ahi ejecuta el for.

    //     for (let i = 0; i < arrElementos.length; i++) {
    //         const unElemento = arrElementos[i];             //array1
    //         if (unElemento[propiedad] === busqueda) {       //array1.idProductoCompra === PROD_1 ?
    //             precioNuevo += arrElementos[i].monto;          //precioNuevo = precioNuevo + array1.monto 
    //             cantidadNueva += arrElementos[i].cantidad;          // cantidadNueva = cantidadNueva + array1.cantidad
    //         } else {
    //             console.log(`no se encontro nada ${[i]}`)
    //         }
    //         arrElementos[i].monto = precioNuevo;
    //         arrElementos[i].cantidad = cantidadNueva;
    //         objeto = unElemento;
    //     }

    //     console.log(objeto)
    //     return objeto;
    // }

    obtenerObjeto(arrElementos, propiedad, busqueda) {
        let objeto = null;

        for (let i = 0; i < arrElementos.length; i++) {
            const unElemento = arrElementos[i];
            if (unElemento[propiedad] === busqueda) {//peliculas[i].nombre === peliculas[i]["nombre"] => unaPelicula.nombre === unaPelicula["nombre"] === "spiderman"
                objeto = unElemento;
                break;
            }
        }
        return objeto;
    }

    obtenerObjetoEnArray(arrElementos, propiedad, busqueda) {
        let objeto = [];
        console.log(arrElementos, arrElementos.length)
        for (let i = 0; i < arrElementos.length; i++) {
            const unElemento = arrElementos[i];
            if (unElemento[propiedad] === busqueda) {//peliculas[i].nombre === peliculas[i]["nombre"] => unaPelicula.nombre === unaPelicula["nombre"] === "spiderman"
                objeto.push(unElemento);
            } else {
                // console.log(`no se encontro nada ${[i]}`)
            }
        }
        return objeto;
    }


    //METODO VINCULADO AL REGISTRO
    validarCamposVaciosRegistro(nombre, clave) {
        let camposValidos = false;
        if (nombre !== "" && clave !== "") {
            camposValidos = true;
        }
        return camposValidos;
    }

    //METODO VINCULADO AL REGISTRO
    verificarFormatoContrasena(clave) {
        let valido = false;
        let contMayusculas = 0;
        let contMinusculas = 0;
        let contNumeros = 0;

        for (let i = 0; i < clave.length; i++) {

            if (clave.charAt(i) === clave.charAt(i).toUpperCase() && clave.charAt(1) !== " " && isNaN(clave.charAt(i))) {
                contMayusculas++;
            }

            if (clave.charAt(i) === clave.charAt(i).toLowerCase() && clave.charAt(1) !== " " && isNaN(clave.charAt(i))) {
                contMinusculas++;
            }

            if (!isNaN(clave.charAt(i))) {
                contNumeros++;
            }
        }

        if (clave.length > 5 && contMayusculas >= 1 && contMinusculas >= 1 && contNumeros >= 1) {
            valido = true;
        }

        return valido;
    }

    verificarCVC(numero) {
        let validar = false
        let contNumeros = 0;
        let contCaracterInvalido = 0;

        if (numero.length === 3) {
            for (let i = 0; i < numero.length; i++) {

                if (!isNaN(numero.charAt(i))) {
                    contNumeros++;
                } else {
                    contCaracterInvalido++;
                }
            }

            if (contNumeros === 3 && contCaracterInvalido === 0) {
                validar = true;
            }
        }
        return validar
    }

    verificarTarjetaCredito(numero) {
        let validar = false;
        let contNumerico = 0;
        let contGuiones = 0;
        let contCaracterInvalido = 0;
        if (numero.length < 19) {
            validar = false
        } else {
            for (let i = 0; i < numero.length; i++) {
                if (!isNaN(numero.charAt(i))) {
                    contNumerico++;
                } else if (numero.charAt(i) === "-") {
                    contGuiones++;
                } else {
                    contCaracterInvalido++;
                }
            }
            if (contNumerico === 16 && contCaracterInvalido === 0 && contGuiones === 3) {
                validar = true;
            }
        }
        return validar;
    }

    verificarTarjetaCreditoLuhn(numeroTarjeta) {
        let nroTarjeta = "";
        for (let i = 0; i < numeroTarjeta.length; i++) {
            if (numeroTarjeta.charAt(i) !== "-") {
                nroTarjeta += numeroTarjeta.charAt(i);
            }
        }

        let dev = false;
        let digitoVerificar = nroTarjeta.charAt(nroTarjeta.length - 1);
        let acumulador = 0;
        let cont = 0;
        for (let i = nroTarjeta.length - 2; i >= 0; i--) {
            let num = Number(nroTarjeta.charAt(i));
            if (cont % 2 === 0) {
                //se duplica
                let duplicado = num * 2;
                if (duplicado >= 10) {
                    // let duplicadoStr = String(duplicado);
                    // let resultado = Number(duplicadoStr.charAt(0)) + Number(duplicadoStr.charAt(1));
                    // acumulador += resultado;
                    acumulador += (duplicado - 9);
                } else {
                    acumulador += duplicado;
                }
            } else {
                //no se duplica
                acumulador += num;
            }
            cont++;
        }

        let multiplicado = acumulador * 9;
        let multiplicadoStr = String(multiplicado);
        let digitoVerificador = multiplicadoStr.charAt(multiplicadoStr.length - 1);

        if (digitoVerificar === digitoVerificador) {
            dev = true;
        }
        return dev;
    }

    //METODO VINCULADO AL REGISTRO
    agregarUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    agregarProducto(producto) {
        this.productos.push(producto)
    }

    //METODO VINCULADO AL LOGIN
    /**Verificar Login, inicia el resultado en false, luego crea variable unUsuario el cual Accede al metodo obtenerObjeto
     * allí le pasa 3 parametros, 1) la lista de usuarios 2) el nombre de propiedad 3) el valor del nombre.
     */
    verificarLogin(nombre, clave, tipoUsuario) {
        let resultado = false;
        let unUsuario = this.obtenerObjeto(this.usuarios, "nombre", nombre);
        let unUsuarioAdmin = this.obtenerObjeto(this.usuariosAdmin, "nombre", nombre);

        if (tipoUsuario === "admin") {
            if (unUsuarioAdmin !== null) {
                if (clave === unUsuarioAdmin.contrasena) {
                    return resultado = true;
                }
            }

        } else {
            if (tipoUsuario === "user")
                if (unUsuario !== null) {
                    if (clave === unUsuario.contrasena) {
                        resultado = true;
                    }
                }
            return resultado;
        }
    }
}

function aprobarCompra() {

    let aprobacionIdentificada = [];
    let idCompra = this.getAttribute("data-id");

    let compra = sistema.obtenerObjetoEnArray(sistema.misCompras, "id", idCompra);
    aprobacionIdentificada.push(compra);
}