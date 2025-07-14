window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnEj1").addEventListener("click", parteB);
}

let contador = 0;
function parteB() {
    let nombreAp = document.querySelector("#txtNYA").value;
    let alquiler = Number(document.querySelector("#txtAlquiler").value);
    let metodo = document.querySelector("#selectPago").value;
    let tieneA = 0;
    let mensaje = "";
    let descuento = 0;


    if (nombreAp.length > 7 && nombreAp.length <= 70) {
        if (!isNaN(alquiler) && alquiler > 0) {
            for (let i = 0; i < nombreAp.length; i++) {
                let caracter = nombreAp.charAt(i);
                if (caracter === "a" || caracter === "A") {
                    tieneA++;
                }
            }
            if (metodo === "Semestral") {
                descuento = alquiler - (alquiler * 0.20);
            } else if (metodo === "Trimestral") {
                descuento = alquiler - (alquiler * 0.05);
            } else if (tieneA >= 2) {
                descuento = alquiler - (alquiler * 0.01);
            } else if (metodo === "Mensual") {
                descuento = alquiler;
            }
            contador++;
            mensaje = `Inquilino: ${nombreAp}. Equivalente mensual: ${descuento}. Calculo N°: ${contador}<br>`;
        } else {
            mensaje = `Verifique que el monto mensual del alquiler sea un numero o un numero positivo<br>`;
        }
    }else{
        mensaje = `Verifique que el nombre del inquilino sea entre 7 y 70 caracteres<br>`;
    }
    document.querySelector("#pResultado").innerHTML += mensaje;
}