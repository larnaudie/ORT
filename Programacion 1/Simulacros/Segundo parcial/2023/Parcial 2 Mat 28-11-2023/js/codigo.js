window.addEventListener("load", inicio);

function inicio() {
    cargarPersonas();
    cargarPensiones();
    document.querySelector("#btnRegistrar").addEventListener("click", registrarPagoPension);

}

let sistema = new Sistema();

function cargarPersonas() {
    document.querySelector("#slcPersona").innerHTML = "";
    for (const persona of sistema.personas) {
        document.querySelector("#slcPersona").innerHTML += `
        <option value="${persona.ci}">${persona.nombre} ${persona.apellido}</option>`
    }
}

function cargarPensiones() {
    document.querySelector("#slcPension").innerHTML = "";
    for (const pension of sistema.pensiones) {
        document.querySelector("#slcPension").innerHTML += `
        <option value="${pension.id}">${pension.tipo}</option>`
    }
}

let idPago = 1;
function registrarPagoPension() {
    let ci = document.querySelector("#slcPersona").value;   
    let pension = Number(document.querySelector("#slcPension").value); //
    let mes = Number(document.querySelector("#txtMes").value);
    let anio = Number(document.querySelector("#txtAnio").value);

    let existePagoEnMes = sistema.obtenerCantidadPensionesPagosEnMesAnio(mes, anio);

    if (anio >= 2023 && (mes >= 1 || mes <= 12)) {
        if (existePagoEnMes === 0) {
            let pago = new Pago(idPago, ci, pension, mes, anio);
            idPago++;
            sistema.agregarPago(pago);
            mostrarTabla();
            alert("Compra realizada")
        } else { document.querySelector("#pResultado").innerHTML='Error 1'};
    }else { document.querySelector("#errores").innerHTML='Error 2'};
}

function mostrarTabla() {
    document.querySelector("#tblPagos").innerHTML = `<thead><tr>
    <th>Pension</th>
    <th>Monto Individual</th>
    <th>Monto total pago</th>
    </tr></thead><tbody>`
    for (const pension of sistema.pensiones) {
        document.querySelector("#tblPagos").innerHTML += `<tr>
        <td>${pension.tipo}</td>
        <td>${pension.monto}</td>
        <td>${sistema.obtenerTotalPagoPension(pension.id)}</td></tr>`;
    }
    document.querySelector("#tblPagos").innerHTML += `</tbody>`
}