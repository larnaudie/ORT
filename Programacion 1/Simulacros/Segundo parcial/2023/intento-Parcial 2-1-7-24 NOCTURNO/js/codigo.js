window.addEventListener("load", inicio);

function inicio() {
    cargarSelect();
    document.querySelector("#btnRegistrar").addEventListener("click", registrarCosecha);
}
let sistema = new Sistema();

function cargarSelect() {
    document.querySelector("#slcVariedad").innerHTML = "";
    for (const variedad of sistema.variedades) {
        document.querySelector("#slcVariedad").innerHTML += `<option value="${variedad.id}">${variedad.nombre}</option>`
    }
}

let idCosecha = 1;
function registrarCosecha() {
    let variedadId = Number(document.querySelector("#slcVariedad").value);
    let cantidadKg = Number(document.querySelector("#txtCantidadKg").value);
    let cantidadHs = Number(document.querySelector("#txtCantidadHs").value);
    let temperatura = document.querySelector("#slcTemp").value;

    //agregado
    let yaExiste = false;

    //estaba dentro del otro if
    //el if funciona bien.
    if (cantidadHs > 1000 && cantidadHs < 1400 && temperatura === "Baja") {
        yaExiste = sistema.tieneCosechaPrevia(variedadId, cantidadKg)
        console.log(yaExiste)
    }

    if (variedadId !== "" && cantidadKg !== "" && cantidadHs !== "" && temperatura !== "" && yaExiste === false) {
        //en vez de poner varidadId puse idVariedad

        let cosecha = new Cosecha(idCosecha, variedadId, cantidadKg, cantidadHs, temperatura);
        console.log(cosecha)

        idCosecha++;
        sistema.agregarCosecha(cosecha);
        alert("Cosecha agregada");
        mostrarTabla();
    } else { document.querySelector("#pResultado").innerHTML = `Revisar Datos` };
}

function mostrarTabla() {
    document.querySelector("#tblTabla").innerHTML = `<thead><tr>
    <th>Variedad</th>
    <th>Cantidad</th>
    </tr></thead><tbody>`
    for (const variedad of sistema.variedades) {
        document.querySelector("#tblTabla").innerHTML += `<tr>
        <td>${variedad.nombre}</td>
        <td>${sistema.obtenerCantidadCosechasVariedad(variedad.id)}</td>
        </tr>`
    }
    document.querySelector("#tblTabla").innerHTML += `</tbody>`
}
