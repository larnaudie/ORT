window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnEj1").addEventListener("click", parteB);
}

let registro = 0;
function parteB() {
    let nombreAp = document.querySelector("#txtNYA").value;
    let sueldo = Number(document.querySelector("#txtSueldo").value);
    let posicion = document.querySelector("#selectPosicion").value;
    let mensaje = "";
    let hayMayus = 0;
    let sueldoAnual = 0;

    if (registro <= 10) {
        if (nombreAp.length > 5 && nombreAp.length <= 60) {
            if (nombreAp.charAt(0) === nombreAp.charAt(0).toUpperCase()) {
                hayMayus++;
                for (let i = 1; i < nombreAp.length; i++) {
                    let caracter = nombreAp.charAt(i);
                    if (caracter === " ") {
                        if (nombreAp.charAt(i + 1) === nombreAp.charAt(i + 1).toUpperCase()) {
                            hayMayus++;
                            console.log(`1)${hayMayus}`);
                        }
                    }
                    if(caracter === caracter.toUpperCase() && nombreAp.charAt(i -1)!== " " && caracter !== " "){
                        hayMayus++;
                        console.log(`2)${hayMayus}`);
                    }
                    
                }
                console.log(hayMayus)
                if (hayMayus === 2) {
                    if (sueldo > 0 && !isNaN(sueldo)) {
                        if (posicion === "Delantero" || posicion === "Arquero") {
                            sueldo = sueldo + (sueldo * 0.15);
                        } else if (posicion === "Centro") {
                            sueldo = sueldo + (sueldo * 0.10);
                        } else if (posicion === "Defemsa") {
                            sueldo = sueldo;
                        }
                        sueldoAnual = sueldo * 12;
                        registro++;
                        mensaje = `${nombreAp} ${sueldoAnual}<br>`;
                    } else {
                        mensaje = `Reviste que el sueldo sea mayor a 0 o un valor numerico<br>`;
                    }
                } else {
                    mensaje = `Revise que no tenga mas de 3 mayusculas en el nombre y apellido <br>`;
                }
            } else {
                mensaje = `Revise que el nombre comience en mayuscula<br>`;
            }
        } else {
            mensaje = `Revise que el nombre y apellido este entre 5 y 60 caracteres<br>`;
        }
    } else {
        mensaje = `Reinicie el programa, ingreso 10 jugadores permitidos<br>`;
    }
    document.querySelector("#pResultado").innerHTML += mensaje;
}