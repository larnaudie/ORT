cargarPaises()
document.querySelector("#btnMostrar").addEventListener("click",mostrarPais)

function cargarPaises(){

    obtenerPaises()
}

function obtenerPaises(){
    fetch("https://movetrack.develotion.com/paises.php")
    .then(function (response){
        return response.json()
    })
    .then(function(informacion){
        cargarSelectPaises(informacion.paises)
    })
    .catch(function(error){
        console.log(error)
    })
}

function cargarSelectPaises(listaPaises){
    console.log(listaPaises)
    let miSelect=""
    for (let unPais of listaPaises){
        miSelect+=`<option value=${unPais.id}>${unPais.name}</option>`
    }
    document.querySelector("#slcPais").innerHTML= miSelect
}

function mostrarPais(){
    alert ("El id del pais es "+ document.querySelector("#slcPais").value)
}

