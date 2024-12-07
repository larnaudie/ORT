window.addEventListener("load", inicio);
function inicio() {
    document.querySelector("#btnEj1").addEventListener("click", parteB);
}
let historico = 0;
function parteB() {
    let mYM = document.querySelector("#txtMYM").value;
    let km = Number(document.querySelector("#txtKm").value);
    let pais = document.querySelector("#selectPais").value;
    let mensaje = "";
    let hayMayus = 0;
    let precio = 0;


    if (historico <= 8) {

        if (mYM.length > 8 && mYM.length <= 30) {

            if (mYM.charAt(0) === mYM.charAt(0).toUpperCase()) {

                for (let i = 0; i < mYM.length; i++) {

                    let caracter = mYM.charAt(i)
                    if (caracter === " ") {

                        if (mYM.charAt(i + 1) === mYM.charAt(i + 1).toUpperCase()) {

                            hayMayus++;
                        }
                    }
                }
                if (hayMayus > 0) {

                    if (km > 0 && !isNaN(km)) {

                        if (pais === "Argentina") {
                            c
                            precio = km * 0.894;
                        } else if (pais === "Uruguay") {
                            c
                            precio = km * 1.943;
                        }
                        if (km > 1000) {
                            c
                            precio = precio * 0.15;
                        } else if (km > 500) {
                            c
                            precio = precio * 0.10;
                        } else {
                            c
                            precio = precio;
                        }
                        c
                        mensaje = `${mYM} - ${precio}<br>`;
                        historico++;
                    } else {
                        c
                        mensaje = `Verigique ue el recorrido sea mayor a 0 y numerico<br>`;
                    }
                } else {
                    c
                    mensaje = `Verifique que el modelo este con inicial en mayuscula<br>`;
                }
            } else {
                c
                mensaje = `Verifique que la marca este en mayuscula<br>`;
            }
        } else {
            c
            mensaje = `Verifique que el texto este entre 8 y 30 caracteres<br>`;
        }
    } else {
        c
        mensaje = `Excedio los registros, reinicie el programa<br>`;
    }
    document.querySelector("#pResultado").innerHTML += mensaje;
}