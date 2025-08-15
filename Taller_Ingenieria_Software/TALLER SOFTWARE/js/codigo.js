//Variables globales y evento inicial
let sistema;
let idUsuario;
let usuarioLogeado = null;
let barberosYaMostrados = false;

window.addEventListener("load", inicio);

//FUNCION INICIO
function inicio() {
  
  sistema = new Sistema(); //instancia de sistema
  idUsuario = sistema.usuarios.length + 1; //calculo proximo id disponible


 

  //agregar eventos para botones login, logout y registrar
  const btnLogin = document.querySelector("#btnLogin");
  if (btnLogin) {
    btnLogin.addEventListener("click", hacerLogin);
  }

  // Evento para mostrar la sección de login embebida en index.html
const linkLogin = document.querySelector("#logIn");
if (linkLogin) {
  linkLogin.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarSoloSeccion("seccionLogin");
  });
}

  const btnLogout = document.querySelector("#logOut");
  if (btnLogout) {
    btnLogout.addEventListener("click", cerrarSesion);
  }

  const btnRegistrar = document.querySelector("#btnRegistrar");
  if (btnRegistrar) {
    btnRegistrar.addEventListener("click", registrarUsuario);
  }

  
  if (window.location.href.includes("index.html")) {
    ocultarBoton();
    mostrarSeccionesSegunUsuario();
    ajustarMenuSegunUsuario(); // <--- AGREGÁ ESTA LÍNEA
  }

  // Permite que al hacer clic en un botón del menú se muestre solo su sección
  document.querySelectorAll(".btnSeccion").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const href = btn.getAttribute("href").replace("#", "");
      mostrarSoloSeccion(href);
    });
  });

  if (window.location.href.includes("index.html")) {
    mostrarServicios();
    mostrarBarberos();
  }

  document.querySelectorAll(".btnSeccion").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const href = btn.getAttribute("href").replace("#", "");
      mostrarSoloSeccion(href);

      // Mostrar formulario si corresponde
      if (href === "agregarBarbero") {
        mostrarBarberosAgregados(); // ← actualiza la lista interna
      }
    });
  });
}



//-----------------------------FUNCIONES DE NAVEGACION-------------------------------------------------------
function limpiarLocalStorage() {
  localStorage.removeItem("usuarioLogueado");
}

function mostrarSoloSeccion(id) {
  // Oculta todas las secciones
  document.querySelectorAll(".seccion").forEach(sec => sec.style.display = "none");

  // Muestra solo la que corresponde al ID recibido
  const seccion = document.getElementById(id);
  if (seccion) {
    seccion.style.display = "block";

    // Hacer scroll suave hacia la sección mostrada
    seccion.scrollIntoView({ behavior: "smooth" });

    // 👇 Limpiar campos según sección
    if (id === "seccionLogin") {
      document.querySelector("#username").value = "";
      document.querySelector("#password").value = "";
      document.querySelector("#slcTipoUsuario").value = "";
    }

    if (id === "seccionRegistro") {
      document.querySelector("#usernameRegister").value = "";
      document.querySelector("#passwordRegister").value = "";
      document.querySelector("#phone").value = "";
      document.querySelector("#email").value = "";
    }

    if (id === "reservarCita") {
      const msg = document.getElementById("mensajeReserva");
      if (msg) msg.remove(); // 💥 borra mensaje si existe
      document.getElementById("formReserva").reset();
      configurarFechaMinima();
    }

    if (id === "agregarBarbero") {
      document.querySelector("#formAgregarBarbero").reset();
    }
  }
}

function ocultarBoton() {
  const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));

  const btnLogin = document.querySelector("#logIn");
  const btnLogout = document.querySelector("#logOut");

  if (!btnLogin || !btnLogout) {
    console.warn("No se encontraron logIn o logOut en el DOM.");
    return;
  }

  if (usuarioLogueado) {
    btnLogin.style.display = "none";
    btnLogout.style.display = "inline";
  } else {
    btnLogin.style.display = "inline";
    btnLogout.style.display = "none";
  }


  ocultarBotones(); // Oculta los botones del menú dinámico
}

