window.addEventListener("load", inicio);

function inicio() {
    //Strings
    document.querySelector("#btnEj1").addEventListener("click", ej1Pr4);
    document.querySelector("#btnEj2").addEventListener("click", ej2Pr4);
    document.querySelector("#btnEj3").addEventListener("click", ej3Pr4);
    document.querySelector("#btnEj4").addEventListener("click", ej4Pr4);
    document.querySelector("#btnEj5").addEventListener("click", ej5Pr4);
    document.querySelector("#btnEj6").addEventListener("click", ej6Pr4);
    document.querySelector("#btnEj7").addEventListener("click", ej7Pr4);
    document.querySelector("#btnEj8").addEventListener("click", ej8Pr4);
    document.querySelector("#btnEj9").addEventListener("click", ej9Pr4);
    document.querySelector("#btnEj10").addEventListener("click", ej10Pr4);
    document.querySelector("#btnEj11").addEventListener("click", ej11Pr4);
    document.querySelector("#btnEj12").addEventListener("click", ej12Pr4);
    document.querySelector("#btnEj13").addEventListener("click", ej13Pr4);
    //Funciones
    document.querySelector("#btnEj1Funciones").addEventListener("click", ej1Pr4Funciones);
    document.querySelector("#btnEj2Funciones").addEventListener("click", ej2Pr4Funciones);
    document.querySelector("#btnEj3Funciones").addEventListener("click", ej3Pr4Funciones);
    document.querySelector("#btnEj4Funciones").addEventListener("click", ej4Pr4Funciones);
    document.querySelector("#btnEj5Funciones").addEventListener("click", ej5Pr4Funciones);
    document.querySelector("#btnEj6Funciones").addEventListener("click", ej6Pr4Funciones);
    document.querySelector("#btnEj7Funciones").addEventListener("click", ej7Pr4Funciones);
    document.querySelector("#btnEj8Funciones").addEventListener("click", ej8Pr4Funciones);
}

function ej1Pr4() {
    let palabra = document.querySelector("#txtEj1Pr4").value;
    let texto = "";

    for (let i = 0; i <= palabra.length - 1; i++) {
        console.log(palabra.length)
        console.log(`1) ${i}`)
        if (i === 0) {
            texto += `Primera letra: ` + ` ` + palabra.charAt(i) + `<br>`;

        } else if (i === (palabra.length - 1)) {
            texto += `Ultima letra: ` + ` ` + palabra.charAt(i) + `<br>`;;

        } else {

            console.log(`4) ${i}, ${palabra[i]}`)
        }
    }

    document.querySelector("#pMostrarEj1").innerHTML = texto;
}

function ej2Pr4() {
    let palabra = document.querySelector("#txtEj2Pr4").value;
    let vocales = 0;
    let resultado = "";

    for (let i = 0; i <= palabra.length - 1; i++) {
        console.log(`1) ${i}, ${palabra.charAt(i)}`)

        switch (palabra.charAt(i)) {
            case "a":
            case "A":
                vocales++;
                break;
            case "e":
            case "E":
                vocales++;
                break;
            case "i":
            case "I":
                vocales++;
                break;
            case "o":
            case "O":
                vocales++;
                break;
            case "u":
            case "U":
                vocales++;
                break;
            default:
                break;
        }
        resultado = `Hay ${vocales} vocales`;
    }
    document.querySelector("#pMostrarEj2").innerHTML = resultado;
}

function ej3Pr4() {
    let palabra = document.querySelector("#txtEj3Pr4").value;

    let palabraUpperCase = palabra.toUpperCase();

    document.querySelector("#pMostrarEj3").innerHTML = palabraUpperCase;

}

function ej4Pr4() {
    let palabra1 = document.querySelector("#txt1Ej4Pr4").value;//holao
    let palabra2 = document.querySelector("#txt2Ej4Pr4").value;//hello
    let palabraAux = "La subcadena es: ";

    if (palabra1.indexOf(palabra2) >= 0) {

        for (let i = 0; i <= palabra2.length - 1; i++) {
            palabraAux += palabra2.charAt(i);
        }
    } else {
        palabraAux = "No se encontradron coincidencias"
    }

    document.querySelector("#pMostrarEj4").innerHTML = palabraAux;
}

function ej5Pr4() {
    let matricula = document.querySelector("#txt1Ej5Pr4").value;
    let inicialMatricula = "";
    let resultado = "";

    for (let i = 0; i < 1; i++) {
        inicialMatricula = matricula.charAt(i);
    }

    switch (inicialMatricula) {
        case "A":
            resultado = "Canelones"
            break;
        case "B":
            resultado = "Maldonado"
            break;
        case "C":
            resultado = "Rocha"
            break;
        case "D":
            resultado = "Treinta y Tres"
            break;
        case "E":
            resultado = "Cerro Largo"
            break;
        case "F":
            resultado = "Rivera"
            break;
        case "G":
            resultado = "Artigas"
            break;
        case "H":
            resultado = "Salto"
            break;
        case "I":
            resultado = "Paysandú"
            break;
        case "J":
            resultado = "Río Negro"
            break;
        case "K":
            resultado = "Soriano"
            break;
        case "L":
            resultado = "Colonia"
            break;
        case "M":
            resultado = "San José"
            break;
        case "N":
            resultado = "Flores"
            break;
        case "O":
            resultado = "Florida"
            break;
        case "P":
            resultado = "Lavalleja"
            break;
        case "Q":
            resultado = "Durazno"
            break;
        case "R":
            resultado = "Tacuarembó"
            break;
        case "S":
            resultado = "Montevideo"
            break;
        default:
            resultado = "Asegurese de haber ingresado una matricula valida."
            break;
    }
    document.querySelector("#pMostrarEj5").innerHTML = resultado;
}

