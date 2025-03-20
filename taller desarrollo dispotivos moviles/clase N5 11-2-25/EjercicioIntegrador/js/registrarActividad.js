class Actividad{
    constructor(idActividad, idUsuario, tiempo, fecha){
        this.idActividad= idActividad 
        this.idUsuario= idUsuario 
        this.tiempo= tiempo
        this.fecha= fecha
    }
}
 
// en mi ejemplo el suario y el apikey lo hardcodie .. uds lo tienen que sacar del localStorage.3
let URLBASE="https://movetrack.develotion.com/"
let usuario=1859
let apikey="6ea989a6903e5fc9d501c429f09f8cd9"
cargarActividades()
inicio()

function inicio(){
    document.querySelector("#btnRegistrar").addEventListener("click",previaRegistrarActividad)
}
 
function cargarActividades(){
    obtenerActividades()
}

function obtenerActividades(){
  
    fetch (`https://movetrack.develotion.com/actividades.php`,{
        method:'GET',
        headers:{
        'Content-Type': 'application/json',
        'iduser':usuario,
        'apikey':apikey
        }
        })
        .then(function (response){
        console.log(response)
        return response.json()
        })
        .then(function(informacion){
            cargarSelectActividades(informacion.actividades)
        })
        .catch(function(error){
        console.log(error)
        })
}

function cargarSelectActividades(listaActividades){
    console.log(listaActividades)
    let miSelect=""
    for (let unaActividad of listaActividades){
        miSelect+=`<ion-select-option value=${unaActividad.id}>${unaActividad.nombre}</ion-select-option>`
    }
    document.querySelector("#slcActividad").innerHTML= miSelect
}

function previaRegistrarActividad(){

    let actividad= document.querySelector("#slcActividad").value 
    let tiempo= document.querySelector("#txtTiempo").value  
    let fecha= document.querySelector("#txtFecha").value  
    let user= usuario

    let unaActividad= new Actividad(actividad, user, tiempo, fecha)
    registrarActividad(unaActividad)

}

function registrarActividad(unaActividad){
    fetch (`${URLBASE}registros.php`,{
        method:'POST',
        headers:{
        'Content-Type': 'application/json',
        'iduser':usuario,
        'apikey':apikey
        },
        body: JSON.stringify(unaActividad)
        })
        .then(function (response){
        return response.json()
        })
        .then(function(informacion){
            if (informacion.codigo>199 && informacion.codigo<300){
                alert ("registro creado")
                
            } else {
                alert (informacion.mensaje)
            }


        })
        .catch(function(error){
        console.log(error)
        })
}
