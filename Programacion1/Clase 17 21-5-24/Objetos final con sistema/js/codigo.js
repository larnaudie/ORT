window.addEventListener("load", inicio);

function inicio() {
  document.querySelector("#btnRegistrar").addEventListener("click", registrarHeroe);
  listarHeroes();
}

let sistema = new Sistema();

function registrarHeroe() {
  let nombreCampo = document.querySelector("#txtNombre").value;
  let poderCampo = document.querySelector("#txtPoder").value;
  let edadCampo = Number(document.querySelector("#txtEdad").value);
  let estaActivoCampo = document.querySelector("#slcActivo").value;

  let estaActivoIngresar = false;

  if(estaActivoCampo === "s"){
    estaActivoIngresar = true;
  }
  
  let nuevoHeroe = new Heroe(nombreCampo, poderCampo, edadCampo, estaActivoIngresar);
  sistema.agregarHeroe(nuevoHeroe);
  listarHeroes();
}

function listarHeroes() {
  document.querySelector("#tblHeroes").innerHTML = "";
  for (let i = 0; i < sistema.heroes.length; i++) {
    const unHeroe = sistema.heroes[i];
    document.querySelector("#tblHeroes").innerHTML += `<tr>
      <td>${unHeroe.nombre}</td>
      <td>${unHeroe.edad}</td>
      <td>${unHeroe.poder}</td>
      <td>${unHeroe.obtenerEstaActivo()}</td>
    </tr>`;
  }
}

