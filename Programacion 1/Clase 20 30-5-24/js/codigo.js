window.addEventListener("load", inicio);

function inicio() {
    cargarGenero();
    document.querySelector("#btnAgregar").addEventListener("click", agregarPelicula);
    document.querySelector("#btnMostrar").addEventListener("click", mostrarTabla);
    document.querySelector("#btnBuscar").addEventListener("click", buscarPelicula);
    document.querySelector("#btnRegistrar").addEventListener("click", registrarUsuario);
    document.querySelector("#btnLogin").addEventListener("click", hacerLogin);
    document.querySelector("#menuSalir").addEventListener("click", salir);


    ocultarSecciones();

    let botones = document.querySelectorAll(".btnSeccion");
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", mostrarSeccion);   
    }
    mostrarBotones("user");
    document.querySelector("#seccionLogin").style.display = "block";
    document.querySelector("#seccionRegistro").style.display = "block";
    document.querySelector("#navPrincipal").style.display = "none";

}

//-----------------------------FUNCIONES DE NAVEGACION-------------------------------------------------------

function mostrarSeccion() {
    ocultarSecciones();
    let idBtn = this.getAttribute("id");//"btnSeccionAgregar"
    let idSeccion = idBtn.charAt(3).toLowerCase() + idBtn.substring(4);//seccionAgregar
    document.querySelector("#" + idSeccion).style.display = "block"
}


function ocultarSecciones() {
    let secciones = document.querySelectorAll(".seccion");
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none"
    }
}

function mostrarBotones(tipo) {
    ocultarBotones();

    let botonesMostrar = document.querySelectorAll("."+ tipo);
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

let idUsuario = 5;
function registrarUsuario() {
    let nombre = document.querySelector("#txtUsuarioRegistro").value;
    let clave = document.querySelector("#txtClaveRegistro").value;
    let nombreCompleto = document.querySelector("#txtNombreCompletoRegistro").value;

    let camposCompletos = sistema.validarCamposVaciosRegistro(nombre, clave, nombreCompleto);
    let formatoPassValido = sistema.verificarFormatoPass(clave);
    let existeUsuario = sistema.buscarElemento(sistema.usuarios, "nombre", nombre);

    if(camposCompletos === true && formatoPassValido === true && existeUsuario === false){
        let usuario = new Usuario(idUsuario, nombre, clave, nombreCompleto);
        idUsuario++;
        sistema.agregarUsuario(usuario);
        alert("Registro exitoso!")
    }else{
        alert("Error en Registro: Los campos son todos obligatorios, la pass es minimo de 5 caracteres o ya existe un usuario con ese nombre");
    }
    document.querySelector("#txtUsuarioRegistro").value = "";
    document.querySelector("#txtClaveRegistro").value = "";
    document.querySelector("#txtNombreCompletoRegistro").value = "";
}

let usuarioLogeado = null;
function hacerLogin() {
    let nombre = document.querySelector("#txtUsuario").value;
    let clave = document.querySelector("#txtClave").value;

    let login = sistema.verificarLogin(nombre, clave);
    if(login){
        usuarioLogeado = sistema.obtenerObjeto(sistema.usuarios, "nombre", nombre);
        mostrarMenuOcultandoLoginYRegistro();
    }else{
        alert("Usuario y/o pass incorrectos");
    }
    document.querySelector("#txtUsuario").value = "";
    document.querySelector("#txtClave").value = "";
}

function mostrarMenuOcultandoLoginYRegistro(){
    mostrarBotones("admin");
    document.querySelector("#seccionLogin").style.display = "none";
    document.querySelector("#seccionRegistro").style.display = "none";
    document.querySelector("#navPrincipal").style.display = "block";
    document.querySelector("#nombreUsuarioLogeado").innerHTML = `Bienvenido ${usuarioLogeado.nombreCompleto}`
}


function salir() {
    ocultarSecciones();
    document.querySelector("#seccionLogin").style.display = "block";
    document.querySelector("#seccionRegistro").style.display = "block";
    document.querySelector("#navPrincipal").style.display = "none";
    document.querySelector("#aux").style.display = "none";
    usuarioLogeado = null;
}


//-------------------------------- LOGICA EJERCICIO--------------------------------------------------


let sistema = new Sistema();
let idPelicula = 1;

function cargarGenero() {
    document.querySelector("#slcGenero").innerHTML = `<option value="-1">Seleccione una opcion...</option>`;
    for (let i = 0; i < sistema.generos.length; i++) {
        const unGenero = sistema.generos[i];
        document.querySelector("#slcGenero").innerHTML += `<option value="${unGenero.id}">${unGenero.nombre} - ${unGenero.edad}</option>`
    }
}

function agregarPelicula() {
    let nombreCampo = document.querySelector("#txtNombre").value;
    let anioCampo = Number(document.querySelector("#txtAnio").value);

    let aparece = sistema.buscarElemento(sistema.peliculas, "nombre", nombreCampo);

    if(!isNaN(anioCampo) && !aparece){
        let generoCampo = Number(document.querySelector("#slcGenero").value);
        let votosCampo = Number(document.querySelector("#txtVotos").value);
        let votantesCampo = Number(document.querySelector("#txtVotantes").value);

        let foto = document.querySelector("#fileFoto").value;// C:\fakepath\guardianes.jpg
        let nombreFoto = foto.substring(foto.lastIndexOf("\\") + 1);
        console.log(nombreFoto); 

        let pelicula = new Pelicula(idPelicula, nombreCampo, anioCampo, generoCampo, votantesCampo, votosCampo, nombreFoto);
        idPelicula++;
        sistema.agregarPelicula(pelicula);

    }else{
        alert("corregir datos");
    }
}

function mostrarTabla() {
    document.querySelector("#tblPeliculas").innerHTML= "";
    for (let i = 0; i < sistema.peliculas.length; i++) {
        const unaPelicula = sistema.peliculas[i];
        let promedio = unaPelicula.votos / unaPelicula.votantes;
        if(promedio > 4){
            document.querySelector("#tblPeliculas").innerHTML +=`<tr>
            <td>${unaPelicula.nombre}</td>
            <td>${unaPelicula.anio}</td>
            <td>${promedio}</td>
            </tr>`
        }
    }
}

function buscarPelicula() {
    let busquedaCampo = document.querySelector("#txtBusqueda").value;
    let peli = sistema.obtenerObjeto(sistema.peliculas, "nombre", busquedaCampo);
    if(peli !== null){
        let genero = sistema.obtenerObjeto(sistema.generos, "id", peli.genero);
        document.querySelector("#pResultado").innerHTML = `
        Nombre: ${peli.nombre}<br>
        Anio: ${peli.anio}<br>
        Genero: ${genero.nombre}<br>
        apta: ${genero.edad}<br>
        <img src="img/${peli.nombreFoto}" width="100">
        `
    }else{
        document.querySelector("#pResultado").innerHTML = "No hay resultados";
    }
}