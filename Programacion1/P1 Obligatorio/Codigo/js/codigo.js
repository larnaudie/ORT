window.addEventListener("load", inicio);

function inicio() {
    /**Cargamos todos los escuchadores de eventos */

    document.querySelector("#btnRegistrar").addEventListener("click", registrarUsuario);
    document.querySelector("#btnLogin").addEventListener("click", hacerLogin);
    document.querySelector("#btnLogin").addEventListener("click", mostrarTabla);
    document.querySelector("#menuSalir").addEventListener("click", salir);

    document.querySelector("#btnSeccionCompras").addEventListener("click", mostrarCompras);

    document.querySelector("#btnSeccionOfertas").addEventListener("click", mostrarOfertas);

    document.querySelector("#btnSeccionAdministrarProductos").addEventListener("click", mostrarAdminstracion);

    document.querySelector("#btnSeccionListadoAprobacion").addEventListener("click", mostrarListado);

    document.querySelector("#btnSeccionCreacionProductoss").addEventListener("click", creacionProductos);

    document.querySelector("#btnSeccionInformesGanancia").addEventListener("click", generarInformeGanancias);

    document.querySelector("#btnLogin").addEventListener("click", mostrarSaldo);

    /*Por defecto el programa arranca ocultando todas las secciones primero. */
    ocultarSecciones();

    /*Toma las clases de la tabla del NAV y al escuchar que se hace click en una de ellas muestra esa seccion. */
    let botones = document.querySelectorAll(".btnSeccion");
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", mostrarSeccion);
    }

    /*Mostramos la seccion del login con id seccionLogin y ocultamos la barra de navegacion para impedir que vayan directo al carrito u otros menus*/
    document.querySelector("#seccionLogin").style.display = "block";
    document.querySelector("#navPrincipal").style.display = "none";

    /*Si se hace click en Registrarse, se muestra la seccion Registro. */
    document.querySelector("#btnMostrarRegistro").addEventListener("click", mostrarSeccionRegistro);
    /*Si se hace click en Vovler al Login, se oculta la seccion Registro. */
    document.querySelector("#btnOcultarRegistrar").addEventListener("click", ocultarSeccionRegistro);

}
let sistema = new Sistema();
//-----------------------------FUNCIONES DE NAVEGACION-------------------------------------------------------


/*Muestra la seccion de la tabla*/
function mostrarSeccion() {
    //primero oculta todo.
    ocultarSecciones();

    let idBtn = this.getAttribute("id");//"btnSeccionAgregar"
    let idSeccion = idBtn.charAt(3).toLowerCase() + idBtn.substring(4);//seccionAgregar
    console.log(idBtn, idSeccion);
    document.querySelector("#" + idSeccion).style.display = "block"
}

function mostrarSeccionRegistro() {
    document.querySelector("#seccionRegistro").style.display = "block"
    document.querySelector("#seccionLogin").style.display = "none";
}

function ocultarSeccionRegistro() {
    document.querySelector("#seccionRegistro").style.display = "none"
    document.querySelector("#seccionLogin").style.display = "block";
}


function ocultarSecciones() {
    let secciones = document.querySelectorAll(".seccion");
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none"
    }
}

function mostrarBotones(tipo) {
    ocultarBotones();

    let botonesMostrar = document.querySelectorAll("." + tipo);
    for (let i = 0; i < botonesMostrar.length; i++) {
        botonesMostrar[i].style.display = "block";
    }
}

function ocultarBotones() {
    let botonesOcultar = document.querySelectorAll(".btnSeccion");
    for (let i = 0; i < botonesOcultar.length; i++) {
        botonesOcultar[i].style.display = "none";
    }
}


//-------------------------------- FUNCIONES DE ACCESO Y REGISTRO --------------------------------------------------

/*REGISTRAR USUARIO*/

