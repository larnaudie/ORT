window.addEventListener("load", inicio);

function inicio(){
    document.querySelector("#btnVerificar").addEventListener("click", verAccionesDia);
}


function verAccionesDia(){
    //Aplicando switch con OR
    let dia = document.querySelector("#slcDia").value;
    let resultado;

    switch(dia){
        case "lu":
        case "mi":
            resultado = "Tengo que preparar clase del Lunes y Miercoles";
        break;
        case "ma":
        case "ju":
            resultado = "Tengo que preparar clase del Martes y Jueves";
        break;
        case "vi":
            resultado = "Tengo que preparar clase del Viernes";
        break;
        default:
            resultado = "Tengo el fin de semana libre";
        break;

    }
    document.querySelector("#pResultado").innerHTML = resultado;

}

/*
{ 
    //Aplicando switch
    let dia = document.querySelector("#slcDia").value;
    let resultado;

    switch(dia){
        case "lu":
            resultado = "Tengo que preparar clase del Lunes";
        break;
        case "ma":
            resultado = "Tengo que preparar clase del Martes";
        break;
        case "mi":
            resultado = "Tengo que preparar clase del Miercoles";
        break;
        case "ju":
            resultado = "Tengo que preparar clase del Jueves";
        break;
        case "vi":
            resultado = "Tengo que preparar clase del Viernes";
        break;
        default:
            resultado = "Tengo el fin de semana libre";
        break;

    }
    document.querySelector("#pResultado").innerHTML = resultado;

}
*/

/*
{
    //Aplicando else if
    let dia = document.querySelector("#slcDia").value;
    let resultado;

    if(dia === "lu"){
        resultado = "Tengo que preparar clase del lunes";
    }else if(dia === "ma"){
        resultado = "Tengo que hacer la clase del martes";
    }else if(dia === "mi"){
        resultado = "Tengo que hacer la clase del miercoles";
    }else if(dia === "ju"){
        resultado = "Tengo que hacer la clase del jueves";
    }else if(dia === "vi"){
        resultado = "Tengo que hacer la clase del viernes";
    }else{
        resultado = "Tengo el fin de semana libre";
    }
    document.querySelector("#pResultado").innerHTML = resultado;
}
*/

/*
{   //Aplicando else if con ||
    let dia = document.querySelector("#slcDia").value;
    let resultado;

    if(dia === "lu" || dia === "ma"){
        resultado = "Tengo que preparar clase del lunes";
    }else if(dia === "ma"){
        resultado = "Tengo que hacer la clase del martes";
    }else if(dia === "mi"){
        resultado = "Tengo que hacer la clase del miercoles";
    }else if(dia === "ju"){
        resultado = "Tengo que hacer la clase del jueves";
    }else if(dia === "vi"){
        resultado = "Tengo que hacer la clase del viernes";
    }else{
        resultado = "Tengo el fin de semana libre";
    }
    document.querySelector("#pResultado").innerHTML = resultado;
}
*/

