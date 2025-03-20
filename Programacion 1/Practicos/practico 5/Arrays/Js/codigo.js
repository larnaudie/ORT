window.addEventListener("load", inicio);

function inicio() {
    //Arrays
    document.querySelector("#btnIngresarEj1").addEventListener("click", ej1Pr5);
    document.querySelector("#btnMostrarEj1").addEventListener("click", ej1Parte2Pr5);

    document.querySelector("#btnIngresarEj2").addEventListener("click", ej2Pr5);
    document.querySelector("#btnMostrarEj2").addEventListener("click", ej2Parte2Pr5);

    document.querySelector("#btnIngresarEj3").addEventListener("click", ej3Pr5);
    document.querySelector("#btnCalcularEj3").addEventListener("click", ej3Parte2Pr5);

    document.querySelector("#btnIngresarEj4").addEventListener("click", ej4Pr5);

    document.querySelector("#btnIngresarEj5").addEventListener("click", ej5Pr5);

    document.querySelector("#btnEj6Pr1").addEventListener("click", ej6AgregaroDatos);
    document.querySelector("#btnEj6Pr2").addEventListener("click", ej6MostrarDatos);
    document.querySelector("#btnEj6Pr3").addEventListener("click", ej6EliminarDatos);

    //Objetos
    // document.querySelector("#btnEj7").addEventListener("click", ej7Pr5);

    // document.querySelector("#btnAgregarEj8").addEventListener("click", ej8Pr5);
    cargarGenero()
    // document.querySelector("#btnEj9").addEventListener("click", ej9Pr5);

}

let numerosArray = [];

/*Ejercicio 1 */
function ej1Pr5() {
    let numero = Number(document.querySelector("#txtValoresNumericosEj1").value);

    if (!isNaN(numero)) {
        numerosArray.push(numero);
    } else {
        document.querySelector("#pResultadoEj1").innerHTML = "ingrese un numero";
    }
}

function ej1Parte2Pr5() {
    if (numerosArray.length > 0) {
        let numeroMayor = obtenerNumeroMayor(numerosArray);
        document.querySelector("#pResultadoEj1").innerHTML = numeroMayor;
    } else {
        //mensaje de error
    }
}

let palabrasArray = []

/*Ejercicio 2*/
function ej2Pr5() {
    let palabras = document.querySelector("#txtpalabrasEj2").value;
    if (isNaN(palabras)) {
        palabrasArray.push(palabras);
    } else {
        document.querySelector("#pResultadoEj2").innerHTML = "ingrese un numero";
    }
}

function ej2Parte2Pr5() {
    if (palabrasArray.length > 0) {
        let palabrasAnexadas = arrayPalabras(palabrasArray)
        document.querySelector("#pResultadoEj2").innerHTML = palabrasAnexadas;
    } else {
        document.querySelector("#pResultadoEj2").innerHTML = "ingrese un numero";
    }
}

let numerosArray2 = [];
/*Ejercicio 3*/
function ej3Pr5() {
    let numeros = Number(document.querySelector("#txtIngresarNumerosEj3").value);
    if (!isNaN(numeros)) {
        numerosArray2.push(numeros);
    } else {
        document.querySelector("#pResultadoEj3").innerHTML = "ingrese un numero";
    }
    console.log(numerosArray2)
}

function ej3Parte2Pr5() {
    if (numerosArray2.length > 0) {
        let promedio = promedioEj3(numerosArray2)
        document.querySelector("#pResultadoEj3").innerHTML = promedio;
    } else {
        document.querySelector("#pResultadoEj3").innerHTML = "ingrese un numero";
    }
}

/*Ejercicio 4*/
let usuarios = ["Pepe", "Jose", "Miguel"];
function ej4Pr5() {
    let nombre = document.querySelector("#txtIngresarAliasEj4").value;
    agregarYVerificarElemento(nombre, usuarios, "#pResultadoEj4Pr5")
}

/*Ejercicio 5*/
let numerosArrayEj5Pr5 = [1, 1];
function ej5Pr5() {
    let posicion1 = numerosArrayEj5Pr5[0];
    let posicion2 = numerosArrayEj5Pr5[1];
    let posicionNueva = 1;
    fibronacciFormula(20, posicion1, posicion2, posicionNueva, numerosArrayEj5Pr5, "#pResultadoEj5Pr5");
}

/*Ejercicio 6*/
let colores = ["Rojo", "Azul", "Verde", "Amarillo", "Naranja"];
function ej6AgregaroDatos() {
    let color = document.querySelector("#txt1Ej6Pr5").value;
    agregarElemento(color, colores)
}
function ej6MostrarDatos() {
    mostrarArrayEnLista(colores, "#pResultadoEj6Pr5");
}

function ej6EliminarDatos() {
    let color = document.querySelector("#txt1Ej6Pr5").value;
    let posicion = colores.indexOf(color);
    if (posicion >= 0) {
        eliminarDatos(posicion, colores);
        mostrarArrayEnLista(colores, "#pResultadoEj6Pr5");
    } else {
        mensajeError("#pResultadoEj6Pr5", "La posicion no existe");
    }
}

//Objetos
/**Ejercicio 7 */



/**Ejercicio 8 */
let sistema = new Sistema();
function cargarGenero() {
    document.querySelector("#slcGeneroEj8Pr5").innerHTML = `<option value="-1"> Seleccione una opcion...</option>`
    for (let i = 0; i < sistema.generos.length; i++) {
        const unGenero = sistema.generos[i];
        document.querySelector("#slcGeneroEj8Pr5").innerHTML += `<option value="${unGenero.id}"> ${unGenero.nombre} - ${unGenero.edad} </option>`
    }
}