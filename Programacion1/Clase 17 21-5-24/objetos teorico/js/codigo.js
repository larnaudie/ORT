// window.addEventListener("load", inicio);

// function inicio() {
    document.querySelector("#btnRegistrar").addEventListener("click", registrarHeroe)
// }
//----------------------------------------------------------------------
//Para definir una clase usamos la palabra reservada class
//Los nombres de las clases se escriben en CamelCase, pero con la primera letra en mayuscula
//Las clases poseen un metodo constructor el cual nos ayuda a definir sus propiedades internas

/*class Heroe {
    constructor(){
        this.nombre;
        this.poder;
        this.edad;
        this.estaActivo;
    }
}

//Para crear una nueva instancia de la clase, lo cual es un objeto de esa clase lo //////hacemos de la siguiente manera, definimos una variable y con palabra reservada new y 
//la clase con parentesis

let spiderman = new Heroe();

//En este caso solo vemos la informacion de que es un objeto de ese tipo, pero esta inicializado sin valores en sus propiedades

console.log(spiderman)
*/

//-------------------------------------------------------------------------

//Aqui le estamos asignando valores a cada uno de las propiedades de la clase heroe, pero atraves de su constructor
//El tema es que esto no es dinamico, ya que cada vez que creemos un objeto de la clase heroe, se inciara con esos valores

/*class Heroe {
    constructor(){
        this.nombre = "Peter";
        this.poder = "poderes de arana";
        this.edad = 18
        this.estaActivo = true;
    }
}

let spiderman = new Heroe();
let batman = new Heroe();

console.log(spiderman);
console.log(batman);*/

//-------------------------------------------------------------------------------

//Para crear objetos de una clase de manera dinamica, ya dijimos que el constructor no es mas que un metodo de la clase heroee, lo cual significa que puede recibir paramentros, por lo tanto le pasaremos parametros a este constructor y se lo asignaremos a cada una  de las propiedades

class Heroe {
    constructor(unNombre, unPoder, unaEdad, esActivo){
        this.nombre = unNombre;
        this.poder = unPoder;
        this.edad = unaEdad;
        this.estaActivo = esActivo;
    }

    saludar(){
        console.log(`Hola soy ${this.nombre} y mi poder es ${this.poder}`)
    }

    //hacer esto o acceder al objeto de manera directa y asignarle un valor es lo mismo
    //la ventaja es que al realizarlo de esta manera podemos genera muchos mas controles
    cambiarPoder(nuevoPoder){
        this.poder = nuevoPoder;
    }

    cambiarPoderVersion2(nuevoPoder){
        if(this.estaActivo){
            this.poder = nuevoPoder;
        }
    }

    pelear(){
        let pelea;
        if(this.poder === "armadura" || this.poder === "detective" ){
            poder ="Pelea con la mente"
        } else {
            pelea = "Poder fisico";
        }
        return pelea;
    }

    obtenerEstaActivo(){
        let heroeActivo = "";
        if(this.estaActivo === true){
            heroeActivo = "Esta en actividad"
        } else {
            heroeActivo = " El heroe esta retirado"
        }
        return heroeActivo;
    }
}

//Para cargar cada una de las propiedades del constructor hay que en el parentesis curvo que se crea irle mandando la informacion en el orden correcto que corresponde a cada una de las propiedades, de esta manera podemos crearlos de manera dinamica, y generar objetos que tienen diferentes valores en sus propiedades pero que son del tipo heroe en este caso

let spiderman = new Heroe("Peter Parker", "poder de arana", 18, true);
let batman = new Heroe("Bruce Wayne", "artes marciales", 30, false);

console.log(spiderman);
console.log(batman);

//para consultar una propiedad de un objeto se hace igual que accediendo a propiedades de otras formas que hemos hecho, con el punto y la propiedad que tiene definaida dentro de la clase

console.log(spiderman.nombre);

//tambien nos sirve para modificar los valores de esas propiedades

batman.estaActivo = true;
console.log(batman);


let ironman = new Heroe("Tony Stark", "Armadura", 32, false);
console.log(ironman.poder);


//Si al html mandamos directamente una de las variables que son objetos lo que vamos a ver es [object], para ver cosas del objetos debemso de mostrar sus propiedades, ver el objeto en si no me sirve para nada

// document.querySelector("#pResultado").innerHTML= spiderman.nombre;

