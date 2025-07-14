class Sistema {
    constructor() {
        this.usuarios = [
            new Usuario(1, "Pablo", "123456aS", 3000, "1111-1111-1111-1111", 123),
            new Usuario(2, "Natalia", "123456As", 3000, "1111-1111-1111-1111", 123),
            new Usuario(3, "Mauro", "222222Fd", 3000, "1111-1111-1111-1111", 123),
            new Usuario(4, "Santiago", "111111Gg", 3000, "1111-1111-1111-1111", 123),
            new Usuario(5, "Shirley", "333333sH", 3000, "1111-1111-1111-1111", 123)
        ];
        this.usuariosAdmin = [
            new Admin(1, "admin", "admin"),
            new Admin(2, "a", "a"),
            new Admin(3, "admin1", "admin1"),
            new Admin(4, "admin2", "admin2"),
            new Admin(5, "admin3", "admin3")

        ]
        this.productos = [
            new Producto("PROD_ID_1", "Botella", "botella.jpg", "Botella de plastico duro", 100, "Precio Regular", 30, "Activo"),
            new Producto("PROD_ID_2", "Inflador", "inflador.jpg", "Un inflador de petola con múltiples punteros", 450, "Oferta", 35, "Activo"),
            new Producto("PROD_ID_3", "Mesa de Juego", "mesa_juego.jpg", "Mesa de Tejo para tu diversion", 200, "Precio Regular", 25, "Inactivo"),
            new Producto("PROD_ID_4", "Bolsa Grande", "bolso.jpeg", "Bolso de tela impermeable", 100, "Precio Regular", 30, "Activo"),
            new Producto("PROD_ID_5", "Kit de Entrenamiento", "kit_de_entrenamiento.jpg", "Todo lo necesario para tu entrenamiento", 300, "Oferta", 35, "Activo"),
            new Producto("PROD_ID_6", "Pack de Ciclismo", "Kit_deportivo.jpg", "Articulos para ciclismo", 250, "Precio Regular", 25, "Inactivo"),
            new Producto("PROD_ID_7", "Mesa de Juego Simple", "mesa_juego_2.jpg", "Mesa de juego portatil de tejo", 234, "Precio Regular", 30, "Activo"),
            new Producto("PROD_ID_8", "Kit de Pelotas", "pelotas.jpg", "Pelotas para practicar distintos deportes", 368, "Oferta", 35, "Activo"),
            new Producto("PROD_ID_9", "Pelota de Ruggby", "pelota_ruggbie.jpg", "Pelota de material liviano", 500, "Precio Regular", 25, "Inactivo"),
            new Producto("PROD_ID_10", "Pelota de Ruggby chica", "pelota_ruggbie_2.jpg", "Pelota de Ruggby para los chicos", 400, "Precio Regular", 25, "Inactivo")
        ]

        this.misCompras = [
            //| posicion del obj |id |  idProductoCompra  | idCliente    | cantidad | monto            | estadoCompra |
            new ListadoCompras(1, this.productos[0].id, this.usuarios[0].id, 2, this.productos[0].precio, "Aprobado"),
            new ListadoCompras(2, this.productos[1].id, this.usuarios[1].id, 2, this.productos[1].precio, "Aprobado"),
            new ListadoCompras(3, this.productos[2].id, this.usuarios[2].id, 2, this.productos[2].precio, "Aprobado"),
            new ListadoCompras(4, this.productos[2].id, this.usuarios[2].id, 2, this.productos[2].precio, "Aprobado"),
            new ListadoCompras(5, this.productos[1].id, this.usuarios[1].id, 2, this.productos[1].precio, "Aprobado"),
            new ListadoCompras(6, this.productos[3].id, this.usuarios[4].id, 2, this.productos[3].precio, "Pendiente"),
            new ListadoCompras(7, this.productos[4].id, this.usuarios[3].id, 2, this.productos[4].precio, "Cancelada")
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

        for (let i = 0; i < arrElementos.length; i++) {
            const unElemento = arrElementos[i];
            if (unElemento[propiedad] === busqueda) {//peliculas[i].nombre === peliculas[i]["nombre"] => unaPelicula.nombre === unaPelicula["nombre"] === "spiderman"
                objeto.push(unElemento);
            } else {
                //  (`no se encontro nada ${[i]}`)
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
                    acumulador += (duplicado - 9);
                } else {
                    acumulador += duplicado;
                }
            } else {
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

    agregarCompra(compra) {
        this.misCompras.push(compra)
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

    obtenerCantidadProductos(idProducto) {
        let cantidad = 0;
        for (const compra of this.misCompras) {
            if(compra.idProductoCompra === idProducto && compra.estadoCompra === "Aprobado"){
                cantidad += compra.cantidad;
            }
        }
        return cantidad
    }
    
    obtenerGananciasTotales(){
        let total = 0;
        for (const compra of this.misCompras) {
            let producto = this.obtenerObjeto(this.productos, "id", compra.idProductoCompra);
            if(compra.estadoCompra === "Aprobado"){
                total += producto.precio * compra.cantidad;
            }
        }
        return `$` + total
    }
}