let idUsuario = 5;
// let idUsuario = sistema.usuarios.length + 1;
function registrarUsuario() {
    let nombre = document.querySelector("#txtUsuarioRegistro").value;
    let clave = document.querySelector("#txtContraseña").value;
    let numeroTarjeta = document.querySelector("#txtTarjetaCredito").value;
    let numeroCVC = document.querySelector("#txtCVC").value;

    let camposCompletos = sistema.validarCamposVaciosRegistro(nombre, clave);
    let formatoContrasenaValido = sistema.verificarFormatoContrasena(clave);
    let formatoTarjetaValido = sistema.verificarTarjetaCredito(numeroTarjeta);
    let formatoCVCValido = sistema.verificarCVC(numeroCVC);
    let existeUsuario = sistema.buscarNombre(sistema.usuarios, "nombre", nombre);
    let verificarTajeta = sistema.verificarTarjetaCreditoLuhn(numeroTarjeta);

    if (camposCompletos === true && formatoContrasenaValido === true && existeUsuario === false && formatoTarjetaValido === true && formatoCVCValido === true && verificarTajeta === true) {
        let usuario = new Usuario(idUsuario, nombre, clave, 3000, numeroTarjeta, numeroCVC);
        idUsuario++;
        sistema.agregarUsuario(usuario);
        alert("Registro exitoso!")
    } else {
        alert("Error en Registro: Los campos son todos obligatorios, la pass es minimo de 5 caracteres o ya existe un usuario con ese nombre");
    }
    document.querySelector("#txtUsuarioRegistro").value = "";
    document.querySelector("#txtContraseña").value = "";
}

let usuarioLogeado = null;
let usuarioLogeadoAdmin = null;
let tipoUsuario = "";

function hacerLogin() {
    let nombre = document.querySelector("#txtUsuario").value;
    let clave = document.querySelector("#txtClave").value;
    tipoUsuario = document.querySelector("#slcTipoUsuario").value;

    let login = sistema.verificarLogin(nombre, clave, tipoUsuario);

    if (login) {
        usuarioLogeado = sistema.obtenerObjeto(sistema.usuarios, "nombre", nombre);
        usuarioLogeadoAdmin = sistema.obtenerObjeto(sistema.usuariosAdmin, "nombre", nombre);
        mostrarMenuOcultandoLoginYRegistro();

        if (tipoUsuario === "admin") {
            document.querySelector("#btnSeccionProductos").style.display = "none";
            document.querySelector("#btnSeccionOfertas").style.display = "none";
            document.querySelector("#btnSeccionSaldo").style.display = "none";
            document.querySelector("#btnSeccionCompras").style.display = "none";
        }

    } else {
        alert("Usuario y/o contraseña incorrectos");
    }

    /**Una vez logeado, restaura los datos a vacios*/
    document.querySelector("#txtUsuario").value = "";
    document.querySelector("#txtClave").value = "";
}

function mostrarMenuOcultandoLoginYRegistro() {
    mostrarBotones(tipoUsuario);
    document.querySelector("#seccionLogin").style.display = "none";
    document.querySelector("#seccionRegistro").style.display = "none";
    document.querySelector("#navPrincipal").style.display = "block";
    /*Vuelve a mostrar el texto, sino al apretar salir, queda oculto cuando se reingresa */
    document.querySelector("#aux").style.display = "block";

    if (tipoUsuario === "user") {
        document.querySelector("#nombreUsuarioLogeado").innerHTML = `Bienvenido/a: ${usuarioLogeado.nombre}`
    }
    if (tipoUsuario === "admin") {
        document.querySelector("#nombreUsuarioLogeado").innerHTML = `Bienvenido/a: ${usuarioLogeadoAdmin.nombre}`
    }
}

function mostrarSaldo() {
    if (tipoUsuario === "user") {

        document.querySelector("#pvalorSaldo").innerHTML = usuarioLogeado.saldo;
    }
}
//------------------------------FUNCIONALIDADES ADMINISTRADOR -------------------

function mostrarAdminstracion() {
    let tipoUsuario = document.querySelector("#slcTipoUsuario").value
    if (tipoUsuario === "admin") {
        document.querySelector("#tblAdministrarProductos").innerHTML = "";
        for (let i = 0; i < sistema.productos.length; i++) {
            const unProducto = sistema.productos[i];
            document.querySelector("#tblAdministrarProductos").innerHTML += `
            <tr>
                <td>
                ${unProducto.id}
                </td>

                <td>
                <img src="img/${unProducto.imagen}" width="100">
                </td>
                
                <td>
                ${unProducto.nombre}
                </td>

                <td id="stockEditado">
                ${unProducto.stock}
                </td>

                <td>
                <input type="number" id="cantidadUnidades${unProducto.id}" value="1">
                </td>

                <td>
                <label for="slcEstado${unProducto.id}">${unProducto.estado}</label>
                <select id="slcEstado${unProducto.id}">
                <option value="0">...</option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
                </select>
                </td>

                <td>
                <label for="slcCondicion${unProducto.id}">${unProducto.condicion}</label>
                <select id="slcCondicion${unProducto.id}">
                <option value="0">...</option>
                <option value="Oferta">Oferta</option>
                <option value="Precio regular">Regular</option>
                </select>
                </td>

                <td>
                <input type="button" value="Enviar" id="btnEnviar${i}" class="claseBoton" data-id="${unProducto.id}">
                </td>
                </tr>`;
        }

        let botones = document.querySelectorAll(".claseBoton");
        for (let i = 0; i < botones.length; i++) {
            botones[i].addEventListener("click", modificarProducto);
        }
    }
}


