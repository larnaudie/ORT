window.addEventListener("load", inicio);

function inicio() {

    //Objetos
    // document.querySelector("#btnEj7").addEventListener("click", ej7Pr5);

    cargarGenero()
    document.querySelector("#btnAgregarEj8").addEventListener("click", ej8agregarPelicula);
    document.querySelector("#btnMostrarEj8").addEventListener("click", ej8MostrarTabla);
    document.querySelector("#btnBuscarEj8Pr5").addEventListener("click", ej8BuscarPelicula);

    // document.querySelector("#btnEj9").addEventListener("click", ej9Pr5);

}

//Objetos
/**Ejercicio 7 */





/*  Ejercicio 8   */
let sistema = new Sistema();
let idPelicula = 1;

function cargarGenero() {
    document.querySelector("#slcGeneroEj8Pr5").innerHTML = `<option value="-1"> Seleccione una opcion...</option>`
    for (let i = 0; i < sistema.generos.length; i++) {
        const unGenero = sistema.generos[i];
        document.querySelector("#slcGeneroEj8Pr5").innerHTML += `<option value="${unGenero.id}"> ${unGenero.nombre} - ${unGenero.edad} </option>`
    }
}

function ej8agregarPelicula() {
    let campoNombre = document.querySelector(`#txtNombreEj8Pr5`).value;
    let campoAnio = Number(document.querySelector(`#txtAnioEj8Pr5`).value);

    let aparece = sistema.buscarElementos(sistema.peliculas, "nombre", campoNombre)

    if (!isNaN(campoAnio) && !aparece) {
        let campoGenero = Number(document.querySelector("#slcGeneroEj8Pr5").value);
        let campoVotos = Number(document.querySelector("#txtVotosEj8Pr5").value);
        let campoVotantes = Number(document.querySelector("#txtVotantesEj8Pr5").value);

        let foto = document.querySelector("#fileFotos").value;
        let nombreFoto = foto.substring(foto.lastIndexOf("\\") + 1)

        let pelicula = new Pelicula(idPelicula, campoNombre, campoAnio, campoGenero, campoVotantes, campoVotos, nombreFoto);
        idPelicula++;
        sistema.agregarPelicula(pelicula);

    } else {
        alert("Se deben correrir los datos");
    }
}

function ej8MostrarTabla() {
    document.querySelector(`#tblPeliculas`).innerHTML = "";
    for (let i = 0; i < sistema.peliculas.length; i++) {
        const unaPelicula = sistema.peliculas[i];
        let promedio = unaPelicula.votos / unaPelicula.votantes;
        if (promedio > 4) {
            document.querySelector(`#tblPeliculas`).innerHTML += `<tr>
            <td>${unaPelicula.nombre}</td>
            <td>${unaPelicula.anio}</td>
            <td>${promedio}</td>
            </tr>`
        }
    }
}
/*Me da error linea 78 y 79, no puede acceder a genero.nombre y genero.edad */
function ej8BuscarPelicula(){
    let campoBusqueda = document.querySelector("#txtBusquedaEj8Pr5").value;
    let peli = sistema.obtenerObjeto(sistema.peliculas, "nombre", campoBusqueda);
    let genero = sistema.obtenerObjeto(sistema.generos, "id", peli.genero);
    if(peli !== null){
        document.querySelector("#pResultadoEj8Pr5").innerHTML += `
        Nombre: ${peli.nombre}<br>
        Anio: ${peli.anio}<br>
        Genero: ${genero.nombre}<br>
        Apta para: ${genero.edad}<br>
        <img src="img/${peli.nombreFoto}" width="100">
        `
    }else{
        document.querySelector("#pResultadoEj8Pr5").innerHTML = "No hay resultadis";
    }
}
/*  Fin Ejercicio 8  */