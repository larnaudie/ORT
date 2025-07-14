const URLBASE="https://restcountries.com/v3.1/"
inicio()
function inicio(){
    obtenerDatosPaises()
    document.querySelector("#btnSaludar").addEventListener("click",saludarPais)
}

function obtenerDatosPaises(){
    // se va a comunicar con la API y si está todo bien recibe un array 
    // con los datos de los países
    fetch(URLBASE+"all")
    .then(function (response){
        console.log(response)
        return response.json()
    })
    .then(function(listaPaises){
         console.log(listaPaises)
         cargarPaisesEnSelect(listaPaises)
    })
    .catch(function(error){
        console.log(error)
    })
}

function cargarPaisesEnSelect(listaPaises){
    let miSelect=""
    for (let unPais of listaPaises){
        miSelect+=`<option value="${unPais.name.common}">${unPais.name.common}</option>`
    }
    document.querySelector("#slcPais").innerHTML= miSelect

}

function saludarPais(){
    alert ("Bienvenido a "+document.querySelector("#slcPais").value)
}