function esDomingo(fechaStr) {
  const fecha = new Date(fechaStr + "T00:00:00");
  return fecha.getDay() === 0;
}

function validarDisponibilidad(barberoId, fecha, hora, reservas) {
  return !reservas.some(res =>
    (res.barbero.id === barberoId || res.barbero.nombre === barberoId) &&
    res.fecha === fecha &&
    res.hora === hora
  );
}

function verificarFormatoContrasena(contrasena) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  return regex.test(contrasena);
}

function validarCamposVaciosRegistro(nombre, clave) {
  return nombre.trim() !== "" && clave.trim() !== "";
}

function buscarNombre(array, campo, valor) {
  return array.some(obj => obj[campo] === valor);
}

function obtenerObjeto(array, campo, valor) {
  return array.find(obj => obj[campo] === valor) || null;
}

function obtenerObjetoEnArray(array, campo, valor) {
  return array.filter(obj => obj[campo] === valor);
}

function validarTelefono(telefono) {
  return /^09\d{7}$/.test(telefono);
}

function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function generarIdSiguiente(array) {
  return array.length > 0
    ? Math.max(...array.map(obj => obj.id || 0)) + 1
    : 1;
}

function crearReserva(id, idCliente, telefono, email, fecha, hora, servicio, barbero) {
  return {
    id,
    idCliente,
    telefono,
    email,
    fecha,
    hora,
    servicio,
    barbero
  };
}

function agregarBarbero(barberos, nuevoBarbero) {
  if (!nuevoBarbero.nombre || !nuevoBarbero.especialidad) return false;
  barberos.push(nuevoBarbero);
  return true;
}

function login(nombre, clave, tipoUsuario, usuarios, admins) {
  const lista = tipoUsuario === "admin" ? admins : usuarios;
  const usuario = lista.find(u => u.nombre === nombre && u.contrasena === clave);
  if (!usuario) return null;

  return {
    id: usuario.id,
    nombre: usuario.nombre,
    tipo: tipoUsuario,
    email: usuario.email || null,
    telefono: usuario.telefono || null
  };
}

function camposFormularioCompletos(campos) {
  return Object.values(campos).every(valor => valor && valor.trim() !== "");
}

function resetFormularioReservas(form) {
  form.reset();
  const mensaje = document.getElementById("mensajeReserva");
  if (mensaje) mensaje.textContent = "";
}

function existeReservaMismoDiaHora(reservas, barberoId, fecha, hora) {
  return reservas.some(res => res.barbero.id === barberoId && res.fecha === fecha && res.hora === hora);
}

function obtenerReservasUsuario(reservas, idUsuario) {
  return reservas.filter(res => res.idCliente === idUsuario);
}

module.exports = {
  esDomingo,
  validarDisponibilidad,
  verificarFormatoContrasena,
  validarCamposVaciosRegistro,
  buscarNombre,
  obtenerObjeto,
  obtenerObjetoEnArray,
  validarTelefono,
  validarEmail,
  generarIdSiguiente,
  crearReserva,
  agregarBarbero,
  login,
  camposFormularioCompletos,
  resetFormularioReservas,
  existeReservaMismoDiaHora,
  obtenerReservasUsuario
};
