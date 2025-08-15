window.addEventListener("load", inicio);

function inicio() {
    /**Cargamos todos los escuchadores de eventos */
    //Ejecucion de la funcion registrarUsuario al cliquear en el boton de Registro
    document.querySelector("#btnRegistrar").addEventListener("click", registrarUsuario);
    //Ejecucion de la funcion hacerLogin al cliquear en el boton de Logearse
    document.querySelector("#btnLogin").addEventListener("click", hacerLogin);
    //Ejecucion de la funcion mostrarTabla al cliquear en el boton de Productos en el nav
    document.querySelector("#btnLogin").addEventListener("click", mostrarTabla);
    //Ejecucion de la funcion salir al cliquear en el boton de salir en el nav
    document.querySelector("#menuSalir").addEventListener("click", salir);
    //Ejecucion de la funcion mostrarCompras al cliquear en el boton Mis Compras en el nav
    document.querySelector("#btnSeccionCompras").addEventListener("click", mostrarCompras);
    //Ejecucion de la funcion mostrarOfertas al cliquear en el boton Productos en Oferta en el nav
    document.querySelector("#btnSeccionOfertas").addEventListener("click", mostrarOfertas);
    //Ejecucion de la funcion mostrarAdminstracion al cliquear en el boton Administrar Productos en Oferta en el nav COMO ADMIN
    document.querySelector("#btnSeccionAdministrarProductos").addEventListener("click", mostrarAdminstracion);
    //Ejecucion de la funcion mostrarListado al cliquear en el boton Listado y Aprobacion en el nav COMO ADMIN
    document.querySelector("#btnSeccionListadoAprobacion").addEventListener("click", mostrarListado);
    //Ejecucion de la funcion creacionProductos al cliquear en el boton Creacion de Productos en el nav COMO ADMIN
    document.querySelector("#btnSeccionCreacionProductoss").addEventListener("click", creacionProductos);
    //Ejecucion de la funcion generarInformeGanancias al cliquear en el boton Informes de Ganancia en el nav COMO ADMIN
    document.querySelector("#btnSeccionInformesGanancia").addEventListener("click", generarInformeGanancias);
    //Ejecucion de la funcion mostrarSaldo al cliquear en el boton Loguearse, guardando el saldo del usuarioLogueado
    document.querySelector("#btnLogin").addEventListener("click", mostrarSaldo);

    /*Por defecto el programa arranca ocultando todas las secciones primero. */
    ocultarSecciones();

    /*Toma las clases de la tabla del NAV y al escuchar que se hace click en una de ellas muestra esa seccion. */
    let botones = document.querySelectorAll(".btnSeccion");
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", mostrarBotonLogin);
    }

    /*Mostramos la seccion del login con id seccionLogin y ocultamos la barra de navegacion para impedir que vayan directo al carrito u otros menus*/
    document.querySelector("#seccionLogin").style.display = "block";
    document.querySelector("#navPrincipal").style.display = "none";

    /*Si se hace click en Registrarse, se muestra la seccion Registro. */
    document.querySelector("#btnMostrarRegistro").addEventListener("click", mostrarSeccionRegistro);
    /*Si se hace click en Vovler al Login, se oculta la seccion Registro. */
    document.querySelector("#btnOcultarRegistrar").addEventListener("click", ocultarSeccionRegistro);
    //Al cliquear el boton Productos se ejecuta el mostrarTabla para mostrar los productos.
    document.querySelector("#btnSeccionProductos").addEventListener("click", mostrarTabla);


}
let sistema = new Sistema();
//-----------------------------FUNCIONES DE NAVEGACION-------------------------------------------------------

/*Muestra la seccion de la tabla*/
function mostrarBotonLogin() {
    //primero oculta todo.
    ocultarSecciones();

    let idBtn = this.getAttribute("id");//"btnSeccionAgregar"
    let idSeccion = idBtn.charAt(3).toLowerCase() + idBtn.substring(4);//seccionAgregar
    (idBtn, idSeccion);
    document.querySelector("#" + idSeccion).style.display = "block"
}
//Aqui mostramos la seccion del login y ocultamos la seccion de registrarse
function mostrarSeccionRegistro() {
    document.querySelector("#seccionRegistro").style.display = "block"
    document.querySelector("#seccionLogin").style.display = "none";
}

