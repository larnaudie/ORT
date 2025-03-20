namespace Consola
{
    using Dominio;
    using System;
    using System.Linq.Expressions;

    internal class Program
    {
        static Cuenta cuentaUno = new Cuenta(1000M, Cuenta.MONEDA.UYU, 5468798);
        static Cliente clienteUno = new Cliente("48956877", "Pedro Alvarez", cuentaUno);
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


        static void Depositar()
        {
            Cuenta.MONEDA nuevaMoneda = Cuenta.MONEDA.UYU;
            nuevaMoneda = (Cuenta.MONEDA)Utils.LeerEnum("Ingrese tipo de Moneda: ", nuevaMoneda.GetType());
            decimal depositeMonto = Utils.LeerDecimal("Ingrese monto a depositar: ");
            try
            {
                decimal salarioTotal = cuentaUno.Depositar(depositeMonto, nuevaMoneda);
                Console.WriteLine($"Su Salario es: {salarioTotal}");
            }
            catch (Exception ex)
            {
                Utils.MensajeError(ex.Message);
            }
            Console.WriteLine("Enter para seguir");
            Console.ReadLine();
        }


        static void Retirar()
        {
            Cuenta.MONEDA nuevaMoneda = Cuenta.MONEDA.UYU;
            Console.WriteLine($"Automaticamente; {nuevaMoneda}");
            nuevaMoneda = (Cuenta.MONEDA)Utils.LeerEnum("Ingrese tipo de Moneda: ", nuevaMoneda.GetType());
            Console.WriteLine($"Ingresó; {nuevaMoneda}");
            Decimal depositeMonto = Utils.LeerDecimal("Ingrese monto a depositar: ");
            try
            {
                decimal salarioRestante = cuentaUno.Retirar(depositeMonto, nuevaMoneda);
                Console.WriteLine($"Se ha retirado {nuevaMoneda} {depositeMonto}, le queda; {cuentaUno.SaldoActual}");
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
