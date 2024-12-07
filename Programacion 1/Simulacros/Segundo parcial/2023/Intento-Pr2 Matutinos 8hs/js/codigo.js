window.addEventListener("load", inicio);

function inicio() {
    cargarSelect();
    document.querySelector("#btnVender").addEventListener("click", ventaAgua);

}

let sistema = new Sistema();

function cargarSelect() {
    document.querySelector("#slcAgua").innerHTML = "";
    for (const agua of sistema.listaDeAguas) {
        document.querySelector("#slcAgua").innerHTML += `
        <option value="${agua.id}"> ${agua.nombre}</option>`
    }
}

let idVenta = sistema.listaDeVentas.length;
function ventaAgua() {
    let cliente = Number(document.querySelector("#txtCliente").value);
    let cantidad = Number(document.querySelector("#txtCantidad").value)
    let tipoAgua = Number(document.querySelector("#slcTipoAgua").value);
    let marcaAgua = document.querySelector("#slcAgua").value;

    let existeVentas = sistema.existeVenta(cliente, tipoAgua);
   console.log(sistema.existeVenta(cliente, tipoAgua))
    if (existeVentas === false) {
        console.log(tipoAgua === 1)
        console.log(cantidad < 30)
        if (tipoAgua === 1 && cantidad < 30) {
            let venta = new Venta(idVenta, cliente, tipoAgua, cantidad);
            idVenta++;
            sistema.agregarVenta(venta);
            alert("Venta exitosa")
            mostrarTabla();
        }
    }
    if (tipoAgua === 2 && cantidad < 100) {
        let venta = new Venta(idVenta, cliente, tipoAgua, cantidad);
        idVenta++;
        sistema.agregarVenta(venta);
        alert("Venta exitosa")
        mostrarTabla();
    }
}

function mostrarTabla() {
    document.querySelector("#tblVentas").innerHTML = `<thead><tr>
    <th>Agua</th>
    <th>Cantidad Total de fundas vendidas</th>
    </tr></thead>
    <tbody>`
    for (const agua of sistema.listaDeAguas) {
        document.querySelector("#tblVentas").innerHTML += `<tr>
        <td>${agua.nombre}</td>
        <td>${sistema.obtenerCantidadAguasClientes(agua.id)}</td>
        </tr></tbody>`
    }
}