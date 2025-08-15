//Aca van a ir las clases; Objetos que nos permiten crear mas objetos

class Usuario {
  constructor(unId, unNombreUsuario, unaClave, unEmail, unTelefono) {
    this.id = unId;
    this.nombre = unNombreUsuario;
    this.contrasena = unaClave;
    this.email = unEmail;
    this.telefono = unTelefono;
  }
}

class Admin {
  constructor(unId, unNombreUsuarioAdmin, unaClave) {
    this.id = unId;
    this.nombre = unNombreUsuarioAdmin;
    this.contrasena = unaClave;
  }
}

class Servicio {
  constructor(unId, unNombreServicio, unaDescripcion, unPrecio) {
    this.id = unId;
    this.nombre = unNombreServicio;
    this.descripcion = unaDescripcion;
    this.precio = unPrecio;
  }
}

class Barbero {
  constructor(unId, unNombreBarbero, unaEspecialidad) {
    this.id = unId;
    this.nombre = unNombreBarbero;
    this.especialidad = unaEspecialidad;
    this.reservas = []; // lista vacía al principio
  }
}

class ListadoReservas {
  constructor(id, idCliente, telefono, email, fecha, hora, servicio, barbero) {
    this.id = id;
    this.idCliente = idCliente;
    this.telefono = telefono;
    this.email = email;
    this.fecha = fecha;
    this.hora = hora;
    this.servicio = servicio;
    this.barbero = barbero;
  }
}
