class Sistema {
  constructor(){
    this.heroes = [
      new Heroe("Peter Parker", "Pode Arana", 18, true),
      new Heroe("Bruce Wayne", "Artes Marciales", 30, false),
      new Heroe("Tony Stark", "Armadura", 32, false),
    ];

    this.villanos = []
  }

  agregarHeroe(heroe){
    this.heroes.push(heroe);
  }
  
  tirarDado() {
      let numeroAleatorio = Math.ceil(Math.random() * 6);
      return numeroAleatorio;
  }
  sumarValores(a, b) {
      let suma = a + b;
      return suma;
  }

  restarValores(a, b) {
      let resta = a - b;
      return resta;
  }

  dividirValores(a, b) {
      let dividir = a / b;
      return dividir;
  }

  multiplicarValores(a, b) {
      let mul = a * b;
      return mul;
  }

  calcularAreaCuadrado(ladoCuadrado) {
      let calculoArea = ladoCuadrado * ladoCuadrado;
      return calculoArea;
    }

    calcularPotencia(base, exponente) {
      let resultadoPotencia = base; 
    
      if(exponente > 0){
        for(let i = 2; i <= exponente; i++){
          resultadoPotencia = resultadoPotencia * base;
        }
      }else if(exponente === 0){
        resultadoPotencia = 1;
      }else{
        exponente = exponente * -1;
        for(let i = 2; i <= exponente; i++){
          resultadoPotencia = resultadoPotencia * base;
        }
        resultadoPotencia = 1/resultadoPotencia;
      }
      return resultadoPotencia;
    }

    agregarDatosSinRepetir(dato, lista) {
      let aparecio = false;
    
      for (let i = 0; i < lista.length; i++) {
        if(lista[i] === dato){
          aparecio = true;
          break;
        }
      }
      if(!aparecio){
        lista.push(dato);
      }
    }
}










