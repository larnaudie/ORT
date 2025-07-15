class Usuario{
    constructor(nombre, apellido, email, direccion, password ){
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

class Pedido{
    constructor(cantidad, idProducto, idSucursal){
        this.cantidad= cantidad
        this.idProducto= idProducto 
        this.idSucursal= idSucursal
    }
}

const MENU= document.querySelector("#menu")
const ROUTER= document.querySelector("#ruteo")
const HOME= document.querySelector("#pantalla-home")
const LOGIN= document.querySelector("#pantalla-login")
const REGISTRARU= document.querySelector("#pantalla-registrarU")
const REGISTRARP= document.querySelector("#pantalla-registrarP")
const URLBASE="https://ort-tallermoviles.herokuapp.com/api/"

inicio()
function inicio(){
    ROUTER.addEventListener("ionRouteDidChange", navegar)
    document.querySelector("#btnRegistrarUsuario").addEventListener("click",previaRegistrarUsuario)
    document.querySelector("#btnHacerLogin").addEventListener("click",previaHacerLogin)
    document.querySelector("#btnHacerRegistroPedido").addEventListener("click",previaRegistrarPedido)

    document.querySelector("#btnMenuLogout").addEventListener("click",cerrarSesion)

    
    chequearSesion()
}
function cerrarMenu(){
   MENU.close()
}


function chequearSesion(){
    ocultarMenu()
    if (localStorage.getItem("usuario")!=null){
        mostrarMenuVIP()
    } else {
        mostrarMenuComun()
    }
}

function navegar(evt){
    let destino= evt.detail.to
    ocultarPantallas()
    if (destino=="/") HOME.style.display="block"
    if (destino=="/login") LOGIN.style.display="block"
    if (destino=="/registrarP") REGISTRARP.style.display="block"
    if (destino=="/registrarU") REGISTRARU.style.display="block"

}

function ocultarPantallas(){
    HOME.style.display="none"
    LOGIN.style.display="none"
    REGISTRARU.style.display="none"
    REGISTRARP.style.display="none"

}

function previaRegistrarUsuario(){
    let nombre= document.querySelector("#txtRegistrarUNombre").value  
    let apellido= document.querySelector("#txtRegistrarUApellido").value  
    let direccion= document.querySelector("#txtRegistrarUDireccion").value  
    let email= document.querySelector("#txtRegistrarUEmail").value  
    let password= document.querySelector("#txtRegistrarUPassword").value  

    let nuevoUsuario= new Usuario(nombre, apellido, email, direccion, password)
    hacerRegistroUsuario(nuevoUsuario)
}

function hacerRegistroUsuario(nuevoUsuario){
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
        .then(function(informacion){
             
            if (informacion.error==""){
                mostrarMensaje("SUCCESS","Registro exitoso","Puedes usar la APP",3000)
                ocultarPantallas()
                HOME.style.display="block"
                // en su obligatorio van a guardar el usuario y el token en el localStorage
                // van mostrar el menú de usuario conectado
                // en el obligatorio 
            } else {
                mostrarMensaje("ERROR","Datos incorrectos","Revisa los datos",3000)

            }
            
        })
        .catch(function(error){
        console.log(error)
        })
}

function previaHacerLogin(){
  
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
             
            if (informacion.error==""){
               
                ocultarPantallas()
                HOME.style.display="block"
                // mostrar el MENU VIP
                localStorage.setItem("usuario",informacion.data.email)
                localStorage.setItem("apiKey",informacion.data.token)
                ocultarMenu()
                mostrarMenuVIP()


            }
            
        })
        .catch(function(error){
        console.log(error)
        })
}

function ocultarMenu(){
    document.querySelector("#btnMenuRegistrarU").style.display="none"
    document.querySelector("#btnMenuLogin").style.display="none"
    document.querySelector("#btnMenuRegistrarP").style.display="none"
    document.querySelector("#btnMenuListado").style.display="none"
    document.querySelector("#btnMenuInforme").style.display="none"
    document.querySelector("#btnMenuMapa").style.display="none"
    document.querySelector("#btnMenuLogout").style.display="none"
}

function mostrarMenuComun(){
    document.querySelector("#btnMenuRegistrarU").style.display="block"
    document.querySelector("#btnMenuLogin").style.display="block"
}

