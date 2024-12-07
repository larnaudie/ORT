window.addEventListener("load", inicio);

function inicio() {

    document.querySelector("#btnMostrarEj1").addEventListener("click", negativoOPositivo);
    document.querySelector("#btnMostrarEj2").addEventListener("click", mayorA10);
    document.querySelector("#btnMostrarEj3").addEventListener("click", mayorQue20);
    document.querySelector("#btnMostrarEj4").addEventListener("click", ConvertirAPositivo);
    document.querySelector("#btnMostrarEj5").addEventListener("click", mayorQ10yY20);
    document.querySelector("#btnMostrarEj6").addEventListener("click", multiple7Y3);
    document.querySelector("#btnMostrarEj7").addEventListener("click", menorQYMayorQ20);
    document.querySelector("#btnMostrarEj8").addEventListener("click", entre10Y30);
    document.querySelector("#btnMostrarEj9").addEventListener("click", appDecisiones);
    document.querySelector("#btnMostrarEj10").addEventListener("click", restandoEntreSi);
    document.querySelector("#btnMostrarEj11").addEventListener("click", operaciones);
    document.querySelector("#btnMostrarEj12").addEventListener("click", vocalONo);
    document.querySelector("#btnMostrarEj13").addEventListener("click", sonMultiplosEntreSi);
    document.querySelector("#btnMostrarEj14").addEventListener("click", planViajero);
    document.querySelector("#btnMostrarEj15").addEventListener("click", departamentoCodigo);
    document.querySelector("#btnMostrarEj16").addEventListener("click", Ej16);
    document.querySelector("#btnMostrarEj17").addEventListener("click", aRango);
    document.querySelector("#btnMostrarEj18").addEventListener("click", seisNumeros);
    document.querySelector("#btnMostrarEj19").addEventListener("click", cincoNumeros);
    document.querySelector("#btnMostrarEj20").addEventListener("click", recetas);
    document.querySelector("#btnMostrarEj21").addEventListener("click", empresaBienes);
    document.querySelector("#btnMostrarEj22").addEventListener("click", descuento4);
    document.querySelector("#btnMostrarEj23").addEventListener("click", notaAlumnos);
    document.querySelector("#btnMostrarEj24").addEventListener("click", sueldos);
    document.querySelector("#btnMostrarEj25").addEventListener("click", sistemaXPedidos);
    document.querySelector("#btnMostrarEj26").addEventListener("click", hotel);
    document.querySelector("#btnIngresarEj27").addEventListener("click", programaDeJuego);
    document.querySelector("#btnComenzarEj28").addEventListener("click", cartas);
    document.querySelector("#btnIngresarEj29").addEventListener("click", taTeTi);
    document.querySelector("#btnComenzarEj30").addEventListener("click", taTeTiPersonalizado);

}

function negativoOPositivo() {
    let numero = Number(document.querySelector("#txtNumeroEj1").value);
    let resultado;

    if (numero > 0) {
        resultado = "Positivo";
    } else {
        resultado = "Negativo";
    }

    document.querySelector("#pMostrarEj1").innerHTML = resultado;
}

function mayorA10() {
    let numero = Number(document.querySelector("#txtNumeroEj2").value);
    let resultado;

    if (numero > 10) {
        resultado = "mayor que 10";
    } else {
        resultado = "Es menor o igual a 10"
        alert("Es menor o igual a 10");
    }
    document.querySelector("#pMostrarEj2").innerHTML = resultado;
}

function mayorQue20() {
    let numero = Number(document.querySelector("#txtNumeroEj3").value);
    let resultado;

    if (numero > 20) {
        resultado = "es mayor que 20";
    } else {
        resultado = "es menor o igual a 20"
    }
    document.querySelector("#pMostrarEj3").innerHTML = resultado;
}

function ConvertirAPositivo() {

    let numero = Number(document.querySelector("#txtNumeroEj4").value);
    let resultado;

    if (numero < 0) {
        resultado = `El numero es negativo, ahora queda: ` + numero * -1;
    } else {
        resultado = `El numero es positivo, queda: ` + numero;
    }
    document.querySelector("#pMostrarEj4").innerHTML = resultado;
}

function mayorQ10yY20() {

    let numero = Number(document.querySelector("#txtNumeroEj5").value);
    let resultado;

    if (numero > 10 && numero < 20) {
        resultado = `es mayor que 10 y menor que 20, ingresaste ${numero}`;
    } else {
        resultado = `es menor o igual a 10 o mayor o igual a 20, ingresaste ${numero}`
    }
    document.querySelector("#pMostrarEj5").innerHTML = resultado;

}

function multiple7Y3() {

    let numero = Number(document.querySelector("#txtNumeroEj6").value);
    let resultado;

    if (numero % 7 === 0 && numero % 3 === 0) {
        resultado = `es múltiplo de 7 y de 3, ingresaste ${numero}`;
    } else {
        resultado = `no es multiplo, ingresaste: ${numero}`
    }
    document.querySelector("#pMostrarEj6").innerHTML = resultado;
}

function menorQYMayorQ20() {

    let numero = Number(document.querySelector("#txtNumeroEj7").value);
    let resultado;

    if (numero <= -20 || numero >= 20) {
        resultado = `ingresaste ${numero}`;
        alert("CUMPLE");
    } else {
        resultado = `ingresaste ${numero}`;
        alert("NO CUMPLE");
    }
    document.querySelector("#btnMostrarEj7").addEventListener("click", mayorQ10yY20);

}

function entre10Y30() {

    let numero = Number(document.querySelector("#txtNumeroEj8").value);
    let resultado;

    if (numero > 30) {
        resultado = `es mayor que 30`
    } else if (numero < 10) {
        resultado = `es menor que 10`
    } else {
        resultado = `entre 10 y 30`
    }
    document.querySelector("#pMostrarEj8").innerHTML = resultado;
}

function appDecisiones() {

    let dia = document.querySelector("#txtTempEj9").value;
    let temp = document.querySelector("#txtNumeroEj9").value;
    let resultado = `Levantarse. <br>`;

    switch (dia) {
        case "Domingo":
            resultado += `Es domingo, no trabajas <br>`;
            break;
        default:
            resultado += `Ir al Trabajo <br>`;
            break;
    }

    //Si no agrego el if dia===domingo, cuando sea domingo, 
    //me anida el resultado "Es domingo no trabajas"
    //con la temperatura, de este modo bloqueo mostrar temp cuando es domingo

    if (temp < 10) {
        resultado += `Abrigarse mucho <br>`
    } else if (temp > 20) {
        resultado += `Ponerse Ropa comoda <br>`
    } else {
        resultado += `Abrigo moderado <br>`
    }
    document.querySelector("#pMostrarEj9").innerHTML = resultado;

}

function restandoEntreSi() {

    let num1 = Number(document.querySelector("#txtNumero1Ej10").value);
    let num2 = Number(document.querySelector("#txtNumero2Ej10").value);
    let resultado;

    if (num1 > num2) {
        resultado = num1 - num2;
    } else {
        resultado = num2 - num1;
    }
    document.querySelector("#pMostrarEj10").innerHTML = resultado;
}

