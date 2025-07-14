// en mi ejemplo el suario y el apikey lo hardcodie .. uds lo tienen que sacar del localStorage
let usuario=1391
let apikey="bc755d57076ad64b76560ac5dc151619"
cargarActividades()


document.querySelector("#btnMostrar").addEventListener("click",mostrarActividad)

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
        miSelect+=`<option value=${unaActividad.id}>${unaActividad.nombre}</option>`
    }
    document.querySelector("#slcActividad").innerHTML= miSelect
}

function mostrarActividad(){
    alert ("El id de la Actividad es "+ document.querySelector("#slcActividad").value)
}