function mostrarMenuVIP(){
    document.querySelector("#btnMenuRegistrarP").style.display="block"
    document.querySelector("#btnMenuListado").style.display="block"
    document.querySelector("#btnMenuInforme").style.display="block"
    document.querySelector("#btnMenuMapa").style.display="block"
    document.querySelector("#btnMenuLogout").style.display="block"
    obtenerSucursales()
    obtenerProductos()
}

function cerrarSesion(){
     ocultarPantallas()
     HOME.style.display="block"
     ocultarMenu()
     mostrarMenuComun()
     localStorage.removeItem("usuario")
     localStorage.removeItem("apiKey")
}


function mostrarMensaje(tipo, titulo, texto, duracion) {
    const toast = document.createElement('ion-toast');
    toast.header = titulo;
    toast.message = texto;
    if (!duracion) {
    duracion = 2000;
    }
    toast.duration = duracion;
    if (tipo === "ERROR") {
    toast.color = 'danger';
    toast.icon = "alert-circle-outline";
    } else if (tipo === "WARNING") {
    toast.color = 'warning';
    toast.icon = "warning-outline";
    } else if (tipo === "SUCCESS") {
    toast.color = 'success';
    toast.icon = "checkmark-circle-outline";
    }
    document.body.appendChild(toast);
    toast.present();
}

function obtenerSucursales(){
    fetch (`https://ort-tallermoviles.herokuapp.com/api/sucursales`,{
        method:'GET',
        headers:{
        'Content-Type': 'application/json',
        'X-AUTH':localStorage.getItem("apiKey")
        }
        })
        .then(function (response){
        
        return response.json()
        })
        .then(function(informacion){
            
            cargarSelectSucursales(informacion.data)
        })
        .catch(function(error){
        console.log(error)
        })
}


function cargarSelectSucursales(listaSucursales){
    console.log(listaSucursales)
    let miSelect=""
    for (let unaSucursal of listaSucursales){
        miSelect+=`<ion-select-option value=${unaSucursal._id}>${unaSucursal.nombre}</ion-select-option>`
    }
    document.querySelector("#slcRegistrarPSucursal").innerHTML= miSelect
}


function obtenerProductos(){
    fetch (`https://ort-tallermoviles.herokuapp.com/api/productos
`,{
        method:'GET',
        headers:{
        'Content-Type': 'application/json',
        'X-AUTH':localStorage.getItem("apiKey")
        }
        })
        .then(function (response){
       
        return response.json()
        })
        .then(function(informacion){
          
            cargarSelectProductos(informacion.data)
        })
        .catch(function(error){
        console.log(error)
        })
}


function cargarSelectProductos(listaProductos){
    console.log(listaProductos)
    let miSelect=""
    for (let unProducto of listaProductos){
        miSelect+=`<ion-select-option value=${unProducto._id}>${unProducto.nombre}</ion-select-option>`
    }
    document.querySelector("#slcRegistrarPProducto").innerHTML= miSelect
}


function previaRegistrarPedido(){
    let cantidad= document.querySelector("#txtRegistrarPCantidad").value  
    let sucursal= document.querySelector("#slcRegistrarPSucursal").value  
    let producto= document.querySelector("#slcRegistrarPProducto").value  
    

    let nuevoPedido= new Pedido(cantidad, producto, sucursal)
    hacerRegistroPedido(nuevoPedido)
}

function hacerRegistroPedido(nuevoPedido){
    fetch (`https://ort-tallermoviles.herokuapp.com/api/pedidos`,{
        method:'POST',
        headers:{
        'Content-Type': 'application/json',
        'X-AUTH':localStorage.getItem("apiKey")
        },
        body: JSON.stringify(nuevoPedido)
        })
        .then(function (response){
            console.log(response)
            return response.json()
        })
        .then(function(informacion){
             
            if (informacion.error==""){
                mostrarMensaje("SUCCESS","Pedido registrado con exito","",2000)
                ocultarPantallas()
                HOME.style.display="block"
                 
            } else {
                mostrarMensaje("ERROR","Datos incorrectos","Revisa los datos",2000)

            }
            
        })
        .catch(function(error){
        console.log(error)
        })
}