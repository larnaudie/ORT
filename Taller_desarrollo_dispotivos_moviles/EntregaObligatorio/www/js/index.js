//Dato1:
//"usuario": "Larnaudie@Test.com",
//"password":"TestTest",

//Dato2:
//"usuario": "Larnaudie2@Test.com",
//"password":"TestTest",

//Dato3:
//"usuario": "Larnaudie3@Test.com",
//"password":"TestTest",

//Dato4:
//"usuario": "Larnaudie",
//"password":"Larnaudie",

const MENU = document.querySelector("#menu");
const ROUTER = document.querySelector("#ruteo");
const HOME = document.querySelector("#pantalla-home");
const LOGIN = document.querySelector("#pantalla-login");
const REGISTRARACTIVIDAD = document.querySelector("#pantalla-registrarActividad");
const REGISTRARUSUARIO = document.querySelector("#pantalla-registrarUsuario");
const MAPA = document.querySelector("#pantalla-mapa");
const INFORMETIEMPO = document.querySelector("#pantalla-informeTiempo");
const LISTADOACTIVIDADES = document.querySelector("#pantalla-listadoActividades");
const URLBASE = "https://movetrack.develotion.com/";

class Usuario {
  constructor(usuario, password, pais) {
    this.usuario = usuario;
    this.password = password;
    this.pais = pais;
  }
}

class UsuarioConectado {
  constructor(usuario, password) {
    this.usuario = usuario;
    this.password = password;
  }
}

class Actividad {
  constructor(idActividad, idUsuario, tiempo, fecha) {
    this.idActividad = idActividad;
    this.idUsuario = idUsuario;
    this.tiempo = tiempo;
    this.fecha = fecha;
  }
}

inicio();
cargarPaises()
function inicio() {
  //Asi lo tiene el profe:
  ROUTER.addEventListener("ionRouteDidChange", navegar);
  document.querySelector("#btnRegistrarUsuario").addEventListener("click", previaRegistroUsuario);
  document.querySelector("#btnLogin").addEventListener("click", previaHacerLogin);
  document.querySelector("#btnMenuLogout").addEventListener("click", cerrarSesion);
  document.querySelector("#btnMenuRegistrarActividad").addEventListener("click", cargarActividades);
  document.querySelector("#btnRegistrarActividad").addEventListener("click", previaRegistrarActividad);
  document.addEventListener("DOMContentLoaded", (event) => {
    limitarFechaActual();
  });
  document.querySelector("#btnMenuListadoActividades").addEventListener("click", obtenerActividadesParaListado);
  document.querySelector("#btnMenuMapa").addEventListener("click", getMiPosicion);
  document.querySelector("#filtroFecha").addEventListener("click", mostrarListadoPorFecha);
  document.querySelector("#btnInformeTiempo").addEventListener("click", calcularInformeTiempo);
  document.querySelector("#btnMenuInformeTiempo").addEventListener("click", previaInforme);
  // getMiPosicion();
  //document.querySelector("#btnMenuListadoActividades").addEventListener("click", cargarListadoActividades);
  chequearSesion();
}

let listaPaises = [];
let listaUsuariosPaises = [];
let cantidadDeUsuarioPorPais = [];
let miLatitud;
let miLongitud;
let map;


function cerrarMenu() {
  MENU.close();
}

function chequearSesion() {
  ocultarTodosLosMenu();
  if (localStorage.getItem("usuario") != null) {
    mostrarMenuLogueado();
  } else {
    mostrarMenuPrincipal();
  }
}

//------------------------------------SECCION DE NAVEGACION

function navegar(evt) {
  let destino = evt.detail.to;
  console.log("destino: " + destino);
  ocultarTodasLasPantallas();
  //El home lo quiero ver SOLOS cuando esté logueado
  //Quiero que el Usuario tenga a mano el registro y por segunda opcion el logueo.
  //Por lo tanto, el / y el /registrarUsuario van a dirigir al mismo sitio.
  if (destino == "/") HOME.style.display = "block";
  if (destino == "/registrarUsuario") REGISTRARUSUARIO.style.display = "block";
  if (destino == "/login") LOGIN.style.display = "block";
  if (destino == "/registrarActividad") REGISTRARACTIVIDAD.style.display = "block";
  if (destino == "/registrarUsuario") REGISTRARUSUARIO.style.display = "block";
  if (destino == "/informeTiempo") INFORMETIEMPO.style.display = "block";
  if (destino == "/listadoActividades") LISTADOACTIVIDADES.style.display = "block";
  if (destino == "/mapa") MAPA.style.display = "block";
}

