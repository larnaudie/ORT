let contadorJugadores=1

class Jugador{
    constructor(nombre, pais, equipo){
        this.id= contadorJugadores++
        this.nombre= nombre 
        this.pais= pais
        this.equipo= equipo
    }
}

let listaDeJugadores= new Array()
let listaPaises=["España", "Italia"]
let listaEquiposEspaña=["Real Madrid","Barcelona","Atlético Madrid"]
let listaEquiposItalia=["Milan","Inter","Juventus"]

function inicio(){
    document.querySelector("#btnRegistrar").addEventListener("click",registrarJugador)
    document.querySelector("#slcPais").addEventListener("change",cargarSelectEquipos)

    cargarSelectPaises()
}

inicio()
function cargarSelectPaises(){

    let miSelect=""
    for (let unPais of listaPaises){
        miSelect+=`<option value="${unPais}"> ${unPais}</option>`
    }
    document.querySelector("#slcPais").innerHTML+=miSelect
}

function cargarSelectEquipos(){
    document.querySelector("#slcEquipo").innerHTML=""
    let miSelect=""
    let paisElegido= document.querySelector("#slcPais").value  

    if (paisElegido == "Italia" ) {
        for (let unEquipo of listaEquiposItalia){
            miSelect+=`<option value="${unEquipo}"> ${unEquipo}</option>`
        }
        document.querySelector("#slcEquipo").innerHTML+=miSelect
    }  

    if (paisElegido == "España" ) {
        for (let unEquipo of listaEquiposEspaña){
            miSelect+=`<option value="${unEquipo}"> ${unEquipo}</option>`
        }
        document.querySelector("#slcEquipo").innerHTML+=miSelect
    }     
}









function registrarJugador(){
    
        // paso 1 capturar los datos
            let nombre= document.querySelector("#txtNombre").value  
            let pais= document.querySelector("#slcPais").value  
            let equipo= document.querySelector("#slcEquipo").value  
           
        // paso 2 validar
            if (nombre !=""){
                // paso 3 crear el objeto
                
                let unJugador= new Jugador(nombre, pais, equipo)
                // paso 4 pushearlo
                listaDeJugadores.push(unJugador)
                // paso 5 mensaje de éxito
                alert ("Registro creado con éxito")
            } else {
                // paso 6 mensaje de error
                alert ("error")
            }
        
           
            document.querySelector("#txtNombre").value=""
           
        
}