const URLBASE = "https://restcountries.com/v3.1"
inicio()
function inicio(){
    obtenerDatosPaises()
    document.querySelector("#btnSaludar").addEventListener("click",saludarPais)
}

function obtenerDatosPaises(){
    fetch(URLBASE+"/all")
    .then(function(response){
        return response.json()
    }).then(function(paises){
        cargarPaisesEnSelect(paises)
    }).catch(function(error){
        console.log(error)
    })
}

function cargarPaisesEnSelect(paises){
    let miSelect=""
    for (let unPais of paises){
        miSelect+=`<option value="${unPais.name.common}">${unPais.name.common}</option>`
    }
    document.querySelector("#slcPais").innerHTML=miSelect
}

function saludarPais(){
    alert("Bienvenido a "+document.querySelector("#slcPais").value)
}