//Aqui mostramos la seccion del login y ocultamos la seccion de registrarse
function ocultarSeccionRegistro() {
    document.querySelector("#seccionRegistro").style.display = "none"
    document.querySelector("#seccionLogin").style.display = "block";
}

//Aqui ocultamos todas las secciones que tengan la clase seccion
function ocultarSecciones() {
    let secciones = document.querySelectorAll(".seccion");
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none"
    }
}

//mostrarBotones acepta un tipo de usuario, oculta todos los botones y muestra solo los que tienen la clase user o admin.
function mostrarBotones(tipo) {
    ocultarBotones();

    let botonesMostrar = document.querySelectorAll("." + tipo);
    for (let i = 0; i < botonesMostrar.length; i++) {
        botonesMostrar[i].style.display = "block";
    }
}

//ocultarBotones oculta todas las clases que tengan como valor btnSeccion
function ocultarBotones() {
    let botonesOcultar = document.querySelectorAll(".btnSeccion");
    for (let i = 0; i < botonesOcultar.length; i++) {
        botonesOcultar[i].style.display = "none";
    }
}

//-------------------------------- FUNCIONES DE ACCESO Y REGISTRO --------------------------------------------------

/*REGISTRAR USUARIO*/
let idUsuario = 5;
//Creamos la funcion registrar un usuario, comenzamos del 108-119 creando variables para guardar cada valor de cada campo.
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

    //Comprobamos que todos los campos tengan sus valores validos
    if (camposCompletos === true && formatoContrasenaValido === true && existeUsuario === false && formatoTarjetaValido === true && formatoCVCValido === true && verificarTajeta === true) {
        let usuario = new Usuario(idUsuario, nombre, clave, 3000, numeroTarjeta, numeroCVC);
        //al crear un nuevo usuario incrementa el numero del id
        idUsuario++;
        //sistema se encarga mediante su funcion agregarUsuario de agregarlo efectivamente a la lista de existentes.
        sistema.agregarUsuario(usuario);
        alert("Registro exitoso!")
    } else {
        alert("Error en Registro: Los campos son todos obligatorios, la pass es minimo de 5 caracteres o ya existe un usuario con ese nombre");
    }
    //limpiamos los valores de los campos una vez que se haya ejecutado la funcion registrarUsuario.
    document.querySelector("#txtUsuarioRegistro").value = "";
    document.querySelector("#txtContraseña").value = "";
}

//creamos variables globales usuarioLogeado, con propiedades null o vacio por defecto.
let usuarioLogeado = null;
let usuarioLogeadoAdmin = null;
let tipoUsuario = "";