function mostrarSeccionesPublicas(mostrar) {
  const seccionesPublicas = [
    "inicio",
    "sobreNosotros",
    "servicios",
    "promos",
    "staff",
    "contactanos"
  ];

  seccionesPublicas.forEach(id => {
    const seccion = document.getElementById(id);
    if (seccion) {
      seccion.style.display = mostrar ? "block" : "none";
    }
  });
}

function mostrarSeccionesSegunUsuario() {
  const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));

  ocultarSecciones(); // Oculta las secciones privadas
  mostrarSeccionesPublicas(!usuarioLogueado); // Oculta o muestra secciones públicas
  console.log("Usuario logueado:", usuarioLogueado);
  if (!usuarioLogueado) return;

  if (usuarioLogueado.tipo === "user") {
    mostrarBotones("user"); // ya lo tenés
    mostrarSoloSeccion("reservarCita"); // mostrar solo esta por defecto
    mostrarDatosUsuario(usuarioLogueado); // prepara los datos
    mostrarReservasUsuario(usuarioLogueado.id); // prepara reservas
  } else if (usuarioLogueado.tipo === "admin") {
    document.querySelector("#reservasClientes").style.display = "block";
    document.querySelector("#agregarBarbero").style.display = "block";
    mostrarReservasAdmin();
    mostrarSoloSeccion("reservasClientes"); // <--- Mostrar por defecto Reservas Clientes
  }

  mostrarBotones(usuarioLogueado.tipo);
}

function ajustarMenuSegunUsuario() {
  const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));

  // Ocultar todos
  document.querySelectorAll("#navPrincipal li").forEach(li => {
    li.style.display = "none";
  });

  // Mostrar según usuario
  if (!usuarioLogueado) {
    document.querySelectorAll("#navPrincipal li.publico").forEach(li => {
      li.style.display = "inline";
    });
    document.querySelector("#logIn").style.display = "inline";
  } else if (usuarioLogueado.tipo === "admin") {
    document.querySelectorAll("#navPrincipal li.admin").forEach(li => {
      li.style.display = "inline";
    });
    document.querySelectorAll("#navPrincipal li.privado").forEach(li => {
      li.style.display = "inline";
    });
  } else if (usuarioLogueado.tipo === "user") {
    document.querySelectorAll("#navPrincipal li.user").forEach(li => {
      li.style.display = "inline";
    });
    document.querySelectorAll("#navPrincipal li.privado").forEach(li => {
      li.style.display = "inline";
    });
  }
}
function ocultarSecciones() {
  const secciones = document.querySelectorAll(".seccion");
  secciones.forEach(seccion => {
    seccion.style.display = "none";
  });
}

function mostrarBotones(tipo) {
  ocultarBotones(); //ocultaTodos

  // Oculta secciones públicas
  mostrarSeccionesPublicas(false);

  // Muestra solo los botones del tipo de usuario
  const botonesMostrar = document.querySelectorAll("." + tipo);
  botonesMostrar.forEach(boton => {
    boton.style.display = "inline";
  });

  // Asegura que logout esté visible
  const btnLogout = document.querySelector("#logOut");
  if (btnLogout) btnLogout.style.display = "inline";
}

function ocultarBotones() {
  const botones = document.querySelectorAll(".btnSeccion");
  botones.forEach(boton => {
    boton.style.display = "none";
  });
}
//-------------------------------- FUNCIONES DE ACCESO Y REGISTRO --------------------------------------------------

function cerrarSesion(event) {
  event.preventDefault();
  limpiarLocalStorage();
  alert("Sesión cerrada.");

  // Reset visual sin recargar
  mostrarSeccionesPublicas(true);
  ocultarSecciones();
  ocultarBoton();
  ajustarMenuSegunUsuario();
  mostrarSoloSeccion("inicio");

  // Limpia secciones privadas visibles
  document.querySelector("#misDatos").style.display = "none";
  document.querySelector("#misReservas").style.display = "none";
  document.querySelector("#reservasClientes").style.display = "none";
  document.querySelector("#agregarBarbero").style.display = "none";
}