function ej6Pr4() {
    let texto = document.querySelector("#txt1Ej6Pr4").value;
    let contadorChar = 0;
    let contadorVocales = 0;
    let contadorConsonantes = 0;

    for (let i = 0; i <= texto.length - 1; i++) {
        contadorChar++;
    }

    if (contadorChar > 10) {
        for (let i = 0; i <= texto.length - 1; i++) {
            if (texto.charAt(i) === "A" || texto.charAt(i) === "E" || texto.charAt(i) === "I" || texto.charAt(i) === "O" || texto.charAt(i) === "U" ||
                texto.charAt(i) === "a" || texto.charAt(i) === "e" || texto.charAt(i) === "i" || texto.charAt(i) === "o" || texto.charAt(i) === "u") {
                contadorVocales++;
            } else {
                contadorConsonantes++;
            }
        }
    }
    document.querySelector("#pMostrarEj6").innerHTML = `La palabra tiene ${contadorVocales} vocales y ${contadorConsonantes} consonantes`;
}

function ej7Pr4() {
    let texto = document.querySelector("#txt1Ej7Pr4").value;
    let nuevoTexto = "";

    for (let i = 0; i <= texto.length - 1; i++) {

        if (i === 0) {
            nuevoTexto += texto.charAt(i).toUpperCase();
        } else {
            nuevoTexto += texto.charAt(i)
        }
    }

    document.querySelector("#pMostrarEj7").innerHTML = nuevoTexto;
}

function ej8Pr4() {
    let texto = document.querySelector("#txt1Ej8Pr4").value;
    let numMayusculas = 0;
    let numMinusculas = 0;
    let textoAux = "";

    for (let i = 0; i <= texto.length - 1; i++) {
        if (texto.charAt(i) === " ") {
            textoAux = textoAux;
        } else if (texto.charAt(i) === texto.charAt(i).toLowerCase()) {
            numMinusculas++;
            textoAux += texto.charAt(i)
        } else if (texto.charAt(i) === texto.charAt(i).toUpperCase()) {
            numMayusculas++;
            textoAux += texto.charAt(i)
        } else {
            textoAux = "No pudimos validar tus datos";
        }
    }
    document.querySelector("#pMostrarEj8").innerHTML = `El texto analizado es ${textoAux} <br> La cantidad de Mayusculas son ${numMayusculas}<br> La cantidad de Minusculas son ${numMinusculas}`

}

function ej9Pr4() {
    let contraseña = document.querySelector("#txt1Ej9Pr4").value;
    let validacion = "";
    let contadorMinusculas = 0;
    let contadorMayusculas = 0;
    let tieneEspacio = 0;
    let contieneCaracterEspecial = 0;
    let contadorDeNumeros = 0;

    if (contraseña.length >= 5 || !isNaN(contraseña.charAt(0))) {

        for (let i = 0; i <= contraseña.length - 1; i++) {

            if (contraseña.charAt(i) === " ") {
                tieneEspacio++;
            }
            else if (contraseña.charAt(i) === "." || contraseña.charAt(i) === "#" || contraseña.charAt(i) === "@" || contraseña.charAt(i) === "!") {
                contieneCaracterEspecial++;
            }
            else if (contraseña.charAt(i) !== 0 && !isNaN(contraseña.charAt(i))) {
                contadorDeNumeros++;
            }
            else if (contraseña.charAt(i) === contraseña.charAt(i).toUpperCase()) {
                contadorMayusculas++;
            }
            else if (contraseña.charAt(i) === contraseña.charAt(i).toLowerCase()) {
                contadorMinusculas++;
            }
        }

        if (!isNaN(contraseña.charAt(0))) {
            validacion = `Tu contraseña tiene un numero al principio <br>`
        }else if (contieneCaracterEspecial === 0) {
            validacion = `Tu contrasñea no contiene un caracter especial.<br>`

        }else if (tieneEspacio > 0) {
            validacion = `Tu contrasñea contiene un especio.<br>`

        } else if (contadorDeNumeros === 0) {
            validacion = `Tu contrasñea no contiene un numero.<br>`

        } else if (contadorMayusculas === 0) {
            validacion = `Tu contraseña no contiene una mayuscula<br>`;

        }else {
            validacion = `Tu contraseña fue aceptada como: "${contraseña}"`
        }

    } else {
        validacion += `Tu contrasñea comienza con un numero o es menor a 5.<br>`
    }
    document.querySelector("#pMostrarEj9").innerHTML = validacion;
}

