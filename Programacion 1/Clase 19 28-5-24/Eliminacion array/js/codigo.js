window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnAgregar").addEventListener("click", tomarDatosAgregar);
    document.querySelector("#btnMostrar").addEventListener("click", mostrarArray);
    document.querySelector("#btnEliminar").addEventListener("click", tomarDatosEliminar);
}


let colores = ["rojo", "azul", "verde", "amarillo", "naranja"];

function tomarDatosAgregar() {
    let color = document.querySelector("#txtPalabra").value;

    agregarElemento(color, colores);
    mostrarArray();
}

function tomarDatosEliminar() {
    let color = document.querySelector("#txtPalabra").value;//azul
    let posicion = colores.indexOf(color);//1

    if(!isNaN(posicion) && posicion >= 0){
        eliminarElemento(posicion, colores);//1,  ["rojo", "azul", "verde", "amarillo", "naranja"];
        mostrarArray();
    }else{
        document.querySelector("#pResultado").innerHTML = "La posicion tiene que ser numero y la palabra tiene que estar en la lista";
    }
    
}

function agregarElemento(elemento, listaElementos) {
    listaElementos.push(elemento);
}

function eliminarElemento(posicionElemento, listaElementos) {//1,  ["rojo", "azul", "verde", "amarillo", "naranja"];
    listaElementos.splice(posicionElemento, 1);//["rojo",  "verde", "amarillo", "naranja"];
    
}


function mostrarArray() {
    document.querySelector("#pResultado").innerHTML = "";
    for (let i = 0; i < colores.length; i++) {
        const colorActual = colores[i];
        document.querySelector("#pResultado").innerHTML += `*${colorActual} <br>`;
    }
}