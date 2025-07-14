namespace Consola
{
    using Dominio;
    using System;
    using System.Linq.Expressions;

    internal class Program
    {
        static Empleado empleadoUno = new Empleado("Juan", "Perez", new DateTime(1995, 06, 13), 450, 6, 45);

        static void Main(string[] args)
        {
            Opciones();
        }
        static void Menu()
        {
            Console.WriteLine("Menu principal. Cero para salir");
            string[] titulos = { "Caluclar Salario", "Calcular Licencia"};

            int opcion = 1;
            foreach (string titulo in titulos)
            {
                Console.WriteLine($"{opcion} - {titulo}");
                opcion++;
            }
        }

        static void Opciones()
        {
            int valor = -1;
            while (valor != 0)
            {
                Console.Clear();
                Menu();
                valor = Utils.LeerNumero("Ingrese opcion:");
                switch (valor)
                {
                    case 1:
                        CalcularSalario();
                        break;
                    case 2:
                        CalcularLicencia();
                        break;
                    default:
                        break;
                }
            }
        }


        static void CalcularSalario()
        {
            Decimal valorHora = Utils.LeerDecimal("Ingrese valor de hora: ");
            int horasTrabajadas = Utils.LeerNumero("Ingrese horas trabajadas: ");
            try
            {
                decimal salarioTotal = empleadoUno.CalcularSalario(valorHora, horasTrabajadas);
                Console.WriteLine($"Su Salario es: {salarioTotal}");
            }
            catch (Exception ex)
            {
                Utils.MensajeError(ex.Message);
            }
            Console.WriteLine("Enter para seguir");
            Console.ReadLine();
        }


        static void CalcularLicencia()
        {
            
            int antiguedad = Utils.LeerNumero("Ingrese su antiguedad");
            try
            {
                int diasLicencia = empleadoUno.CalcularLicencia(antiguedad);
                Console.WriteLine($"Para esa {antiguedad} antiguedad, diposne de: {diasLicencia} dias de licencia");
            }
            catch (Exception ex)
            {
                Utils.MensajeError(ex.Message);
            }
            Console.WriteLine("Enter para seguir");
            Console.ReadLine();
        }

    }
}