function operaciones() {

    let num1 = Number(document.querySelector("#txtNumero1Ej11").value);
    let num2 = Number(document.querySelector("#txtNumero2Ej11").value);
    let operacion = document.querySelector("#txtOperacionEj11").value;
    let resultado;

    //Nunca te da negativos.
    if (num1 > num2) {
        switch (operacion) {
            case "Sumar":
                resultado = num1 + num2;
                break;
            case "Restar":
                resultado = num1 - num2;
                break;
            case "Multiplicar":
                resultado = num1 * num2;
                break;
            case "Dividir":
                resultado = num1 / num2;
                break;
        }
    } else {
        switch (operacion) {
            case "Sumar":
                resultado = num2 + num1;
                break;
            case "Restar":
                resultado = num2 - num1;
                break;
            case "Multiplicar":
                resultado = num2 * num1;
                break;
            case "Dividir":
                resultado = num2 / num1;
                break;
        }
    }
    /*Con numeros negativos;
    switch (operacion) {
        case "Sumar":
            resultado = num1 + num2;
            break;
        case "Restar":
            resultado = num1 - num2;
            break;
        case "Multiplicar":
            resultado = num1 * num2;
            break;
        case "Dividir":
            resultado = num1 / num2;
            break;
    }*/

    document.querySelector("#pMostrarEj11").innerHTML = resultado;
}

function vocalONo() {

    let letra = document.querySelector("#txtLetraEj12").value;
    let resultado;

    switch (letra) {
        case "a":
        case "A":
            resultado = `${letra} Es vocal`;
            break;
        case "e":
        case "E":
            resultado = `${letra} Es vocal`;
            break;
        case "i":
        case "I":
            resultado = `${letra} Es vocal`;
            break;
        case "o":
        case "O":
            resultado = `${letra} Es vocal`;
            break;
        case "u":
        case "U":
            resultado = `${letra} Es vocal`;
            break;
        default:
            resultado = `${letra} No es vocal`;
            break;
    }
    document.querySelector("#pMostrarEj12").innerHTML = resultado;
}

function sonMultiplosEntreSi() {
    let num1 = Number(document.querySelector("#txtNumero1Ej13").value);
    let num2 = Number(document.querySelector("#txtNumero2Ej13").value);

    if (num1 % num2 === 0) {
        resultado = `${num1} es multiplo de ${num2}`;
    } else {
        resultado = `${num1} no es multiplos de ${num2}`;
    }
    document.querySelector("#pMostrarEj13").innerHTML = resultado;
}

function planViajero() {
    let millas = Number(document.querySelector("#txtMillasEj14").value);
    let viajeroPlus = document.querySelector("#txtViajeroPlusEj14").value;
    let resultado;

    if (viajeroPlus === "Si") {
        millas = millas * 2;
    } else {
        millas = millas;
    }

    if (millas >= 60000) {
        resultado = `Con ${millas} Puede viajar a Europa`;
    } else if (millas >= 30000) {
        resultado = `Con ${millas} Puede viajar a America del Norte`;
    } else if (millas >= 15000) {
        resultado = `Con ${millas} Puede viajar a America del Sur`;
    } else {
        resultado = `Millas insuficientes, No puede viajar`;
    }
    document.querySelector("#pMostrarEj14").innerHTML = resultado;
}

function departamentoCodigo() {

    let codigo = document.querySelector("#txtCodigoEj15").value;
    let resultado;

    switch (codigo) {
        case "A":
        case "a":
            resultado = "Canelones";
            break;
        case "B":
        case "b":
            resultado = "Maldonado";
            break;
        case "C":
        case "c":
            resultado = "Rocha";
            break;
        case "D":
        case "d":
            resultado = "Treinta y Tres";
            break;
        case "E":
        case "e":
            resultado = "Cerro Largo";
            break;
        case "F":
        case "f":
            resultado = "Rivera";
            break;
        case "G":
        case "g":
            resultado = "Artigas";
            break;
        case "H":
        case "h":
            resultado = "Salto";
            break;
        case "I":
        case "i":
            resultado = "Paysandú";
            break;
        case "J":
        case "j":
            resultado = "Rio Negro";
            break;
        case "K":
        case "k":
            resultado = "Soriano";
            break;
        case "L":
        case "l":
            resultado = "Colonia";
            break;
        case "M":
        case "m":
            resultado = "San José";
            break;
        case "N":
        case "n":
            resultado = "Flores";
            break;
        case "O":
        case "o":
            resultado = "Florida";
            break;
        case "P":
        case "p":
            resultado = "Lavalleja";
            break;
        case "Q":
        case "q":
            resultado = "Durazno";
            break;
        case "R":
        case "r":
            resultado = "Tacuarembó";
            break;
        case "S":
        case "s":
            resultado = "Montevideo";
            break;
        default:
            resultado = `Ingrese un codigo de la A-S`;
            break;
    }
    document.querySelector("#pMostrarEj15").innerHTML = resultado;
}

function Ej16() {

    let a = Number(document.querySelector("#txtNumero1Ej16").value);
    let b = Number(document.querySelector("#txtNumero2Ej16").value);
    let c = Number(document.querySelector("#txtNumero3Ej16").value);
    let resultado;

    if (a > b && a > c) {
        resultado = `el valor a es el mayor; ${a}`
    } else if (b > a && b > c) {
        resultado = `el valor b es el mayor; ${b}`
    } else {
        resultado = `el valor c es el mayor; ${c}`
    }
    document.querySelector("#pMostrarEj16").innerHTML = resultado;
}

function aRango() {
    let a = Number(document.querySelector("#txtNumero1Ej17").value);
    let resultado;

    if (a < 0) {
        resultado = `Esta fuera de rango debajo de 0`;
    } else if (a > 10) {
        resultado = `Esta fuera de rango por encima de 10`;
    } else {
        resultado = `Esta en rango`;
    }
    document.querySelector("#pMostrarEj17").innerHTML = resultado;
}

let contador = 0;
let cuentaRegresiva = 6;
let cuentaPrograsiva = 0;
function seisNumeros() {
    let num = Number(document.querySelector("#txtNumerosEj18").value);
    let resultado;

    contador += num;
    cuentaRegresiva--;
    cuentaPrograsiva++;

    if (cuentaRegresiva === 1) {
        resultado = `Has sumado un ${num}: ${contador}, <br>
                     vas ${cuentaPrograsiva} numeros <br>
                      te queda el ultimo numero`;

    } else if (cuentaRegresiva > 0) {
        resultado = `Has sumado un ${num}, en total: ${contador}, <br>
                    vas ${cuentaPrograsiva} numeros <br>
                    te quedan ${cuentaRegresiva} numeros`;
    } else {
        resultado = `Se te acabaron los numeros, tu resultado final es: ${contador}`;
    }
    document.querySelector("#pMostrarEj18").innerHTML = resultado;
}


let contadorEj19 = 0;
let contadorDeMultiplos = 0;
let contadorDeMas20 = 0;
let contadorParaAmbos = 0;
let contadorParaNinguno = 0;
function cincoNumeros() {
    let num = Number(document.querySelector("#txtNumerosEj19").value);
    let resultado;

    contadorEj19++;
    if (num % 5 === 0 && num > 20 && contadorEj19 < 6) {
        contadorParaAmbos++;
        resultado = `El numero ${num} es multiplo de 5 y es mayor a 20 <br>
                    Vas ${contadorEj19} numeros`;
    } else if (num % 5 === 0 && contadorEj19 < 6) {
        contadorDeMultiplos++;
        resultado = `El numero ${num} es multiplo de 5 pero menor a 20 <br>
                    Vas ${contadorEj19} numeros`;

    } else if (num > 20 && contadorEj19 < 6) {
        contadorDeMas20++;
        resultado = `El numero ${num} es mayor a 20 <br>
                    Vas ${contadorEj19} numeros`;
    } else if (num < 20 && num % 5 !== 0 && contadorEj19 < 6) {
        contadorParaNinguno++;
        resultado = `El numero ${num} no es multiplo de 5 ni es mayor a 20 <br>
                    Vas ${contadorEj19} numeros`;
    } else {
        resultado = `Se acabaron los numeros<br>
                    Los resultados fueron: <br>
                    Multiplos de 5: ${contadorDeMultiplos} <br>
                    Mas de 20: ${contadorDeMas20} <br>
                    Para ambos: ${contadorParaAmbos} <br>
                    Para ninguno: ${contadorParaNinguno}`;
    }
    document.querySelector("#pMostrarEj19").innerHTML = resultado;
}

