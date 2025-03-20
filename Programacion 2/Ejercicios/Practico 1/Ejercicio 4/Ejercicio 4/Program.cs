namespace Ejercicio_4
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int numero1;
            int numero2;
            int numero3;
            do
            {
                Console.WriteLine("Introduzca numero 1: ");
                numero1 = int.Parse(Console.ReadLine());
                Console.WriteLine("Introduzca numero 2: ");
                numero2 = int.Parse(Console.ReadLine());
                Console.WriteLine("Introduzca un valor: ");
                numero3 = int.Parse(Console.ReadLine());
                if (numero1 == 0 || numero2 == 0 || numero3 == 0)
                {
                    Console.WriteLine("Ingreso el 0, fin del programa");
                        break;
                }
                if(numero3 < numero2 && numero3 > numero1)
                {
                    Console.WriteLine($"El valor ingresado {numero3} este comprendido entre {numero1} y {numero2}");
                }
                else
                {
                    Console.WriteLine($"El valor {numero3} no se comprende  entre {numero1} y {numero2}");
                }
            }
            while (true);
        }
    }
}
