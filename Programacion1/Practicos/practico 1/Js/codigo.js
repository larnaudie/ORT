window.addEventListener("load", inicio);

function inicio(){
    document.querySelector("#btnFormatearEj1").addEventListener("click", formatear);
    document.querySelector("#btnSumarEj2").addEventListener("click", sumarValores);
    document.querySelector("#btn3ValoresEj3").addEventListener("click", sumar3Valores);
    document.querySelector("#btn2ValoresEj4").addEventListener("click", sumaYMultEj4);
    document.querySelector("#btnAreaEj5").addEventListener("click", areaCuadrado);
    document.querySelector("#btnUYUUSDEj6").addEventListener("click", conversionUYUSD);
    document.querySelector("#btnDividirEj7").addEventListener("click", hallandoRestoEj7);
    document.querySelector("#btnEj8").addEventListener("click", sumandoTotalMenos1ValorEj8);
    document.querySelector("#btnEj9").addEventListener("click", alCuadradoMenos2ValoresEj9);
    document.querySelector("#btnEj10").addEventListener("click", porcentajeEj10);
    document.querySelector("#btnEj11").addEventListener("click", ivaEj11);
    document.querySelector("#btnEj12").addEventListener("click", masaCorporalEj12);
    document.querySelector("#btnEj13").addEventListener("click", btnAumentaEj13);
    document.querySelector("#btnEj14").addEventListener("click", btnAumentaEj14);
    document.querySelector("#btnEj15").addEventListener("click", btnAumentaEj15);
    document.querySelector("#btnEj16").addEventListener("click", btnAumentaEj16);
    document.querySelector("#btnEj17").addEventListener("click", btnAumentaEj17);

}

function formatear() {

    let nombre = document.querySelector("#txtNombreEj1").value;

    let apellido = document.querySelector("#txtApellidoEj1").value;    

    let formatoFinal = apellido + " " + nombre;

    document.querySelector("#pResultadoEj1").innerHTML = formatoFinal;
}

function sumarValores(){
    let sumando1 = Number(document.querySelector("#txtSumando1Ej2").value);

    let sumando2 = Number(document.querySelector("#txtSumando2Ej2").value);

    let sumaCalculadora = sumando1 + sumando2;

    document.querySelector("#pResultadoEj2").innerHTML = sumaCalculadora;
}

function sumar3Valores(){
    let sumando1 = Number(document.querySelector("#txtValor1Ej3").value);

    let sumando2 = Number(document.querySelector("#txtValor2Ej3").value);
    
    let sumando3 = Number(document.querySelector("#txtValor3Ej3").value);

    let sumaCalculadora = sumando1 + sumando2 + sumando3

    document.querySelector("#pResultadoEj3").innerHTML = sumaCalculadora;

}

function sumaYMultEj4(){
    let sumando1 = Number(document.querySelector("#txtValor1Ej4").value);

    let sumando2 = Number(document.querySelector("#txtValor2Ej4").value);

    let sumaTotal = sumando1 + sumando2;

    let multiplicacion = sumando1 * sumando2;

    document.querySelector("#pResultadoSumaEj4").innerHTML =  sumaTotal
    document.querySelector("#pResultadoMultiplicacionEj4").innerHTML = multiplicacion

}

function areaCuadrado(){
    let valor1 = Number(document.querySelector("#txtValor1Ej5").value);

    let sumaArea = valor1 * valor1

    document.querySelector("#pResultadoSumaEj5").innerHTML =  sumaArea
}

function conversionUYUSD(){

    let valor1 = Number(document.querySelector("#txtValor1Ej6").value);

    let conversion =(valor1 * 0.040).toFixed(2)

    document.querySelector("#pResultadoSumaEj6").innerHTML =  "USD" + " " + conversion

}

function hallandoRestoEj7(){
    let sumando1 = Number(document.querySelector("#txtValor1Ej7").value);

    let sumando2 = Number(document.querySelector("#txtValor2Ej7").value);

    let resto = sumando1 % sumando2 ;

    document.querySelector("#pResultadoEj7").innerHTML =  resto;
}