function recetas() {

//Me apoye en busquedas en este ejercicio.
let azucar = Number(document.querySelector("#txtAzucarEj20").value) || 0;
let harina = Number(document.querySelector("#txtHarinaEj20").value) || 0;
let aceite = Number(document.querySelector("#txtAceiteEj20").value) || 0;
let agua = Number(document.querySelector("#txtAguaEj20").value) || 0;

let ingredienteAzucar = azucar / 1;
let ingredienteHarina = harina / 100;
let ingredienteAceite = aceite / 1;
let ingredienteAgua = agua / 1;

let cantidadMaximaRecetas;
if (ingredienteAzucar <= ingredienteHarina && ingredienteAzucar <= ingredienteAceite && ingredienteAzucar <= ingredienteAgua) {
    cantidadMaximaRecetas = ingredienteAzucar;
} else if (ingredienteHarina <= ingredienteAzucar && ingredienteHarina <= ingredienteAceite && ingredienteHarina <= ingredienteAgua) {
    cantidadMaximaRecetas = ingredienteHarina;
} else if (ingredienteAceite <= ingredienteAzucar && ingredienteAceite <= ingredienteHarina && ingredienteAceite <= ingredienteAgua) {
    cantidadMaximaRecetas = ingredienteAceite;
} else {
    cantidadMaximaRecetas = ingredienteAgua;
}

document.querySelector("#pMostrarEj20").innerHTML = `Puedes hacer: ${cantidadMaximaRecetas} recetas`;
}


function empresaBienes() {

    let ingresosComprador = Number(document.querySelector("#txtIngresosEj21").value);
    let costoDeLaCasa = Number(document.querySelector("#txtCostoDeLaCasaEj21").value);
    let primerPago;
    let restoPago;
    let resultado;

    if (ingresosComprador < 20000) {
        primerPago = (costoDeLaCasa * 15) / 100;
        restoPago = (costoDeLaCasa * 85) / 100;
        resultado = `El primer pago es: ${primerPago}, el resto es: ${restoPago / 12} por 7 años.`;
    } else if (ingresosComprador >= 20000) {
        primerPago = (costoDeLaCasa * 30) / 100;
        restoPago = (costoDeLaCasa * 70) / 100;
        resultado = `El primer pago es: ${primerPago}, el resto del pago será< es: ${restoPago / 12} por 1 año.`;
    } else {
        resultado = `El ingreso: ${ingresosComprador}, no es valido`;
    }
    document.querySelector("#pMostrarEj21").innerHTML = resultado;

}

function descuento4() {
    let compra = Number(document.querySelector("#txtCompraEj22").value);
    let tarjeta = document.querySelector("#txtTarjetaEj22").value;
    let desc = (4 * compra) / 100;
    let resultado;

    if (compra > 10000 || (compra < 10000 && tarjeta === "No")) {
        resultado = `El coste final es de: ${compra}`;
    } else if (compra < 10000 && tarjeta === "Si") {
        resultado = `El coste final es de: ${compra - desc}`;
    } else {
        resultado = `Ingrese un monto valido`;
    }
    document.querySelector("#pMostrarEj22").innerHTML = resultado;
}

let contadorPerdieronEj23 = 0;
let contadorExcelenteNotaEj23 = 0;
let contadorAprobadosEj23 = 0;
let contadorNotasEj23 = 0;
let contadorTotalEj23 = 0;
let notaMasBajaEj23;
let notaMasAltaEj23;
function notaAlumnos() {
    let nota = Number(document.querySelector("#txtNotaEj23").value);
    let resultado;

    contadorNotasEj23++;

    if (notaMasAltaEj23 === undefined || nota > notaMasAltaEj23) {
        notaMasAltaEj23 = nota;
    } /*else {
        notaMasAltaEj23 = notaMasAltaEj23;
    }*/

    if (notaMasBajaEj23 === undefined || nota < notaMasBajaEj23) {
        notaMasBajaEj23 = nota;
    } else {
        notaMasBajaEj23 = notaMasBajaEj23;
    }

    if (nota < 70) {
        contadorPerdieronEj23++;
        contadorTotalEj23 += nota;
        resultado = `Perdió con ${nota} <br> 
                    Perdieron ${contadorPerdieronEj23} <br>
                    Arpobaron ${contadorAprobadosEj23} de los cuales ${contadorExcelenteNotaEj23} Exoneraron<br>
                    El promedio es: ${contadorTotalEj23 / contadorNotasEj23}<br>
                    La nota mas baja es: ${notaMasBajaEj23} <br>
                    La nota mas alta es: ${notaMasAltaEj23}`;

    } else if (nota > 90) {
        contadorAprobadosEj23++;
        contadorExcelenteNotaEj23++;
        contadorNotasEj23++;
        contadorTotalEj23 += nota;
        resultado = `Exoneró con ${nota} <br> 
                    Perdieron ${contadorPerdieronEj23} <br>
                    Arpobaron ${contadorAprobadosEj23} de los cuales ${contadorExcelenteNotaEj23} Exoneraron<br>
                    El promedio es: ${contadorTotalEj23 / contadorNotasEj23}<br>
                    La nota mas baja es: ${notaMasBajaEj23} <br>
                    La nota mas alta es: ${notaMasAltaEj23}`;

    } else {
        contadorAprobadosEj23++;
        contadorNotasEj23++;
        contadorTotalEj23 += nota;
        resultado = `Aprobó con ${nota} <br> 
                     Perdieron ${contadorPerdieronEj23} <br>
                     Arpobaron ${contadorAprobadosEj23} de los cuales ${contadorExcelenteNotaEj23} Exoneraron<br>
                     El promedio es: ${contadorTotalEj23 / contadorNotasEj23}<br>
                     La nota mas baja es: ${notaMasBajaEj23} <br>
                     La nota mas alta es: ${notaMasAltaEj23}`;
    }



    document.querySelector("#pMostrarEj23").innerHTML = resultado;
}

