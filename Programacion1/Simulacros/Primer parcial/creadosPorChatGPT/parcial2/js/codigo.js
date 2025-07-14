window.addEventListener("load", inicio);
function inicio() {
    document.querySelector("#btnEj1").addEventListener("click", parteB);
    document.querySelector("#btnBoton").addEventListener("click", ej2);
}

function ej2() {
    let texto = document.querySelector("#txtTexto").value;
    let contadorL = 0;
    let contadorN = 0;
    let mensaje = "";

    for (let i = 0; i < texto.length; i++) {
        let caracter = texto.charAt(i);
        if (caracter !== "A" && caracter !== "a" &&
            caracter !== "E" && caracter !== "e" &&
            caracter !== "I" && caracter !== "i" &&
            caracter !== "O" && caracter !== "o" &&
            caracter !== "U" && caracter !== "u" &&
            isNaN(caracter)) {
            contadorL++;
        }
        if (!isNaN(caracter) && caracter >= 0 && caracter <= 9) {
            contadorN++;
        }
    }
    mensaje = `Los numeros aparecen ${contadorN} veces y las letras aparecen ${contadorL} veces`;
    document.querySelector("#pResultado").innerHTML = mensaje;
}

let acumulador = 0;
function parteB() {
    let nombreAp = document.querySelector("#txtNYA").value;
    let clase = document.querySelector("#selectClase").value;
    let promo = document.querySelector("#txtPromo").value;
    let edad = Number(document.querySelector("#txtEdad").value);
    let mensaje = "";
    let hayMayus = 0;
    let costo = 0;

    if (acumulador <= 10) {
        if (nombreAp.charAt(0) === nombreAp.charAt(0).toUpperCase()) {
            hayMayus++;
            if (nombreAp.length >= 5 && nombreAp.length <= 50) {

                for (let i = 0; i < nombreAp.length; i++) {
                    let caracter = nombreAp.charAt(i);
                    if (caracter === " ") {
                        if (nombreAp.charAt(i + 1) === nombreAp.charAt(i + 1).toUpperCase()) {
                            hayMayus++;
                        }
                    }
                }
                if (hayMayus >= 2) {
                    if (clase === "Primera Clase") {
                        costo = 1200;
                    } else if (clase === "Business") {
                        costo = 600;
                    } else if (clase === "Economica") {
                        costo = 200;
                    }
                    if (clase === "Business" && promo.indexOf("VIP") !== -1) {
                        costo = costo - (costo * 0.15);
                    }
                    if (edad >= 60) {
                        costo = costo - (costo * 0.10);
                    }
                    mensaje = `Tu costo es: $${costo}, tu codigo es:${promo}, N°Registro:${acumulador}<br>`;
                    acumulador++;
                } else {
                    mensaje = `Verifique que el apellido tenga mayusculas<br>`;
                }
            } else {
                mensaje = `Verifique que el nombre sea entre 5 y 50 caracteres<br>`;
            }
        } else {
            mensaje = `Verifique que el nombre empiece con mayuscula<br>`;
        }
    }else{
        mensaje = `Limite de reservas alcanzado, reinicie el programa<br>;`
    }
    document.querySelector("#pResultado").innerHTML += mensaje;
}