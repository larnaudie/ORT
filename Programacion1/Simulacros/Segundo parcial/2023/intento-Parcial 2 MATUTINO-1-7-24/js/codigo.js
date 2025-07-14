window.addEventListener("load", inicio);

function inicio() {
    cargarSelect();
    document.querySelector("#btnRegistrar").addEventListener("click", registrarPrestamo);

}

let sistema = new Sistema();

function cargarSelect() {
    document.querySelector("#slcLibro").innerHTML = "";
    for (const libro of sistema.libros) {
        document.querySelector("#slcLibro").innerHTML += `
        <option value="${libro.id}">${libro.nombre}</option>`
    }
}

let idPrestamo = 1;
function registrarPrestamo() {
    let libroId = Number(document.querySelector("#slcLibro").value);
    let nombre = document.querySelector("#txtNombre").value;
    let cedula = document.querySelector("#txtCI").value;
    let duracion = Number(document.querySelector("#txtDuracion").value);
    let libro = sistema.buscarLibro(libroId)
    
    //Si lo pongo aca, compara string cedula contra number cedula y falla
    //debe estar en string para que puedamos verificar su largo.

    //let yaExiste = sistema.buscarPrestamo(cedula, libroId);

    if (nombre !== "" && nombre.charAt(0) === nombre.charAt(0).toUpperCase() && cedula.length > 7 && duracion > 0 && libroId !== "") {
        cedula = Number(cedula)
        //debo llamarlo aca, una vez que el valor cedula fue convertido a number
        let yaExiste = sistema.buscarPrestamo(cedula, libroId);
        if (yaExiste === false && !isNaN(cedula)) {

            let prestamo = new Prestamo(idPrestamo, libro, nombre, cedula, duracion);
            idPrestamo++;
            sistema.agregarPrestamo(prestamo);
            alert("Prestamo agregado")
            mostrarTabla();
        } else { document.querySelector("#errores").innerHTML = 'Revisar Datos' };
    }
}

function mostrarTabla() {
    document.querySelector("#tblTabla").innerHTML = `<thead><tr>
     <th>Libro</th>
     <th>Cantidad de prestamos</th>
     </tr></thead><tbody>`
    for (const prestamo of sistema.prestamos) {
        document.querySelector("#tblTabla").innerHTML += `<tr>
        <td>${prestamo.libro.nombre}</td>
        <td>${sistema.cantidadDePrestamos(prestamo.libro.id)}</td>
        </tr>`
    }
    document.querySelector("#tblTabla").innerHTML += `</tbody>`
}
