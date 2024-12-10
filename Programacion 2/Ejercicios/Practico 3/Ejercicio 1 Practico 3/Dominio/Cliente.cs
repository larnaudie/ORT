namespace Dominio
{
    public class Cliente
    {
        string cedula;
        string nombreCompleto;
        Cuenta cuenta;


        public string Cedula { get => cedula; set => cedula = value; }
        public string NombreCompleto { get => nombreCompleto; set => nombreCompleto = value; }
        internal Cuenta Cuenta { get => cuenta; set => cuenta = value; }

        public Cliente(string cedula, string nombreCompleto, Cuenta cuenta)
        {
            this.cedula = cedula;
            this.nombreCompleto = nombreCompleto;
            this.cuenta = cuenta;
        }
    }
}