function modificarProducto() {
    let idProducto = this.getAttribute("data-id");//"btnSeccionAgregar"
    let objProducto = sistema.obtenerObjeto(sistema.productos, "id", idProducto);
    let estadoEditado = document.querySelector("#slcEstado" + idProducto).value;//Activo
    let cantidadEditada = Number(document.querySelector("#cantidadUnidades" + idProducto).value);//5
    let condicionEditada = document.querySelector("#slcCondicion" + idProducto).value;

    if (condicionEditada === "Oferta") {
        condicionEditada = "Oferta"
    } else if (condicionEditada === "Regular") {
        condicionEditada = "Regular"
    }

    objProducto.estado = estadoEditado;
    objProducto.stock = cantidadEditada;
    objProducto.condicion = condicionEditada;

    //REVISAR
    mostrarAdminstracion()
    //data-partido
}


function mostrarListado() {
    let tipoUsuario = document.querySelector("#slcTipoUsuario").value
    if (tipoUsuario === "admin") {
        document.querySelector("#tblListadoAprobadas").innerHTML = "";
        document.querySelector("#tblListadoPendientes").innerHTML = "";
        document.querySelector("#tblListadoCanceladas").innerHTML = "";

        mostrarAprobadas();
        mostrarPendientes();
        mostrarCanceladas();
    }
}
let objProductoPendiente = [];

function mostrarAprobadas() {

    let objProducto = sistema.obtenerObjetoEnArray(sistema.misCompras, "estadoCompra", "Aprobado");
    document.querySelector("#tblListadoAprobadas").innerHTML = "";
    for (let i = 0; i < objProducto.length; i++) {
        const unProducto = objProducto[i];
        document.querySelector("#tblListadoAprobadas").innerHTML += `

        <tr><td><strong>IDCompra:</strong> <br> ${unProducto.id}<br><br></td>
        <td><strong>IDProducto:</strong> <br>  ${unProducto.idProductoCompra}<br><br></td>
        <td><strong>IDCliente:</strong> <br>  ${unProducto.idCliente}<br><br></td>
        <td><strong>Cantidades:</strong> <br>  ${unProducto.cantidad}<br><br></td>
        <td><strong>Estado:</strong> <br> ${unProducto.estadoCompra}<br><br></td>
        <td><strong>Precio:</strong> <br>  ${unProducto.monto}<br><br></td>  </tr>`
    }
}

function mostrarPendientes() {

    objProductoPendiente = sistema.obtenerObjetoEnArray(sistema.misCompras, "estadoCompra", "Pendiente");
    console.log(objProductoPendiente)
    document.querySelector("#tblListadoPendientes").innerHTML = "";
    for (let i = 0; i < objProductoPendiente.length; i++) {
        // const unProducto = objProducto[i];
        console.log(objProductoPendiente[i])
        document.querySelector("#tblListadoPendientes").innerHTML += `

        <tr><td><strong>IDCompra:</strong> <br> ${objProductoPendiente[i].id}<br><br></td>
        <td><strong>IDProducto:</strong> <br>  ${objProductoPendiente[i].idProductoCompra}<br><br></td>
        <td><strong>IDCliente:</strong> <br>  ${objProductoPendiente[i].idCliente}<br><br></td>
        <td><strong>Cantidades:</strong> <br>  ${objProductoPendiente[i].cantidad}<br><br></td>
        <td><strong>Estado:</strong> <br> ${objProductoPendiente[i].estadoCompra}<br><br></td>
        <td><strong>Precio:</strong> <br>  ${objProductoPendiente[i].monto}<br><br></td>  
        <td>  <input type="button" value="APROBAR" id="btnAprobacion${i}" class="btnAprobarCompras" data-id="${objProductoPendiente[i].id}"> </td></tr>`
    }
    let btnAprobacion = document.querySelectorAll(".btnAprobarCompras");
    console.log(btnAprobacion)

    for (let i = 0; i < btnAprobacion.length; i++) {
        btnAprobacion[i].addEventListener("click", aprobarCompra);
    }
}

