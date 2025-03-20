const MENU = document.querySelector("#menu");
const ROUTER = document.querySelector("#ruteo");
const HOME = document.querySelector("#pantalla-home");
const LOGIN = document.querySelector("#pantalla-login");
const REGISTRARPEDIDO = document.querySelector("#pantalla-registrarPedido");
const REGISTRARUSUARIO = document.querySelector("#pantalla-registrarUsuario");
const MAPA = document.querySelector("#pantalla-mapa");
const INFORME = document.querySelector("#pantalla-informe");
const LISTADO = document.querySelector("#pantalla-listado");
const URLBASE = "https://ort-tallermoviles.herokuapp.com/api/";

class Usuario {
  constructor(nombre, apellido, email, direccion, password) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.direccion = direccion;
    this.password = password;
  }
}

class UsuarioConectado {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

inicio();
function inicio() {
  //Asi lo tiene el profe:
  ROUTER.addEventListener("ionRouteDidChange", navegar);
  document
    .querySelector("#btnRegistrarUsuario")
    .addEventListener("click", previaRegistroUsuario);
  document
    .querySelector("#btnLogin")
    .addEventListener("click", previaHacerLogin);
  document
    .querySelector("#btnMenuLogout")
    .addEventListener("click", cerrarSesion);
  chequearSesion();
}

function cerrarMenu() {
  MENU.close();
}

function chequearSesion() {
  ocultarMenu();
  if (localStorage.getItem("usuario") != null) {
    mostrarMenuVIP();
  } else {
    mostrarMenuComun();
  }
}

function navegar(evt) {
  let destino = evt.detail.to;
  ocultarPantallas();
  if (destino == "/") HOME.style.display = "block";
  if (destino == "/login") LOGIN.style.display = "block";
  if (destino == "/registrarPedido") REGISTRARPEDIDO.style.display = "block";
  if (destino == "/registrarUsuario") REGISTRARUSUARIO.style.display = "block";
  if (destino == "/informe") INFORME.style.display = "block";
  if (destino == "/listado") LISTADO.style.display = "block";
  if (destino == "/mapa") MAPA.style.display = "block";
}
function ocultarPantallas() {
  HOME.style.display = "none";
  LOGIN.style.display = "none";
  REGISTRARPEDIDO.style.display = "none";
  REGISTRARUSUARIO.style.display = "none";
}

function previaRegistroUsuario() {
  let nombre = document.querySelector("#txtRegistrarNombre").value;
  let apellido = document.querySelector("#txtRegistrarApellido").value;
  let email = document.querySelector("#txtRegistrarEmail").value;
  let direccion = document.querySelector("#txtRegistrarDireccion").value;
  let password = document.querySelector("#txtRegistrarPassword").value;

  let nuevoUsuario = new Usuario(nombre, apellido, email, direccion, password);
  hacerRegistroUsuario(nuevoUsuario);
}

function hacerRegistroUsuario(nuevoUsuario) {
  fetch(`${URLBASE}usuarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevoUsuario),
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (data.error == "") {
        mostrarMensaje(
          "SUCCESS",
          "Registro exitoso",
          "Puedes usar la APP",
          3000)
        ocultarPantallas();
        HOME.style.display = "block";
        //en el obligatorio debemos guardar en el localStorage el usuario y el token
        // que nos dara la api al registrar un usuario
      }else{
        mostrarMensaje("ERROR", "Datos incorrectos", "Revisa los datos", 3000);
      }
    })
    .catch(function (error) {
      console.log(error)
    });
}

function previaHacerLogin() {
  let email = document.querySelector("#txtLoginEmail").value;
  let password = document.querySelector("#txtLoginPassword").value;
  let nuevoUsuarioConectado = new UsuarioConectado(email, password);
  hacerLogin(nuevoUsuarioConectado);
}

function hacerLogin(nuevoUsuarioConectado) {
  fetch(`${URLBASE}usuarios/session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevoUsuarioConectado),
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (data.error == "") {
        mostrarMensaje(
            "SUCCESS",
            "Logiueo exitoso",
            "Puedes usar la APP",
            3000)
        ocultarPantallas();
        HOME.style.display = "block";
        localStorage.setItem("usuario", data.data.email);
        localStorage.setItem("token", data.data.token);
        ocultarMenu();
        mostrarMenuVIP();
      }else{
        mostrarMensaje("ERROR", "Datos incorrectos", "Revisa los datos", 3000);
      }
    })
    .catch(function (error) {
        console.log(error)
    });
}

function ocultarMenu() {
  document.querySelector("#btnMenuRegistrarUsuario").style.display = "none";
  document.querySelector("#btnMenuLogin").style.display = "none";
  document.querySelector("#btnMenuRegistarPedido").style.display = "none";
  document.querySelector("#btnMenuListado").style.display = "none";
  document.querySelector("#btnMenuInforme").style.display = "none";
  document.querySelector("#btnMenuMapa").style.display = "none";
  document.querySelector("#btnMenuLogout").style.display = "none";
}

function mostrarMenuComun() {
  document.querySelector("#btnMenuRegistrarUsuario").style.display = "block";
  document.querySelector("#btnMenuLogin").style.display = "block";
}

function mostrarMenuVIP() {
  document.querySelector("#btnMenuRegistrarUsuario").style.display = "block";
  document.querySelector("#btnMenuListado").style.display = "block";
  document.querySelector("#btnMenuInforme").style.display = "block";
  document.querySelector("#btnMenuMapa").style.display = "block";
  document.querySelector("#btnMenuLogout").style.display = "block";
}

function cerrarSesion() {
  ocultarPantallas();
  HOME.style.display = "block";
  ocultarMenu();
  mostrarMenuComun();
  localStorage.removeItem("usuario");
  localStorage.removeItem("token");
}

function mostrarMensaje(tipo, titulo, texto, duracion) {
  const toast = document.createElement("ion-toast");
  toast.header = titulo;
  toast.message = texto;
  if (!duracion) {
    duracion = 2000;
  }
  toast.duration = duracion;
  if (tipo === "ERROR") {
    toast.color = "danger";
    toast.icon = "alert-circle-outline";
  } else if (tipo === "WARNING") {
    toast.color = "warning";
    toast.icon = "warning-outline";
  } else if (tipo === "SUCCESS") {
    toast.color = "success";
    toast.icon = "checkmark-circle-outline";
  }
  document.body.appendChild(toast);
  toast.present();
}
