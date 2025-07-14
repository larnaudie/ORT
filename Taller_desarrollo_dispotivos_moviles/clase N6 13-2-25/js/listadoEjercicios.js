let usuario= 1859    /// en su obli sale de localStorage.getItem("usuario")
let apikey="36e360fbfd68ebd84cf181ed478dae26" 
let listaA 


obtenerActividades()

function obtenerActividades(){

    fetch (`https://movetrack.develotion.com/actividades.php`,{
        method:'GET',
        headers:{
        'Content-Type': 'application/json',
        'apikey': apikey,
        'iduser': usuario
        }
        })
        .then(function (response){
        console.log(response)
        return response.json()
        })
        .then(function(respuesta){
        console.log(respuesta)
        listaA=respuesta.actividades
         
         })
        .catch(function(error){
        console.log(error)
        })
}

previaListado()


function previaListado(){
    let url="https://movetrack.develotion.com/registros.php?idUsuario="+usuario
    fetch (`${url} `,{
        method:'GET',
        headers:{
        'Content-Type': 'application/json',
        'apikey': apikey,
        'iduser': usuario,
        }
        })
        .then(function (response){
       
        return response.json()
        })
        .then(function(informacion){
          console.log(informacion)
          mostrarListado(informacion.registros)
        })
        .catch(function(error){
        console.log(error)
        })
}

function mostrarListado(listaRegistros){

    let misRegistros=""
    for (let unRegistro of listaRegistros){
        misRegistros+=`
        <ion-item>
                <ion-img src="${obtenerUrlImagenActividad(unRegistro.idActividad)}"></ion-img>
                <ion-label>
                    <h3>Id: ${unRegistro.id}</h2>
                    <h3>Actividad: ${obtenerNombreActividad(unRegistro.idActividad)}</h3>
                    <p>Tiempo: ${unRegistro.tiempo}</p>
                    <p>Fecha: ${unRegistro.fecha}</p>
                   
                </ion-label>
                <ion-button onclick="eliminarPedido(${unRegistro.id})">Eliminar</ion-button>
        </ion-item>
       `
    }
    document.querySelector("#contenedorListado").innerHTML=misRegistros
}

function eliminarPedido(idRegistro){
    let url="https://movetrack.develotion.com/registros.php?idRegistro="+idRegistro
    fetch(`${url}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        "apikey": apikey,
        "iduser": usuario
        },
        
        })
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            alert ("Registro eliminado")
            previaListado()
        }
        )
        .catch(function(error){
        console.log(error)
        })





}

function obtenerNombreActividad(idActividad){

    for (let unaActividad of listaA){
        if (unaActividad.id==idActividad) return unaActividad.nombre
    }

}

function obtenerUrlImagenActividad(idActividad){
    for (let unaActividad of listaA){
        if (unaActividad.id==idActividad) return url="https://movetrack.develotion.com/imgs/"+unaActividad.imagen+".png"
    }
}