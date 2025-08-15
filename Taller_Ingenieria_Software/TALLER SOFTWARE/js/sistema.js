class Sistema {
  constructor() {
    this.usuarios = [
      new Usuario(1, "Pablo", "123456aS", "cliente1@mail.com", "099111111"),
      new Usuario(2, "Natalia", "123456As", "cliente2@mail.com", "099222222"),
      new Usuario(3, "Mauro", "222222Fd", "cliente3@mail.com", "099333333"),
      new Usuario(4, "Santiago", "111111Gg", "cliente4@mail.com", "099444444"),
      new Usuario(5, "Valentina", "333333sH", "cliente5@mail.com", "099555555"),
    ];

    this.usuariosAdmin = [new Admin(1, "admin", "admin"), new Admin(2, "a", "a"), new Admin(3, "admin1", "admin1"), new Admin(4, "admin2", "admin2"), new Admin(5, "admin3", "admin3")];

    this.barberos = [
      new Barbero("BAR_1", "Matias Fernandez", "Cortes clásicos y barba"),
      new Barbero("BAR_2", "Bruno Castro", "Coloración y estilo moderno"),
      new Barbero("BAR_3", "Lautaro Peralta", "Afeitado y perfilado profesional"),
      new Barbero("BAR_4", "Elias Mendez", "Cortes personalizados y diseño"),
    ];

    this.servicios = [
      new Servicio("SERV_1", "Corte de pelo", "Corte clásico adaptado a la preferencia del cliente. Ideal para quienes buscan un estilo tradicional o un mantenimiento rápido del look.", 500),
      new Servicio("SERV_2", "Corte de pelo personalizado", "Corte detallado y estilizado según las características del rostro y preferencias del cliente, con asesoramiento personalizado del barbero.", 900),
      new Servicio("SERV_3", "Afeitado y perfilado", "Afeitado clásico con toalla caliente, uso de navaja y perfilado definido para un estilo limpio y elegante.", 200),
      new Servicio("SERV_4", "Tinta de cabello", "Aplicación de color sobre el cabello con productos profesionales. Ideal para cubrir canas o cambiar el tono de forma natural y pareja.", 700),
    ];

    this.misReservas = [
      new ListadoReservas(1, this.usuarios[0].id, this.usuarios[0].telefono, this.usuarios[0].email, "2025-08-01", "15:00", this.servicios[0], this.barberos[0]),
      new ListadoReservas(2, this.usuarios[1].id, this.usuarios[1].telefono, this.usuarios[1].email, "2025-08-01", "16:00", this.servicios[1], this.barberos[1]),
      new ListadoReservas(3, this.usuarios[2].id, this.usuarios[2].telefono, this.usuarios[2].email, "2025-08-02", "10:00", this.servicios[2], this.barberos[2]),
      new ListadoReservas(4, this.usuarios[2].id, this.usuarios[2].telefono, this.usuarios[2].email, "2025-08-02", "11:00", this.servicios[2], this.barberos[2]),
      new ListadoReservas(5, this.usuarios[1].id, this.usuarios[1].telefono, this.usuarios[1].email, "2025-08-03", "14:00", this.servicios[1], this.barberos[1]),
      new ListadoReservas(6, this.usuarios[4].id, this.usuarios[4].telefono, this.usuarios[4].email, "2025-08-03", "13:00", this.servicios[3], this.barberos[3]),
      new ListadoReservas(7, this.usuarios[3].id, this.usuarios[3].telefono, this.usuarios[3].email, "2025-08-04", "12:00", this.servicios[3], this.barberos[0]),
    ];
  }

  buscarNombre(arrElementos, propiedad, busqueda) {
    return arrElementos.some((el) => el[propiedad]?.toLowerCase() === busqueda.toLowerCase());
  }

  buscarElemento(arrElementos, propiedad, busqueda) {
    return arrElementos.some((el) => el[propiedad] === busqueda);
  }

  obtenerObjeto(arrElementos, propiedad, busqueda) {
    return arrElementos.find((el) => el[propiedad] === busqueda) || null;
  }

  obtenerObjetoEnArray(arrElementos, propiedad, busqueda) {
    return arrElementos.filter((el) => el[propiedad] === busqueda);
  }

  validarCamposVaciosRegistro(nombre, clave) {
    return nombre !== "" && clave !== "";
  }

  verificarFormatoContrasena(clave) {
    let contMayus = 0,
      contMinus = 0,
      contNum = 0;

    for (let i = 0; i < clave.length; i++) {
      const char = clave.charAt(i);
      if (/[A-Z]/.test(char)) contMayus++;
      else if (/[a-z]/.test(char)) contMinus++;
      else if (/\d/.test(char)) contNum++;
    }

    return clave.length > 5 && contMayus >= 1 && contMinus >= 1 && contNum >= 1;
  }

  agregarUsuario(usuario) {
    this.usuarios.push(usuario);
  }

  agregarServicio(servicio) {
    this.servicios.push(servicio);
  }

  agregarBarbero(barbero) {
  this.barberos.push(barbero);
}

existeBarbero(id) {
  return this.barberos.some(b => b.id === id);
}

    agregarReserva(reserva) {
    this.misReservas.push(reserva);

    const barbero = this.obtenerObjeto(this.barberos, "id", reserva.barbero.id);
    if (barbero) {
      if (!barbero.reservas) barbero.reservas = [];
      barbero.reservas.push(reserva);
    }
  }
  
  verificarLogin(nombre, clave, tipoUsuario) {
    if (tipoUsuario === "admin") {
      const admin = this.obtenerObjeto(this.usuariosAdmin, "nombre", nombre);
      return admin && admin.contrasena === clave;
    } else if (tipoUsuario === "user") {
      const user = this.obtenerObjeto(this.usuarios, "nombre", nombre);
      return user && user.contrasena === clave;
    }
    return false;
  }
}
