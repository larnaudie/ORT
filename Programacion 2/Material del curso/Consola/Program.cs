namespace Consola
{
    using Dominio;
    using System;
    using System.Linq.Expressions;

    internal class Program
    {
        static Cuenta unaCta = new Cuenta(1000.00M, Cuenta.TIPOCUENTA.CAJADEAHORRO, Cuenta.MONEDA.USD, 1238982);
        static Cliente unCliente = new Cliente("546845", "Adriana", unaCta);
        static void Main(string[] args)
        {
            Opciones();
        }
        static void Menu()
        {
            Console.WriteLine("Menu principal. Cero para salir");
            string[] titulos = { "Depositar", "Retirar"};

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
                        Depositar();
                        break;
                    case 2:
                        Retirar();
                        break;
                    default:
                        break;
                }
            }
        }


        static void Retirar()
        {
            Decimal importe = Utils.LeerDecimal("Ingrese el valor a retirar");
            try
            {
                unaCta.Retirar(importe);
                Console.WriteLine($"Retiro realizado con éxito. Nuevo saldo es {unaCta.SaldoActual}");
            }
            catch (Exception ex)
            {
                Utils.MensajeError(ex.Message);
            }
            Console.WriteLine("Enter para seguir");
            Console.ReadLine();
        }
        static void Depositar()
        {
            Cuenta.MONEDA unaMDA = Cuenta.MONEDA.UYU;
            unaMDA = (Cuenta.MONEDA)Utils.LeerEnum("Ingrese Moneda", unaMDA.GetType());
            Decimal importe = Utils.LeerDecimal("Ingrese el valor a depositar");
            try
            {
                unaCta.Depositar(importe, unaMDA);
                Console.WriteLine($"Deposito realizado con éxito. Nuevo saldo es {unaCta.SaldoActual}");
            }
            catch (Exception ex)
            {
                Utils.MensajeError(ex.Message);
            }
            Console.WriteLine("Enter para seguir");
            Console.ReadLine();
        }
        static void Punto2()
        {
            Console.WriteLine("Punto 2");
            Console.WriteLine("Enter para seguir");
            Console.ReadLine();
        }
        static void Punto3()
        {
            Console.WriteLine("Punto 3");
            Console.WriteLine("Enter para seguir");
            Console.ReadLine();
        }
    }
}
