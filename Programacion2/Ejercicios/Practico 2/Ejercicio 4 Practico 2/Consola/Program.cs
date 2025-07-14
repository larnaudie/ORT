namespace Consola
{
    using Dominio;
    using System;
    using System.Linq.Expressions;

    internal class Program
    {
        //cuando tenemos un enum, debemos seleccionarlo desde la clase.
        //cuando tenemos un decimal, debemos colcar una m al final.
        static Cuenta cuentaPablo = new Cuenta("Pablo", 1000M, Cuenta.TIPOCUENTA.CAJAAHORRO, Cuenta.TIPOMONEDA.UYU, 1234567);
        static Cuenta cuentaPablo2 = new Cuenta("Pablo", 500M, Cuenta.TIPOCUENTA.CAJAAHORRO, Cuenta.TIPOMONEDA.USD, 1234567);
        static void Main(string[] args)
        {
            Opciones();
        }
        static void Menu()
        {
            Console.WriteLine("Menu principal. Cero para salir");
            string[] titulos = { "Depositar", "Retirar" };

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
            //Aca creamos la variable tipoMoneda que adquiere el valor UYU disponible dentro de las opciones de Cuenta TIPOMONEDA
            Cuenta.TIPOMONEDA tipoMoneda = Cuenta.TIPOMONEDA.UYU;
            decimal importe = Utils.LeerDecimal("Ingrese el importe a depositar: ");

            tipoMoneda = (Cuenta.TIPOMONEDA)Utils.LeerEnum("Ingrese tipo de moneda", tipoMoneda.GetType());
            try
            {
                //Debo colocar la palabra static en la linea 11.
                //cuentaPablo2.Depositar(tipoMoneda, importe);
                cuentaPablo.Depositar(tipoMoneda, importe);
                Console.WriteLine($"Se ha depositado {tipoMoneda}{importe} correctamente, dispone: {cuentaPablo.SaldoActual}");
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

            Cuenta.TIPOMONEDA moneda = Cuenta.TIPOMONEDA.UYU;
            decimal importe = Utils.LeerDecimal("Ingrese el importe a retirar: ");

            moneda = (Cuenta.TIPOMONEDA)Utils.LeerEnum("Ingrese tipo de moneda", moneda.GetType());
            try
            {
                //Debo colocar la palabra static en la linea 11.
                //cuentaPablo2.Retirar(importe, moneda);
                cuentaPablo.Retirar(importe, moneda);
                Console.WriteLine($"Se ha retirado {moneda}{importe} correctamente, dispone: {cuentaPablo.SaldoActual}");
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