let contadorSueldosEj24 = 0;
let contadorEmpleadosEj24 = 0;
let sueldoMasBajo;
function sueldos() {

    let sueldo = Number(document.querySelector("#txtEmpleadoEj24").value);//4
    let resultado;

    contadorSueldosEj24 += sueldo;
    contadorEmpleadosEj24++;


    if (sueldoMasBajo === undefined) {
        sueldoMasBajo = sueldo;
        resultado = `El sueldo del empleado Nro. ${contadorEmpleadosEj24} es: ${sueldo}<br>
        El total de sueldos a pagar es; ${contadorSueldosEj24}<br>
        El sueldo mas bajo es: ${sueldoMasBajo}`;
        console.log("sentencia if")
    } else if (sueldo === 0) {
        contadorEmpleadosEj24--;
        resultado = `El sueldo del empleado Nro. ${contadorEmpleadosEj24} no puede ser: ${sueldo}<br>
        El total de sueldos a pagar es; ${contadorSueldosEj24}<br>
        El sueldo mas bajo es: ${sueldoMasBajo}`;
        sueldoMasBajo = sueldoMasBajo;
        console.log("sentencia else if 1")
    } else if (sueldo < sueldoMasBajo) {
        sueldoMasBajo = sueldo;
        resultado = `El sueldo del empleado Nro. ${contadorEmpleadosEj24} es: ${sueldo}<br>
        El total de sueldos a pagar es; ${contadorSueldosEj24}<br>
        El sueldo mas bajo es: ${sueldoMasBajo}`;
        console.log("sentencia else if 2")
    } else {
        sueldoMasBajo = sueldoMasBajo;
        resultado = `El sueldo del empleado Nro. ${contadorEmpleadosEj24} es: ${sueldo}<br>
        El total de sueldos a pagar es; ${contadorSueldosEj24}<br>
        El sueldo mas bajo es: ${sueldoMasBajo}`;
        console.log("sentencia else")
    }

    document.querySelector("#pMostrarEj24").innerHTML = resultado;
}

let stockDisponibleEj25 = 20;
let pedidosEj25 = 0;
let mayorVentaEj25 = 0;
let mejorCompradorEj25 = "";
function sistemaXPedidos() {
    let nombre = document.querySelector("#txtNombreEj25").value;
    let cantidad = Number(document.querySelector("#txtCamarasEj25").value);
    let resultado;

    if (cantidad > mayorVentaEj25) {
        mayorVentaEj25 = cantidad
        mejorCompradorEj25 = nombre + " " + mayorVentaEj25;
    } else {
        mayorVentaEj25 = mayorVentaEj25
        mejorCompradorEj25 = mejorCompradorEj25;
    }

    console.log(mejorCompradorEj25);
    stockDisponibleEj25 -= cantidad;
    pedidosEj25++;

    if (stockDisponibleEj25 > 0) {
        resultado = `El cliente ${nombre} compro ${cantidad} camaras<br>
                    Ahora quedan disponibles: ${stockDisponibleEj25} camaras`;

    } else if (stockDisponibleEj25 === 0) {
        //Busque en internet como desabilitar el boton, encontre el .disabled = true;
        document.querySelector("#btnMostrarEj25").disabled = true;

        resultado = `El cliente ${nombre} compro ${cantidad} camaras<br>
                    No hay mas stock disponible <br>
                    El total de pedidos fue de: ${pedidosEj25} camaras<br>
                    El mejor comprador fue ${mejorCompradorEj25}<br>`;

    } else {
        stockDisponibleEj25 += cantidad;
        pedidosEj25--;
        resultado = `No hay ese stock disponible, hay ${stockDisponibleEj25} <br>`;
    }

    document.querySelector("#pMostrarEj25").innerHTML = resultado;
}

function hotel() {

    let noches = Number(document.querySelector("#txtCompraEj26").value);
    let pago = document.querySelector("#txtTarjetaEj26").value;
    let precio = 40;
    let montoFinal;
    let dias = noches + 1;
    let montoInicial = noches * precio
    let resultado;

    if (noches >= 7 && pago === "Si") {
        montoFinal = montoInicial - (precio * 3);
        resultado = `Ingresaste: ${noches}<br>
                    El precio por noche es de ${precio}<br>
                    Para ${noches} noches y ${dias} dias con tarjeta, te regalamos tres noches de alojamiento<br>
                    El monto final a pagar es: $${montoFinal}<br>`
        document.querySelector("#btnComprarEj26").disabled = false;
        document.querySelector("#btnCancelarEj26").disabled = false;
        document.querySelector("#btnComprarEj26").addEventListener("click", () => {
            let resultado;
            document.querySelector("#btnComprarEj26").disabled = true;
            document.querySelector("#btnCancelarEj26").disabled = true;
            resultado = `Muchas gracias por su compra<br>
            Para volver a hacer otro pedido vuelva a introducir nuevamente los valores`

            document.querySelector("#pMostrarEj26").innerHTML = resultado;
        });

        document.querySelector("#btnCancelarEj26").addEventListener("click", () => {
            let resultado;
            document.querySelector("#btnComprarEj26").disabled = true;
            document.querySelector("#btnCancelarEj26").disabled = true;
            resultado = "Cancelado, Vuelva a introducir los valores"

            document.querySelector("#pMostrarEj26").innerHTML = resultado;
        });
    } else if (noches >= 7 && pago === "No") {
        montoFinal = montoInicial - (precio * 2);
        resultado = `Ingresaste: ${noches}<br>
                    El precio por noche es de ${precio}<br>
                    Para ${noches} noches y ${dias} dias sin tarjeta, te regalamos dos noches de alojamiento<br>
                    El monto final a pagar es: $${montoFinal}<br>`
        document.querySelector("#btnComprarEj26").disabled = false;
        document.querySelector("#btnCancelarEj26").disabled = false;
        document.querySelector("#btnComprarEj26").addEventListener("click", () => {
            let resultado;
            document.querySelector("#btnComprarEj26").disabled = true;
            document.querySelector("#btnCancelarEj26").disabled = true;
            resultado = `Muchas gracias por su compra<br>
            Para volver a hacer otro pedido vuelva a introducir nuevamente los valores`

            document.querySelector("#pMostrarEj26").innerHTML = resultado;
        });

        document.querySelector("#btnCancelarEj26").addEventListener("click", () => {
            let resultado;
            document.querySelector("#btnComprarEj26").disabled = true;
            document.querySelector("#btnCancelarEj26").disabled = true;
            resultado = "Cancelado, Vuelva a introducir los valores"

            document.querySelector("#pMostrarEj26").innerHTML = resultado;
        });

    } else if (noches >= 3) {
        montoFinal = montoInicial - (precio * 1);
        resultado = `Ingresaste: ${noches}<br>
                    El precio por noche es de ${precio}<br>
                    Para ${noches} noches y ${dias} dias, te regalamos una noche de alojamiento<br>
                    El monto final a pagar es: $${montoFinal}<br>`
        document.querySelector("#btnComprarEj26").disabled = false;
        document.querySelector("#btnCancelarEj26").disabled = false;
        document.querySelector("#btnComprarEj26").addEventListener("click", () => {
            let resultado;
            document.querySelector("#btnComprarEj26").disabled = true;
            document.querySelector("#btnCancelarEj26").disabled = true;
            resultado = `Muchas gracias por su compra<br>
            Para volver a hacer otro pedido vuelva a introducir nuevamente los valores`

            document.querySelector("#pMostrarEj26").innerHTML = resultado;
        });

        document.querySelector("#btnCancelarEj26").addEventListener("click", () => {
            let resultado;
            document.querySelector("#btnComprarEj26").disabled = true;
            document.querySelector("#btnCancelarEj26").disabled = true;
            resultado = "Cancelado, Vuelva a introducir los valores"

            document.querySelector("#pMostrarEj26").innerHTML = resultado;
        });

    } else if (noches < 3 && noches > 0) {
        montoFinal = montoInicial;
        resultado = `Ingresaste: ${noches}<br>
        El precio por noche es de ${precio}<br>
        Eligió ${noches} noches y ${dias} dias<br>
        El monto final a pagar es: $${montoFinal}<br>`
        document.querySelector("#btnComprarEj26").disabled = false;
        document.querySelector("#btnCancelarEj26").disabled = false;
        document.querySelector("#btnComprarEj26").addEventListener("click", () => {
            let resultado;
            document.querySelector("#btnComprarEj26").disabled = true;
            document.querySelector("#btnCancelarEj26").disabled = true;
            resultado = `Muchas gracias por su compra<br>
                        Para volver a hacer otro pedido vuelva a introducir nuevamente los valores`

            document.querySelector("#pMostrarEj26").innerHTML = resultado;
        });

        document.querySelector("#btnCancelarEj26").addEventListener("click", () => {
            let resultado;
            document.querySelector("#btnComprarEj26").disabled = true;
            document.querySelector("#btnCancelarEj26").disabled = true;
            resultado = "Cancelado, Vuelva a introducir los valores"

            document.querySelector("#pMostrarEj26").innerHTML = resultado;
        });

    } else {
        resultado = `Por favor, ingrese un valor valido`;
    }

    document.querySelector("#pMostrarEj26").innerHTML = resultado;
}

