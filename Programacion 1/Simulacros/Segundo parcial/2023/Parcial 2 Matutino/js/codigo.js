window.addEventListener("load", inicio);

function inicio() {
    cargarSelect();
    document.querySelector("#btnRegistrar").addEventListener("click", registrarTransmision);

}

let sistema = new Sistema();

function cargarSelect() {
    document.querySelector("#slcJuego").innerHTML = "";
    for (const partida of sistema.listaDePartidas) {
        let idPartida = partida.id;
        let nombreJuego = partida.juego;
        document.querySelector("#slcJuego").innerHTML += `
        <option value="${idPartida}"> ${nombreJuego} (id: ${idPartida})</option>`
    }
}

let idTransmision = 1;
function registrarTransmision() {
    let titulo = document.querySelector("#txtTitulo").value;
    let juego = document.querySelector("#slcJuego").value;
    let idPartida = sistema.listaDePartidas[sistema.listaDePartidas.length - 1].id;
    let cantidadHoras = document.querySelector("#txtHoras").value;

    let yaExiste = sistema.existeTitulo(titulo);
    if (titulo !== "" && yaExiste === false) {
        let transmision = new Transmision(idTransmision, titulo, idPartida);
        idTransmision++;
        sistema.agregarTransmisiones(transmision);
        let partida = new Partida(juego, cantidadHoras);
        sistema.agregarPartidas(partida);
        alert("Transmision y partida guardadas");
        mostrarTransmisiones();
    } else {
        alert("Titulo repetido o vacio");
    }
}

function mostrarTransmisiones() {
    document.querySelector("#tblTransmisiones").innerHTML = `<thead><tr>
    <th>Titulos de la transmision</th>
    <th>Juego</th>
    <th>Duracion de la partida</th>
    </tr></thead>
    <tbody>`
    for (const transmision of sistema.listaDeTransmisiones) {
        document.querySelector("#tblTransmisiones").innerHTML += `<tr>
        <td>${transmision.titulo}</td>
        <td>${sistema.obtenerNombreJuego(transmision.id)}</td>
        <td>${sistema.obtenerDuracionPartida(transmision.id)}</td>
        </tr></tbody>`;
    }
}