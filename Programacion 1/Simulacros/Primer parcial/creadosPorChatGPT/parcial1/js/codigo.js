window.addEventListener("load", inicio);
function inicio() {
    document.querySelector("#btnEj1").addEventListener("click", parteB);
    document.querySelector("#btnBoton").addEventListener("click", ej2);

}

let acumulador = 0;
function parteB() {
    let nombre = document.querySelector("#txtNombre").value;
    let horas = Number(document.querySelector("#txtHoras").value);
    let idioma = document.querySelector("#selectIdioma").value;
    let tipoEstudiante = document.querySelector("#selectTipo").value;
    let costo = horas * 25;
    let mensaje = "";
    let hayMayus = 0;

    if (nombre.length > 5 && nombre.length < 40) {
        if (nombre.charAt(0) === nombre.charAt(0).toUpperCase()) {
            hayMayus++;
            if (horas > 0) {
                if (tipoEstudiante === "Becado") {
                    costo = costo - (costo * 0.50);
                } else if (tipoEstudiante === "Regular") {
                    costo = costo;
                }
                if (idioma === "Ingles" && tipoEstudiante === "Regular") {
                    costo = costo - (costo * 0.20);
                }
                acumulador++;
                mensaje = `${nombre}, costo de clase: ${costo}, Usado:${acumulador}<br>`;
            } else {
                mensaje = `Las horas deben ser positivas <br>`;
            }
        } else {
            mensaje = `El nombre debe comenzar en mayuscula<br>`;
        }
    } else {
        mensaje = `El nombre debe ser entre 5 y 40 caracteres<br>`;
    }
    document.querySelector("#pResultado").innerHTML += mensaje;
}

function ej2() {
    let texto = document.querySelector("#txtTexto").value;
    let mensaje = "";
    let longitud = 0;

    for (let i = 0; i < texto.length; i++) {
        longitud++;
    }
    if (longitud % 2 === 0) {
        mensaje = `Es par!`;
    } else if (longitud % 2 !== 0) {
        mensaje = `Es impar!`;
    }
    document.querySelector("#pResultado1").innerHTML = mensaje;
}