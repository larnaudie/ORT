using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Consola
{
    static internal class Utils
    {
        static int LeerNumeroDeArray(string prompt, int[] numeros)
        {
            int opcion;
            while (true)
            {
                Console.Write($"{prompt}:");
                if (int.TryParse(Console.ReadLine(), out opcion) && Array.IndexOf(numeros, opcion) != -1)
                {
                    return opcion;
                }
                MensajeError("Valor incorrecto.");
            }
        }
        public static int LeerNumeroEnRango(string prompt, int min, int max)
        {
            int opcion;
            while (true)
            {
                Console.Write($"{prompt}:");
                if (int.TryParse(Console.ReadLine(), out opcion) && opcion >= min && opcion <= max)
                {
                    return opcion;
                }
                MensajeError("Valor incorrecto.");
            }
        }
        public static int LeerEnum(string prompt, Type enumType)
        {
            Console.WriteLine($"{prompt}.");
            int i = 0;
            int[] codigos = (int[])Enum.GetValues(enumType);
            foreach (string itemEnum in Enum.GetNames(enumType))
            {
                Console.WriteLine($"({codigos[i]}) {itemEnum}");
                i++;
            }
            int seleccion = LeerNumeroDeArray(prompt, codigos);
            return seleccion;
        }
        public static int LeerNumero(string prompt)
        {
            int opcion;
            Console.Write($"{prompt}:");
            while (!(int.TryParse(Console.ReadLine(), out opcion)))
            {
                Console.WriteLine("El valor ingresado no es correcto");
                Console.Write($"{prompt}:");
            }
            return opcion;
        }
        public static decimal LeerDecimal(string prompt)
        {
            decimal opcion;
            Console.Write($"{prompt}:");
            while (!(decimal.TryParse(Console.ReadLine(), out opcion)))
            {
                Console.WriteLine("El valor ingresado no es correcto");
                Console.Write($"{prompt}:");
            }
            return opcion;
        }
        public static DateTime LeerFecha(string prompt)
        {
            DateTime opcion;
            Console.Write($"{prompt}:");
            while (!(DateTime.TryParse(Console.ReadLine(), out opcion)))
            {
                Console.WriteLine("La fecha ingresada no es correcta.");
                Console.Write($"{prompt}:");
            }
            return opcion;
        }
        public static string? PedirTexto(string prompt = "Ingrese dato")
        {
            bool exito;
            string? valor;
            do
            {
                Console.Write($"{prompt}:");
                valor = Console.ReadLine();
                if (string.IsNullOrEmpty(valor))
                {
                    MensajeError("No se ha ingresado nada");
                    exito = false;
                }
                else
                {
                    exito = true;
                }

            } while (!exito);
            return valor;
        }
        public static void MensajeError(string mensaje)
        {
            Console.BackgroundColor = ConsoleColor.Red;
            Console.WriteLine($"---Error----> {mensaje} -- Enter para seguir.");
            Console.BackgroundColor = ConsoleColor.Black;
            Console.ReadLine();
        }
        public static void MensajeConfirmacion(string mensaje)
        {
            Console.BackgroundColor = ConsoleColor.Green;
            Console.ForegroundColor = ConsoleColor.Black;
            Console.WriteLine($"---Confirmado----> {mensaje} -- Enter para seguir.");
            Console.BackgroundColor = ConsoleColor.Black;
            Console.ForegroundColor = ConsoleColor.White;
            Console.ReadLine();
        }
    }
}
