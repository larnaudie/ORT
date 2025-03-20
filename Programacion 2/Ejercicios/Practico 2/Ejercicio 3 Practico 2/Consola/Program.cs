namespace Consola
{
    using Dominio;
    using System;
    using System.Drawing;
    using System.Linq.Expressions;

    internal class Program
    {
        static CitaMedica citaUno = new CitaMedica(1, new DateTime(2024,11,15), "54535094", "Montevideo", true);
        static CitaMedica citaDos = new CitaMedica(2, new DateTime(2024,10,11), "6532485", "Canelones", false);

        static void Main(string[] args)
        {
            Opciones();
        }
        static void Menu()
        {
            Console.WriteLine("Menu principal. Cero para salir");
            string[] titulos = { "Caluclar Precio Cita Medica"};

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
                        CalcularCosto();
                        break;
                    default:
                        break;
                }
            }
        }

        static void CalcularCosto()
        {
            Console.WriteLine("Es urgente su cita?");
            Console.WriteLine("Ingrese 1 si es Urgente o 2 si no lo es: ");
            int valor = Utils.LeerNumero("Ingrese opcion:");
            bool esUrgente = citaUno.Urgente;

            if (valor < 1 || valor > 2)
            {
                Console.WriteLine("Error, eligó una opcion incorrecta");
            }
            else if (valor == 1)
            {
                esUrgente = true;
            }
            else if (valor == 2)
            {
                esUrgente = false;
            }

            try
            {
                decimal precioCita = citaUno.CalcularCosto(esUrgente, citaUno.PrecioBase);
                Console.WriteLine($"Su precio de la cita es: {precioCita}");
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