function ej10Pr4() {
    let texto = document.querySelector("#txt1Ej10Pr4").value;
    let numeros = 0;

    for(let i = 0; i <= texto.length -1; i++){
        if(texto.charAt(i) === " "){
            numeros = numeros;
        }else if(!isNaN(texto.charAt(i))){
            numeros = (numeros + Number(texto.charAt(i)));
        }else{
            numeros = numeros;
        }
    }
    document.querySelector("#pMostrarEj10").innerHTML = numeros;
}


function ej11Pr4() {

    let texto = document.querySelector("#txt1Ej11Pr4").value;
    let codigoTexto = "";

    for(let i = 0; i <= texto.length-1 ; i++){
        if(texto.charAt(i) === "a" || texto.charAt(i) === "A"){
            codigoTexto += 4
        }else if(texto.charAt(i) === "e" || texto.charAt(i) === "E"){
            codigoTexto += 3
        }else if(texto.charAt(i) === "i" || texto.charAt(i) === "I"){
            codigoTexto += 1
        }else if(texto.charAt(i) === "o" || texto.charAt(i) === "O"){
            codigoTexto += 0
        }else if(texto.charAt(i) === "u" || texto.charAt(i) === "U"){
            codigoTexto += 8
        }else{
            codigoTexto += texto.charAt(i);
        }
    }
    document.querySelector("#pMostrarEj11").innerHTML = codigoTexto;
}

function ej12Pr4() {
    let texto = document.querySelector("#txt1Ej12Pr4").value;
    let textoAlReves = "";

    for(let i=texto.length-1; i>=0; i--){
        textoAlReves += texto.charAt(i);
    }
    document.querySelector("#pMostrarEj12").innerHTML = textoAlReves;
}

function ej13Pr4() {
    let texto = document.querySelector("#txt1Ej13Pr4").value;
    let primeraLetra = texto.charAt(0);
    let contador = 0;

    for(let i = 0; i <= texto.length -1 ; i++){
        if(texto.charAt(i) === primeraLetra){
            contador++;
        }else{
            contador = contador;
        }
    }
document.querySelector("#pMostrarEj13").innerHTML = `En ${texto} la letra ${primeraLetra} aparece ${contador} veces`
}

//-------------------------------------------------------------------------------------------------------------------------

function ej1Pr4Funciones(){
    let n1 = Number(document.querySelector("#txt1Ej1FuncionesPr4").value);
    let n2 = Number(document.querySelector("#txt2Ej1FuncionesPr4").value);

    valoresPares(n1,n2);

    document.querySelector("#pMostrarEj1Funciones").innerHTML = valoresPares(n1,n2);
}

function ej2Pr4Funciones(){
    let año = Number(document.querySelector("#txt1Ej2FuncionesPr4").value);

    esBisiesto(año);

    document.querySelector("#pMostrarEj2Funciones").innerHTML = esBisiesto(año);
}
function ej3Pr4Funciones(){
    let n1 = Number(document.querySelector("#txt1Ej3FuncionesPr4").value)
    let n2 = Number(document.querySelector("#txt2Ej3FuncionesPr4").value)

    calcularAreaTriangulo(n1,n2);

    document.querySelector("#pMostrarEj3Funciones").innerHTML = calcularAreaTriangulo(n1,n2);
}
function ej4Pr4Funciones(){
    let fahrenheit = Number(document.querySelector("#txt1Ej4FuncionesPr4").value);
    convertorCelcius(fahrenheit);
    document.querySelector("#pMostrarEj4Funciones").innerHTML = convertorCelcius(fahrenheit);
}
function ej5Pr4Funciones(){
let n1 = Number(document.querySelector("#txt1Ej5FuncionesPr4").value);
let medida = document.querySelector("#txt2Ej5FuncionesPr4").value;

convertorAMedida(n1,medida);

document.querySelector("#pMostrarEj5Funciones").innerHTML = convertorAMedida(n1,medida);

}
function ej6Pr4Funciones(){
    let base = Number(document.querySelector("#txt1Ej6FuncionesPr4").value);
    let exponente = Number(document.querySelector("#txt2Ej6FuncionesPr4").value);
    document.querySelector("#pMostrarEj6Funciones").innerHTML = calcularPotencia(base,exponente);
}
function ej7Pr4Funciones(){
    let texto = document.querySelector("#txt1Ej7FuncionesPr4").value;
    let invertido = invertirTexto(texto);
    document.querySelector("#pMostrarEj7Funciones").innerHTML = invertido;
}
function ej8Pr4Funciones(){
    let sueldo = Number(document.querySelector("#txt1Ej8FuncionesPr4").value);
    let hijos = document.querySelector("#txt2Ej8FuncionesPr4").value;

    document.querySelector("#pMostrarEj8Funciones").innerHTML = sueldoLiquido(sueldo, hijos);

};