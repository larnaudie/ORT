window.addEventListener("load", inicio);

function inicio() {
    cargarSelect();
    document.querySelector("#btnVender").addEventListener("click", registrarVenta);

}

let sistema = new Sistema();

function cargarSelect() {
    document.querySelector("#slcMedicamento").innerHTML = "";
    for (const medicamento of sistema.medicamentos) {
        document.querySelector("#slcMedicamento").innerHTML += `
        <option value="${medicamento.id}">${medicamento.nombre}</option>`
    }
}

let idVenta = 1;
function registrarVenta() {
    let socio = Number(document.querySelector("#txtSocio").value);
    let medicamento = Number(document.querySelector("#slcMedicamento").value);
    let cantidad = Number(document.querySelector("#txtCantidad").value);

    let yaExiste = sistema.ventaRepetida(socio, medicamento);
    if (yaExiste === false && medicamento === 1) {
        if (cantidad <= 3) {
            let venta = new Venta(idVenta, socio, medicamento, cantidad);
            idVenta++;
            sistema.agregarVenta(venta);
            mostrarTabla();
            alert("Compra realizada")} else { alert("Revisar cantidad")};
    } else if ((yaExiste === false && medicamento === 2)) {
        if (cantidad === 1) {
            let venta = new Venta(idVenta, socio, medicamento, cantidad);
            idVenta++;
            sistema.agregarVenta(venta);
            mostrarTabla();
            alert("Compra realizada")} else { alert("Revisar cantidad") };
    }else{alert("Ya existe o medicamento invalido")};
}

function mostrarTabla() {
    document.querySelector("#tblVentas").innerHTML = `<thead><tr>
    <th>Medicamentos</th>
    <th>Cantidad Total</th>
    </tr></thead>
    <tbody>`
    for (const medicamento of sistema.medicamentos) {
        document.querySelector("#tblVentas").innerHTML += `<tr>
        <td>${medicamento.nombre}</td>
        <td>${sistema.obtenerCantidadMedicamentosSocio(medicamento.id)}</td>
        </tr></tbody>`;
    }
}