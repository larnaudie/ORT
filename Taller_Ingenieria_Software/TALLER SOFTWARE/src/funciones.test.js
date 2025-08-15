const {
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
  existeReservaMismoDiaHora,
  obtenerReservasUsuario
} = require("../src/funciones");

// Test: esDomingo

test("esDomingo devuelve true para un domingo", () => {
  expect(esDomingo("2025-08-03")).toBe(true); // domingo
});

test("esDomingo devuelve false para un lunes", () => {
  expect(esDomingo("2025-08-04")).toBe(false); // lunes
});

// Test: validarDisponibilidad

test("validarDisponibilidad devuelve false si el barbero ya tiene reserva", () => {
  const reservas = [
    { barbero: { id: "1" }, fecha: "2025-08-04", hora: "10:00" }
  ];
  expect(validarDisponibilidad("1", "2025-08-04", "10:00", reservas)).toBe(false);
});

test("validarDisponibilidad devuelve true si no hay conflicto", () => {
  const reservas = [
    { barbero: { id: "1" }, fecha: "2025-08-04", hora: "11:00" }
  ];
  expect(validarDisponibilidad("1", "2025-08-04", "10:00", reservas)).toBe(true);
});

// Test: verificarFormatoContrasena

test("contraseña válida pasa la prueba", () => {
  expect(verificarFormatoContrasena("Abc123")).toBe(true);
});

test("contraseña inválida falla la prueba", () => {
  expect(verificarFormatoContrasena("abc123")).toBe(false);
});

// Test: validarCamposVaciosRegistro

test("devuelve true si ambos campos están completos", () => {
  expect(validarCamposVaciosRegistro("Juan", "Clave123")).toBe(true);
});

test("devuelve false si uno está vacío", () => {
  expect(validarCamposVaciosRegistro("", "Clave123")).toBe(false);
});

// Test: buscarNombre

test("encuentra un nombre en la lista", () => {
  const lista = [{ nombre: "Ana" }];
  expect(buscarNombre(lista, "nombre", "Ana")).toBe(true);
});

test("no encuentra un nombre que no está", () => {
  const lista = [{ nombre: "Ana" }];
  expect(buscarNombre(lista, "nombre", "Pedro")).toBe(false);
});

// Test: obtenerObjeto

test("devuelve el objeto correcto", () => {
  const lista = [{ id: 1 }, { id: 2 }];
  expect(obtenerObjeto(lista, "id", 2)).toEqual({ id: 2 });
});

// Test: obtenerObjetoEnArray

test("filtra objetos con campo coincidente", () => {
  const lista = [{ id: 1 }, { id: 2 }, { id: 1 }];
  expect(obtenerObjetoEnArray(lista, "id", 1)).toHaveLength(2);
});

// Test: validarTelefono

test("telefono válido pasa la prueba", () => {
  expect(validarTelefono("091234567")).toBe(true);
});

test("telefono inválido falla la prueba", () => {
  expect(validarTelefono("081234567")).toBe(false);
});

// Test: validarEmail

test("email válido pasa", () => {
  expect(validarEmail("test@example.com")).toBe(true);
});

test("email inválido falla", () => {
  expect(validarEmail("test@.com")).toBe(false);
});

// Test: generarIdSiguiente

test("devuelve ID siguiente correcto", () => {
  expect(generarIdSiguiente([{ id: 1 }, { id: 5 }])).toBe(6);
});

test("devuelve 1 si el array está vacío", () => {
  expect(generarIdSiguiente([])).toBe(1);
});

// Test: crearReserva

test("crea correctamente una reserva", () => {
  const reserva = crearReserva(1, 2, "099123456", "a@mail.com", "2025-08-05", "10:30", { nombre: "Corte" }, { nombre: "Juan" });
  expect(reserva.id).toBe(1);
  expect(reserva.barbero.nombre).toBe("Juan");
});

// Test: agregarBarbero

test("agrega barbero válido", () => {
  const barberos = [];
  const nuevo = { nombre: "Carlos", especialidad: "Cortes" };
  expect(agregarBarbero(barberos, nuevo)).toBe(true);
  expect(barberos).toHaveLength(1);
});

test("rechaza barbero incompleto", () => {
  const barberos = [];
  const nuevo = { nombre: "Carlos" };
  expect(agregarBarbero(barberos, nuevo)).toBe(false);
});

// Test: login

