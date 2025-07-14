window.addEventListener("load", inicio);
function inicio() {
    document.querySelector("#btnEj1").addEventListener("click", parteB);
}
/**Corregido */
let cantJg = 0;
function parteB() {
    let nombreAp = document.querySelector("#txtNYA").value;
    let puntos = Number(document.querySelector("#txtPuntos").value);
    let rebotes = Number(document.querySelector("#txtRebotes").value);
    let faltas = Number(document.querySelector("#txtFaltas").value);
    let posicion = document.querySelector("#selectPosicion").value;
    let mensaje = "";
    let hayMayus = 0;
    let valoracion = 0;
    let descripcion = "";

    if (cantJg < 12) {
        if (nombreAp.length > 4 && nombreAp.length < 30) {
            if (nombreAp.charAt(0) === nombreAp.charAt(0).toUpperCase()) {
                hayMayus++;
                for (let i = 0; i < nombreAp.length; i++) {
                    let caracter = nombreAp.charAt(i);
                    if (caracter === " ") {
                        if (nombreAp.charAt(i + 1) === nombreAp.charAt(i + 1).toUpperCase()) {
                            hayMayus++;
                        }
                    }
                }
                if (hayMayus >= 2) {
                    if (!isNaN(puntos) && !isNaN(rebotes) && !isNaN(faltas)) {
                        if (puntos >= 0 && rebotes >= 0 && faltas >= 0 & faltas < 5) {
                            if (posicion === "Base") {
                                descripcion = `Malabarista`;
                            } else if (posicion === "Alero") {
                                descripcion = `Tirador`;
                            } else if (posicion === "Pivot") {
                                descripcion = `Rompetableros`;
                            }
                            cantJg++;
                            valoracion = (puntos + rebotes) - faltas;
                            mensaje = `${nombreAp} valoracion:${valoracion} ${posicion} ${descripcion}<br>`;
                        } else {
                            mensaje = `Verifique que las faltan sean menor a 5 o que los numeros sean positivos<br>`;
                        }
                    } else {
                        mensaje = `Verifique que haya colocado un valor numerico en puntos, rebotes o faltas<br>`;
                    }
                }else {
                    mensaje = `Verifique que el apellido comience con mayuscula<br>`;
                }
            }else {
                mensaje = `Verifique que el nombre comience en mayuscula<br>`;
            } 
        } else {
            alert(`Verifique que el largo del nombre sea entre 4 y 30`);
        }
    } else {
        mensaje = `Reinicie el programa, se ingreso 12 jugadores<br>`;
    }
    document.querySelector("#pResultado").innerHTML += mensaje;
}