//Aqui se implementa el login, se extraen los valores de cada campo.
function hacerLogin(event) {
  event.preventDefault();

  // Toma valores del formulario
  const nombre = document.querySelector("#username").value.trim();
  const clave = document.querySelector("#password").value.trim();
  const tipoUsuario = document.querySelector("#slcTipoUsuario").value;

  // Validación de campos
  if (!nombre || !clave || !tipoUsuario) {
    alert("Por favor, completá todos los campos.");
    return;
  }

  let usuarioEncontrado = null;
  // Busca el usuario en la lista correspondiente
  if (tipoUsuario === "admin") {
    usuarioEncontrado = sistema.obtenerObjeto(sistema.usuariosAdmin, "nombre", nombre);
  } else if (tipoUsuario === "user") {
    usuarioEncontrado = sistema.obtenerObjeto(sistema.usuarios, "nombre", nombre);
  }

  // Si coincide la contraseña, guarda en localStorage y redirige
  if (usuarioEncontrado && usuarioEncontrado.contrasena === clave) {
    // Guardar en localStorage (solo los datos necesarios)
    const usuarioParaGuardar = {
      id: usuarioEncontrado.id,
      nombre: usuarioEncontrado.nombre,
      tipo: tipoUsuario,
      email: usuarioEncontrado.email || null,
      telefono: usuarioEncontrado.telefono || null,
    };

    localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioParaGuardar));

    alert(`¡Bienvenido ${usuarioEncontrado.nombre}! Has ingresado como ${tipoUsuario}.`);

    // ✅ Simular la carga inicial sin recargar página
ocultarBoton();
ajustarMenuSegunUsuario();
mostrarSeccionesSegunUsuario();
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
}

//FUNCION REGISTRO USUARIO
function registrarUsuario() {
  let nombre = document.querySelector("#usernameRegister").value.trim();
  let clave = document.querySelector("#passwordRegister").value.trim();
  let numeroTel = document.querySelector("#phone").value.trim();
  let mail = document.querySelector("#email").value.trim();

  // Validaciones personalizadas
  let telefonoValido = /^09\d{7}$/.test(numeroTel);
  let mailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  let nombreValido = nombre !== "";

  // Validaciones propias del sistema
  let camposCompletos = sistema.validarCamposVaciosRegistro(nombre, clave);
  let formatoContrasenaValido = sistema.verificarFormatoContrasena(clave);
  let existeUsuario = sistema.buscarNombre(sistema.usuarios, "nombre", nombre);

  // Si pasa todas las validaciones, crea el usuario
  if (nombreValido && telefonoValido && mailValido &&
    camposCompletos === true &&
    formatoContrasenaValido === true &&
    existeUsuario === false) {

    let usuario = new Usuario(idUsuario, nombre, clave, mail, numeroTel);
    idUsuario++;
    sistema.agregarUsuario(usuario);
    localStorage.setItem("usuarios", JSON.stringify(sistema.usuarios));

    alert("¡Registro exitoso! Ahora podés iniciar sesión.");
mostrarSoloSeccion("seccionLogin"); // Muestra el login
  } else {
    // Acumula mensajes de error y los muestra
    let errores = [];
    if (!nombreValido) errores.push("Nombre vacío");
    if (!telefonoValido) errores.push("Teléfono inválido (debe comenzar con 09 y tener 9 dígitos)");
    if (!mailValido) errores.push("Email inválido");
    if (existeUsuario) errores.push("Nombre de usuario ya registrado");
    if (!formatoContrasenaValido) errores.push("Contraseña inválida (mínimo 6 caracteres, con mayúscula, minúscula y número)");
    alert("Error en registro:\n- " + errores.join("\n- "));
  }

  // Limpiar campos
  document.querySelector("#usernameRegister").value = "";
  document.querySelector("#passwordRegister").value = "";
  document.querySelector("#phone").value = "";
  document.querySelector("#email").value = "";
}

//mostrar datos

