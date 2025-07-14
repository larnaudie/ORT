//"2025-02-01"
obtenerFechaHoy()
function obtenerFechaHoy(){
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = ('0' + (hoy.getMonth() + 1)).slice(-2);
    const dia = ('0' + hoy.getDate()).slice(-2);

    
    let fecha= año+"-"+mes+"-"+dia
    alert(fecha)
    

   
    