test("login válido retorna usuario", () => {
  const usuarios = [{ id: 1, nombre: "Pedro", contrasena: "abc123", email: "p@mail.com", telefono: "099111111" }];
  const resultado = login("Pedro", "abc123", "user", usuarios, []);
  expect(resultado.nombre).toBe("Pedro");
});

test("login inválido retorna null", () => {
  const usuarios = [{ id: 1, nombre: "Pedro", contrasena: "abc123" }];
  expect(login("Pedro", "mal", "user", usuarios, [])).toBe(null);
});

// Test: camposFormularioCompletos

test("todos los campos completos devuelve true", () => {
  const campos = { a: "uno", b: "dos" };
  expect(camposFormularioCompletos(campos)).toBe(true);
});

test("campo vacío devuelve false", () => {
  const campos = { a: "", b: "dos" };
  expect(camposFormularioCompletos(campos)).toBe(false);
});

// Test: existeReservaMismoDiaHora

test("reserva existente en mismo día y hora devuelve true", () => {
  const reservas = [
    { barbero: { id: "B1" }, fecha: "2025-08-05", hora: "15:00" }
  ];
  expect(existeReservaMismoDiaHora(reservas, "B1", "2025-08-05", "15:00")).toBe(true);
});

test("sin reservas en mismo horario devuelve false", () => {
  const reservas = [
    { barbero: { id: "B1" }, fecha: "2025-08-05", hora: "14:00" }
  ];
  expect(existeReservaMismoDiaHora(reservas, "B1", "2025-08-05", "15:00")).toBe(false);
});

// Test: obtenerReservasUsuario

test("filtra reservas del usuario correcto", () => {
  const reservas = [
    { idCliente: 1 },
    { idCliente: 2 },
    { idCliente: 1 }
  ];
  const result = obtenerReservasUsuario(reservas, 1);
  expect(result).toHaveLength(2);
});

//CASOS BORDE

// esDomingo con fecha inválida
test('esDomingo devuelve false si se pasa fecha inválida', () => {
  expect(esDomingo("fecha_invalida")).toBe(false); // podría fallar, depende de tu validación
});

// validarDisponibilidad con reservas vacías
test('validarDisponibilidad devuelve true con lista de reservas vacía', () => {
  const reservas = [];
  expect(validarDisponibilidad("B1", "2025-08-05", "10:00", reservas)).toBe(true);
});

// validarDisponibilidad con id numérico en vez de string
test('validarDisponibilidad maneja barberoId numérico', () => {
  const reservas = [
    { barbero: { id: 1 }, fecha: "2025-08-05", hora: "10:00" }
  ];
  expect(validarDisponibilidad(2, "2025-08-05", "10:00", reservas)).toBe(true);
});

// verificarFormatoContrasena con solo letras
test('contraseña con solo letras falla', () => {
  expect(verificarFormatoContrasena("SoloLetras")).toBe(false);
});

// verificarFormatoContrasena con solo números
test('contraseña con solo números falla', () => {
  expect(verificarFormatoContrasena("12345678")).toBe(false);
});

// verificarFormatoContrasena con caracteres especiales
test('contraseña válida con caracteres especiales pasa', () => {
  expect(verificarFormatoContrasena("Abc123$%")).toBe(true);
});

// validarCamposVaciosRegistro con espacios
test('campos con solo espacios son inválidos', () => {
  expect(validarCamposVaciosRegistro("   ", "  ")).toBe(false);
});

// generarIdSiguiente con objetos sin id
test('generarIdSiguiente con objetos sin id retorna 1', () => {
  const lista = [{}, {}, {}];
  expect(generarIdSiguiente(lista)).toBe(1);
});

// agregarBarbero con campos vacíos
test('agregarBarbero con objeto vacío falla', () => {
  const barberos = [];
  expect(agregarBarbero(barberos, {})).toBe(false);
});

// login con nombre correcto pero contraseña incorrecta
test('login con contraseña incorrecta retorna null', () => {
  const usuarios = [{ id: 1, nombre: "juan", contrasena: "Abc123", email: "", telefono: "" }];
  expect(login("juan", "wrong", "user", usuarios, [])).toBe(null);
});

// obtenerObjeto cuando hay varios con mismo campo
test('obtenerObjeto devuelve primero que coincida aunque haya varios', () => {
  const lista = [
    { nombre: "natalia", id: 1 },
    { nombre: "natalia", id: 2 }
  ];
  const res = obtenerObjeto(lista, "nombre", "natalia");
  expect(res.id).toBe(1); // debe devolver el primero
});