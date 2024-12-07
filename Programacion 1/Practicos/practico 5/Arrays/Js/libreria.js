function obtenerNumeroMayor(listaNumeros) {
    let masGrande = 0

    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] > masGrande) {
            masGrande = listaNumeros[i]
        }
    }
    return masGrande;
}

function arrayPalabras(listaDePalabra){
    let muchasPalabras ="";
    for(let i = 0; i< listaDePalabra.length; i++){
        muchasPalabras += `${listaDePalabra[i]} `
    }
    return muchasPalabras
}


function promedioEj3(numeros){
    let acumulados = 0;
    console.log(numeros, acumulados)
    for(let i = 0; i<numeros.length; i++){
        if(!isNaN(numeros[i])){
            acumulados += numeros[i];
        }
    }
    console.log(acumulados)
    acumulados = acumulados / numeros.length;
    console.log( acumulados / numeros.length)
    return acumulados
}

function agregarElemento(nombre, lista){
    lista.push(nombre);
}

function agregarYVerificarElemento(nombre, lista, querySelector) {
    let posicion = lista.indexOf(nombre);
    if (posicion >= 0) {
        mensajeError("#pResultadoEj4Pr5","El nombre ya existe" );
    }
    else {
        agregarElemento(nombre, lista);
        mostrarArrayEnLista(lista,querySelector);
    }
}

function mensajeError(querySelector, mensaje){
    document.querySelector(querySelector).innerHTML = `${mensaje}`;
}

function mostrarArrayEnLista(lista, querySelector) {
    document.querySelector(querySelector).innerHTML = "";
    for ( let i = 0; i < lista.length; i ++){
        const actual = lista[i];
        document.querySelector(querySelector).innerHTML += `${actual}<br>`;
    }
}

function mostrarArray(lista, querySelector) {
    document.querySelector(querySelector).innerHTML = `${lista}`;
}

function fibronacciFormula(posiciones, pos1, pos2, nuevaPos, listaArray, querySelector) {
    for (let i = 2; i < posiciones; i++) {
        if (pos1 === 1 && pos2 === 1) {
            nuevaPos = 2;
            agregarElemento(nuevaPos, listaArray)
            pos2 = pos1;
            pos1 = nuevaPos;
            mostrarArray(listaArray, querySelector)
        }
        else {
            nuevaPos = pos1 + pos2;
            agregarElemento(nuevaPos, listaArray)
            pos2 = pos1;
            pos1 = nuevaPos;
            mostrarArray(listaArray, querySelector)
        }
    }
}

function eliminarDatos(posicionElemento, lista){
    //splice espera 2 parametros, posicion que va a arrancar la eliminacion y la cantidad de elementos a eleiminar.
    lista.splice(posicionElemento, 1)
}