window.addEventListener("load", inicio);

function inicio() {
    cargarGenero();
    document.querySelector("#btnAgregar").addEventListener("click", agregarPelicula);
    document.querySelector("#btnMostrar").addEventListener("click", mostrarTabla);
    document.querySelector("#btnBuscar").addEventListener("click", buscarPelicula);

    ocultarSecciones();

    let botones = document.querySelectorAll(".btnSeccion");
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", mostrarSeccion);   
    }

    mostrarBotones("user");
}

function mostrarSeccion() {
    ocultarSecciones();
    let idBtn = this.getAttribute("id");//"btnSeccionAgregar"
    let idSeccion = idBtn.charAt(3).toLowerCase() + idBtn.substring(4);//seccionAgregar
    document.querySelector("#" + idSeccion).style.display = "block"
}


// function mostrarSeccion() {
//     ocultarSecciones();
//     let idBtn = this.getAttribute("id");
//     console.log(idBtn);
//     switch (idBtn) {
//         case "btnSeccionAgregar":
//             document.querySelector("#seccionAgregar").style.display = "block";
//             break;
//         case "btnSeccionListar":
//             document.querySelector("#seccionListar").style.display = "block";
//             break;
//         case "btnSeccionBuscar":
//             document.querySelector("#seccionBuscar").style.display = "block";
//             break;
//     }
// }


function ocultarSecciones() {
    let secciones = document.querySelectorAll(".seccion");
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none"
    }
}

function mostrarBotones(tipo) {
    let botonesOcultar = document.querySelectorAll(".btnSeccion");
    for (let i = 0; i < botonesOcultar.length; i++) {
        botonesOcultar[i].style.display = "none";
    }

    let botonesMostrar = document.querySelectorAll("."+ tipo);
    for (let i = 0; i < botonesMostrar.length; i++) {
        botonesMostrar[i].style.display = "block";
    }
}


//------------------------------------------------------------------------------------------------//


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