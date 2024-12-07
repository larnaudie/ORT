//PRIMERA VERSION
//HAY QUE DARLE IDS A LOS LI y ademas a los div de cada uno de las secciones

window.addEventListener("load", inicio);
//-------------------------------------------------------------------------------------------------------------------------------------------
/*function inicio() {
    document.querySelector("#btnSeccionAgregar").addEventListener("click", mostrarSeccionAgregar)
    document.querySelector("#btnSeccionListar").addEventListener("click", mostrarSeccionLista)
    document.querySelector("#btnSeccionBuscar").addEventListener("click", mostrarSeccionBuscar)
}

function mostrarSeccionAgregar() {
    document.querySelector("#seccionAgregar").style.display = "block";
    document.querySelector("#seccionListar").style.display = "none";
    document.querySelector("#seccionBuscar").style.display = "none";
}

function mostrarSeccionLista() {
    document.querySelector("#seccionAgregar").style.display = "none";
    document.querySelector("#seccionListar").style.display = "block";
    document.querySelector("#seccionBuscar").style.display = "none";
}

function mostrarSeccionBuscar() {
    document.querySelector("#seccionAgregar").style.display = "none";
    document.querySelector("#seccionListar").style.display = "none";
    document.querySelector("#seccionBuscar").style.display = "block";
}*/
//-------------------------------------------------------------------------------------------------------------------------------------------


//SEGUNDA VERSION
//necesitaria poder ocular todas las secciones, estaria buena que todas las secciones tuvieran un id en comun, en este punto es donde entra el atributo class, otro atributo universal
// que la diferencia que tiene con el id es que podemos repertirlo en nuestro html
//aca agregamos a las secciones el class=seccion

/*function inicio() {
    document.querySelector("#btnSeccionAgregar").addEventListener("click", mostrarSeccionAgregar)
    document.querySelector("#btnSeccionListar").addEventListener("click", mostrarSeccionLista)
    document.querySelector("#btnSeccionBuscar").addEventListener("click", mostrarSeccionBuscar)
}*/

//query selector solo selecciona un unico elemento, es decir el primero que encuentra con el id, por esto deberiamos de cambiar el uso del querySelector al querySelectorAll
/*function mostrarSeccionAgregar() {
    // document.querySelector(".seccion").style.display = "none";
    //Usar querySelectorAll nos genera otro problema, ya que no nos devuelve un elemento de html, nos devuelve un array de elementos html
    console.log(document.querySelectorAll(".seccion"));
    document.querySelectorAll(".seccion").style.display = "none";
}*/

//Tengo que modificarlo para poder hacer una recorrida de mi array de secciones lo cual lo hago de la siguiente manera
//despues que comprobe que oculto todas las secciones muestro la que me interesa
/*function mostrarSeccionAgregar() {
    let secciones = document.querySelectorAll(".seccion");
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";
    }
    document.querySelector("#seccionAgregar").style.display = "block";
}

function mostrarSeccionLista() {
    let secciones = document.querySelectorAll(".seccion");
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";
    }
    document.querySelector("#seccionListar").style.display = "block";
}

function mostrarSeccionBuscar() {
    let secciones = document.querySelectorAll(".seccion");
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";
    }
    document.querySelector("#seccionBuscar").style.display = "block";
}*/
//-------------------------------------------------------------------------------------------------------------------------------------------


//TERCERA VERSION
//si yp estoy repitiendo codigo todo el tiempo, tengo que sacar eso a una funcion aparte

/*function inicio() {
    document.querySelector("#btnSeccionAgregar").addEventListener("click", mostrarSeccionAgregar)
    document.querySelector("#btnSeccionListar").addEventListener("click", mostrarSeccionLista)
    document.querySelector("#btnSeccionBuscar").addEventListener("click", mostrarSeccionBuscar)
}

function mostrarSeccionLista() {
    ocultarSecciones();
    document.querySelector("#seccionListar").style.display = "block";
}


function mostrarSeccionAgregar() {
    ocultarSecciones();
    document.querySelector("#seccionAgregar").style.display = "block";
}

function mostrarSeccionBuscar() {
    ocultarSecciones();
    document.querySelector("#seccionBuscar").style.display = "block";
}

function ocultarSecciones(){
    let secciones = document.querySelectorAll(".seccion");
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";
    }
}*/

