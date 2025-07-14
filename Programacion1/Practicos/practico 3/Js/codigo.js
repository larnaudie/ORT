window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnForEj1").addEventListener("click", ejercicio1For);
    document.querySelector("#btnWhileEj1").addEventListener("click", ejercicio1While);
    document.querySelector("#btnDoWhileEj1").addEventListener("click", ejercicio1DoWhile);

    document.querySelector("#btnForEj2").addEventListener("click", ejercicio2For);
    document.querySelector("#btnWhileEj2").addEventListener("click", ejercicio2While);
    document.querySelector("#btnDoWhileEj2").addEventListener("click", ejercicio2DoWhile);

    document.querySelector("#btnForEj3").addEventListener("click", ejercicio3For);
    document.querySelector("#btnWhileEj3").addEventListener("click", ejercicio3While);
    document.querySelector("#btnDoWhileEj3").addEventListener("click", ejercicio3DoWhile);

    document.querySelector("#btnForEj4").addEventListener("click", ejercicio4For);
    document.querySelector("#btnWhileEj4").addEventListener("click", ejercicio4While);
    document.querySelector("#btnDoWhileEj4").addEventListener("click", ejercicio4DoWhile);

    document.querySelector("#btnWhileEj5").addEventListener("click", ejercicio5While)
    document.querySelector("#btnDoWhileEj6").addEventListener("click", ejercicio6DoWhile);
    document.querySelector("#btnEj7").addEventListener("click", ejercicio7);
    document.querySelector("#btnEj8").addEventListener("click", ejercicio8);
    document.querySelector("#btnEj9").addEventListener("click", ejercicio9);
    document.querySelector("#btnEj10").addEventListener("click", ejercicio10);
    document.querySelector("#btnEj11").addEventListener("click", ejercicio11);
    document.querySelector("#btnEj12").addEventListener("click", ejercicio12);
    document.querySelector("#btnEj13").addEventListener("click", ejercicio13);
    document.querySelector("#btnEj14").addEventListener("click", ejercicio14);
    document.querySelector("#btnEj15").addEventListener("click", ejercicio15);
    document.querySelector("#btnEj16").addEventListener("click", ejercicio16);
}
/*
Imprimir todos los números enteros del 1 al 1.000 (un número por línea).
 */

function ejercicio1For() {
    let num = 0;
    for (let i = 1; i <= 1000; i++) {
        num = i
        console.log(`i:${i}`);
    }
    document.querySelector("#pMostrarForEj1").innerHTML = `Resultado de For: ` + num;
}

function ejercicio1While() {
    let i = 0
    while (i < 1000) {
        console.log(`i:${i}`);
        i++;
    }
    console.log(`i de caso borde:${i}`);
    document.querySelector("#pMostrarWhileEj1").innerHTML = `Resultado de While: ` + i;
}

function ejercicio1DoWhile() {
    let i = 0
    do {
        console.log(`i:${i}`);
        i++;
    } while (i < 1000)
    console.log(`i de caso borde:${i}`);
    document.querySelector("#pMostrarDoWhileEj1").innerHTML = `Resultado de Do While: ` + i;

}

/*ejercicio2

Imprimir todos los números enteros del -100 al 10.
*/
function ejercicio2For() {
    let num = 0;
    for (let i = -100; i <= 10; i++) {
        num = i
        console.log(`i:${i}`);
    }
    document.querySelector("#pMostrarForEj2").innerHTML = `Resultado de For: ` + num;
}

function ejercicio2While() {
    let i = -100;
    while (i < 10) {
        console.log(`i:${i}`);
        i++;
    }
    console.log(`i de caso borde:${i}`);
    document.querySelector("#pMostrarWhileEj2").innerHTML = `Resultado de While: ` + i;
}

function ejercicio2DoWhile() {
    let i = -100
    do {
        console.log(`i:${i}`);
        i++;
    } while (i < 10)
    console.log(`i de caso borde:${i}`);
    document.querySelector("#pMostrarDoWhileEj2").innerHTML = `Resultado de Do While: ` + i;

}


/*ejercicio3
⭐Imprimir todos los números enteros del 40 al 10.
*/

function ejercicio3For() {
    let num = 0;
    for (let i = 40; i >= 10; i--) {
        num = i;
        console.log(`i:${i}`);
    }
    document.querySelector("#pMostrarForEj3").innerHTML = `Resultado de For: ` + num;
}

