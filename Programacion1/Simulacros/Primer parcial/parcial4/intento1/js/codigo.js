window.addEventListener("load", inicio);
function inicio() {
    document.querySelector("#btnEj1").addEventListener("click", parteB);
}
/**Corregido */
let cantJg = 0;
function parteB() {
    let nombreYApellido = document.querySelector("#txtNYA").value;
    let posicion = document.querySelector("#selectPosicion").value;
    let puntos = Number(document.querySelector("#txtPts").value);
    let rebotes = Number(document.querySelector("#txtRbt").value);
    let faltas = Number(document.querySelector("#txtFlt").value);
    let valorizacion = 0;
    let descripcion = "";
    let mensaje = "";
    let mayus = 0;


    if (cantJg < 12) {
        if (nombreYApellido.charAt(0) === nombreYApellido.charAt(0).toUpperCase()) {
            if (nombreYApellido.length > 4 && nombreYApellido.length < 30) {
                for (let i = 0; i < nombreYApellido.length; i++) {
                    if (nombreYApellido.charAt(i) === " ") {
                        if (nombreYApellido.charAt(i + 1) === nombreYApellido.charAt(i + 1).toUpperCase()) {
                            mayus++;
                        }
                    }
                }
                console.log(mayus)
                if (mayus > 0) {
                    if (puntos >= 0 && rebotes >= 0 && faltas >= 0 && faltas < 5 && !isNaN(puntos) && !isNaN(rebotes) && !isNaN(faltas)) {

                        valorizacion = puntos + rebotes - faltas;

                        if (posicion === "Base") {
                            descripcion = "Malabarista";
                            cantJg++;
                            mensaje = `${nombreYApellido} valorizacion; ${valorizacion} ${posicion} ${descripcion}<br>`
                        }
                        else if (posicion === "Alero") {
                            descripcion = "Tirador";
                            cantJg++;
                            mensaje = `${nombreYApellido} valorizacion; ${valorizacion} ${posicion} ${descripcion}<br>`
                        }
                        else if (posicion === "Pivot") {
                            descripcion = "Rompetableros";
                            cantJg++;
                            mensaje = `${nombreYApellido} valorizacion; ${valorizacion} ${posicion} ${descripcion}<br>`
                        }
                    }
                } else { mensaje = `Debe tener una mayuscula la segunda inicial<br>`; }
            } else {
                mensaje = `El nombre y apellido debe ser entre 4 y 30 caracteres<br>`;
            }
        } else {
            alert(`Verifique que estes comenzando en mayuscula, que el nombre tenga 4 caracteres de largo y que tenga mayusculas.`);
        }
       
    } else {
        mensaje = `Ta se registraron 12 jugadores, reinicie el programa<br>`;
    }
    document.querySelector("#pResultado").innerHTML += mensaje;
}


/*Mi intento
let cantJg = 0;
function parteB() {
    let nombreYApellido = document.querySelector("#txtNYA").value;
    let posicion = document.querySelector("#selectPosicion").value;
    let puntos = Number(document.querySelector("#txtPts").value);
    let rebotes = Number(document.querySelector("#txtRbt").value);
    let faltas = Number(document.querySelector("#txtFlt").value);
    let valorizacion = 0;
    let descripcion = "";
    let mensaje = "";

    if (cantJg > 12) { // el signo iba para el otro lado... 
        let inicial = nombreYApellido.charAt(0);
        if (inicial === inicial.toUpperCase()) {
            let mayus = 1;
            //let caracter = nombreYApellido.charAt(i); //charAt(i) debe estar dentro del for!!
            for (let i = 0; i < nombreYApellido.length; i++) {
                if (caracter.indexOf(` ${caracter.toUpperCase()}` !== -1)) {
                    mayus++;
                }
            }
        }
        if (nombreYApellido.length > 4 && nombreYApellido.length < 30) { //(nombreYApellido > 4 && nombreYApellido < 30 && mayus >= 2)
            let inicial = nombreYApellido.charAt(0);
            if (inicial === inicial.toUpperCase()) {
            console.log(mayus)
            if (puntos >= 0 && rebotes >= 0 && faltas >= 0 && !isNaN(puntos) && !isNaN(rebotes) && !isNaN(faltas) && faltas < 5 && mayus >= 2) {
                valorizacion = puntos + rebotes - faltas;
                if (posicion === "Base") {
                    descripcion = "Malabarista";
                    cantJg++;
                    mensaje += `${nombreYApellido} valorizacion: ${valorizacion} ${posicion} ${descripcion}`
                } else if (posicion === "Alero") {
                    descripcion = "Tirador";
                    cantJg++;
                    mensaje += `${nombreYApellido} valorizacion: ${valorizacion} ${posicion} ${descripcion}`
                } else if (posicion === "Pivot") {
                    descripcion = "Rompetableros";
                    cantJg++;
                    mensaje += `${nombreYApellido} valorizacion: ${valorizacion} ${posicion} ${descripcion}`
                }
            } else {
                mensaje = `Verifique que los valores sean mayores a 0 o faltas menor a 5.`;
            }
        } else {
            alert(`Verifique que las iniciales comiencen en mayuscula o bien el texto sea con un largo entre 4 y 30.`);
        }
    } else {
        mensaje = `Reinicie el programa, ingresp 12 jugadores`;
    }
    document.querySelector("#pResultado").innerHTML += mensaje;
}
*/