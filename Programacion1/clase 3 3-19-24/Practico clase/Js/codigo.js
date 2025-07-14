window.addEventListener("load", inicio);

function inicio(){
    document.querySelector("#btnSumarEj1").addEventListener("click", sumarValores);
}

let sumando1;

let sumando2;

let sumaCalculadora;

function sumarValores(){
    sumando1 = Number(document.querySelector("#txtSumandoEj1").value);

    sumando2 = Number(document.querySelector("#txtSumandoEj1").value);

    sumaCalculadora = sumando1 + sumando2;

    console.log(sumaCalculadora);
}

let nombre;

let apellido;

let formatoFinal;s

function formatear() {

    nombre = document.querySelector("#txtNombreEj2").value;
    apellido = document.querySelector("#txtApellidoEj2").value;    

    formatoFinal = nombre + " " + apellido;

    document.querySelector("#pResultadoEj2").innerHTML = formatoFinal;
}