function ejercicio3While() {
    let i = 40;
    while (i > 10) {
        console.log(`i:${i}`);
        i--;
    }
    console.log(`i de caso borde:${i}`);
    document.querySelector("#pMostrarWhileEj3").innerHTML = `Resultado de While: ` + i;
}

function ejercicio3DoWhile() {
    let i = 40;
    do {
        console.log(`i:${i}`);
        i--;
    } while (i > 10)
    console.log(`i de caso borde:${i}`);
    document.querySelector("#pMostrarDoWhileEj3").innerHTML = `Resultado de Do While: ` + i;

}

/*ejercicio4
⭐Imprimir todos los números enteros del 20 al -30.
*/

function ejercicio4For() {
    let num = 0;
    console.log(`i:${num}`);
    for (let i = 20; i >= -30; i--) {
        num = i;
        console.log(`i:${i}`);
    }
    document.querySelector("#pMostrarForEj4").innerHTML = `Resultado de For: ` + num;
}

function ejercicio4While() {
    let i = 20;
    while (i > -30) {
        console.log(`i:${i}`);
        i--;
    }
    document.querySelector("#pMostrarWhileEj4").innerHTML = `Resultado de While: ` + i;
}

function ejercicio4DoWhile() {
    let i = 20;
    do {
        console.log(`i:${i}`);
        i--;
    } while (i > -30)
    console.log(`i de caso borde:${i}`);
    document.querySelector("#pMostrarDoWhileEj4").innerHTML = `Resultado de Do While: ` + i;

}

/*ejercicio5
⭐Imprimir todos los números múltiplos de 5 que hay entre 1 y 450 (inclusive).
*/

function ejercicio5While() {
    let num = 0;
    let contador = 0;
    let i = 0;
    while (i <= 450) {
        if (i % 5 === 0) {
            num = i;
            contador++;
            console.log(`i:${num}, hay ${contador} numeros multiplos`);
        }
        i++;
    }
    document.querySelector("#pMostrarWhileEj5").innerHTML = `Resultado de While: ` + num + ` hay ${contador} numeros multiplos`;
}

/*ejercicio6
⭐Imprimir todos los números múltiplos de 4 que hay entre -33 y 230.
*/

function ejercicio6DoWhile() {
    let i = -33;
    let contador = 0;
    do {
        if (i % 4 === 0) {
            console.log(`i:${i}, hay ${contador} numeros multiplos`);
            contador++;
        }
        i++;
        document.querySelector("#pMostrarDoWhileEj6").innerHTML = `Resultado de While: ` + i + ` hay ${contador} numeros multiplos`;


    } while (i < 230)
}

/*ejercicio7
⭐ Ingresar un número entre 2 y 50 y dibujar en pantalla una línea compuesta por guiones. La línea tendrá tantos guiones como el número ingresado.
*/

function ejercicio7() {

    let num = Number(document.querySelector("#txtValor1Ej7").value);
    let linea = "-";
    let lineaTotal = "";

    if (num >= 2 && num <= 50) {
        for (let i = 0; i < num; i++) {
            lineaTotal += linea;
        }
        document.querySelector("#pMostrarEj7").innerHTML = lineaTotal;
    }
    else {
        lineaTotal = `Ingrese un numero entre 2 y 50`
        document.querySelector("#pMostrarEj7").innerHTML = lineaTotal;
    }

}

/*ejercicio8
⭐Ingresar dos números y al presionar un botón
 mostrar todos los números entre esos dos números (inclusive).

Contemplar el caso que los números se ingresen invertidos 
(primero el mayor y después el menor).
*/

function ejercicio8() {
    let num1 = Number(document.querySelector("#txtValor1Ej8").value);
    let num2 = Number(document.querySelector("#txtValor2Ej8").value);
    let mostrar;
    console.log(`1) `, num1, num2)

    if (num1 > num2) {
        console.log(`2) `, num1, num2)
        for (let i = num2; i <= num1; i++) {
            mostrar = i;
            console.log(mostrar)
            document.querySelector("#pMostrarEj8").innerHTML = mostrar;
        }
    } else {
        console.log(`3) `, num1, num2)
        for (let i = num2; i >= num1; i--) {
            mostrar = i;
            console.log(mostrar)
            document.querySelector("#pMostrarEj8").innerHTML = mostrar;
        }
    }

}


/*ejercicio9
⭐Pedir dos números y utilizando solamente sumas y estructuras repetitivas,
 implementar el producto de esos dos números.
*/