function mostrarDatosUsuario(usuario) {
  const contenedor = document.querySelector("#infoUsuario");
  if (!contenedor) return;
  contenedor.innerHTML = `
    <p><strong>Nombre:</strong> ${usuario.nombre}</p>
    <p><strong>Email:</strong> ${usuario.email}</p>
    <p><strong>Teléfono:</strong> ${usuario.telefono}</p>
  `;
}

function mostrarReservasUsuario(idUsuario) {
  const contenedor = document.querySelector("#listaReservasUsuario");
  if (!contenedor) return;

  const reservas = sistema.obtenerObjetoEnArray(sistema.misReservas, "idCliente", idUsuario);

  console.log(`Reservas para usuario ID ${idUsuario}:`, reservas);

  if (reservas.length === 0) {
    contenedor.innerHTML = "<p>No tenés reservas.</p>";
    return;
  }

  contenedor.innerHTML = reservas.map(res => `
    <div>
      <p><strong>Fecha:</strong> ${res.fecha}</p>
      <p><strong>Hora:</strong> ${res.hora}</p>
      <p><strong>Servicio:</strong> ${res.servicio.nombre}</p>
      <p><strong>Barbero:</strong> ${res.barbero.nombre}</p>
      <hr>
    </div>
  `).join("");
}

function cancelarReserva(idReserva) {
  sistema.misReservas = sistema.misReservas.filter(res => res.id !== idReserva);
  const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
  mostrarReservasUsuario(usuario.id);
}

function mostrarReservasAdmin() {
  
  const reservas = sistema.misReservas || [];
  
  console.log("mostrarReservasAdmin - reservas:", reservas);
  const contenedor = document.getElementById("listaReservasAdmin");
  if (!contenedor) return;

  if (reservas.length === 0) {
    contenedor.innerHTML = "<p>No hay reservas aún.</p>";
    return;
  }

  contenedor.innerHTML = reservas.map(res => {
    const cliente = sistema.obtenerObjeto(sistema.usuarios, "id", res.idCliente);
    const nombreCliente = cliente ? cliente.nombre : "Desconocido";

    return `
      <div>
        <p><strong>Cliente:</strong> ${nombreCliente}</p>
        <p><strong>Servicio:</strong> ${res.servicio.nombre}</p>
        <p><strong>Fecha:</strong> ${res.fecha}</p>
        <p><strong>Hora:</strong> ${res.hora}</p>
        <p><strong>Barbero:</strong> ${res.barbero.nombre}</p>
        <hr>
      </div>
    `;
  }).join("");
}

function mostrarServicios() {
  const contenedor = document.querySelector("#contenedorServicios");
  contenedor.innerHTML = "";

  sistema.servicios.forEach(servicio => {
    let imagen = "";
    if (servicio.nombre.toLowerCase().includes("afeitado")) {
      imagen = "afeitado.png";
    } else if (servicio.nombre.toLowerCase().includes("tinta")) {
      imagen = "tinta.png";
    } else {
      imagen = "corte.png";
    }

    contenedor.innerHTML += `
      <div class="servicio">
        <div class="promo-imagen"><img src="IMG/${imagen}" alt="${servicio.nombre}" /></div>
        <h4 style="font-size: 20px">${servicio.nombre}</h4> precio $${servicio.precio}
        <p>${servicio.descripcion}</p>
      </div>
    `;
  });
}

function mostrarBarberos() {
  const contenedor = document.querySelector("#contenedorBarberos");
  if (!contenedor) return;
  contenedor.innerHTML = ""; // Limpia siempre el contenido antes de mostrar

  sistema.barberos.forEach((barbero, index) => {
    const imagen = barbero.imagen
      ? `<img src="${barbero.imagen}" alt="${barbero.nombre}" />`
      : `<img src="IMG/barbero${(index % 4) + 1}.avif" alt="${barbero.nombre}" />`;

    contenedor.innerHTML += `
      <div class="barbero">
        <div class="foto-barbero">${imagen}</div>
        <h4>${barbero.nombre}</h4>
        <p>${barbero.especialidad}</p>
      </div>
    `;
  });
  console.log("Barberos totales en sistema:", sistema.barberos.length);
}

