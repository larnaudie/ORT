function valoresPares(v1, v2) {
    let cantidadPares = 0;
    if (v1 > v2) {
        for (let i = v2; i <= v1; i++) {
            if (i % 2 === 0) {
                cantidadPares++;
            }
        }
    }
    if (v1 < v2) {
        for (let i = v1; i <= v2; i++) {
            if (i % 2 === 0) {
                cantidadPares++;
            }
        }
    }
    return cantidadPares;
}

function esBisiesto(numero) {
    let bisiesto = false;
    let msjBisiesto = "";
    if (numero % 4 === 0 && (numero % 100 !== 0 || numero % 400 === 0)) {
        bisiesto = true
    } else {
        bisiesto = false
    }
    if (bisiesto === true) {
        msjBisiesto = "Es bisiesto";
    } else {
        msjBisiesto = "No es bisiesto";
    }

    return msjBisiesto;
}

function calcularAreaTriangulo(valor1, valor2) {

    if (!isNaN(valor1) && !isNaN(valor2)) {
        let area = (valor1 * valor2) / 2;

        return area;
    } else {
        let msj = "-1";
        return msj;

    }
}

function convertorCelcius(valor1) {
    //5/9 fue lo unico que me convirtio correctametne a Celsius.
    let tempC = Math.round(((valor1 - 32) * (5 / 9)));
    return tempC;
}

function convertorAMedida(valor1, valor2) {
    if (valor2 === "Celsius") {
        let tempC = Math.round((valor1 - 32) / 1.8);
        return tempC;
    } else if (valor2 === "Kelvin") {
        let tempK = Math.round((valor1 + 459.67) / 1.8);
        return tempK;
    } else if (valor2 === "Rankine") {
        let tempRa = Math.round(valor1 - 459.67);
        return tempRa
    } else if (valor2 === "Reaumur") {
        let tempRe = Math.round(((valor1 - 32) / 2.25));
        return tempRe
    }
}

function calcularPotencia(base, exponente) {

    if (!isNaN(base) && !isNaN(exponente)) {
        let potencia = Math.pow(base, exponente);
        return potencia;
    } else {
        let msj = "Asegurar que los datos sean tipos numericos";
        return msj;
    }

}

function invertirTexto(texto) {
    let invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto.charAt(i);
    }
    return invertido;
}

function sueldoLiquido(sueldo, hijos){
    if(sueldo > 10000 && hijos === "Si"){
        sueldo = sueldo - (sueldo * 0.15) - (sueldo * 0.01)
        return sueldo;
    }else if(sueldo > 10000 && hijos === "No"){
        sueldo = sueldo - (sueldo * 0.15)
        return sueldo;
    }else if(sueldo <= 10000 && hijos === "Si"){
        sueldo = 7890
        return sueldo;
    }else if(sueldo <= 10000 && hijos === "No"){
        sueldo = 8040
        return sueldo;
    }
}