let intentosEj27 = 0;
function programaDeJuego() {
    let nroJ = Number(document.querySelector("#txtJugador1Ej27").value);
    let resultado;

    document.querySelector("#btnIngresarEj27").disabled = true;
    document.querySelector("#btnIngresarEj27").enabled = false;

    document.querySelector("#txtAdivinadorEj27").disabled = false;
    document.querySelector("#txtAdivinadorEj27").enabled = true;

    document.querySelector("#btnAdivinarEj27").disabled = false;
    document.querySelector("#btnAdivinarEj27").enabled = true;

    document.querySelector("#txtJugador1Ej27").disabled = true;
    document.querySelector("#txtJugador1Ej27").enabled = false;
    document.querySelector("#txtJugador1Ej27").value = "";

    intentosEj27;

    resultado = `Gracias por colcoar su numero secreto<br>
                Jugador, intente de adivinarlo; <br>`;

    document.querySelector("#pMostrarEj27").innerHTML = resultado;

    document.querySelector("#btnAdivinarEj27").addEventListener("click", () => {
        let nroA = Number(document.querySelector("#txtAdivinadorEj27").value);
        let dist = nroA - nroJ;
        let resultado;
        intentosEj27++;

        if (nroA > 100 || nroA < 0) {
            resultado = `El numero debe ser entre 0 y 100<br>
                        Ingresó ${nroA}`

        } else if (dist >= 15 || dist <= -15) {
            resultado = `estas lejos<br>
                         Ingresó ${nroA}`

        } else if ((dist >= 10 && dist < 15) || (dist <= -10 && dist > -15)) {
            resultado = `te estas acercando<br>
                         Ingresó ${nroA}`

        } else if ((dist >= 5 && dist < 10) || (dist <= -5 && dist > -10)) {
            resultado = `cada vez más cerca<br>
                         Ingresó ${nroA}`

        } else if ((dist >= 1 && dist < 5) || (dist <= -1 && dist > -5)) {
            resultado = `estas muy pero muy cerca<br>
                         Ingresó ${nroA}`

        } else if (dist === 0 && nroA === nroJ) {
            resultado = `Felicidades, adivinaste el numero<br>
                         Ingresó ${nroA}<br>
                         Tu puntaje fue de ${intentosEj27} intentos.`

        } else {
            intentosEj27--;
            resultado = `${nroA} no es un numero valido<br>`
        }
        document.querySelector("#pMostrarEj27").innerHTML = resultado;
    })
}

let ptsTotalJ1 = 0;
let ptsTotalJ2 = 0;
let turnoJ1 = true;
let turnoJ2 = false;

function cartas() {

    let pts = Number(document.querySelector("#txtJugadorEj28").value);//40

    console.log(`1) ${turnoJ1} y ${turnoJ2}`);
    let mensaje;

    if (ptsTotalJ1 >= 30 || ptsTotalJ2 >= 30) {
         
        mensaje = `Ya no puedes sumar puntos.<br>
                   El jugador 1 obtuvo ${ptsTotalJ1}<br>
                   El jugador 2 obtuvo ${ptsTotalJ2}<br>`;

        document.querySelector("#pLocutorEj28").innerHTML = mensaje;
        document.querySelector("#btnComenzarEj28").disabled = true;

    } else if (turnoJ1 === true && pts >= 0 && ptsTotalJ1 < 30) {

        console.log(`2) ${turnoJ1} y ${turnoJ2}`);

        console.log(`antes ${ptsTotalJ1} totales y ${pts} puntos`);
        ptsTotalJ1 += pts;
        console.log(`despues ${ptsTotalJ1} totales y ${pts} puntos`);
        turnoJ1 = false;
        turnoJ2 = true;
        mensaje = `Jugador 1, sumaste: ${pts} puntos,<br>
                   tenes: ${ptsTotalJ1} puntos en total.<br>`;

        document.querySelector("#pLocutorEj28").innerHTML = "Turno Jugador 2";
        document.querySelector("#ptsJ1Ej28").innerHTML = mensaje;
        console.log(`3) ${turnoJ1} y ${turnoJ2}`);

    } else if (turnoJ1 === false && pts >= 0 && ptsTotalJ2 < 30) {

        console.log(`4) ${turnoJ1} y ${turnoJ2}`);

        console.log(` antes ${ptsTotalJ2} totales y ${pts} puntos`);
        ptsTotalJ2 += pts;
        console.log(` despues ${ptsTotalJ2} totales y ${pts} puntos`);

        turnoJ1 = true;
        turnoJ2 = false;
        mensaje = `Jugador 2, sumaste: ${pts} puntos,<br>
        tenes: ${ptsTotalJ2} puntos en total.<br>`;

        document.querySelector("#pLocutorEj28").innerHTML = "Turno Jugador 1";
        document.querySelector("#ptsJ2Ej28").innerHTML = mensaje;
        console.log(`5) ${turnoJ1} y ${turnoJ2}`);

    }else{
        mensaje = `Ingrese un valor valido.`;
        document.querySelector("#pLocutorEj28").innerHTML = mensaje;

    }

}