function ejercicio9() {

    let num1 = Number(document.querySelector("#txtValor1Ej9").value);
    let num2 = Number(document.querySelector("#txtValor2Ej9").value);
    let suma = 0;

    for (let i = 1; i <= num2; i++) {
        suma += num1;
    }
    document.querySelector("#pMostrarEj9").innerHTML = suma;
}


/*ejercicio10
⭐⭐Pedir dos números y mostrar el producto de los números comprendidos entre ellos (inclusive).

Sólo se realizarán pruebas donde el primer número sea menor al segundo,
 no es necesario controlarlo.
*/

function ejercicio10() {

    let num1 = Number(document.querySelector("#txtValor1Ej10").value);
    let num2 = Number(document.querySelector("#txtValor2Ej10").value);
    let suma = num1;

    if (num1 > 0)
        for (let i = num1; i <= num2; i++) {
            suma = i * suma;
            document.querySelector("#pMostrarEj10").innerHTML = suma;
        } else {
        document.querySelector("#pMostrarEj10").innerHTML = `Ingrese un numero mayor a 0`;
    }

}


/*ejercicio11
⭐Ingresar tres números y al presionar un botón mostrar todos los números múItiplos del tercero que están entre
 los dos primeros números, contemplar el caso que los dos primeros números se ingresen invertidos
  (primero el mayor y después el menor).
*/

function ejercicio11() {
    let num1 = Number(document.querySelector("#txtValor1Ej11").value);
    let num2 = Number(document.querySelector("#txtValor2Ej11").value);
    let num3 = Number(document.querySelector("#txtValor3Ej11").value);
    let suma = "";

    if (num1 < num2) {

        for (let i = num1; i <= num2; i++) {
            if (i % num3 === 0) {
                suma += + ` ${i} ` + ` `;
                document.querySelector("#pMostrarEj11").innerHTML = suma;
            }
        }

    } else {
        for (let i = num1; i >= num2; i--) {
            if (i % num3 === 0) {
                suma += + ` ${i} ` + ` `;
                document.querySelector("#pMostrarEj11").innerHTML = suma;
            }
        }
    }

}

/*ejercicio12
⭐⭐Ingresar un número y calcular su factorial.
*/

function ejercicio12() {

    let num = Number(document.querySelector("#txtValor1Ej12").value);
    let sum = num;

    for (let i = num - 1; i > 0; i--) {
        sum = sum * i;
        document.querySelector("#pMostrarEj12").innerHTML = sum;
    }
}

/*
El factorial de un entero positivo n,
el factorial de n o n factorial se define en principio
como el producto de todos los números enteros positivos desde 1 (es decir, los números naturales) hasta n.
*/

/*ejercicio13
⭐⭐Un colegio nos solicitó una aplicación para apoyo de un
 curso de geometría.
 Nuestro objetivo será dibujar rectángulos. 
 Para eso pediremos el alto y ancho y dibujaremos el rectángulo de
esas dimensiones. utilizando un carácter apropiado (por ejemplo círculos, 
asteriscos, numerales, la letra x)

Un escenario posible sería el siguiente: nos ingresan los valores ancho = 5, alto = 4.
El rectángulo resultante será:
00000
00000
00000
00000
*/

function ejercicio13() {
    let ancho = document.querySelector("#txtAnchoEj13").value;//3
    let alto = document.querySelector("#txtAltoEj13").value;//

    let rectangulo = "";

    for (let i = 0; i < alto; i++) {
        rectangulo += "0 <br>";
        for (let i = 0; i < ancho; i++) { // 2
            rectangulo += "0";
        }
    }
    document.querySelector("#pMostrarEj13").innerHTML = rectangulo;
}

/*ejercicio14
⭐⭐Pedir un número y mostrar la cantidad de dígitos que tiene.
Para saber la cantidad de dígitos deberemos dividir el número 
sucesivamente entre diez hasta que el resultado sea menor a 1
*/

function ejercicio14() {
    let num = Number(document.querySelector("#txtValor1Ej14").value);
    let contador = 0;
    let resultado = ""
    if (!isNaN(num)) {
        for (let i = num; i >= 1; i = i / 10) {
            console.log(`${i}`)
            contador++;
            resultado = `El numero tiene ${contador} digitos`
            alert("desea continear?");
        }
        document.querySelector("#pMostrarEj14").innerHTML = resultado;
    } else if (num < 0) {
        document.querySelector("#pMostrarEj14").innerHTML = `Ingrese un numero mayor a 0`;
    }
    else {
        document.querySelector("#pMostrarEj14").innerHTML = `Ingrese un numero valido`;
    }

}

