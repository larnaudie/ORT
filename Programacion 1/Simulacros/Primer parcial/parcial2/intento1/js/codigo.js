window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnPB").addEventListener("click", parteB);
}

let histrico = 0;
function parteB() {
    let nYA = document.querySelector("#txtNyA").value;
    let sueldo = Number(document.querySelector("#txtSueldo").value);
    let posicion = document.querySelector("#selectLugar").value;
    let contadorMayus = 0;
    let sueldoAnual = 0;
    let mensaje = "";

    if (histrico < 10) {
        if (nYA.length > 5 && nYA.length <= 60 && sueldo >= 0 && !isNaN(sueldo)) {
            if (nYA.charAt(0) === nYA.charAt(0).toUpperCase()) {
                for (let i = 0; i < nYA.length; i++) {
                    if (nYA.charAt(i) === nYA.charAt(i).toUpperCase()) {
                        contadorMayus++;
                    }
                }
                if (contadorMayus <= 3) {
                    if (posicion === "Delantero" || posicion === "Arquero") {
                        sueldo = sueldo + (sueldo * 0.15);
                        sueldoAnual = sueldo * 12;
                        histrico++;
                        mensaje += `${nYA} ${sueldoAnual} <br>`;
                    } else if (posicion === "Centro") {
                        sueldo = sueldo + (sueldo * 0.10);
                        sueldoAnual = sueldo * 12;
                        histrico++;
                        mensaje += `${nYA} ${sueldoAnual} <br>`;
                    } else {
                        sueldoAnual = sueldo * 12;
                        histrico++;
                        mensaje += `${nYA} ${sueldoAnual}`;
                    }
                } else {
                    mensaje = "El nombre y Apellido tiene mas de 3 mayusculas";
                }
            } else {
                mensaje = "El nombre debe comenzar con mayuscula";
            }
        } else {
            mensaje = "Revisar: Nombre invalido, valor no numerico o valor negativo";
        }
    } else {
        mensaje = "Llegó al limite de consultas, reinicie";
    }
    document.querySelector("#pResultado1").innerHTML += mensaje;

}