function taTeTi() {
    let imgLugar1 = document.querySelector("#imgLugar1");
    let imgLugar2 = document.querySelector("#imgLugar2");
    let imgLugar3 = document.querySelector("#imgLugar3");
    let imgLugar4 = document.querySelector("#imgLugar4");
    let imgLugar5 = document.querySelector("#imgLugar5");
    let imgLugar6 = document.querySelector("#imgLugar6");
    let imgLugar7 = document.querySelector("#imgLugar7");
    let imgLugar8 = document.querySelector("#imgLugar8");
    let imgLugar9 = document.querySelector("#imgLugar9");

    let jugador1 = true;

    resultado = `Comenzamos! Jugador 1, elija un lugar`

    document.querySelector("#lugar1").addEventListener("click", () => {
        if (jugador1 === true) {
            imgLugar1.src = "img/taTeTi/cruz.png";
            jugador1 = false;
            jugador2 = true;
            resultado = `Jugador 2, elija un lugar`
            document.querySelector("#pMostrarEj29").innerHTML = resultado;
        }
        else {
            imgLugar1.src = "img/taTeTi/circulo.png";
            jugador1 = true;
            jugador2 = false;
            resultado = `Jugador 1, elija un lugar`
            document.querySelector("#pMostrarEj29").innerHTML = resultado;
        }
    })
    document.querySelector("#lugar2").addEventListener("click", () => {
        if (jugador1 === true) {
            imgLugar2.src = "img/taTeTi/cruz.png";
            jugador1 = false;
            jugador2 = true;
            resultado = `Jugador 2, elija un lugar`
            document.querySelector("#pMostrarEj29").innerHTML = resultado;
        }
        else {
            imgLugar2.src = "img/taTeTi/circulo.png";
            jugador1 = true;
            jugador2 = false;
            resultado = `Jugador 1, elija un lugar`
            document.querySelector("#pMostrarEj29").innerHTML = resultado;
        }
    });
    document.querySelector("#lugar3").addEventListener("click", () => {
        if (jugador1 === true) {
            imgLugar3.src = "img/taTeTi/cruz.png";
            jugador1 = false;
            jugador2 = true;
            resultado = `Jugador 2, elija un lugar`
            document.querySelector("#pMostrarEj29").innerHTML = resultado;
        }
        else {
            imgLugar3.src = "img/taTeTi/circulo.png";
            jugador1 = true;
            jugador2 = false;
            resultado = `Jugador 1, elija un lugar`
            document.querySelector("#pMostrarEj29").innerHTML = resultado;
        }
    });
    document.querySelector("#lugar4").addEventListener("click", () => {
        if (jugador1 === true) {
            imgLugar4.src = "img/taTeTi/cruz.png";
            jugador1 = false;
            jugador2 = true;
            resultado = `Jugador 2, elija un lugar`
            document.querySelector("#pMostrarEj29").innerHTML = resultado;
        }
        else {
            imgLugar4.src = "img/taTeTi/circulo.png";
            jugador1 = true;
            jugador2 = false;
            resultado = `Jugador 1, elija un lugar`
            document.querySelector("#pMostrarEj29").innerHTML = resultado;
        }
    });
    document.querySelector("#lugar5").addEventListener("click", () => {
        if (jugador1 === true) {
            imgLugar5.src = "img/taTeTi/cruz.png";
            jugador1 = false;
            jugador2 = true;
            resultado = `Jugador 2, elija un lugar`
            document.querySelector("#pMostrarEj29").innerHTML = resultado;
        }
        else {
            imgLugar5.src = "img/taTeTi/circulo.png";
            jugador1 = true;
            jugador2 = false;
            resultado = `Jugador 1, elija un lugar`
            document.querySelector("#pMostrarEj29").innerHTML = resultado;
        }
    });
    document.querySelector("#lugar6").addEventListener("click", () => {
        if (jugador1 === true) {
            imgLugar6.src = "img/taTeTi/cruz.png";
            jugador1 = false;
            jugador2 = true;
            resultado = `Jugador 2, elija un lugar`
            document.querySelector("#pMostrarEj29").innerHTML = resultado;
        }
        else {
            imgLugar6.src = "img/taTeTi/circulo.png";
            jugador1 = true;
            jugador2 = false;
            resultado = `Jugador 1, elija un lugar`
            document.querySelector("#pMostrarEj29").innerHTML = resultado;
        }
    });
    document.querySelector("#lugar7").addEventListener("click", () => {
        if (jugador1 === true) {
            imgLugar7.src = "img/taTeTi/cruz.png";
            jugador1 = false;
            jugador2 = true;
            resultado = `Jugador 2, elija un lugar`
            document.querySelector("#pMostrarEj29").innerHTML = resultado;
        }
        else {
            imgLugar7.src = "img/taTeTi/circulo.png";
            jugador1 = true;
            jugador2 = false;
            resultado = `Jugador 1, elija un lugar`
            document.querySelector("#pMostrarEj29").innerHTML = resultado;
        }
    });
    document.querySelector("#lugar8").addEventListener("click", () => {
        if (jugador1 === true) {
            imgLugar8.src = "img/taTeTi/cruz.png";
            jugador1 = false;
            jugador2 = true;
            resultado = `Jugador 2, elija un lugar`
            document.querySelector("#pMostrarEj29").innerHTML = resultado;
        }
        else {
            imgLugar8.src = "img/taTeTi/circulo.png";
            jugador1 = true;
            jugador2 = false;
            resultado = `Jugador 1, elija un lugar`
            document.querySelector("#pMostrarEj29").innerHTML = resultado;
        }
    });
    document.querySelector("#lugar9").addEventListener("click", () => {
        if (jugador1 === true) {
            imgLugar9.src = "img/taTeTi/cruz.png";
            jugador1 = false;
            jugador2 = true;
            resultado = `Jugador 2, elija un lugar`
            document.querySelector("#pMostrarEj29").innerHTML = resultado;
        }
        else {
            imgLugar9.src = "img/taTeTi/circulo.png";
            jugador1 = true;
            jugador2 = false;
            resultado = `Jugador 1, elija un lugar`
            document.querySelector("#pMostrarEj29").innerHTML = resultado;
        }
    });

    document.querySelector("#pMostrarEj29").innerHTML = resultado;
}

