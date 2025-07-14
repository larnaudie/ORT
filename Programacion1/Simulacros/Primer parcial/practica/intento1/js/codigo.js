window.addEventListener("load", inicio);
function inicio() {
    document.querySelector("#btnA").addEventListener("click", parteB);
}

let ingresos = 0;                   //falto la variable global
function parteB() {
    let mYM = document.querySelector("#txtAuto").value;
    let km = Number(document.querySelector("#txtKm").value);
    let pais = document.querySelector("#selectPais").value;
    let mYM2 = "";
    let hayMayus = 0;
    let precio = 0;
    let resultado = "";
    let resultado2 = "";

    if (ingresos < 8) {             //Falto el if para verificar que se ingrerse 8 veces.

        for (let i = 0; i < mYM.length; i++) {
            if (mYM.charAt(i) === " ") {
                mYM2 = mYM.charAt(i + 1);
                if (mYM.charAt(i + 1) === mYM2.toUpperCase()) {
                    hayMayus++;
                }
            }
        }
        if (mYM.charAt(0) === mYM.charAt(0).toUpperCase()) {
            if (mYM.length > 8 && mYM.length <= 30 && hayMayus > 0) {

                if (mYM.indexOf(` ${mYM2}`) !== -1 && hayMayus > 0) {
                    resultado += `${mYM}`;
                } else {
                    document.querySelector("#pResultado2").innerHTML = `Revisar la mayuscula del modelo`; //Se cambio resultado = por document.querySelector("#pResultado2").innerHTML =
                }
                if (km > 0) {
                    if (pais === "Argentina") {
                        precio = km * 0.894;
                    } else if (pais === "Uruguay") {
                        precio = km * 1.943;
                    }
                    if (km > 1000) {        //Se debió cambiar el km>500 que estaba aca por el km>1000 y a su vez el 0.15 por el 0.10
                        precio = precio * 0.10;
                        resultado += `- ${precio} <br>`;
                        ingresos++;         //falto el ingresos ++;
                    } else if (km > 500) {
                        precio = precio * 0.15;
                        resultado += ` - ${precio}<br>`;
                        ingresos++;         //falto el ingresos ++;
                    } else if (km <= 500) {
                        precio = precio;
                        resultado += ` - ${precio}<br>`;
                        ingresos++;         //falto el ingresos ++;else{
                    } else {
                        resultado2 = `km debe ser mayor a 0 <br>`;
                    }
                }
            } else {
                resultado2 = `Ingrese valores validos<br> Recuerde, el nombre del modelo debe tener mayuscula<br> Revise si digitó un nombre mayor a 8 caracteres y menor a 30.`; //se cambio el resultado += ``, por esta linea actual.
            }
        } else {
            resultado2 = `La primer letra del modelo debe estar con mayuscula`;
        }

    } else {
        document.querySelector("#pResultado1").innerHTML = `Reinicie aplicacion, ingresó mas de 8 veces.`
    }
    document.querySelector("#pResultado1").innerHTML += resultado; //le falto el +=
    document.querySelector("#pResultado2").innerHTML = resultado2;

}