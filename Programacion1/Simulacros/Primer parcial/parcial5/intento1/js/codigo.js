window.addEventListener("load", inicio);
function inicio(){
    document.querySelector("#btnEj1").addEventListener("click", parteB)
}

let totalOso=0;
function parteB(){
    let banda = document.querySelector("#txtBanda").value;
    let musicos = Number(document.querySelector("#txtMusicos").value);
    let horasEnsayo = Number(document.querySelector("#txtEnsayos").value);
    let sala = document.querySelector("#selectSala").value;
    let mensaje = "";
    let tiene2O = 0;
    let alquiler = horasEnsayo * 380;

    if(banda.length >= 2 && banda !== ""){
        if(horasEnsayo >0 && horasEnsayo < 12){
            for(let i = 0; i < banda.length ; i++){
                let caracter= banda.charAt(i);
                if(caracter==="o"){
                    tiene2O++;
                }
            }
            if(tiene2O >= 2){
                alquiler = alquiler * 0.45
            }else if(banda.indexOf("Panda") !== -1 || banda.indexOf("panda") !== -1){
                alquiler = alquiler*0.35;
            }else if(horasEnsayo > 3){
                alquiler = alquiler * 0.20;
            }

            if(sala==="Pardo"){
                alquiler = alquiler - 200;
            }
            totalOso = totalOso + alquiler;
            mensaje = `${banda} su alquiler es:${alquiler} por ${horasEnsayo}<br>`;
        }else{
            mensaje = `Verifique las horas de ensayo, debe ser mayor a 0 y menor a 12<br>`;
        }
    }else{
        mensaje = `Verifique que la banda no este vacio o sea un largo mayor a 2<br>`;
    }
    document.querySelector("#pResultado1").innerHTML += mensaje;
    document.querySelector("#pResultado2").innerHTML = `Oso Music va recaudando: ${totalOso}`;
}