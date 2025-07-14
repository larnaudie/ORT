window.addEventListener("load", inicio);

function inicio() {
    cargarSelect();
    document.querySelector("#btnRegistrar").addEventListener("click", registrarViaje);
    // Copiado, para cargar tabla
    document.querySelector("#btnTabla").addEventListener("click", cargarTabla);

}

let sistema = new Sistema();

function cargarSelect() {
    document.querySelector("#slcViajero").innerHTML = "";
    for (const viajero of sistema.viajeros) {
        document.querySelector("#slcViajero").innerHTML += `
        <option value="${viajero.id}">${viajero.nombre} ${viajero.cedula}</option>`
    }
}

let idViaje = 1;
function registrarViaje() {
    let destino = document.querySelector("#txtDestino").value;
    let costo = Number(document.querySelector("#txtCosto").value);
    let idViajero = Number(document.querySelector("#slcViajero").value);
    let fecha = document.querySelector("#txtFecha").value;
    let tipo = document.querySelector("#slcTipo").value;

    let yaExiste = sistema.existeViaje(idViajero, fecha);
    console.log(yaExiste)

    if (destino !== "" && costo !== "" && idViajero !== "" && fecha !== "" && tipo !== "") {
        if (yaExiste === false) {

            //Correccion; buscamos el idViajero mediante obtenerViajero y lo guardamos como objteo;
            let viaje = new Viaje(idViaje, destino, costo, sistema.obtenerViajeroPorId(idViajero), fecha, tipo);
            idViaje++;
            sistema.agregarViaje(viaje);
            //cargarTabla();
            alert("Viaje Realizado")
        } else { document.querySelector("#errores").innerHTML = 'Ya existe viaje' };
    } else { document.querySelector("#errores").innerHTML = 'Campos Vacios' };
}

// tabla copiada
function cargarTabla() {
    let tipoViaje = document.querySelector("#slcTipoTbl").value;
    document.querySelector("#tblViajes").innerHTML = `<thead><tr>
     <th>Destino</th>
     <th>Costo</th>
     <th>Fecha</th>
     <th>Nombre</th>
     <th>Cedula</th>
     </tr></thead><tbody>`
    let viajesTipo = sistema.obtenerViajesPorTipo(tipoViaje);
    for (const viaje of viajesTipo) {
        // viajero es un objeto
        document.querySelector("#tblViajes").innerHTML += `<tr>
        <td>${viaje.destino}</td>
        <td>${viaje.costo}</td>
        <td>${viaje.fecha}</td>
        <td>${viaje.idViajero.nombre}</td>
        <td>${viaje.idViajero.cedula}</td>
        </tr>`
    }
    document.querySelector("#tblViajes").innerHTML += `</tbody>`

    //De aca para abajo es todo copiado
    let numeroViajesPorTipo = 0;
    let totalCosto = 0;
    let costoMayor = 0;

    for(const viaje of viajesTipo){
        totalCosto += viaje.costo;
        if(viaje.costo > costoMayor){
            costoMayor = viaje.costo;
        }
        numeroViajesPorTipo++
    }
    let costoPromedio = totalCosto/ numeroViajesPorTipo;
    document.querySelector("#pPromedio").innerHTML = `costo promedio: $ ${costoPromedio} <br>`
    document.querySelector("#pMayor").innerHTML = `costo mayor: $ ${costoMayor}`
}

// Mi tabla
// function cargarTabla() {
//     let tipoViaje = document.querySelector("#slcTipo").value;
//     document.querySelector("#tblViajes").innerHTML = `<thead><tr>
//     <th>Destino</th>
//     <th>Costo</th>
//     <th>Fecha</th>
//     <th>Nombre</th>
//     <th>Cedula</th>
//     </tr></thead><tbody>`
//     let destino = "";
//     let costo = "";
//     let fecha = "";
//     if (tipoViaje === "Premium") {

//         let viajesTipo = sistema.obtenerViajesPorTipo(tipoViaje);
//         for(const viaje of viajesTipo){
//             destino = viaje.destino;
//             costo = viaje.costo;
//             fecha = viaje.fecha;
//         }
//         for(const viajero of sistema.viajeros){
//             if(viajero.tipo === tipoViaje){
//                 document.querySelector("tblViajes").innerHTML += `<tr>
//                 <td>${destino}</td>
//                 <td>${costo}</td>
//                 <td>${fecha}</td>
//                 <td>${viajero.nombre}</td>
//                 <td>${viajero.cedula}</td>
//                 </tr>`
//             }
//             document.querySelector("#pPromedio").innerHTML = `${costo / viajesTipo.length}`
//         }
//     } else if (tipoViaje === "Estandar") {

//         let viajesTipo = sistema.obtenerViajesPorTipo(tipoViaje);
//         for(const viaje of viajesTipo){
//             destino = viaje.destino;
//             costo = viaje.costo;
//             fecha = fecha.fecha;
//         }
//         for(const viajero of sistema.viajeros){
//             if(viajero.tipo === tipoViaje){
//                 document.querySelector("tblViajes").innerHTML += `<tr>
//                 <td>${destino}</td>
//                 <td>${costo}</td>
//                 <td>${fecha}</td>
//                 <td>${viajero.nombre}</td>
//                 <td>${viajero.cedula}</td>
//                 </tr>`
//             }
//             document.querySelector("#pPromedio").innerHTML = `${costo / viajesTipo.length}`
//         }
//     } else if (tipoViaje === "Casual") {

//         let viajesTipo = sistema.obtenerViajesPorTipo(tipoViaje);
//         for(const viaje of viajesTipo){
//             destino = viaje.destino;
//             costo = viaje.costo;
//             fecha = fecha.fecha;
//         }
//         for(const viajero of sistema.viajeros){
//             if(viajero.tipo === tipoViaje){
//                 document.querySelector("tblViajes").innerHTML += `<tr>
//                 <td>${destino}</td>
//                 <td>${costo}</td>
//                 <td>${fecha}</td>
//                 <td>${viajero.nombre}</td>
//                 <td>${viajero.cedula}</td>
//                 </tr>`
//             }
//             document.querySelector("#pPromedio").innerHTML = `${costo / viajesTipo.length}`
//         }
//     }
//     document.querySelector("#tblViajes").innerHTML += `</tbody>`
// }