function sumandoTotalMenos1ValorEj8(){
    let sumando1 = Number(document.querySelector("#txtValor1Ej8").value);

    let sumando2 = Number(document.querySelector("#txtValor2Ej8").value);

    let sumando3 = Number(document.querySelector("#txtValor3Ej8").value);

    let sumaTotalEj8 = (sumando1 + sumando2) - sumando3;

    document.querySelector("#pResultadoEj8").innerHTML =  sumaTotalEj8;

}

function alCuadradoMenos2ValoresEj9(){
    let sumando1 = Number(document.querySelector("#txtValor1Ej9").value);

    let sumando2 = Number(document.querySelector("#txtValor2Ej9").value);

    let sumando3 = Number(document.querySelector("#txtValor3Ej9").value);

    let sumaTotalEj9 = (sumando1 ** 2) - (sumando2 + sumando3);

    document.querySelector("#pResultadoEj9").innerHTML =  sumaTotalEj9;
}


function porcentajeEj10(){
    let valor1 = Number(document.querySelector("#txtValor1Ej10").value);

    let porcentaje = Number(document.querySelector("#txtPorcentajeEj10").value);

    let importe = (valor1 * porcentaje) / 100;

    let  importeFinal = valor1 + importe

    document.querySelector("#pResultadoEj10").innerHTML =  importeFinal;

}

function ivaEj11(){

    let valor1 = Number(document.querySelector("#txtValor1Ej11").value);

    let iva = Number((valor1 * 0.21).toFixed(2));

    let resultadoFinal = iva + valor1;

    document.querySelector("#pResultadoEj11").innerHTML = resultadoFinal;
}

function masaCorporalEj12() {

    let estatura = Number(document.querySelector("#txtEstaturaEj12").value);
    let peso = Number(document.querySelector("#txtPesoEj12").value);

    let imc = (peso / (estatura * estatura)).toFixed(2);

    document.querySelector("#pResultadoEj12").innerHTML = imc;

}

let contador = 0;
function btnAumentaEj13 (){
    contador++;
    document.querySelector("#pResultadoEj13").innerHTML = contador;

}

let contadorDeA3 = 0;
function btnAumentaEj14 (){
    contadorDeA3 = contadorDeA3 + 3;
    document.querySelector("#pResultadoEj14").innerHTML = contadorDeA3;

}

let contadorEj15 = 0;
function btnAumentaEj15 (){
    contadorEj15 = contadorEj15 + Number(document.querySelector("#txtValor1Ej15").value);
    document.querySelector("#pResultadoEj15").innerHTML = contadorEj15;

}

function btnAumentaEj16 (){
    let partidosGanados = Number(document.querySelector("#txtPartidosGanadosEj16").value);
    let partidosPerdidos = Number(document.querySelector("#txtPartidosPerdidosEj16").value);
    let partidosEmpatados = Number(document.querySelector("#txtPartidosEmpatadosEj16").value);

    let totalPartidosGanados = partidosGanados * 3;
    let totalPartidosPerdidos = partidosPerdidos * 0;
    let totalPartidosEmpatados = partidosEmpatados * 1;

    let puntajeFinal = totalPartidosGanados + totalPartidosPerdidos + totalPartidosEmpatados;

document.querySelector("#pResultadoEj16").innerHTML = puntajeFinal;
}

function btnAumentaEj17(){

    let chirridosXMin = Number(document.querySelector("#txtchirridosEj17").value);

    let tempF = (50 + ((chirridosXMin - 40 )/4));

    //No me dio la conversion correcta con 1.8 o 1,8
    //let tempC = Math.round(((tempF - 32) * (1.8)));
    //let tempC = Math.round(((tempF - 32) * (1,8)));

    //5/9 fue lo unico que me convirtio correctametne a Celsius.
    let tempC = Math.round(((tempF - 32) * (5/9)));

    
    document.querySelector("#pResultado1Ej17").innerHTML = "Tempreatura en Fahrenheit: " + tempF;
    document.querySelector("#pResultado2Ej17").innerHTML = "Tempreatura en Celcius: " + tempC;
}