function taTeTiPersonalizado() {
    let imgLugar1Ej30 = document.querySelector("#imgLugar1Ej30");
    let imgLugar2Ej30 = document.querySelector("#imgLugar2Ej30");
    let imgLugar3Ej30 = document.querySelector("#imgLugar3Ej30");
    let imgLugar4Ej30 = document.querySelector("#imgLugar4Ej30");
    let imgLugar5Ej30 = document.querySelector("#imgLugar5Ej30");
    let imgLugar6Ej30 = document.querySelector("#imgLugar6Ej30");
    let imgLugar7Ej30 = document.querySelector("#imgLugar7Ej30");
    let imgLugar8Ej30 = document.querySelector("#imgLugar8Ej30");
    let imgLugar9Ej30 = document.querySelector("#imgLugar9Ej30");

    let jugador1Ej30 = true;
    let jugador2Ej30 = false;

    let iconoJ1Ej30 = document.querySelector("#iconoJ1Ej30").value;
    let iconoJ2Ej30 = document.querySelector("#iconoJ2Ej30").value;

    resultado = `Comenzamos! Jugador 1, elija un lugar`

    document.querySelector("#lugar1Ej30").addEventListener("click", () => {
        if (jugador1Ej30 === true) {
            if (iconoJ1Ej30 === "Circulo") {
                imgLugar1Ej30.src = "img/taTeTi/circulo.png";
            } else if (iconoJ1Ej30 === "Cruz") {
                imgLugar1Ej30.src = "img/taTeTi/cruz.png";
            } else if (iconoJ1Ej30 === "Triangulo") {
                imgLugar1Ej30.src = "img/taTeTi/triangulo.png";
            } else if (iconoJ1Ej30 === "Cuadrado") {
                imgLugar1Ej30.src = "img/taTeTi/cuadrado.png";
            } else {
                imgLugar1Ej30.src = "img/taTeTi/paragua.png";
            }
            jugador1Ej30 = false;
            jugador2Ej30 = true;
            resultado = `Jugador 2, elija un lugar`
            document.querySelector("#pMostrarEj30").innerHTML = resultado;
        }
        else {
            if (iconoJ2Ej30 === "Circulo") {
                imgLugar1Ej30.src = "img/taTeTi/circulo.png";
            } else if (iconoJ2Ej30 === "Cruz") {
                imgLugar1Ej30.src = "img/taTeTi/cruz.png";
            } else if (iconoJ2Ej30 === "Triangulo") {
                imgLugar1Ej30.src = "img/taTeTi/triangulo.png";
            } else if (iconoJ2Ej30 === "Cuadrado") {
                imgLugar1Ej30.src = "img/taTeTi/cuadrado.png";
            } else {
                imgLugar1Ej30.src = "img/taTeTi/paragua.png";
            }
            jugador1Ej30 = true;
            jugador2Ej30 = false;
            resultado = `Jugador 1, elija un lugar`
            document.querySelector("#pMostrarEj30").innerHTML = resultado;
        }
    })
    document.querySelector("#lugar2Ej30").addEventListener("click", () => {
        if (jugador1Ej30 === true) {
            if (iconoJ1Ej30 === "Circulo") {
                imgLugar2Ej30.src = "img/taTeTi/circulo.png";
            } else if (iconoJ1Ej30 === "Cruz") {
                imgLugar2Ej30.src = "img/taTeTi/cruz.png";
            } else if (iconoJ1Ej30 === "Triangulo") {
                imgLugar2Ej30.src = "img/taTeTi/triangulo.png";
            } else if (iconoJ1Ej30 === "Cuadrado") {
                imgLugar2Ej30.src = "img/taTeTi/cuadrado.png";
            } else {
                imgLugar2Ej30.src = "img/taTeTi/paragua.png";
            }
            jugador1Ej30 = false;
            jugador2Ej30 = true;
            resultado = `Jugador 2, elija un lugar`
            document.querySelector("#pMostrarEj30").innerHTML = resultado;
        }
        else {
            if (iconoJ2Ej30 === "Circulo") {
                imgLugar2Ej30.src = "img/taTeTi/circulo.png";
            } else if (iconoJ2Ej30 === "Cruz") {
                imgLugar2Ej30.src = "img/taTeTi/cruz.png";
            } else if (iconoJ2Ej30 === "Triangulo") {
                imgLugar2Ej30.src = "img/taTeTi/triangulo.png";
            } else if (iconoJ2Ej30 === "Cuadrado") {
                imgLugar2Ej30.src = "img/taTeTi/cuadrado.png";
            } else {
                imgLugar2Ej30.src = "img/taTeTi/paragua.png";
            }
            jugador1Ej30 = true;
            jugador2Ej30 = false;
            resultado = `Jugador 1, elija un lugar`
            document.querySelector("#pMostrarEj30").innerHTML = resultado;
        }
    });
    document.querySelector("#lugar3Ej30").addEventListener("click", () => {
        if (jugador1Ej30 === true) {
            if (iconoJ1Ej30 === "Circulo") {
                imgLugar3Ej30.src = "img/taTeTi/circulo.png";
            } else if (iconoJ1Ej30 === "Cruz") {
                imgLugar3Ej30.src = "img/taTeTi/cruz.png";
            } else if (iconoJ1Ej30 === "Triangulo") {
                imgLugar3Ej30.src = "img/taTeTi/triangulo.png";
            } else if (iconoJ1Ej30 === "Cuadrado") {
                imgLugar3Ej30.src = "img/taTeTi/cuadrado.png";
            } else {
                imgLugar3Ej30.src = "img/taTeTi/paragua.png";
            }
            jugador1Ej30 = false;
            jugador2Ej30 = true;
            resultado = `Jugador 2, elija un lugar`
            document.querySelector("#pMostrarEj30").innerHTML = resultado;
        }
        else {
            if (iconoJ2Ej30 === "Circulo") {
                imgLugar3Ej30.src = "img/taTeTi/circulo.png";
            } else if (iconoJ2Ej30 === "Cruz") {
                imgLugar3Ej30.src = "img/taTeTi/cruz.png";
            } else if (iconoJ2Ej30 === "Triangulo") {
                imgLugar3Ej30.src = "img/taTeTi/triangulo.png";
            } else if (iconoJ2Ej30 === "Cuadrado") {
                imgLugar3Ej30.src = "img/taTeTi/cuadrado.png";
            } else {
                imgLugar3Ej30.src = "img/taTeTi/paragua.png";
            }
            jugador1Ej30 = true;
            jugador2Ej30 = false;
            resultado = `Jugador 1, elija un lugar`
            document.querySelector("#pMostrarEj30").innerHTML = resultado;
        }
    });
    document.querySelector("#lugar4Ej30").addEventListener("click", () => {
        if (jugador1Ej30 === true) {
            if (iconoJ1Ej30 === "Circulo") {
                imgLugar4Ej30.src = "img/taTeTi/circulo.png";
            } else if (iconoJ1Ej30 === "Cruz") {
                imgLugar4Ej30.src = "img/taTeTi/cruz.png";
            } else if (iconoJ1Ej30 === "Triangulo") {
                imgLugar4Ej30.src = "img/taTeTi/triangulo.png";
            } else if (iconoJ1Ej30 === "Cuadrado") {
                imgLugar4Ej30.src = "img/taTeTi/cuadrado.png";
            } else {
                imgLugar4Ej30.src = "img/taTeTi/paragua.png";
            }
            jugador1Ej30 = false;
            jugador2Ej30Ej30 = true;
            resultado = `Jugador 2, elija un lugar`
            document.querySelector("#pMostrarEj30").innerHTML = resultado;
        }
        else {
            if (iconoJ2Ej30 === "Circulo") {
                imgLugar4Ej30.src = "img/taTeTi/circulo.png";
            } else if (iconoJ2Ej30 === "Cruz") {
                imgLugar4Ej30.src = "img/taTeTi/cruz.png";
            } else if (iconoJ2Ej30 === "Triangulo") {
                imgLugar4Ej30.src = "img/taTeTi/triangulo.png";
            } else if (iconoJ2Ej30 === "Cuadrado") {
                imgLugar4Ej30.src = "img/taTeTi/cuadrado.png";
            } else {
                imgLugar4Ej30.src = "img/taTeTi/paragua.png";
            }
            jugador1Ej30 = true;
            jugador2Ej30 = false;
            resultado = `Jugador 1, elija un lugar`
            document.querySelector("#pMostrarEj30").innerHTML = resultado;
        }
    });
    document.querySelector("#lugar5Ej30").addEventListener("click", () => {
        if (jugador1Ej30 === true) {
            if (iconoJ1Ej30 === "Circulo") {
                imgLugar5Ej30.src = "img/taTeTi/circulo.png";
            } else if (iconoJ1Ej30 === "Cruz") {
                imgLugar5Ej30.src = "img/taTeTi/cruz.png";
            } else if (iconoJ1Ej30 === "Triangulo") {
                imgLugar5Ej30.src = "img/taTeTi/triangulo.png";
            } else if (iconoJ1Ej30 === "Cuadrado") {
                imgLugar5Ej30.src = "img/taTeTi/cuadrado.png";
            } else {
                imgLugar5Ej30.src = "img/taTeTi/paragua.png";
            }
            jugador1Ej30 = false;
            jugador2Ej30 = true;
            resultado = `Jugador 2, elija un lugar`
            document.querySelector("#pMostrarEj30").innerHTML = resultado;
        }
        else {
            if (iconoJ2Ej30 === "Circulo") {
                imgLugar5Ej30.src = "img/taTeTi/circulo.png";
            } else if (iconoJ2Ej30 === "Cruz") {
                imgLugar5Ej30.src = "img/taTeTi/cruz.png";
            } else if (iconoJ2Ej30 === "Triangulo") {
                imgLugar5Ej30.src = "img/taTeTi/triangulo.png";
            } else if (iconoJ2Ej30 === "Cuadrado") {
                imgLugar5Ej30.src = "img/taTeTi/cuadrado.png";
            } else {
                imgLugar5Ej30.src = "img/taTeTi/paragua.png";
            }
            jugador1Ej30 = true;
            jugador2Ej30 = false;
            resultado = `Jugador 1, elija un lugar`
            document.querySelector("#pMostrarEj30").innerHTML = resultado;
        }
    });
    document.querySelector("#lugar6Ej30").addEventListener("click", () => {
        if (jugador1Ej30 === true) {
            if (iconoJ1Ej30 === "Circulo") {
                imgLugar6Ej30.src = "img/taTeTi/circulo.png";
            } else if (iconoJ1Ej30 === "Cruz") {
                imgLugar6Ej30.src = "img/taTeTi/cruz.png";
            } else if (iconoJ1Ej30 === "Triangulo") {
                imgLugar6Ej30.src = "img/taTeTi/triangulo.png";
            } else if (iconoJ1Ej30 === "Cuadrado") {
                imgLugar6Ej30.src = "img/taTeTi/cuadrado.png";
            } else {
                imgLugar6Ej30.src = "img/taTeTi/paragua.png";
            }
            jugador1Ej30 = false;
            jugador2Ej30 = true;
            resultado = `Jugador 2, elija un lugar`
            document.querySelector("#pMostrarEj30").innerHTML = resultado;
        }
        else {
            if (iconoJ2Ej30 === "Circulo") {
                imgLugar6Ej30.src = "img/taTeTi/circulo.png";
            } else if (iconoJ2Ej30 === "Cruz") {
                imgLugar6Ej30.src = "img/taTeTi/cruz.png";
            } else if (iconoJ2Ej30 === "Triangulo") {
                imgLugar6Ej30.src = "img/taTeTi/triangulo.png";
            } else if (iconoJ2Ej30 === "Cuadrado") {
                imgLugar6Ej30.src = "img/taTeTi/cuadrado.png";
            } else {
                imgLugar6Ej30.src = "img/taTeTi/paragua.png";
            }
            jugador1Ej30 = true;
            jugador2Ej30 = false;
            resultado = `Jugador 1, elija un lugar`
            document.querySelector("#pMostrarEj30").innerHTML = resultado;
        }
    });
    document.querySelector("#lugar7Ej30").addEventListener("click", () => {
        if (jugador1Ej30 === true) {
            if (iconoJ1Ej30 === "Circulo") {
                imgLugar7Ej30.src = "img/taTeTi/circulo.png";
            } else if (iconoJ1Ej30 === "Cruz") {
                imgLugar7Ej30.src = "img/taTeTi/cruz.png";
            } else if (iconoJ1Ej30 === "Triangulo") {
                imgLugar7Ej30.src = "img/taTeTi/triangulo.png";
            } else if (iconoJ1Ej30 === "Cuadrado") {
                imgLugar7Ej30.src = "img/taTeTi/cuadrado.png";
            } else {
                imgLugar7Ej30.src = "img/taTeTi/paragua.png";
            }
            jugador1Ej30 = false;
            jugador2Ej30 = true;
            resultado = `Jugador 2, elija un lugar`
            document.querySelector("#pMostrarEj30").innerHTML = resultado;
        }
        else {
            if (iconoJ2Ej30 === "Circulo") {
                imgLugar7Ej30.src = "img/taTeTi/circulo.png";
            } else if (iconoJ2Ej30 === "Cruz") {
                imgLugar7Ej30.src = "img/taTeTi/cruz.png";
            } else if (iconoJ2Ej30 === "Triangulo") {
                imgLugar7Ej30.src = "img/taTeTi/triangulo.png";
            } else if (iconoJ2Ej30 === "Cuadrado") {
                imgLugar7Ej30.src = "img/taTeTi/cuadrado.png";
            } else {
                imgLugar7Ej30.src = "img/taTeTi/paragua.png";
            }
            jugador1Ej30 = true;
            jugador2Ej30 = false;
            resultado = `Jugador 1, elija un lugar`
            document.querySelector("#pMostrarEj30").innerHTML = resultado;
        }
    });
    document.querySelector("#lugar8Ej30").addEventListener("click", () => {
        if (jugador1Ej30 === true) {
            if (iconoJ1Ej30 === "Circulo") {
                imgLugar8Ej30.src = "img/taTeTi/circulo.png";
            } else if (iconoJ1Ej30 === "Cruz") {
                imgLugar8Ej30.src = "img/taTeTi/cruz.png";
            } else if (iconoJ1Ej30 === "Triangulo") {
                imgLugar8Ej30.src = "img/taTeTi/triangulo.png";
            } else if (iconoJ1Ej30 === "Cuadrado") {
                imgLugar8Ej30.src = "img/taTeTi/cuadrado.png";
            } else {
                imgLugar8Ej30.src = "img/taTeTi/paragua.png";
            }
            jugador1Ej30 = false;
            jugador2Ej30 = true;
            resultado = `Jugador 2, elija un lugar`
            document.querySelector("#pMostrarEj30").innerHTML = resultado;
        }
        else {
            if (iconoJ2Ej30 === "Circulo") {
                imgLugar8Ej30.src = "img/taTeTi/circulo.png";
            } else if (iconoJ2Ej30 === "Cruz") {
                imgLugar8Ej30.src = "img/taTeTi/cruz.png";
            } else if (iconoJ2Ej30 === "Triangulo") {
                imgLugar8Ej30.src = "img/taTeTi/triangulo.png";
            } else if (iconoJ2Ej30 === "Cuadrado") {
                imgLugar8Ej30.src = "img/taTeTi/cuadrado.png";
            } else {
                imgLugar8Ej30.src = "img/taTeTi/paragua.png";
            }
            jugador1Ej30 = true;
            jugador2Ej30 = false;
            resultado = `Jugador 1, elija un lugar`
            document.querySelector("#pMostrarEj30").innerHTML = resultado;
        }
    });
    document.querySelector("#lugar9Ej30").addEventListener("click", () => {
        if (jugador1Ej30 === true) {
            if (iconoJ1Ej30 === "Circulo") {
                imgLugar9Ej30.src = "img/taTeTi/circulo.png";
            } else if (iconoJ1Ej30 === "Cruz") {
                imgLugar9Ej30.src = "img/taTeTi/cruz.png";
            } else if (iconoJ1Ej30 === "Triangulo") {
                imgLugar9Ej30.src = "img/taTeTi/triangulo.png";
            } else if (iconoJ1Ej30 === "Cuadrado") {
                imgLugar9Ej30.src = "img/taTeTi/cuadrado.png";
            } else {
                imgLugar9Ej30.src = "img/taTeTi/paragua.png";
            }
            jugador1Ej30 = false;
            jugador2Ej30 = true;
            resultado = `Jugador 2, elija un lugar`
            document.querySelector("#pMostrarEj30").innerHTML = resultado;
        }
        else {
            if (iconoJ2Ej30 === "Circulo") {
                imgLugar9Ej30.src = "img/taTeTi/circulo.png";
            } else if (iconoJ2Ej30 === "Cruz") {
                imgLugar9Ej30.src = "img/taTeTi/cruz.png";
            } else if (iconoJ2Ej30 === "Triangulo") {
                imgLugar9Ej30.src = "img/taTeTi/triangulo.png";
            } else if (iconoJ2Ej30 === "Cuadrado") {
                imgLugar9Ej30.src = "img/taTeTi/cuadrado.png";
            } else {
                imgLugar9Ej30.src = "img/taTeTi/paragua.png";
            }
            jugador1Ej30 = true;
            jugador2Ej30 = false;
            resultado = `Jugador 1, elija un lugar`
            document.querySelector("#pMostrarEj30").innerHTML = resultado;
        }
    });

    document.querySelector("#pMostrarEj30").innerHTML = resultado;
}