window.addEventListener("load", inicio);

function inicio(){
    document.querySelector("#btnVerificar").addEventListener("click", tomarDatos);
}

function tomarDatos(){
    let tarjetaCampo = document.querySelector("#txtTarjeta").value;
    let resultadoFinal = validarTarjeta(tarjetaCampo);
    if(resultadoFinal){
        document.querySelector("#pResultado").innerHTML = "Tarjeta OK";
    }else{
        document.querySelector("#pResultado").innerHTML = "Tarjeta Inválida";
    }
}

//nroTarjeta:string
function validarTarjeta(nroTarjeta){
    let dev = false;
    let digitoVerificar = nroTarjeta.charAt(nroTarjeta.length - 1);
    let acumulador = 0;
    let cont = 0;
    for(let i = nroTarjeta.length - 2; i >= 0 ; i--){
        let num = Number(nroTarjeta.charAt(i));
        if(cont % 2 === 0){
            //se duplica
            let duplicado = num * 2;
            if(duplicado >= 10){
                // let duplicadoStr = String(duplicado);
                // let resultado = Number(duplicadoStr.charAt(0)) + Number(duplicadoStr.charAt(1));
                // acumulador += resultado;
                acumulador += (duplicado - 9);
            }else{
                acumulador += duplicado;
            }
        }else{
            //no se duplica
            acumulador += num;
        }
        cont++;
    }

    let multiplicado = acumulador * 9;
    let multiplicadoStr = String(multiplicado);
    let digitoVerificador = multiplicadoStr.charAt(multiplicadoStr.length - 1);

    if(digitoVerificar === digitoVerificador){
        dev = true;
    }

    return dev;
}

