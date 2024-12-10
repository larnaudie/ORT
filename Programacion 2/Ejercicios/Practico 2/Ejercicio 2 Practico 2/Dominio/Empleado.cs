namespace Dominio
{
    public class Empleado
    {
        string nombre;
        string apellido;
        DateTime fechaNacimiento;
        decimal valorHora;
        int antiguedad;
        int horasTrabajadas;

        public string Nombre { get => nombre; set => nombre = value; }
        public string Apellido { get => apellido; set => apellido = value; }
        public DateTime FechaNacimiento { get => fechaNacimiento; set => fechaNacimiento = value; }
        public decimal ValorHora { get => valorHora; set => valorHora = value; }
        public int Antiguedad { get => antiguedad; set => antiguedad = value; }
        public int HorasTrabajadas { get => horasTrabajadas; set => horasTrabajadas = value; }

        public Empleado(string nombre, string apellido, DateTime fechaNacimiento, decimal valorHora, int antiguedad, int horasTrabajadas)
        {
            this.Nombre = nombre;
            this.Apellido = apellido;
            this.FechaNacimiento = fechaNacimiento;
            this.ValorHora = valorHora;
            this.Antiguedad = antiguedad;
            this.HorasTrabajadas = horasTrabajadas;
        }
        
        public void Validar()
        {
            CalcularSalario(valorHora, horasTrabajadas);
            CalcularLicencia(antiguedad);
        }

        public decimal CalcularSalario(decimal valorHora, int horasTrabajadas)
        {
            if(valorHora is string || horasTrabajadas is string)
            {
                throw new Exception($"el valor ingresaso no es valido");
            }

            decimal salario = valorHora * horasTrabajadas;
            return salario;
        }

        public int CalcularLicencia(int antiguedad)
        {
            int diasLicencia = 0;

            if (antiguedad is string)
            {
                throw new Exception("Ingreso un string");
            }
            if (antiguedad < 5)
            {
                diasLicencia = 20;
            }
            if (antiguedad >= 5 && antiguedad <= 9)
            {
                diasLicencia =  21;
            }
            if (antiguedad >= 10)
            {
                diasLicencia = 25;
            }
            return diasLicencia;
        }
    }

}
