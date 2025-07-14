namespace Dominio
{
    public class CitaMedica
    {
        int id;
        DateTime fecha;
        string cedula;
        string lugar;
        decimal precioBase = 1000;
        bool urgente;

        public CitaMedica(int id, DateTime fecha, string cedula, string lugar, bool urgente)
        {
            this.id = id;
            this.fecha = fecha;
            this.cedula = cedula;
            this.lugar = lugar;
            this.urgente = urgente;
        }

        public int Id { get => id; set => id = value; }
        public DateTime Fecha { get => fecha; set => fecha = value; }
        public string Cedula { get => cedula; set => cedula = value; }
        public string Lugar { get => lugar; set => lugar = value; }
        public decimal PrecioBase { get => precioBase; }
        public bool Urgente { get => urgente; set => urgente = value; }

        public decimal CalcularCosto(bool urgente, decimal precioBase)
        {
            decimal precioFinal = precioBase;
            if (urgente != true && urgente != false)
            {
                throw new Exception("No se indico si es urgente o no");
            }
            else if (!urgente)
            {
                precioFinal = precioBase;
            }
            else if (urgente)
            {
                precioFinal = precioBase * 2;
            }
            return precioFinal;
        }
    }
}
