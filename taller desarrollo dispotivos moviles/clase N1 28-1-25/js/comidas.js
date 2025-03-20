let contadorComidas=1
class Comida{
    constructor(nombre, tipo, peso, fecha){
        this.id= contadorComidas++
        this.nombre= nombre
        this.tipo= tipo
        this.peso= peso
        this.fecha= fecha
    }
}

let listaDeComidas= new Array()

let listaTipoDeComidas= ["vegetariano","vegano","carnívoro"]


function inicio(){

// escuchar el botón
document.querySelector("#btnRegistrar").addEventListener("click", registrarComida)
cargarSelectTipoComidas()
}

inicio()

function cargarSelectTipoComidas(){
    // paso 1 crear la variable
    let miSelect=""
    // paso 2 recorrer el origen de datos y crear una opción por cada elemento
    for (let unTipo of listaTipoDeComidas){
        miSelect +=`<option value="${unTipo}">${unTipo}</option>`
    }
    // paso 3 incrustar en el control de HTML el contenido de la variable   .innerHTML
    document.querySelector("#slcTipo").innerHTML +=miSelect

}


function registrarComida(){
// paso 1 capturar los datos
    let nombre= document.querySelector("#txtNombre").value  
    let tipo= document.querySelector("#slcTipo").value  
    let peso= Number(document.querySelector("#txtPeso").value)  
    let fecha= document.querySelector("#txtFecha").value  
// paso 2 validar
    if (nombre !="" && peso>0){
        // paso 3 crear el objeto
        
        let unaComidita= new Comida(nombre, tipo, peso, fecha)
        // paso 4 pushearlo
        listaDeComidas.push(unaComidita)
        // paso 5 mensaje de éxito
        alert ("Registro creado con éxito")
    } else {
        // paso 6 mensaje de error
        alert ("error")
    }

    console.log(listaDeComidas)
    // limpiar el formulario
    document.querySelector("#txtNombre").value=""
    document.querySelector("#txtPeso").value=""  
    document.querySelector("#txtFecha").value=""  


}