window.addEventListener("load", inicio);

function inicio() {
    cargarSelect();
    document.querySelector("#btnComprar").addEventListener("click", registrarCompra);

}

let sistema = new Sistema();

function cargarSelect() {
    document.querySelector("#slcCamion").innerHTML = "";
    for (const camion of sistema.camiones) {
        document.querySelector("#slcCamion").innerHTML += `
        <option value="${camion.id}">${camion.marca}-${camion.modelo}-${camion.km}</option>`
    }
}

let idCompra = 1;
function registrarCompra() {
    let nombre = document.querySelector("#txtNombre").value;
    let cedula = Number(document.querySelector("#txtCI").value);
    let cantidad = Number(document.querySelector("#txtCantidad").value);
    let fecha = document.querySelector("#txtFecha").value;
    let costo = Number(document.querySelector("#txtCosto").value);
    let camion = Number(document.querySelector("#slcCamion").value);
    let tipoCompra =document.querySelector("#slcTipoCompra").value;

    let yaExiste = sistema.existeCompra(cedula, camion, fecha);
    let encontrarCamion = sistema.obtenerCamionPorId(camion);

    if (nombre !== "" && cedula !== "" && cantidad !== "" && fecha !== "" && costo !== "" && camion !== "" && tipoCompra !== "" ) {
        if (yaExiste === false) {
            let compra = new Compra(idCompra, nombre, cedula, cantidad,fecha,costo,encontrarCamion,tipoCompra);
            idCompra++;
            sistema.agregarCompra(compra);
            cargarTabla();
            alert("Compra realizada")
        } //else { document.querySelector("#errores").innerHTML='Error, ya existe compra'};
    } 
}

function cargarTabla() {
    document.querySelector("#tblTotales").innerHTML = `<thead><tr>
    <th>Tipos</th>
    <th>Cantidad Total</th>
    <th>Costo Promedio</th>
    </tr></thead>`
    for (const compra of sistema.compras) {
        document.querySelector("#tblTotales").innerHTML += `
    <tbody><tr>
        <td>${compra.tipo}</td>
        <td>${sistema.obtenerCantidadDeCompra(compra.tipo)}</td>
        <td>${sistema.obtenerCostoPromedio(compra.tipo)}</td>
        </tr>`;
    }
    document.querySelector("#tblTotales").innerHTML += '</tbody>'
}