//Si agregamos una pantalla que no esta, se rompe y pone todo blanco
function ocultarTodasLasPantallas() {
  HOME.style.display = "none";
  LOGIN.style.display = "none";
  REGISTRARACTIVIDAD.style.display = "none";
  REGISTRARUSUARIO.style.display = "none";
  LISTADOACTIVIDADES.style.display = "none";
  INFORMETIEMPO.style.display = "none";
  MAPA.style.display = "none";
}

//-------------------------------------------SECCION CARGAR PAISES

//Obtenemos de la API los paises
function cargarPaises() {
  obtenerPaises();
}

function cargarSelectPaises(listaPaises) {
  let miSelect = "";
  for (let unPais of listaPaises) {
    miSelect += `<ion-select-option value=${unPais.id}>${unPais.name}</ion-select-option>`;
  }
  document.querySelector("#slcPais").innerHTML = miSelect;
}

function mostrarPais() {
  alert("El id del pais es " + document.querySelector("#slcPais").value);
}

//------------------------------------SECCION DE USUARIO

function previaRegistroUsuario() {
  let usuario = document.querySelector("#txtRegistrarNombre").value;
  let password = document.querySelector("#txtRegistrarPassword").value;
  let pais = document.querySelector("#slcPais").value;

  let nuevoUsuario = new Usuario(usuario, password, pais);
  hacerRegistroUsuario(nuevoUsuario);
}

