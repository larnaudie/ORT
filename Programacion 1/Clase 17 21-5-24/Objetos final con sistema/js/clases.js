class Heroe {
    constructor(unNombre, unPoder, unaEdad, esActivo){
      this.nombre = unNombre;
      this.poder = unPoder;
      this.edad = unaEdad;
      this.estaActivo = esActivo;  
    }
  
    saludar(){
      console.log(`Hola soy ${this.nombre} y mi poder es ${this.poder}`);
    }
  
    cambiarPoder(nuevoPoder){
      this.poder = nuevoPoder;
    }
  
    pelear(){
      let pelea = "super poderes de verdad";
      if(this.poder === "Detective" || this.poder === "Armadura"){
        pelea = "Billetitos";
      }
      return pelea;
    }
  
    obtenerEstaActivo(){
      let heroeActivo = "";
      if(this.estaActivo === true){
        heroeActivo = "Vive y lucha";
      }else{
        heroeActivo = "Marcho o lo marcharon";
      }
      return heroeActivo;
    }
  
  }


  