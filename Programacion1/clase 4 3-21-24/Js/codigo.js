window.addEventListener("load", inicio);

function inicio(){
    document.querySelector("#btnFormatearEj1").addEventListener("click", sumarValores);
    document.querySelector("#btnFormatearEj2").addEventListener("click", sumarValores);
}

function sumarValores(){
    let sumando1 = Number(document.querySelector("#txtSumando1Ej1").value);

    let sumando2 = Number(document.querySelector("#txtSumando2Ej1").value);

    let sumaCalculadora = sumando1 + sumando2;

    document.querySelector("#pResultadoEj1").innerHTML = formatoFinal;
}

function formatear() {

    let nombre = document.querySelector("#txtNombreEj2").value;

    let apellido = document.querySelector("#txtApellidoEj2").value;    

    let formatoFinal = nombre + " " + apellido;

    document.querySelector("#pResultadoEj2").innerHTML = formatoFinal;
}