function aprobarCompra() {

    let idCompra = Number(this.getAttribute("data-id")); //me devuelve 1
    let compraParaAprobar = sistema.obtenerObjeto(objProductoPendiente, "id", idCompra); //otengo la información de la compra "CLICK"

    let traerIdProducto = compraParaAprobar.idProductoCompra;
    console.log(traerIdProducto)

    let traerIdCliente = compraParaAprobar.idCliente;
    console.log(traerIdCliente);

    let devolverInfoProducto = sistema.obtenerObjeto(sistema.productos, "id", traerIdProducto);

    let traerStockProducto = devolverInfoProducto.stock;
    console.log(traerStockProducto)

    let traerEstadoProducto = devolverInfoProducto.estado;
    console.log(traerEstadoProducto)

    let traerPrecioProducto = devolverInfoProducto.precio;
    console.log(traerPrecioProducto)

    let montoTotal = traerPrecioProducto * compraParaAprobar.cantidad;
    console.log(montoTotal)

    let devolverInfoUsuario = sistema.obtenerObjeto(sistema.usuarios, "id", traerIdCliente);
    console.log(devolverInfoProducto);

    let traerSaldoCliente = devolverInfoUsuario.saldo;
    console.log(traerSaldoCliente);

    if (traerSaldoCliente >= montoTotal && traerStockProducto >= compraParaAprobar.cantidad && traerEstadoProducto === "Activo") {

        sistema.misCompras[idCompra].estadoCompra = "Aprobado";
        console.log(sistema.misCompras[idCompra].estadoCompra)

        let actualizarSaldoCliente = traerSaldoCliente - montoTotal;
        //fatta actualizar datos estado compra, stock producto, saldo cliente, estadoproducto.
        console.log(actualizarSaldoCliente)

        let actualizarStock = traerStockProducto - compraParaAprobar.cantidad;
        console.log(actualizarStock)

        if (actualizarStock === 0) {
            sistema.misCompras[idCompra].estadoCompra = "Pausado";
        }

    } else {
        sistema.misCompras[idCompra].estadoCompra = "Cancelada";
    }
}


function mostrarCanceladas() {

    let objProducto = sistema.obtenerObjetoEnArray(sistema.misCompras, "estadoCompra", "Cancelada");
    document.querySelector("#tblListadoCanceladas").innerHTML = "";
    for (let i = 0; i < objProducto.length; i++) {
        const unProducto = objProducto[i];
        document.querySelector("#tblListadoCanceladas").innerHTML += `

        <tr>
        <td><strong>IDCompra:</strong> <br> ${unProducto.id}<br><br></td>
        <td><strong>IDProducto:</strong> <br>  ${unProducto.idProductoCompra}<br><br></td>
        <td><strong>IDCliente:</strong> <br>  ${unProducto.idCliente}<br><br></td>
        <td><strong>Cantidades:</strong> <br>  ${unProducto.cantidad}<br><br></td>
        <td><strong>Estado:</strong> <br> ${unProducto.estadoCompra}<br><br></td>
        <td><strong>Precio:</strong> <br>  ${unProducto.monto}<br><br></td>
        </tr>`
    }
}

function creacionProductos() {
    let tipoUsuario = document.querySelector("#slcTipoUsuario").value

    if (tipoUsuario === "admin") {
        document.querySelector("#tblCreacionProductos").innerHTML = "";
        document.querySelector("#tblCreacionProductos").innerHTML += `


            <td><input type="text" id="crearNombre" placeholder="Nombre:"><br></td>
            <td><input type="text" id="creaPrecio" placeholder="Precio:"></td>
            <td><input type="text" id="creaDescripcion" placeholder="Descripcion:"></td>
            <td><label for="imgProducto">Foto</label>
            <input type="file" id="imgProducto"></td>
            <td><input type="text" id="crearStock" placeholder="Cantidad de stock: "></td>

            <tr>
            <td><input type="button" id="crearProductoNuevo" value="Crear"></td>
            </tr>`
    }

    document.querySelector("#crearProductoNuevo").addEventListener("click", agregarProducto);
    console.log("Función creacionProductos() ejecutada");
}


