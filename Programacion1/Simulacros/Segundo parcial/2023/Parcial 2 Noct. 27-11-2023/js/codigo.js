window.addEventListener("load", inicio);

function inicio() {
    cargarSelectClientes();
    cargarSelectDrones();
    document.querySelector("#btnRegistrar").addEventListener("click", registrarVenta);
}

let sistema = new Sistema();

function cargarSelectClientes() {
    document.querySelector("#slcCliente").innerHTML = "";
    //es sistema NO THIS!
    for (const cliente of sistema.clientes) {
        document.querySelector("#slcCliente").innerHTML += `<option value="${cliente.numeroCliente}">${cliente.nombre} ${cliente.apellido}</option>`
    }
}

function cargarSelectDrones() {
    document.querySelector("#slcDron").innerHTML = "";
    //es sistema NO THIS!
    for (const dron of sistema.drones) {
        document.querySelector("#slcDron").innerHTML += `<option value="${dron.id}">${dron.tipoDron}</option>`
    }
}

let idVenta = 1;
function registrarVenta() {
    let idCliente = Number(document.querySelector("#slcCliente").value);
    let idDron = Number(document.querySelector("#slcDron").value);
    let cantidad = Number(document.querySelector("#txtCantidad").value);
    let yaExiste = sistema.obtenerTotalCompra(idCliente, idDron);
    if (!isNaN(cantidad) && cantidad > 0 && yaExiste === 0) {
        let venta = new Venta(idVenta, idCliente, idDron, cantidad);
        sistema.agregarVenta(venta);
        idVenta++;
        alert("Venta realizada");
        mostrarTabla()
    } else { document.querySelector("#pResultado").innerHTML = `Revisar datos` };
}

function mostrarTabla(){
    document.querySelector("#tblTabla").innerHTML = `<thead><tr>
    <th>Id</th>
    <th>Tipo</th>
    <th>Ganancia</th>
    <th>Cliente Fan</th>
    </tr></thead><tbody>`
    for(const dron of sistema.drones){
        document.querySelector("#tblTabla").innerHTML += `<tr>
        <td>${dron.id}</td>
        <td>${dron.tipoDron}</td>
        <td>${sistema.obtenerTotalGanado(dron.id)}</td>
        <td>${sistema.obtenerMayorFan(dron.id)}</td>
        </tr>`
    }
    document.querySelector("#tblTabla").innerHTML += `</tbody>`
}