function hacerRegistroUsuario(nuevoUsuario) {
  fetch(`${URLBASE}usuarios.php`, {
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
      if (data.codigo > 199 && data.codigo < 399) {
        //Se implementa el Autologin y se guardan los datos en el localStorage
        mostrarMensaje("SUCCESS", "Registro exitoso", "Nuevo Usuario Registrado", 3000);
      } else {
        mostrarMensaje("ERROR", "Datos incorrectos", "Revisa los datos", 3000);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

//-----------------------------------------------------
//---------------------- SECCION DE LOGIN--------------
//-----------------------------------------------------

function previaHacerLogin() {
  let usuario = document.querySelector("#txtLoginUsuario").value;
  let password = document.querySelector("#txtLoginPassword").value;
  let nuevoUsuarioConectado = new UsuarioConectado(usuario, password);
  hacerLogin(nuevoUsuarioConectado);
}

function hacerLogin(nuevoUsuarioConectado) {
  fetch(`${URLBASE}login.php`, {
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
      if (data.codigo > 199 && data.codigo < 399) {
        mostrarMensaje("SUCCESS", "Logueo exitoso", "Puedes usar la APP", 3000);
        ocultarTodasLasPantallas();
        HOME.style.display = "block";
        localStorage.setItem("usuario", data.id);
        localStorage.setItem("apiKey", data.apiKey);
        localStorage.setItem("nombre", nuevoUsuarioConectado.usuario);
        ocultarTodosLosMenu();
        mostrarMenuLogueado();
        let bienvenida = document.querySelector(".lblBienvenida");
        bienvenida.innerHTML = "Bienvenido/a, " + nuevoUsuarioConectado.usuario;
        obtenerUsuariosPais()
      } else {
        mostrarMensaje("ERROR", "Datos incorrectos", "Revisa los datos", 3000);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

//----------------------------------------------------
//---------------------- SECCION DE MENU--------------
//----------------------------------------------------

//Ocultamos todos los botones del menu
function ocultarTodosLosMenu() {
  document.querySelector("#btnMenuRegistrarUsuario").style.display = "none";
  document.querySelector("#btnMenuLogin").style.display = "none";
  document.querySelector("#btnMenuRegistrarActividad").style.display = "none";
  document.querySelector("#btnMenuListadoActividades").style.display = "none";
  document.querySelector("#btnMenuInformeTiempo").style.display = "none";
  document.querySelector("#btnMenuMapa").style.display = "none";
  document.querySelector("#btnMenuLogout").style.display = "none";
}

function mostrarMenuPrincipal() {
  document.querySelector("#btnMenuRegistrarUsuario").style.display = "block";
  document.querySelector("#btnMenuLogin").style.display = "block";
}

function mostrarMenuLogueado() {
  document.querySelector("#btnMenuRegistrarActividad").style.display = "block";
  document.querySelector("#btnMenuListadoActividades").style.display = "block";
  document.querySelector("#btnMenuInformeTiempo").style.display = "block";
  document.querySelector("#btnMenuMapa").style.display = "block";
  document.querySelector("#btnMenuLogout").style.display = "block";
}

function cerrarSesion() {
  ocultarTodasLasPantallas();
  LOGIN.style.display = "block";
  ocultarTodosLosMenu();
  mostrarMenuPrincipal();
  localStorage.removeItem("usuario");
  localStorage.removeItem("apiKey");
  localStorage.removeItem("nombre");
  const inputUsuario = document.querySelector("#txtLoginUsuario");
  const inputPassword = document.querySelector("#txtLoginPassword");
  inputUsuario.value = "";
  inputPassword.value = "";
}

//-----------------------------------------------
//------SECCION DE REGISTRO DE EJERCICIO---------
//-----------------------------------------------

//------------------------------------------------------
//----------SECCION CARGAR ACTIVIDADES------------------
//------------------------------------------------------

//Obtenemos de la API las actividades
function cargarActividades() {
  obtenerActividades();
}

function obtenerActividades() {
  fetch(`${URLBASE}actividades.php`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      apikey: localStorage.getItem("apiKey"),
      iduser: localStorage.getItem("usuario"),
    },
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (informacion) {
      //Necesito buscar el Usuario que esta logueado en el localStorage
      document.querySelector("#registrarIdUsuario").value = " " + localStorage.getItem("nombre");
      //Aca cargamos las actividades dinamicamente
      console.log("Actividades obtenidas:", informacion.actividades);
      cargarSelectActividades(informacion.actividades);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function cargarSelectActividades(listaDeActividadesDelUsuario) {
  console.log(listaDeActividadesDelUsuario);
  let miSelect = "";
  for (let unaActividad of listaDeActividadesDelUsuario) {
    miSelect += `<ion-select-option value=${unaActividad.id}>${unaActividad.nombre}</ion-select-option>`;
  }
  document.querySelector("#registrarIdActividad").innerHTML = miSelect;
}

//TOPEO DE FECHA PARA REFISTRO DE ACTIVIDAD

function limitarFechaActual() {
  const hoy = new Date();
  const año = hoy.getFullYear();
  const mes = ("0" + (hoy.getMonth() + 1)).slice(-2);
  const dia = ("0" + hoy.getDate()).slice(-2);
  const fechaMaxima = `${año}-${mes}-${dia}`;
  document.querySelector("#registrarFecha").setAttribute("max", fechaMaxima);
}

//Empezamos a Crear el Ejercicio
function previaRegistrarActividad() {
  let idActividad = document.querySelector("#registrarIdActividad").value;
  let idUsuario = localStorage.getItem("usuario");
  let tiempo = document.querySelector("#registrarTiempoMinutos").value;
  let fecha = document.querySelector("#registrarFecha").value;
  let unaActividad = new Actividad(idActividad, idUsuario, tiempo, fecha);
  registrarActividad(unaActividad);
}

function registrarActividad(unaActividad) {
  console.log("Datos enviados a la API:", unaActividad);
  fetch(`${URLBASE}registros.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: localStorage.getItem("apiKey"),
      iduser: localStorage.getItem("usuario"),
    },
    body: JSON.stringify(unaActividad),
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (informacion) {
      console.log("informacion obtenida:", informacion);
      //console.log("Respuesta de la API:", data);
      if (informacion.codigo >= 200 && informacion.codigo < 400) {
        // console.log("ID de la actividad guardada:", data.idActividad);
        mostrarMensaje("SUCCESS", "Actividad Registrada con Exito", "Puedes continuar usando la APP", 3000);
        limpiarFormulario();
        setTimeout(previaListado, 1000);
      } else {
        mostrarMensaje("ERROR", "Datos incorrectos", "Revisa los datos", 3000);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function limpiarFormulario() {
  document.querySelector("#registrarIdActividad").value = "";
  document.querySelector("#registrarTiempoMinutos").value = "";
  document.querySelector("#registrarFecha").value = "";
}

//---------------------------------------------------------
//------SECCION DE LISTADO DE ACTIVIDADES------------------
//---------------------------------------------------------

function obtenerActividadesParaListado() {
  fetch(`${URLBASE}actividades.php`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      apikey: localStorage.getItem("apiKey"),
      iduser: localStorage.getItem("usuario"),
    },
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (informacion) {
      listaBaseDeActividades = informacion.actividades;
      console.log("lista Base de Actividades cargada para listado:", listaBaseDeActividades);
      previaListado();
    })
    .catch(function (error) {
      console.log(error);
    });
}
let listaDeActividadesDelUsuario = [];
//con esta funcion obtenemos el array.
function previaListado() {
  let usuario = localStorage.getItem("usuario");
  let apikey = localStorage.getItem("apiKey");
  let url = "https://movetrack.develotion.com/registros.php?idUsuario=" + usuario;

  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      apikey: apikey,
      iduser: usuario,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (informacion) {
      listaDeActividadesDelUsuario = informacion.registros; // Guardar las actividades
      mostrarListado(listaDeActividadesDelUsuario); // Mostrar el listado completo inicialmente
      mostrarListadoPorFecha(); // Activar el filtro por fecha
    })
    .catch(function (error) {
      console.log(error);
    });
}

//recorremos el array y por cada elemento nos vamos a generar un registro
function mostrarListado(listaDeActividadesDelUsuario) {
  console.log("lista de Actividades del usuario:", listaDeActividadesDelUsuario);
  let verActividad = "";
  for (let unaActividad of listaDeActividadesDelUsuario) {
    verActividad += `
        <ion-item>
        <ion-img src="${obtenerUrlImagenActividad(unaActividad.idActividad)}"></ion-img>
                <ion-label>
                    <h3>Id: ${unaActividad.id}</h3>
                    <h3>Nombre Actividad: ${obtenerNombreActividad(unaActividad.idActividad)}</h3>
                    <h3>Tiempo: ${unaActividad.tiempo}</h3>
                    <p>Fecha: ${unaActividad.fecha}</p>
                </ion-label>
                <ion-button onclick="eliminarActividad(${unaActividad.id})">Eliminar</ion-button>
        </ion-item>
       `;
  }

  document.querySelector("#contenedorListado").innerHTML = verActividad;
}

function mostrarListadoPorFecha() {
  const filtroFecha = document.querySelector("#filtroFecha");

  // Escuchar el evento ionChange del <ion-select>
  filtroFecha.addEventListener("ionChange", (event) => {
    const valorSeleccionado = event.detail.value; // Obtener el valor seleccionado
    console.log("Valor seleccionado:", valorSeleccionado);

    // Filtrar las actividades según el valor seleccionado
    const hoy = new Date(); // Fecha actual

    switch (valorSeleccionado) {
      case "semana":
        const unaSemanaAtras = new Date(hoy);
        unaSemanaAtras.setDate(hoy.getDate() - 7); // Restar 7 días
        actividadesFiltradas = listaDeActividadesDelUsuario.filter((actividad) => {
          const fechaActividad = new Date(actividad.fecha);
          return fechaActividad >= unaSemanaAtras;
        });
        break;

      case "mes":
        const unMesAtras = new Date(hoy);
        unMesAtras.setMonth(hoy.getMonth() - 1); // Restar 1 mes
        actividadesFiltradas = listaDeActividadesDelUsuario.filter((actividad) => {
          const fechaActividad = new Date(actividad.fecha);
          return fechaActividad >= unMesAtras;
        });
        break;

      case "todo":
        actividadesFiltradas = listaDeActividadesDelUsuario; // Mostrar todo
        break;

      default:
        actividadesFiltradas = listaDeActividadesDelUsuario; // Por defecto, mostrar todo
        break;
    }

    // Mostrar las actividades filtradas
    mostrarListado(actividadesFiltradas);
  });
}

function eliminarActividad(unaActividad) {
  let usuario = localStorage.getItem("usuario");
  let apikey = localStorage.getItem("apiKey");
  let url = "https://movetrack.develotion.com/registros.php?idRegistro=" + unaActividad;

  fetch(`${url}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      apikey: apikey,
      iduser: usuario,
    },
  })
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      console.log(data);
      previaListado();
    })
    .catch(function (error) {
      console.log(error);
    });
}

function obtenerNombreActividad(idActividad) {
  for (let unaActividad of listaBaseDeActividades) {
    if (unaActividad.id == idActividad) return unaActividad.nombre;
  }
}

function obtenerUrlImagenActividad(idActividad) {
  for (let unaActividad of listaBaseDeActividades) {
    if (unaActividad.id == idActividad) return (url = "https://movetrack.develotion.com/imgs/" + unaActividad.imagen + ".png");
  }
}

//-------------------------------------------------------
//----------------SECCION INFORME TIEMPO-----------------
//-------------------------------------------------------

function previaInforme() {
  document.querySelector("#tiempoTotal").innerHTML = "";
  document.querySelector("#tiempoDiario").innerHTML = "";
  previaListado();
}

function calcularInformeTiempo() {
  if (!listaDeActividadesDelUsuario) {
    document.querySelector("#pMensaje").innerHTML = "No hay actividades registradas";
    return;
  }

  let tiempoTotal = 0;
  let tiempoDiario = 0;
  let fechaHoy = obtenerFechaHoy();
  console.log("Lista de actividades:", listaDeActividadesDelUsuario);

  for (let unaActividad of listaDeActividadesDelUsuario) {
    tiempoTotal += unaActividad.tiempo;

    if (unaActividad.fecha === fechaHoy) {
      tiempoDiario += unaActividad.tiempo;
    }
  }
  document.querySelector("#tiempoTotal").innerHTML = tiempoTotal;
  document.querySelector("#tiempoDiario").innerHTML = tiempoDiario;
}

function obtenerFechaHoy() {
  const hoy = new Date();
  const año = hoy.getFullYear();
  const mes = ("0" + (hoy.getMonth() + 1)).slice(-2);
  const dia = ("0" + hoy.getDate()).slice(-2);

  let fecha = año + "-" + mes + "-" + dia;
  return fecha;
}
//-------------------------------------------------------
//--------------------SECCION DE MAPA--------------------
//-------------------------------------------------------

function obtenerPaises() {
  fetch(`${URLBASE}paises.php`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (informacion) {
      for(const item of informacion.paises){
        listaPaises.push(item);
      }
      cargarSelectPaises(informacion.paises);
      console.log("lista paises", listaPaises);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function obtenerUsuariosPais() {
  fetch(`${URLBASE}usuariosPorPais.php`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      apikey: localStorage.getItem("apiKey"),
      iduser: localStorage.getItem("usuario"),
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (informacion) {
      listaUsuariosPaises = informacion.paises;
      for (const element of listaUsuariosPaises) {
        cantidadDeUsuarioPorPais.push({ cantidad: element.cantidadDeUsuarios, id: element.id });
      }
      console.log(cantidadDeUsuarioPorPais);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getMiPosicion() {
  //obtener mi posicion actual
  navigator.geolocation.getCurrentPosition(miUbicacion);
}

function miUbicacion(position) {
  miLatitud = position.coords.latitude;
  miLongitud = position.coords.longitude;
  armarMapa();
}

function ocultarMapa() {
  document.getElementById("map").style.display = "none"; // Oculta el mapa
}

function armarMapa() {
  document.getElementById("map").style.display = "block";
  if (map) {
    map.remove();
  }

  map = L.map("map").setView([miLatitud, miLongitud], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 3,
    attribution: "OpenStreetMap",
  }).addTo(map);

  for (let unPais of listaPaises) {
    console.log("Lista de paises: " + JSON.stringify(listaPaises));
    console.log("el pais del for: " + JSON.stringify(unPais));
    let marker = L.marker([unPais.latitude, unPais.longitude]).addTo(map);
    let cantidadUsuarios = obtenerUsuariosPorPais(unPais.id);
    console.log(cantidadUsuarios);
    info = `${unPais.name} - Cantidad de usuarios: ${cantidadUsuarios}`;
    marker.bindPopup(info).openPopup();
  }
}

function obtenerUsuariosPorPais(id) {
  console.log("cantidad de usuarios por Pais: "+ JSON.stringify(cantidadDeUsuarioPorPais));
  for (let unPais of cantidadDeUsuarioPorPais) {
    //aca estamos comparando unPais.id con unpais.id
    if (unPais.id == id) return unPais.cantidad;
    console.log("cantidad de usuarios en el pais:" + JSON.stringify(unPais.cantidad))
  }
}

//-------------------------------------------------------
//---------------SECCION DE MENSAJES---------------------
//-------------------------------------------------------

//Esto lo copie y pegue de lo que mando el profe en un pdf
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
