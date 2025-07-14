namespace Dominio
{

    //DEFINIMOS LA CLASE CON SUS ATRIBUTOS
    public class Oferta
    {
        int id;
        static int ultimoId;
        Cliente cliente;
        int monto;
        DateTime fechaOferta;

        //DEFINIMOS SUS PROPIEDADES 
        public int Id { get => id; set => id = value; }
        public Cliente Cliente { get => cliente; set => cliente = value; }
        public int Monto { get => monto; set => monto = value; }
        public DateTime FechaOferta { get => fechaOferta; set => fechaOferta = value; }

        public Oferta () { }

        //DEFINIMOS SU CONSTRUCTOR
        public Oferta(Cliente cliente, int monto, DateTime fechaOferta)
        {
            this.id = ++ultimoId;
            this.cliente = cliente;
            this.monto = monto;
            this.fechaOferta = fechaOferta;
        }
    }
}