/**ULTIMA ACTUALIZACION!!!! ACAAA ME QUEDEEE ME RESPALDÉ CON LINEA 92, VER EJERCICIO 8 DE MARIO PARA LA IMAGEN */
let idProducto = "PROD_ID_3";

function aumentarIdProducto(string) {
    const valorPropiedad = sistema.productos[sistema.productos.length - 1].id;//PROD_ID_3
    let numero = Number(valorPropiedad.substring(valorPropiedad.lastIndexOf("_") + 1))//3
    numero++//4
    let texto = valorPropiedad.substring(0, 8);//PROD_ID_
    return texto + numero//PROD_ID_4
}

//REVISAR
function agregarProducto() {

    let crearNombre = document.querySelector("#crearNombre").value;
    let creaPrecio = Number(document.querySelector("#creaPrecio").value);
    let creaDescripcion = document.querySelector("#creaDescripcion").value;
    let crearImagen = document.querySelector("#imgProducto").value;
    let nombreImagen = crearImagen.substring(crearImagen.lastIndexOf("\\") + 1);
    let crearStock = Number(document.querySelector("#crearStock").value);

    if (crearNombre && creaPrecio && creaDescripcion && nombreImagen && crearStock !== "") {

        if (!isNaN(creaPrecio) && !isNaN(crearStock) && creaPrecio > 0 && crearStock > 0) {

            unaCondicion = "Precio Regular";
            unEstado = "Activo";
            let producto = new Producto(aumentarIdProducto(idProducto), crearNombre, nombreImagen, creaDescripcion, creaPrecio, unaCondicion, crearStock, unEstado);
            sistema.agregarProducto(producto);
            alert("Registro exitoso!")
        } else {
            alert("Error: El precio y el stock deben ser valores numéricos y mayores a 0");
        }
    } else {
        alert("Error: Todos los campos son obligatorio");
    }

    document.querySelector("#crearNombre").value = "";
    document.querySelector("#creaPrecio").value = "";
    document.querySelector("#creaDescripcion").value = "";
    document.querySelector("#imgProducto").value = "";
    document.querySelector("#crearStock").value = "";
}

function generarInformeGanancias() {
    let tipoUsuario = document.querySelector("#slcTipoUsuario").value
    if (tipoUsuario === "admin") {
        const unProducto = sistema.misCompras
        let unidadesVendidas = sistema.obtenerObjetoEnArray(unProducto, "estadoCompra", "Aprobado");

        for (let i = 0; i < unidadesVendidas.length; i++) {
            let gananciasTotales = 0
            gananciasTotales += Number(unidadesVendidas[i].monto * unidadesVendidas[i].cantidad);


            document.querySelector("#tablaInforme").innerHTML += `
        <tr>
            <td>${unidadesVendidas[i].idProductoCompra}</td>
            <td>${unidadesVendidas[i].nombre}</td>
            <td>${unidadesVendidas[i].precio}</td>
            <td>${unidadesVendidas[i].unidadesVendidas}</td>
            <td>${gananciasTotales}</td>
        </tr> `;
        }

        let buscarMismoIdProducto = sistema.obtenerObjeto(unidadesVendidas, "unIdProducto", unidadesVendidas.unIdProducto);
        document.querySelector("#tablaInforme").innerHTML = "";

        if (obtenerObjeto === true) {


        }
    }

}

//------------------------------FUNCIONALIDADES USUARIO-----------------------

function mostrarTabla() {
    let tipoUsuario = document.querySelector("#slcTipoUsuario").value
    if (tipoUsuario === "user") {
        document.querySelector("#tblProductos").innerHTML = "";
        for (let i = 0; i < sistema.productos.length; i++) {
            const unProducto = sistema.productos[i];
            document.querySelector("#tblProductos").innerHTML += `
            <tr>
                <td>${unProducto.id}</td>
                <td>${unProducto.nombre}</td>
                <td><img src="img/${unProducto.imagen}" width="100"></td>
                <td>${unProducto.descripcion}</td>
                <td>${unProducto.precio}</td>
                <td>${unProducto.condicion}</td>
                <td><input type="number" id="CantidadUnidades" value="1"></td>
                <td><input type="button" value="Comprar" class="btnComprar${i} btn" disabled></td>
                </tr> `;

            if (unProducto.estado === "Inactivo") {
            } else if (unProducto.estado === "Activo") {

                document.querySelector(`.btnComprar${i} `).removeAttribute(`disabled`, `disabled`);
            }

            let btn = document.querySelectorAll(".btn")

            for (let i = 0; i < btn.length; i++) {
                btn[i].addEventListener("click", btnComprar);
            }
        }
    }
}