function agregarNuevoBarbero(e) {
  e.preventDefault();

  const nombre = document.querySelector("#nombreBarbero").value.trim();
  const apellido = document.querySelector("#apellidoBarbero").value.trim();
  const especialidad = document.querySelector("#especialidadBarbero").value.trim();
  const archivoImagen = document.querySelector("#imagenBarbero").files[0];

  if (!nombre || !apellido || !especialidad || !archivoImagen) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  const lector = new FileReader();
  lector.onload = function () {
    const imagenBase64 = lector.result;
    const nombreCompleto = `${nombre} ${apellido}`;
    const nuevoId = `BAR_${sistema.barberos.length + 1}`;

    const nuevoBarbero = new Barbero(nuevoId, nombreCompleto, especialidad);
    nuevoBarbero.imagen = imagenBase64;

    sistema.barberos.push(nuevoBarbero);
 

    alert("¡Barbero agregado exitosamente!");
    document.querySelector("#formAgregarBarbero").reset();

    mostrarBarberos();
    mostrarBarberosAgregados();
    cargarBarberos();
  };

  lector.readAsDataURL(archivoImagen);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#formAgregarBarbero");
  if (form) {
    form.addEventListener("submit", agregarNuevoBarbero);
  }
});

function mostrarBarberosAgregados() {
  const contenedor = document.getElementById("listaBarberosAgregados");
  if (!contenedor) return;

  contenedor.innerHTML = ""; // Limpia contenido previo

  sistema.barberos.forEach(barbero => {
    contenedor.innerHTML += `
      <div class="barbero-agregado">
        <p><strong>Nombre:</strong> ${barbero.nombre}</p>
        <p><strong>Especialidad:</strong> ${barbero.especialidad}</p>
        ${barbero.imagen ? `<img src="${barbero.imagen}" alt="${barbero.nombre}" class="imagen-barbero" style="width:100px; height:auto;">` : ""}
        <hr>
      </div>
    `;
  });
}





// Carga los horarios de 9:00 a 17:30 cada 30 minutos
function cargarHorarios() {
  const selectHora = document.getElementById("hora");
  selectHora.innerHTML = "";
  for(let h = 9; h <= 16; h++) { // hasta 16 para 16:30
    ["00", "30"].forEach(m => {
      const hora = `${h.toString().padStart(2,"0")}:${m}`;
      const option = document.createElement("option");
      option.value = hora;
      option.textContent = hora;
      selectHora.appendChild(option);
    });
  }
  // Última opción 17:30
  const ultimaHora = document.createElement("option");
  ultimaHora.value = "17:30";
  ultimaHora.textContent = "17:30";
  selectHora.appendChild(ultimaHora);
}

// Carga los servicios en el select
function cargarServicios() {
  const selectServicio = document.getElementById("slcServicio");
  selectServicio.innerHTML = "";
  sistema.servicios.forEach(servicio => {
    const option = document.createElement("option");
    option.value = servicio.id || servicio.nombre;
    option.textContent = servicio.nombre;
    selectServicio.appendChild(option);
  });
}

// Carga los barberos en el select
function cargarBarberos() {
  const selectBarbero = document.getElementById("slcBarbero");
  selectBarbero.innerHTML = "";
  sistema.barberos.forEach(barbero => {
    const option = document.createElement("option");
    option.value = barbero.id || barbero.nombre;
    option.textContent = barbero.nombre;
    selectBarbero.appendChild(option);
  });
}

// Configura la fecha mínima permitida (hoy)
function configurarFechaMinima() {
  const inputFecha = document.getElementById("fecha");
  const hoy = new Date().toISOString().split("T")[0];
  inputFecha.min = hoy;
}

// Valida si la fecha es domingo (0=domingo)
function esDomingo(fechaStr) {
  const fecha = new Date(fechaStr + "T00:00:00"); // para evitar huso horario raro
  return fecha.getDay() === 0;
}

