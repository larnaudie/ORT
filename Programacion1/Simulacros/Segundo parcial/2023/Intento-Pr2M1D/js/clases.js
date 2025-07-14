class Menu{
    constructor(pNumero, pNombre, pDescripcion, pPrecioPorPersona){
        this.numero = pNumero;
        this.nombre = pNombre;
        this.descripcion = pDescripcion;
        this.precioPorPersona = pPrecioPorPersona;
    }
}

class Fiesta {
    constructor(idFiesta, unaFecha, unaCI, unTipoFiesta, cantInvitados, tipoMenu){
        this.id=idFiesta;
        this.fecha=unaFecha;
        this.cadula = unaCI;
        this.tipoFiesta = unTipoFiesta;
        this.invitados = cantInvitados; 
        this.tipoMenu = tipoMenu;
    }
}