//-------------------------------------------------------------------------------------------------------------------------------------------

//VERSION 4
//ACA AGREGO EL BTN SECCION A LOS LI

/*function inicio() {
    let botones = document.querySelectorAll(".btnSeccion");
    for (let i = 0; i < botones.length; i++) {
        // botones[i].addEventListener("click", mostrarSeccionAgregar)
        botones[i].addEventListener("click", mostrarSeccion)
    }
}

//a una funcion que esta asociada a eventos, nosotros podemos acceder al click, el cual es el elemento que disparo el evento
function mostrarSeccion() {
    ocultarSecciones();
    //es el elemento que llamos al evento
    console.log(this);
    //quiero obtener del elemento presionado el atributo id
    let idBtn = this.getAttribute("id");
    console.log(idBtn);
    switch (idBtn) {
        case "btnSeccionAgregar":
            document.querySelector("#seccionAgregar").style.display = "block";
            break;
        case "btnSeccionListar":
            document.querySelector("#seccionListar").style.display = "block";
            break;
        case "btnSeccionBuscar":
            document.querySelector("#seccionBuscar").style.display = "block";
            break;
        default:
            break;
    }
}

function ocultarSecciones(){
    let secciones = document.querySelectorAll(".seccion");
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";
    }
}*/

//-------------------------------------------------------------------------------------------------------------------------------------------
//VERSION 5
// COMO YO SABIA COMO IBA A TERMINAR EL EJEMPLO FUI CUIDADOSO CON LOS NOMBRES DE LAS ID
//POR EJEMPLO btnSeccionAgregar corresponde a seccionAgregar e igual con los otros

/*function inicio() {
    let botones = document.querySelectorAll(".btnSeccion");
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", mostrarSeccion)
    }
    //ultimo paso de la seccion simular que hago click en una seccion para que empiece ella cargada, ya que si no aparece todo, 
    //no podemos llamar a mostrarSeccion(), porque precisamos si o si un evento de click
    document.querySelector("#btnSeccionAgregar").click();
}

function ocultarSecciones(){
    let secciones = document.querySelectorAll(".seccion");
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";
    }
}

function mostrarSeccion() {
    ocultarSecciones();
    let idBtn = this.getAttribute("id");//"btnSeccionAgregar"
    let idSeccion = idBtn.charAt(3).toLowerCase() + idBtn.substring(4); //"seccionAgregar"
    document.querySelector("#" + idSeccion).style.display = "block";
}*/

//ahora puedo agregar nuevas secciones a mi app sin tener que tocar ninguna linea en js
//-------------------------------------------------------------------------------------------------------------------------------------------


//VERSION 6

//QUE PASA SI DETERMINADO USUARIO PUEDE O NO PUEDE VER DETERMINADAS SECCIONES, AHI PUEDO AGREGAR UNA NUEVA CLASE


function inicio() {
    let botones = document.querySelectorAll(".btnSeccion");
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", mostrarSeccion)
    }
    document.querySelector("#btnSeccionAgregar").click();
    mostrarBotones("admin");
}

function ocultarSecciones(){
    let secciones = document.querySelectorAll(".seccion");
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";
    }
}

function mostrarSeccion() {
    ocultarSecciones();
    let idBtn = this.getAttribute("id");//"btnSeccionAgregar"
    let idSeccion = idBtn.charAt(3).toLowerCase() + idBtn.substring(4); //"seccionAgregar"
    document.querySelector("#" + idSeccion).style.display = "block";
}

function mostrarBotones(tipo){
    let botonesOcultar = document.querySelectorAll(".btnSeccion");
    for (let i = 0; i < botonesOcultar.length; i++) {
        botonesOcultar[i].style.display = "none";
    }
    let botonesMostrar = document.querySelectorAll("."+ tipo);
    for (let i = 0; i < botonesMostrar.length; i++) {
        botonesMostrar[i].style.display = "block";
    }
}