// Valida que el barbero no tenga reserva en la misma fecha y hora
function validarDisponibilidad(barberoId, fecha, hora) {
  return !sistema.misReservas.some(res =>
    (res.barbero.id === barberoId || res.barbero.nombre === barberoId) &&
    res.fecha === fecha &&
    res.hora === hora
  );
}

// Maneja el envío del formulario para crear la reserva
function manejarReserva(event) {
  event.preventDefault();

  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const servicioId = document.getElementById("slcServicio").value;
  const barberoId = document.getElementById("slcBarbero").value;
  const mensaje = document.getElementById("mensajeReserva") || crearMensajeReserva();

  if (!fecha || !hora || !servicioId || !barberoId) {
    mensaje.textContent = "Por favor completá todos los campos.";
    mensaje.style.color = "red";
    return;
  }

  // Validación de fecha mínima y domingo
  const hoy = new Date().toISOString().split("T")[0];
  if (fecha < hoy) {
    mensaje.textContent = "No se pueden reservar fechas anteriores a hoy.";
    mensaje.style.color = "red";
    return;
  }
  if (esDomingo(fecha)) {
    mensaje.textContent = "No se pueden reservar citas los domingos.";
    mensaje.style.color = "red";
    return;
  }

  // Buscar servicio y barbero
  const servicio = sistema.servicios.find(s => s.id === servicioId);
  const barbero = sistema.barberos.find(b => b.id === barberoId);

  if (!servicio || !barbero) {
    mensaje.textContent = "Servicio o barbero no válido.";
    mensaje.style.color = "red";
    return;
  }

  // Validar disponibilidad
  if (!validarDisponibilidad(barbero.id, fecha, hora)) {
    mensaje.textContent = "El barbero ya tiene una reserva en esa fecha y hora.";
    mensaje.style.color = "red";
    return;
  }

  const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
  if (!usuarioLogueado) {
    mensaje.textContent = "Debes iniciar sesión para reservar.";
    mensaje.style.color = "red";
    return;
  }

  // Crear reserva nueva
  const nuevoId = sistema.misReservas.length > 0 
    ? sistema.misReservas[sistema.misReservas.length - 1].id + 1 
    : 1;

  const reservaNueva = new ListadoReservas(
    nuevoId,
    usuarioLogueado.id,
    usuarioLogueado.telefono,
    usuarioLogueado.email,
    fecha,
    hora,
    servicio,
    barbero
  );

  sistema.agregarReserva(reservaNueva);
  
  console.log("Reserva agregada:", reservaNueva);
  console.log("Reservas actuales:", sistema.misReservas);

  mensaje.textContent = "Reserva realizada con éxito!";
  mensaje.style.color = "green";

  mostrarReservasUsuario(usuarioLogueado.id);

  if (document.getElementById("reservasClientes").style.display === "block") {
    mostrarReservasAdmin();
  }
mostrarReservasAdmin();

  document.getElementById("formReserva").reset();
  configurarFechaMinima();
}

// Crea un contenedor de mensajes si no existe en el DOM
function crearMensajeReserva() {
  let contenedor = document.getElementById("mensajeReserva");
  if (!contenedor) {
    contenedor = document.createElement("div");
    contenedor.id = "mensajeReserva";
    const form = document.getElementById("formReserva");
    form.parentNode.insertBefore(contenedor, form.nextSibling);
  }
  return contenedor;
}

// Prepara el formulario (carga selects y configura fecha mínima)
function prepararFormularioReserva() {
  cargarHorarios();
  cargarServicios();
  cargarBarberos();
  configurarFechaMinima();

  const form = document.getElementById("formReserva");
  form.removeEventListener("submit", manejarReserva); // evitar duplicados
  form.addEventListener("submit", manejarReserva);
}

// Sobrescribir mostrarSoloSeccion para que prepare el formulario cuando se muestra reservarCita
const mostrarSoloSeccionOriginal = mostrarSoloSeccion;
mostrarSoloSeccion = function(id) {
  mostrarSoloSeccionOriginal(id);
  if (id === "reservarCita") {
    prepararFormularioReserva();
  }
};