//Nosotros seguramente querramos saber cosas de un grupo de  estos heroes,  por ejemplo saber cuales estan activos, cuales no, pero para poder sacar inforamcion comun que tienen estos y analizarla o filtrarla, seguramente me conviene agruparlos, y el tipo de variable que nosostros usamos a agrupar es el array

let heroes = [spiderman, batman, ironman];
console.log(heroes);

//el hecho de tenerlos agrupados nos permite recorrerlos para consultar cosas
//En heroes en la posicion 0 tengo a spiderman, en la 1 a batman y a 2 a ironman
//Trabajar de esta manera me permite saber que en cualquier posicion del array yo lo que me voy a encontrar es a un objeto heroe que va a tener unas propiedades que conocemos

//por lo tanto yo puedo hacer unHeroe[0].poder, para consultar el poder del heroe en esa posicion

//Nunca esta bueno tener arrays de este estilo con objetos de varios tipos como que hayan vehiculos y heroesen una misma lista, lo deberiamos de trabjar en arrays diferentes

//escribiendo al consulta de la propiedad atraves de la variable auxiliar o atraves de la posicion de i es lo mismo, podemos acceder a la informacion del objeto, si vamos a hacerlo con la segunda manera claramente habria que borrar la variable auxiliar

/*for (let i = 0; i < heroes.length; i++) {
    const unHeroe = heroes[i];
    document.querySelector("#pResultado").innerHTML += `${unHeroe.nombre} - ${heroes[i].edad}`
}*/

//Vamos a cargar la tabla que mostramos al informacion de heroe de manera dinamica, de esta manera vemos solamente la informacion de Peter 3 veces, deberiamos de cambiar esto para cargar de forma mas dinamica

/*for (let i = 0; i < heroes.length; i++) {
    const unHeroe = heroes[i];
    document.querySelector("#pResultado").innerHTML += `<tr>
    <td>Peter Parker</td>
    <td>18</td>
    <td>Poder de arana</td>
</tr>`
}*/

listarHeroes()

function registrarHeroe() {
    let nombreCampo = document.querySelector("#txtNombre").value;
    let poderCampo = document.querySelector("#txtPoder").value;
    let edadCampo = Number(document.querySelector("#txtEdad").value);
    let estaActivoCampo = document.querySelector("#slcActivo").value;
    let estaActivoIngresar = false;
    if(estaActivoIngresar === "s"){
        estaActivoIngresar =  true;
    }

    let nuevoHeroe =  new Heroe(nombreCampo, poderCampo, edadCampo, estaActivoIngresar);
    heroes.push(nuevoHeroe);
    listarHeroes();

}

//como voy a listar la tabla dos veces, e vez de repetir codigo me hago una funcion


/*function listarHeroes() {
    document.querySelector("#tblHeroes").innerHTML = "";
    for (let i = 0; i < heroes.length; i++) {
        const unHeroe = heroes[i];
        document.querySelector("#tblHeroes").innerHTML += `<tr>
        <td>${unHeroe.nombre}</td>
        <td>${unHeroe.edad}</td>
        <td>${unHeroe.poder}</td>
        <td>${unHeroe.estaActivo}</td>
    </tr>`
    }
}*/

spiderman.saludar();
batman.saludar();
ironman.saludar();


batman.cambiarPoder("Detective");

console.log(batman.pelear());

//Es importante saber que no esta bien mostrar por pantalla el valor directo de un booleano , ya sea true o false, si no que lo mejor es mostrar atraves de un resultado algun mensaje que lo interprete, como se hace con la funcion obtenerEstaActivo
function listarHeroes() {
    document.querySelector("#tblHeroes").innerHTML = "";
    for (let i = 0; i < heroes.length; i++) {
        const unHeroe = heroes[i];
        document.querySelector("#tblHeroes").innerHTML += `<tr>
        <td>${unHeroe.nombre}</td>
        <td>${unHeroe.edad}</td>
        <td>${unHeroe.poder}</td>
        <td>${unHeroe.obtenerEstaActivo()}</td>
    </tr>`
    }
}

//Es importante senalar que podemos llevarnos todo el codigo propio de la clase a un js aparte, ya que pensandolo en profundidad tambien es codigo reutilizable porque si en algun momento tengo otro proyecto que maneje Heroes, pdoria utilizar este codigo que yo ya tengo preparado
//para importarlo trabajaria de una forma muy similar a la de la libreria, se deberia de llamar al js desde el html pero definiendo este en una etiqueta script anterior ya que es codigo que debe de estar definido antes