namespace Dominio
{
    public class Socio
    {
        string nombre;
        string apellido;
        DateTime fechaNacimiento;
        List<Deporte> deporte = new List<Deporte>();

        public Socio(string nombre, string apellido, DateTime fechaNacimiento)
        {
            this.nombre = nombre;
            this.apellido = apellido;
            this.fechaNacimiento = fechaNacimiento;
        }

        public string Nombre { get { return nombre; } set { nombre = value; } }
        public string Apellido { get { return apellido; } set { apellido = value; } }

        public DateTime FechaNacimiento { get { return fechaNacimiento; } set { fechaNacimiento = value; } }

        public bool CalcularEdad(DateTime fechaNacimiento)
        {
            int edad = fechaNacimiento.Year - DateTime.Now.Year;
            if (edad < 18)
            {
                throw new Exception("Es menor de edad");
            }
            else
            {
               return true;
            }
        }

        public void AgregarDeporte(string deporteNuevo)
        {
            if(this.deporte.Count > 2)
            {
                throw new Exception("Alcanzó el limite de deportes");
            }
            else
            {
                deporte.Add(deporteNuevo);
            }
        }
    }
}