//REVISAR -> Cambiaron propiedades del objeto misCompras
function mostrarCompras() {
    let tipoUsuario = document.querySelector("#slcTipoUsuario").value
    if (tipoUsuario === "user") {
        document.querySelector("#tblMisCompras").innerHTML = "";
        for (let i = 0; i < sistema.misCompras.length; i++) {
            const unaCompra = sistema.misCompras[i];
            document.querySelector("#tblMisCompras").innerHTML += `
            <tr>
                <td>${unaCompra.id}</td>
                <td>${unaCompra.idProductoCompra}</td>
                <td>${unaCompra.idCliente}</td>
                <td>${unaCompra.cantidad}</td>
                <td>${unaCompra.monto}</td>
                <td>${unaCompra.estadoCompra}</td>
                <td><input type="button" value="Cancelar" class="btnMisCompras${i} btn" data-id="${unaCompra.id}"></td>
                </tr> `;


            if (unaCompra.estadoCompra === "Aprobado" || unaCompra.estadoCompra === "Cancelada") {
                document.querySelector(`.btnMisCompras${i}`).setAttribute("disabled", "disabled");
            }
        }

        let btn = document.querySelectorAll(".btn")

        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener("click", modificarCompra);
        }
    }
}

function modificarCompra() {
    let dataCompra = Number(this.getAttribute("data-id"));
    let objCompra = sistema.obtenerObjeto(sistema.misCompras, "id", dataCompra);

    console.log(sistema.misCompras, dataCompra);
    console.log(objCompra)

    objCompra.estadoCompra = "Cancelada";

    mostrarCompras()
}

function mostrarOfertas() {
    let tipoUsuario = document.querySelector("#slcTipoUsuario").value
    if (tipoUsuario === "user") {
        document.querySelector("#tblOfertas").innerHTML = "";
        const unProducto = sistema.productos

        /*Encontrado contiene un array de objetos que contiene el valor de la propiedad buscada*/
        let arrEncontrados = sistema.obtenerObjetoEnArray(unProducto, "condicion", "Oferta")

        for (let i = 0; i < arrEncontrados.length; i++) {
            document.querySelector("#tblOfertas").innerHTML += `
            <tr>
                    <td>${arrEncontrados[i].id}</td>
                    <td>${arrEncontrados[i].nombre}</td>
                    <td><img src="img/${arrEncontrados[i].imagen}" width="100"></td>
                    <td>${arrEncontrados[i].descripcion}</td>
                    <td>${arrEncontrados[i].precio}</td>
                    <td>${arrEncontrados[i].condicion}</td>
                    <td><input type="number" id="CantidadUnidades" value="1"></td>
                    <td><input type="button" value="Comprar" class="btnComprarOferta${i} btn"></td>
                    </tr> `;
            if (unProducto[i].estado === "Activo") {
            } else {
                document.querySelector(`.btnComprarOferta${i} `).setAttribute("disabled", "disabled");
            }
        }

        let btn = document.querySelectorAll(".btn")

        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener("click", btnComprar);
        }
    }
}

//No se puede hacer hasta que se haga la funcionalidad aprobarCompra.
function btnComprar() {
    console.log(document.querySelector("#pvalorSaldo").innerHTML = sistema.usuarios[0].saldo);
    console.log("hiciste click en comprar")
}


function salir() {
    /**RESPETAR EL ORDEN SINO SE ROMPE */
    /*Primero oculta todas las secciones */
    ocultarSecciones();
    /*Luego muestra lo que deberia verse */
    document.querySelector("#seccionLogin").style.display = "block";
    document.querySelector("#seccionRegistro").style.display = "block";
    document.querySelector("#navPrincipal").style.display = "none";
    document.querySelector("#aux").style.display = "none";
    /*Luego oculta la seccion de registro */
    ocultarSeccionRegistro()
    /*Luego resetea los valores al salir*/
    usuarioLogeado = null;
    usuarioLogeadoAdmin = null;
}


//-------------------------------- FUNCIONAMIENTO COMPRADOR --------------------------------------------------


