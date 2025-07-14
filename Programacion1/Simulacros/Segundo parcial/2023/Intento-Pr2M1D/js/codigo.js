window.addEventListener("load", inicio);

function inicio() {
    cargarSelect();
    document.querySelector("#btnRegistrar").addEventListener("click", registrarFecha)

}

let sistema = new Sistema();

function cargarSelect() {
    document.querySelector("#slcMenu").innerHTML = "";
    for (const menu of sistema.opcionesDeMenu) {
        document.querySelector("#slcMenu").innerHTML += `
        <option value="${menu.numero}"> ${menu.nombre} P/Persona: $${menu.precioPorPersona}</option>`
    }
}

let idFecha = 1;
function registrarFecha() {
    let fecha = document.querySelector("#txtFecha").value;
    let cedula = document.querySelector("#txtCI").value;
    let tipoFiesta = Number(document.querySelector("#slcFiesta").value);
    let tipoMenu = Number(document.querySelector("#slcMenu").value);
    let invitados = Number(document.querySelector("#txtCantidad").value);

    let fechaEnUso = sistema.hayFiesta(fecha);
    let menuElegido = sistema.buscarMenu(tipoMenu);

    console.log(fecha)
    console.log(cedula)
    console.log(tipoFiesta)
    console.log(tipoMenu)
    console.log(invitados)

    console.log(sistema.hayFiesta(fecha))
    console.log(sistema.buscarMenu(tipoMenu))

    console.log(fechaEnUso)
    console.log(menuElegido)

    if (cedula.length >= 6 && fechaEnUso === false) {
        let fiesta = new Fiesta(idFecha, fecha, cedula, tipoFiesta, invitados, tipoMenu);
        idFecha++;
        sistema.agregarFiesta(fiesta);
        document.querySelector("#pResultado").innerHTML = "Registro Exitoso"

        mostrarTotalCobradoPorMenu()
    } else {
        alert("Cedula mayor a 6 caracteres o ya esta reservada la fecha.");
    }
}

function mostrarTotalCobradoPorMenu() {
    document.querySelector("#tblTotal").innerHTML = `<thead><tr>
    <th>Menú</th>
    <th>Costo Total Cobrado en Fiestas</th>
    </tr></thead>
    <tbody>`
    for (const menu of sistema.opcionesDeMenu) {
        let costo = sistema.obtenerCostoTotalMenu(menu.numero);
        document.querySelector("#tblTotal").innerHTML += `<tr>
        <td>${menu.nombre}</td>
        <td>${costo}</td>
        </tr>`
    }
}