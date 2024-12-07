window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnCrear").addEventListener("click", crearPartido);
    document.querySelector("#btnProcesar").addEventListener("click", procesarVotos);
    armarLista();
}

let sistema = new Sistema();
let idActual = 5;

function crearPartido() {
    let nombre = document.querySelector("#txtNombrePartido").value;
    let objPartido = sistema.obtenerObjeto(sistema.partidos, "nombre", nombre);
    if(objPartido === null && nombre !== ""){
        let partido = new Partido(idActual, nombre);
        idActual++;
        sistema.agregarPartido(partido);
        document.querySelector("#pMensajes").innerHTML = "Partido Creado";
        armarLista();
    }else{
        document.querySelector("#pMensajes").innerHTML= "Partido ya existente o el nombre esta vacio";
    }
}

function armarLista() {
    document.querySelector("#tblLista").innerHTML = "";
    for (let i = 0; i < sistema.partidos.length; i++) {
        document.querySelector("#tblLista").innerHTML += `<tr>
        <td>${sistema.partidos[i].nombre}</td>
        <td><input type="button" value="X" class="btnEliminar" data-partido="${sistema.partidos[i].id}"></td>
        </tr>` 
    }
    let btnsEliminar = document.querySelectorAll(".btnEliminar");
    for (let i = 0; i < btnsEliminar.length; i++) {
        btnsEliminar[i].addEventListener("click", eliminarPartido);    
    }
    armarTablaVotos();
}

function eliminarPartido() {
    let idPartidoEliminar = Number(this.getAttribute("data-partido"));
    let objPartido = sistema.obtenerObjeto(sistema.partidos, "id", idPartidoEliminar);
    let hayQueEliminar = confirm(`Esta seguro que desea eliminar el partido ${objPartido.nombre}?`);
    if(hayQueEliminar){
        for (let i = 0; i < sistema.partidos.length; i++) {
            if(sistema.partidos[i].id === idPartidoEliminar){
                sistema.eliminarPartido(i);
            }
        }
        armarLista();
    }
}

function armarTablaVotos() {
    document.querySelector("#tblVotos").innerHTML = "";
    for (let i = 0; i < sistema.partidos.length; i++) {
        document.querySelector("#tblVotos").innerHTML += `<tr>
        <td>${sistema.partidos[i].nombre}</td>
        <td><input type="text" id="vot${sistema.partidos[i].id}"></td>
        </tr>`
    }
}

let cantidadVotosTotales = 0;
let cantidadRepresentantes = 31;
let respresentantesAsignados = 0;
let votosPorRespresentante;

function procesarVotos() {
    for (let i = 0; i < sistema.partidos.length; i++) {
        let cantidadVotos = Number(document.querySelector("#vot" + sistema.partidos[i].id).value)
        cantidadVotosTotales += cantidadVotos;
        sistema.actualizarVotos(sistema.partidos[i].id, cantidadVotos);
    }
    votosPorRespresentante = cantidadVotosTotales / cantidadRepresentantes;

    for (let i = 0; i < sistema.partidos.length; i++) {
       let representantesDirectos = Math.floor(sistema.partidos[i].votos / votosPorRespresentante);
        respresentantesAsignados+= representantesDirectos;
        sistema.actualizarRepresentantes(sistema.partidos[i].id, representantesDirectos, votosPorRespresentante);
    }
    sistema.ordenarLista();
    for (let i = 0; i < cantidadRepresentantes - respresentantesAsignados; i++) {
        sistema.partidos[i].representantes++; 
    }
    console.log(sistema.partidos);
    armarTablaAsignados();
}


function armarTablaAsignados() {
    document.querySelector("#tblAsignados").innerHTML = "";
    for (const partido of sistema.partidos) {
        document.querySelector("#tblAsignados").innerHTML += `<tr>
        <td>${partido.nombre}</td>
        <td>${partido.representantes}</td>
        </tr>`
    }
}