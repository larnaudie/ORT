class Usuario{
    constructor(nombre, apellido, email, direccion, password){
        this.nombre= nombre
        this.apellido= apellido
        this.email= email 
        this.direccion= direccion
        this.password= password
    }
}

class UsuarioConectado{
    constructor(email, password){
        this.email= email
        this.password= password
    }
}

const MENU= document.querySelector("#menu")
const ROUTER= document.querySelector("#ruteo")
const HOME= document.querySelector("#pantalla-home")
const LOGIN= document.querySelector("#pantalla-login")
const REGISTROU= document.querySelector("#pantalla-registroU")
const LISTADO= document.querySelector("#pantalla-listado")
const URLBASE= "https://ort-tallermoviles.herokuapp.com/api/"


function cerrarMenu(){
    MENU.close()
}
inicio()
function inicio(){
    ROUTER.addEventListener("ionRouteDidChange", navegar)
    document.querySelector("#btnRegistroUsuario").addEventListener("click",previaRegistroUsuario)
    document.querySelector("#btnHacerLogin").addEventListener("click",previaLogin)


    
}

function navegar(evt){
   const ruta= evt.detail.to  
   ocultarPantallas()
   if (ruta=="/") HOME.style.display="block"
   if (ruta=="/login") LOGIN.style.display="block"
   if (ruta=="/registroU") REGISTROU.style.display="block"
   if (ruta=="/listado") LISTADO.style.display="block"

}

function ocultarPantallas(){

    HOME.style.display="none"
    LOGIN.style.display="none"
    REGISTROU.style.display="none"
    LISTADO.style.display="none"
}

function previaRegistroUsuario(){
    // capturar los datos del formulario
    let nombre= document.querySelector("#txtRegistroUNombre").value 
    let apellido= document.querySelector("#txtRegistroUApellido").value 
    let email= document.querySelector("#txtRegistroUEmail").value 
    let direccion= document.querySelector("#txtRegistroUDireccion").value 
    let password= document.querySelector("#txtRegistroUPassword").value 

    let nuevoUsuario= new Usuario(nombre, apellido, email, direccion, password)
    registrarUsuario(nuevoUsuario)

}

function registrarUsuario(nuevoUsuario){

    fetch (`${URLBASE}usuarios`,{
        method:'POST',
        headers:{
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoUsuario)
        })
        .then(function (response){
            console.log(response)
        return response.json()
        })
        .then(function(data){
            console.log(data)
            if (data.error ==""){
                alert ("Registro creado con éxito")
                ocultarPantallas()
                LOGIN.style.display="block"
                // en el obligatorio no lo van al login ... va al HOME
                // tienen que 1) guardar en localStorage el usuario   2) guardar el apikey
                // 3) mostrar el menú VIP
            }            
       
        })
        .catch(function(error){
        console.log(error)
    })
}

function previaLogin(){

        let email= document.querySelector("#txtLoginEmail").value  
        let password= document.querySelector("#txtLoginPassword").value   

        let nuevoUsuarioConectado= new UsuarioConectado(email, password)
        hacerLogin(nuevoUsuarioConectado)
}


function hacerLogin(nuevoUsuarioConectado){
    fetch (`${URLBASE}usuarios/session`,{
        method:'POST',
        headers:{
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoUsuarioConectado)
        })
        .then(function (response){
            console.log(response)
        return response.json()
        })
        .then(function(informacion){
            console.log(informacion)
            if (informacion.error ==""){
                
                ocultarPantallas()
                HOME.style.display="block"
                localStorage.setItem("usuario",informacion.data.email)
                localStorage.setItem("apikey",informacion.data.token)                   

                // en el obligatorio no lo van al login ... va al HOME
                // tienen que 1) guardar en localStorage el usuario   2) guardar el apikey
                // 3) mostrar el menú VIP
            }            
       
        })
        .catch(function(error){
        console.log(error)
    })
}