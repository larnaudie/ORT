window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnMostrarEj1").addEventListener("click", esMayor);
    document.querySelector("#btnMostrarEj2").addEventListener("click", esMayor2);
    document.querySelector("#btnMostrarEj3").addEventListener("click", esMayorNombre);
    document.querySelector("#btnMostrarEj4").addEventListener("click", notaFinal);
    document.querySelector("#btnMostrarEj5").addEventListener("click", notaFinalProgramacion);
}

function esMayor() {
    let edad = Number(document.querySelector("#txtEdadEj1").value);
    let resultado;

    if (edad >= 18) {
        resultado = "Puedo entrar, soy mayor de edad";
        document.querySelector("#pResultadoEj1").innerHTML = resultado;
    }
    /*Haciendo esto estamos repitiendo codigo y es ineficiente por que no consideramos casos negativos, falsos.
    // Tambien estamos dejando por fuera el caso de falso.
    // A parte, si se cumple el primer if, iriamos al segundo if y no se va a cumplir... es al pedo un segundo if.
    if(edad<18){
        resultado = "No puedo entrar, no soy mayor de edad";
        document.querySelector("pResultadoEj1").innerHTML = resultado;
    }*/
}

function esMayor2() {
    let edad = Number(document.querySelector("#txtEdadEj2").value);
    let resultado;
    if (edad >= 18) {
        resultado = "Puedo entrar, soy mayor de edad";
    }else{
        resultado = "No puedo entrar, no soy mayor de edad";
    }
    document.querySelector("#pResultadoEj2").innerHTML = resultado;
}

function esMayorNombre(){
    let edad = Number(document.querySelector("#txtEdadEj3").value);
    let nombre = document.querySelector("#txtNombreEj3").value;
    let resultado;
    
    if (edad >= 18 && nombre === "Mauro") {
        resultado = "Puedo entrar, soy mayor de edad";
    }else{
        resultado = "No puedo entrar, no soy mayor de edad";
    }
    document.querySelector("#pResultadoEj3").innerHTML = resultado;
    
   /*
    if (edad >= 18 || nombre === "Mauro") {
        resultado = "Puedo entrar, soy mayor de edad";
    }else{
        resultado = "No puedo entrar, no soy mayor de edad";
    }
    document.querySelector("#pResultadoEj3").innerHTML = resultado;
    */
}
function notaFinal(){
    let nota = Number(document.querySelector("#txtNotaEj4").value);
    let resultado;

    if (nota >= 86) {
        resultado = `Exonere con ${nota}`;
    }else if(nota>=70){
        resultado = `Aprobado con ${nota}`;
    }else{
        resultado = `Reprobado con ${nota}`;
    }
    document.querySelector("#pResultadoEj4").innerHTML = resultado;
}

function notaFinalProgramacion(){
    let nota = Number(document.querySelector("#txtNotaEj5").value);
    let materia = document.querySelector("#txtMateriaEj5").value;
    let resultado;

    if(materia === "Programacion1" && nota <= 100 && nota > 0){
        if (nota >= 86) {
            resultado = `Exonere ${materia} con ${nota}`;
        }else if(nota>=70){
            resultado = `Aprobado ${materia} con ${nota}`;
        }else{
            resultado = `Reprobado ${materia} con ${nota}`;
        }
    }else{
        resultado = `la materia es ${materia} y la nota es ${nota}`
    }
    document.querySelector("#pResultadoEj5").innerHTML = resultado;

}
