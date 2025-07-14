namespace Consola
{
    using Dominio;
    using System;
    using System.Linq.Expressions;

    internal class Program
    {
        static Auto autoUno = new Auto(marcaUno, "A405", 2004, Auto.TIPO.NO_USADO, "ABC 123", new DateTime(2024,2,24));
        static Marca marcaUno = new Marca("BMW","Alemania");
        static void Main(string[] args)
        {
            Opciones();
        }
        static void Menu()
        {
            Console.WriteLine("Menu principal. Cero para salir");
            string[] titulos = { "Solicitar proximo servicio"};

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
                        ProximoServicio();
                        break;
                    default:
                        break;
                }
            }
        }


        static void ProximoServicio()
        {
            Auto.TIPO tipo = Auto.TIPO.NO_USADO;
            tipo = (Auto.TIPO)Utils.LeerEnum("Seleccione si es usado o no: ", tipo.GetType());
            DateTime ultimaFecha = Utils.LeerFecha("Ingrese ultimo año del servicio ");
            try
            {
                DateTime proximoServicio = autoUno.ProximoServicio(ultimaFecha);
                Console.WriteLine($"Su proximo sevicio es: {proximoServicio}");
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