/*ejercicio15
⭐⭐Pedir un número y dividirlo entre 20 hasta que el resultado 
sea menor a 100, mostrar el resultado. Se debe validar que el número 
ingresado sea mayor a 2000, en caso contrario avisar al usuario y volver
 a solicitar el número.
*/

function ejercicio15() {
    let num = Number(document.querySelector("#txtValor1Ej15").value);
    let contador = 0;
    let resultado = ""
    if (!isNaN(num) && num > 2000) {
        for (let i = num; i >= 100; i = i / 20) {
            console.log(`${i}`)
            contador++;
            resultado = `El numero final es: ${i}`
            alert("desea continear?");
        }
        document.querySelector("#pMostrarEj15").innerHTML = resultado;
    } else if (num <= 2000) {
        document.querySelector("#pMostrarEj15").innerHTML = `Ingrese un numero mayor a 2000`;

    } else {
        document.querySelector("#pMostrarEj15").innerHTML = `Ingrese un numero valido`;
    }

}

/*ejercicio16
⭐⭐Pedir dos números y mostrar el primer número incluido 
entre ellos que sea múltiplo de 4 y 6 a la vez.

Si eliges 1 y 30 como tus números de entrada, 
el programa buscará el primer número dentro de ese
 rango que sea divisible tanto por 4 como por 6 al mismo tiempo.
  En este caso, el programa debería encontrar el primer número 
  que cumpla con esa condición y mostrarlo como resultado.
*/

function ejercicio16() {
    let num1 = Number(document.querySelector("#txtValor1Ej16").value);
    let num2 = Number(document.querySelector("#txtValor2Ej16").value);
    let resultado = "";
    let o = 0;

    if (num2 > num1) {
        for (let i = num2; i > num1 && o === 0; i--) {
            if (i % 4 === 0 && i % 6 === 0) {
                o++;
                resultado = `El primer multiplo de 4 y 6 es: ${i}`
            } else {
                resultado = `No hay multiplos entre 4 y 6 entre ${num1} y ${num2}`
            }
            document.querySelector("#pMostrarEj16").innerHTML = resultado;
        }
    } else if (num1 > num2) {
        for (let i = num2; i < num1 && o === 0; i++) {
            if (i % 4 === 0 && i % 6 === 0) {
                o++;
                resultado = `El primer multiplo de 4 y 6 es: ${i}`
            } else {
                resultado = `No hay multiplos entre 4 y 6 entre ${num1} y ${num2}`
            }
            document.querySelector("#pMostrarEj16").innerHTML = resultado;
        }

    } else {
        resultado = "Valores invalidos"
    }

    document.querySelector("#pMostrarEj16").innerHTML = resultado;
}


/*ejercicio17
⭐⭐Utilizando solamente restas y estructuras repetitivas, obtener el cociente y resto de la división entera entre un dividendo y un divisor.
*/

/*ejercicio18
⭐⭐Solicitar un número al usuario e imprimir en un párrafo todos los números mayores a 30 y menores a 200 que sean múltiplos del número ingresado por el usuario y pares simultáneamente.
*/

/*ejercicio19
⭐⭐⭐Crear un calendario de un mes. Se ingresa el mes del año, el día de la semana en que comienza ese mes y en base a esos ingresos se debe armar una tabla con formato de calendario de mes.
*/

/*ejercicio20
⭐⭐⭐El algoritmo de Euclides es un método antiguo y eficaz para calcular el máximo común divisor (MCD).
Fue originalmente descrito por Euclides en su obra Elementos.
Al dividir a entre b (números enteros), se obtiene un cociente q y un residuo r.

Es posible demostrar que el máximo común divisor de a y b es el mismo que el de b y r (Sea c el máximo común divisor de y b, como a=bq+r y c divide a a y  a b divide también a r. Si existiera otro número mayor que c que divide a b y a r, también dividiría a a , por lo que c no sería el mcd de a y b, lo que contradice la hipótesis).

Éste es el fundamento principal del algoritmo.
También es importante tener en cuenta que el máximo común divisor de cualquier número a y O es precisamente a.

Para fines prácticos, la notación mcd(a, b) significa máximo común divisor de a y b.
Según lo antes mencionado, para calcular el máximo común divisor de 2366 y 273 Se puede proseguir de la siguiente manera:



Como la sucesión de residuos va disminuyendo, al final un residuo tiene que ser cero y es en ese momento cuando el algoritmo termina. El máximo común divisor es precisamente rn+1
*/