//Aqui se implementa el login, se extraen los valores de cada campo.
function hacerLogin() {
    let nombre = document.querySelector("#txtUsuario").value;
    let clave = document.querySelector("#txtClave").value;
    tipoUsuario = document.querySelector("#slcTipoUsuario").value;

    //Se verifica mediante la funcion en sistema verificarLogin que exista ese usuario, y que los campos esten correctamente colocados.
    let login = sistema.verificarLogin(nombre, clave, tipoUsuario);

    //si retorna true el login entonces se guarda el usuarioLogeado en esa variable para luego acceder a sus propiedades.
    if (login) {
        usuarioLogeado = sistema.obtenerObjeto(sistema.usuarios, "nombre", nombre);
        //Si el usuarioLogeado es un admin entonces se guardara en otra variable distinta.
        usuarioLogeadoAdmin = sistema.obtenerObjeto(sistema.usuariosAdmin, "nombre", nombre);
        //Aqui Ocultamos los campos de login y registro.
        mostrarMenuOcultandoLoginYRegistro();

        //Si el tipoUsuario es admin entonces ocultamos lo que no debe de ver el admin.
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

//En esta funcion, se encarga de ocultar los campos relacionados al login y al registro.
function mostrarMenuOcultandoLoginYRegistro() {
    mostrarBotones(tipoUsuario);
    document.querySelector("#seccionLogin").style.display = "none";
    /*Vuelve a mostrar el texto, sino al apretar salir, queda oculto cuando se reingresa */
    document.querySelector("#aux").style.display = "block";

    //validamos que valor tiene el tipo de usuario para saber que mensaje dar de bienvenida.
    if (tipoUsuario === "user") {
        //Para imprimir el nombre, accedemos al usuarioLogeado o usuarioLogeadoAdmin a su propiedad nombre.
        document.querySelector("#nombreUsuarioLogeado").innerHTML = `Bienvenido/a: ${usuarioLogeado.nombre}`
    }
    if (tipoUsuario === "admin") {
        document.querySelector("#nombreUsuarioLogeado").innerHTML = `Bienvenido/a: ${usuarioLogeadoAdmin.nombre}`
    }
}

//Esta funcion, me permite acceder al saldo del usuarioLogeado e independizar el saldo de cada usuario distinto.
function mostrarSaldo() {
    if (tipoUsuario === "user") {

        document.querySelector("#pvalorSaldo").innerHTML = usuarioLogeado.saldo;
    }
}
//------------------------------FUNCIONALIDADES ADMINISTRADOR -------------------
//En esta funcion, empezamos a crear la tabla dinamica para admin.
function mostrarAdminstracion() {
    //Primero creamos la variable tipoUsuario para almacenar que es, si user o admin.
    let tipoUsuario = document.querySelector("#slcTipoUsuario").value
    //si efectivamente es admin entonces procedemos a hacer un for para crear celda a celda la tabla en el body seleccionado mediante su id.
    if (tipoUsuario === "admin") {
        //Aca limpiamos la tabla para que los valores no se repitan.
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

        //creamos una funcionalidad para obtener todos los botones que tengan como clase claseBoton.
        let botones = document.querySelectorAll(".claseBoton");
        //los recorremos y en el que se escuche que se hizo click se ejecuta la funcion modificarProducto, mas adelante.
        for (let i = 0; i < botones.length; i++) {
            botones[i].addEventListener("click", modificarProducto);
        }
    }
}

//modificar producto lo que hará sera...
function modificarProducto() {
    //primero, obtener el producto del id que se escuchó que se hizo click,
    let idProducto = this.getAttribute("data-id");//ej; "btnSeccionAgregar"
    //con ese idProducto podemos buscarlo mediante la funcion de sistema obtenerObjeto, que requiere 3 parametros un array, un nombre propiedad y un valor de busqueda.
    let objProducto = sistema.obtenerObjeto(sistema.productos, "id", idProducto);
    //almaceno todos los datos que me sirven para luego modificar mi producto, estos datos son obtenidos del html.
    let estadoEditado = document.querySelector("#slcEstado" + idProducto).value;//Activo
    let cantidadEditada = Number(document.querySelector("#cantidadUnidades" + idProducto).value);//5
    let condicionEditada = document.querySelector("#slcCondicion" + idProducto).value;

    //Si la condicion es oferta entoncees se quedara su valor con el string Oferta, de lo contrario si tiene Regular será regular.
    if (condicionEditada === "Oferta") {
        condicionEditada = "Oferta"
    } else if (condicionEditada === "Regular") {
        condicionEditada = "Regular"
    }

    //Esta es la parte donde al objeto le decimos que sus propeidades ahora serán las que se extrajeron del html.
    objProducto.estado = estadoEditado;
    objProducto.stock = cantidadEditada;
    objProducto.condicion = condicionEditada;
    //por ultimo vamos a recargar la tabla con mostrarAdministracion
    mostrarAdminstracion()
}

function mostrarListado() {
    //primero vemos que tipo de usuario es
    let tipoUsuario = document.querySelector("#slcTipoUsuario").value
    //si es admin, entonces ejecutamos la sentencia if, limpiando todas las tablas para que no se creen muchas por cada click en id #btnSeccionListadoAprobacion (linea: 20)
    if (tipoUsuario === "admin") {
        document.querySelector("#tblListadoAprobadas").innerHTML = "";
        document.querySelector("#tblListadoPendientes").innerHTML = "";
        document.querySelector("#tblListadoCanceladas").innerHTML = "";

        //Procedemos a cargar las tablas mediante sus respectivas funciones explicadas mas adelante.
        mostrarAprobadas();
        mostrarPendientes();
        mostrarCanceladas();
    }
}

function mostrarAprobadas() {
    //Buscamos todos los objetos que tengan estado aprobado
    let objProducto = sistema.obtenerObjetoEnArray(sistema.misCompras, "estadoCompra", "Aprobado");
    //limpiamos tabal para que no se creen uno atras de otro y no quede larguisimo.
    document.querySelector("#tblListadoAprobadas").innerHTML = "";
    //este for recorre la totalidad de objProcuto encontrados con estadoCompra Aprobado.
    for (let i = 0; i < objProducto.length; i++) {
        //Esta variable inmutable const, nos permite recorrer uno a uno sus propiedades para poder imprimirlas en la tabla dinamica, aunque se peude hacer directo del objProducto
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

let objProductoPendiente = []

function mostrarPendientes() {
    //Aqui actualizamos el objeto con todos los que encuentre con estado Pendiente.
    objProductoPendiente = sistema.obtenerObjetoEnArray(sistema.misCompras, "estadoCompra", "Pendiente");
    //limpiamos tabal para que no se creen uno atras de otro y no quede larguisimo.
    document.querySelector("#tblListadoPendientes").innerHTML = "";
    //este for recorre la totalidad de objProcuto encontrados con estadoCompra Pendiente.
    for (let i = 0; i < objProductoPendiente.length; i++) {
        //En esta oportunidad recorrimos directamente el objProductoPendiente pero podriamos haber heho un const unProducto como el anterior
        document.querySelector("#tblListadoPendientes").innerHTML += `

        <tr><td><strong>IDCompra:</strong> <br> ${objProductoPendiente[i].id}<br><br></td>
        <td><strong>IDProducto:</strong> <br>  ${objProductoPendiente[i].idProductoCompra}<br><br></td>
        <td><strong>IDCliente:</strong> <br>  ${objProductoPendiente[i].idCliente}<br><br></td>
        <td><strong>Cantidades:</strong> <br>  ${objProductoPendiente[i].cantidad}<br><br></td>
        <td><strong>Estado:</strong> <br> ${objProductoPendiente[i].estadoCompra}<br><br></td>
        <td><strong>Precio:</strong> <br>  ${objProductoPendiente[i].monto}<br><br></td>  
        <td>  <input type="button" value="APROBAR" id="btnAprobacion${i}" class="btnAprobarCompras" data-id="${objProductoPendiente[i].id}"> </td></tr>`
    }

    //esta funcionalidad almacena todos las clases con valor btnAprobarCompras
    let btnAprobacion = document.querySelectorAll(".btnAprobarCompras");
    //Una vez que las recorra y escuche algun click en algunas de ellas ejecuta aprobarCompras funcion.
    for (let i = 0; i < btnAprobacion.length; i++) {
        btnAprobacion[i].addEventListener("click", aprobarCompra);
    }
}

function mostrarCanceladas() {
    //Buscamos todos los objetos que tengan estado aprobado
    let objProducto = sistema.obtenerObjetoEnArray(sistema.misCompras, "estadoCompra", "Cancelada");
    //limpiamos tabal para que no se creen uno atras de otro y no quede larguisimo.
    document.querySelector("#tblListadoCanceladas").innerHTML = "";
    //este for recorre la totalidad de objProcuto encontrados con estadoCompra Aprobado.
    for (let i = 0; i < objProducto.length; i++) {
        //Esta variable inmutable const, nos permite recorrer uno a uno sus propiedades para poder imprimirlas en la tabla dinamica, aunque se peude hacer directo del objProducto
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
function aprobarCompra() {
    //Esta funcion lo que nos hace es obtener primero el id de compra para poder encontrar el objeto del cual se escucho el click y tomar sus propiedades.

    let idCompra = Number(this.getAttribute("data-id")); //me devuelve 1
    //buscamos el objeto
    let compraParaAprobar = sistema.obtenerObjeto(objProductoPendiente, "id", idCompra);
    //Empezamos a obtener las propiedades idProductoCompra y idCliente del objeto obtenido.
    let traerIdProducto = compraParaAprobar.idProductoCompra;
    let traerIdCliente = compraParaAprobar.idCliente;
    //Ahora buscamos un objeto que tenga el idProductoCompra para obtener sus propiedades
    let devolverInfoProducto = sistema.obtenerObjeto(sistema.productos, "id", traerIdProducto);
    //Comenzamos a almacenar el valor de las propiedades obtenidos del objeto, en distintas variables.
    let traerStockProducto = devolverInfoProducto.stock;
    let traerEstadoProducto = devolverInfoProducto.estado;
    let traerPrecioProducto = devolverInfoProducto.precio;
    //Aqui hacemos la cuenta del montoTotal considerando las diferentes propiedades de los distintos objetos.
    let montoTotal = traerPrecioProducto * compraParaAprobar.cantidad;
    //Vamos a buscar ahora un objeto que tenga el id del cliente, para modificar su saldo luego de aprobada la compra
    let devolverInfoUsuario = sistema.obtenerObjeto(sistema.usuarios, "id", traerIdCliente);
    //almacenamos en una variable el saldo obtenido del objeto.
    let traerSaldoCliente = devolverInfoUsuario.saldo;

    //seguimos con una verificacion de cada propiedad obtenida para ver si cumple con los requisitos, en base a eso, es si se actualizara el estado a Aprobado o Cancelada.
    if (traerSaldoCliente >= montoTotal && traerStockProducto >= compraParaAprobar.cantidad && traerEstadoProducto === "Activo") {

        //Si todo se cumple el estado pasa a ser Aprobado, aqui lo actualizamos
        compraParaAprobar.estadoCompra = "Aprobado";

        //guardamos los datos del cliente actualizados en esta cuenta.
        let actualizarSaldoCliente = traerSaldoCliente - montoTotal;
        //Aca actualizamos la propiedad del saldo del cliente, actualizando su saldo como le queda al final.
        devolverInfoUsuario.saldo = actualizarSaldoCliente

        //aqui almacenamos el stock del producto, en base al resultado de la cuenta del stock del producto menos la cantidad que se aprobo.
        let actualizarStock = traerStockProducto - compraParaAprobar.cantidad;
        //aca lo actualizamos.
        devolverInfoProducto.stock = actualizarStock;

        //Aqui comprobamos la condicion del stock, si el stock esta en 0, entonces el estado del producto será inactivo, ya que no queda stock.
        if (actualizarStock === 0) {
            devolverInfoProducto.estado = "Inactivo";
        }
        //luego recargamos la tabla
        mostrarListado();

    } else {
        //Si nada se cumple, el estado pasa a ser cancelado con un avio de uno de los motivos.
        compraParaAprobar.estadoCompra = "Cancelada";
        alert("Saldo insuficiente o Stock insuficiente o producto Inactivo")

        //recargamos la tabla.
        mostrarListado();
    }
}

//En esta funcion implementamos la creacion de productos
function creacionProductos() {
    //obtenemos el tipo de usuario y lo almacenamos
    let tipoUsuario = document.querySelector("#slcTipoUsuario").value
    //si es admin, entonces puede crear un producto
    if (tipoUsuario === "admin") {
        //limpiamos la tabla y creamos las celdas correspondientes.
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
    //Cuando se escuche click en el boton  id crearProducto nuevo, entonces se ejecuta agregarProducto
    document.querySelector("#crearProductoNuevo").addEventListener("click", agregarProducto);
}
//En esta linea, designamos que el idProducto final, es el 10, asi empieza a jugar con este valor e incrementarlo.
let idProducto = "PROD_ID_10";

//Esta funcion se encarga de incrementar el id
function aumentarIdProducto(string) {
    //obtiene el ultimo objeto de productos, especificamente su id.
    const valorPropiedad = sistema.productos[sistema.productos.length - 1].id;//PROD_ID_3
    //guarda el numero
    let numero = Number(valorPropiedad.substring(valorPropiedad.lastIndexOf("_") + 1))//3
    //le aumenta 1
    numero++//4
    let texto = valorPropiedad.substring(0, 8);//PROD_ID_
    return texto + numero//PROD_ID_4
}

//Esta funcion, me permite aumentar el numero del idCompra.
function aumentarIdCompra(numero) {//1
    numero++//2
    return numero//2
}

//Esta funcion es para agregar un producto
function agregarProducto() {
    //vamos a guardar en variables la informacion obtenida del html.
    let crearNombre = document.querySelector("#crearNombre").value;
    let creaPrecio = Number(document.querySelector("#creaPrecio").value);
    let creaDescripcion = document.querySelector("#creaDescripcion").value;
    let crearImagen = document.querySelector("#imgProducto").value;
    let nombreImagen = crearImagen.substring(crearImagen.lastIndexOf("\\") + 1);
    let crearStock = Number(document.querySelector("#crearStock").value);
    let unaCantidad = 1;

    //Si cumple los requisitos entonces pasa a la siguiente validacion
    if (crearNombre && creaPrecio && creaDescripcion && nombreImagen && crearStock !== "") {
        //Si todo cumple con los tipos de datos y con los valores que debe tener cada campo, una condicion pasa a ser Precio Regular y unEstado a Activo como valores por default
        if (!isNaN(creaPrecio) && !isNaN(crearStock) && creaPrecio > 0 && crearStock > 0) {

            unaCondicion = "Precio Regular";
            unEstado = "Activo";
            //Ahora, creamos un nuevo objeto, una nueva instancia de la clase Producto me permite pasar todas estas variables como propiedades del objeto.
            let producto = new Producto(aumentarIdProducto(idProducto), crearNombre, nombreImagen, creaDescripcion, creaPrecio, unaCondicion, crearStock, unEstado, unaCantidad);
            //sistema se encargara mediante su funcion agregarProducto de pushear el producto guardado en la variable producto
            sistema.agregarProducto(producto);
            alert("Registro exitoso!")
        } else {
            alert("Error: El precio y el stock deben ser valores numéricos y mayores a 0");
        }
    } else {
        alert("Error: Todos los campos son obligatorio");
    }
    //luego de registrar un producto todos los campos quedaran vacios prontos para volver a colcoar otro producto.
    document.querySelector("#crearNombre").value = "";
    document.querySelector("#creaPrecio").value = "";
    document.querySelector("#creaDescripcion").value = "";
    document.querySelector("#imgProducto").value = "";
    document.querySelector("#crearStock").value = "";
}

function generarInformeGanancias() {
    //Primero limpiamos la tabla para que cada vez que hagamos click no se multiplique la informacion una abajo de otra.
    document.querySelector("#tablaInforme").innerHTML = "";
    //recorremos con un for of del array productos donde cada producto lo almacenamos en la variable constante; producto
    for (const producto of sistema.productos) {
        //luego imprimimos la tabla, donde en la primer celda va el nombre del producto, en la segunda va a ir el precio unitario y en la ultima el acumulativo de cantidad.
        document.querySelector("#tablaInforme").innerHTML +=`<tr>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${sistema.obtenerCantidadProductos(producto.id)}</td>
        </tr>`

    }
    //Por ultimo generamos la variable ganancias, que la funcion dentro de sistemas es responsable de hacer esta operacion y se guardara su resultado en ganancias.
    let ganancias = sistema.obtenerGananciasTotales();
    //Luego seleccionamos el elemento html que queremos que se muestre la ganancia.
    document.querySelector("#gananciasTotales").innerHTML = ganancias;

}

//------------------------------FUNCIONALIDADES USUARIO-----------------------
//Al hacer click en Productos o al loguearse, vamos a ejecutar esta funcion.
function mostrarTabla() {
    //Cuando se ejecuta la funcion mostrarTabla, lo primero que hacemos es limpiar la tabla
    document.querySelector("#tblOfertas").innerHTML = "";
    //Luego obtenemos el valor del tipoUsuario
    let tipoUsuario = document.querySelector("#slcTipoUsuario").value
    //si es user, entonces esta habilitado a ver la tabla.
    if (tipoUsuario === "user") {
        //antes que nada, limpiamos la tabla productos
        document.querySelector("#tblProductos").innerHTML = "";
        //con un for, cargaremos dinamicamente la tabla
        for (let i = 0; i < sistema.productos.length; i++) {
            //Vamos almacenando los objetos recorridos en la variable const unProducto asi accedemos a sus propiedades mas adelante en la tabla..
            const unProducto = sistema.productos[i];
            document.querySelector("#tblProductos").innerHTML += `
            <tr>
                <td>${unProducto.id}</td>
                <td>${unProducto.nombre}</td>
                <td><img src="img/${unProducto.imagen}" width="100"></td>
                <td>${unProducto.descripcion}</td>
                <td>${unProducto.precio}</td>
                <td>${unProducto.condicion}</td>
                <td><input type="number" id="CantidadUnidades${unProducto.id}" value="1"></td>
                <td><input type="button" value="Comprar" class="btnComprar${i} btn" data-id="${unProducto.id}" disabled></td>
                </tr> `;

            //Si el estado del producto es inactivo, no sucede nada, pero si es activo, se le remueve el atributo disabled para que se pueda comprar.
            if (unProducto.estado === "Inactivo") {
            } else if (unProducto.estado === "Activo") {
                document.querySelector(`.btnComprar${i} `).removeAttribute(`disabled`, `disabled`);
            }
            //Luego almacenamos todos los botones con clase .btn, en la variable btn.
            let btn = document.querySelectorAll(".btn")

            //los recorremos y si vemos que se hace click en uno de ellos lanzamos a la funcionalidad de btnComprar
            for (let i = 0; i < btn.length; i++) {
                btn[i].addEventListener("click", btnComprar);
            }

            //almacenamos todos los botones btnActualizarCantidad en la variable btncantidad
            let btnCantidad = document.querySelectorAll(".btnActualizarCantidad")
            //ahora podemos recorrerlos y ver en cual se hace click, luego ejecutamos actualizarCantidad.
            for (let i = 0; i < btnCantidad.length; i++) {
                btnCantidad[i].addEventListener("click", actualizarCantidad);
            }
        }
    }
}


function mostrarCompras() {
    //Obtenemos el tipo de usuario y lo almacenamos
    let tipoUsuario = document.querySelector("#slcTipoUsuario").value
    if (tipoUsuario === "user") {
        document.querySelector("#tblMisCompras").innerHTML = "";
        //recorremos el array: sistema.miscompras, colando a [i] como objeto, para obtener las diferentes propiedades allí detalladas, que se mostrarán en tabla
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
            //Aquí deshabilitamos la posiilidad de cancelar mediante boton a todas aquellas compras que ya esten aprobadas o sean canceladas
            if (unaCompra.estadoCompra === "Aprobado" || unaCompra.estadoCompra === "Cancelada") {
                document.querySelector(`.btnMisCompras${i}`).setAttribute("disabled", "disabled");
            }
        }
        
        //Aqui recorremos todos los botones en busca de aquel en el que se realiza el "click"
        let btn = document.querySelectorAll(".btn")

        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener("click", modificarCompra);
        }
    }
}


function modificarCompra() {
    /*En esta caso guardamos el id de compra del id sobre el que se hace click en "dataCompra", con la finalidad de poder buscarlo en "misCompras" 
(a través de sistema.obtenerObjeto, con sus parámetros correspondientes). Una vez que se obtiene este dato, se cambia su estado a "cancelada".
Con esta funcionalidad se logra que el usuario comprador cancele una compra que se encuentra Pendiente.
*/
    let dataCompra = Number(this.getAttribute("data-id"));
    let objCompra = sistema.obtenerObjeto(sistema.misCompras, "id", dataCompra);

    objCompra.estadoCompra = "Cancelada";

    mostrarCompras()
}


function mostrarOfertas() {
    //Esta funcionalidad nos permite ver la tabla de Mis compras, primero limpiamos la tabla, asi no se crea una tabla larguisima.
    document.querySelector("#tblProductos").innerHTML = "";
    //se obtiene el resutlado del tipo de usuario, si es user entonces puede continuar.
    let tipoUsuario = document.querySelector("#slcTipoUsuario").value
    if (tipoUsuario === "user") {
        //limpiamos la tabla ofertas
        document.querySelector("#tblOfertas").innerHTML = "";
        //almacenamos el array de productos en unProducto
        const unProducto = sistema.productos

        /*arrEcontrados contiene un array de objetos que contiene el valor de la propiedad buscada*/
        let arrEncontrados = sistema.obtenerObjetoEnArray(unProducto, "condicion", "Oferta")

        //Los vamos recorriendo uno a uno y vamos imprimiendo sus propiedades
        for (let i = 0; i < arrEncontrados.length; i++) {
            document.querySelector("#tblOfertas").innerHTML += `
            <tr>
                    <td>${arrEncontrados[i].id}</td>
                    <td>${arrEncontrados[i].nombre}</td>
                    <td><img src="img/${arrEncontrados[i].imagen}" width="100"></td>
                    <td>${arrEncontrados[i].descripcion}</td>
                    <td>${arrEncontrados[i].precio}</td>
                    <td>${arrEncontrados[i].condicion}</td>
                    <td><input type="number" id="CantidadUnidades${arrEncontrados[i].id}" value="1"></td>
                    <td><input type="button" value="Comprar" class="btnComprarOferta${i} btn" data-id="${arrEncontrados[i].id}"></td>
                    </tr> `;
            //Si el estado del producto recorrido NO es activo, entonces vamos a setearle el atributo disabled.
            if (unProducto[i].estado === "Activo") {
            } else {
                document.querySelector(`.btnComprarOferta${i} `).setAttribute("disabled", "disabled");
            }
        }
        //en estas lineas obtenemos todas las clases .btn y las almacenamos en btn
        let btn = document.querySelectorAll(".btn")
        //luego las recorremos para ver cual se hizo click, asi ejecutamos btnComprar
        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener("click", btnComprar);
        }
        //aca almacenamos todas las clases .btnActualizarCantidad en la variable btnCantidad
        let btnCantidad = document.querySelectorAll(".btnActualizarCantidad")
        //Ahora las recorremos y en la que se haga click, le ejectutamos la funcion actualizarCantidad
        for (let i = 0; i < btnCantidad.length; i++) {
            btnCantidad[i].addEventListener("click", actualizarCantidad);
        }
    }
}


function actualizarCantidad() {
    //Esta funcion se inicia una vez que se haga click en el boton .btnActualizarCantidad
    //Obtenemos el idProducto del data-id, para buscar el objeto que fue cliqueado
    let idProducto = this.getAttribute("data-id");
    //buscamos ese objeto y lo almacenamos en objProducto
    let objProducto = sistema.obtenerObjeto(sistema.productos, "id", idProducto);
    //vamos a castear a number el valor del html que se haya escrito en cantidad.
    let cantidadNueva = Number(document.querySelector("#CantidadUnidades" + idProducto).value);//2
    objProducto.cantidad += cantidadNueva;
    //luego ahi, actualizamos la cantidad por la que se escribio en el html

    //mostramos las tablas.
    mostrarOfertas()
    mostrarTabla()
}


function btnComprar() {
    //Cuando se hace click en Comprar se guarda el id del producto al cual se le hizo el click
    let idProducto = this.getAttribute("data-id");//idProducto
    //se busca ese producto por su id.
    let objProducto = sistema.obtenerObjeto(sistema.productos, "id", idProducto);
    //se guardan todas las variables cada valor de las propiedades que nos interesan
    let id = sistema.misCompras[sistema.misCompras.length - 1].id
    let idProductoCompra = objProducto.id
    let idCliente = usuarioLogeado.id;
    let precio = objProducto.precio;
    //por defecto el estadoCompra es Pendiente.
    let estadoCompra = "Pendiente";
    //la cantidad se extrae del HTML del valor que haya colocado el usuario.
    let cantidad = Number(document.querySelector("#CantidadUnidades" + idProducto).value);

    //Si se cumple los requisitos necesarios entonces se procede a crear una nueva instancia del objeto ListadoCompras
    if (!isNaN(id) && isNaN(idProductoCompra) && !isNaN(idCliente) && cantidad > 0 && precio > 0 && estadoCompra !== "") {
        //Creando la instancia del objeto ListadoCompras, le pasamos todas las variables que creamos a paritr de la linea 736
        let nuevaCompra = new ListadoCompras(aumentarIdCompra(id), idProductoCompra, idCliente, cantidad, precio, estadoCompra);
        //esta parte, se encarga de agregar efectivamente el ibjeto nuevo con sus propiedades a la lista de sistemas.misCompras, se encarga de hacerlo la funcion agregarcompra en sistema
        sistema.agregarCompra(nuevaCompra);
        alert("Compra exitosa!")
    } else {
        alert("Error: El precio y el stock deben ser valores numéricos y mayores a 0");
    }
}


function agregarCompra() {

    let id = sistema.misCompras[sistema.misCompras.length - 1].id

    //se extrae del producto que se hizo click.
    let idProductoCompra = sistema.productos;

    let idCliente = usuarioLogeado.id;

    //se extrae del producto que se hizo click.
    let cantidades = sisema.productos;

    //se extrae del producto que se hizo click
    let monto = sistema.productos;

    let estadoCompra = "Pendiente";

    if (!isNaN(id) && !isNaN(idProductoCompra) && !isNaN(idCliente) && cantidades > 0 && monto > 0 && estadoCompra !== "") {

        let producto = new ListadoCompras(aumentarIdCompra(id), idProductoCompra, idCliente, cantidades, monto, estadoCompra);
        sistema.agregarProducto(producto);
        alert("Registro exitoso!")

    } else {
        alert("Error: El precio y el stock deben ser valores numéricos y mayores a 0");
    }

}


function salir() {
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

