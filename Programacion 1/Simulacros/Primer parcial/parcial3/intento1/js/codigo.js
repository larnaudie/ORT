window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnEj2B").addEventListener("click", parteB);
}

let contador = 0;
function parteB() {
    let nYA = document.querySelector("#txtNYA").value;
    let alquiler = Number(document.querySelector("#txtAlq").value);
    let mes = document.querySelector("#selectMes").value;
    let tieneA = 0;
    let resultado = "";


    if (nYA.length > 7 && nYA.length <= 70) {
        if (!isNaN(alquiler) || nYA < 0) {   //PUSE: (!isNaN(alquiler) && nYA > 0)
            for (let i = 0; i < nYA.length; i++) {
                if (nYA.charAt(i) === "a") {
                    tieneA++;
                }
            }
            if (mes === "Trimestral") {
                alquiler = alquiler + alquiler * 0.05; //se le agrego un alquiler + 
                contador++;
                //resultado += `${alquiler} ${nYA} Calculados: ${contador}<br>`//se le agrego br
            } else if (mes === "Semestral") {
                alquiler = alquiler + alquiler * 0.20; //se le agrego un alquiler + 
                contador++;
                //resultado += `${alquiler} ${nYA} Calculados: ${contador}<br>` //se le agrego br

            } else if (mes === "Mensual") {
                alquiler = alquiler;
                contador++;
                //resultado += `${alquiler} ${nYA} Calculados: ${contador}<br>`//se le agrego br
            }
            if (tieneA >= 2) { //se agrego >= 2, estaba en >0
                alquiler = alquiler + alquiler * 0.01; //se le agrego un alquiler + 
                resultado += `${alquiler} ${nYA} Calculados: ${contador}<br>`
            }else{ //se agrego este else
                resultado += `${alquiler} ${nYA} Calculados: ${contador}<br>`
            }
        } else {
            resultado = `El resultado no puede ser menor a 0 o distinto a numero <br>`;
        }
    } else {
        resultado = `El nombre es muy chico o largo <br>`;
    }
    document.querySelector("#pResultado").innerHTML += resultado;
}