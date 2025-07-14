namespace Ejercicio_3
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int numero1;
            int numero2;
            do
            {
                Console.Write("Porfavor, Introduzca el numero 1: ");
                numero1 = int.Parse(Console.ReadLine());
                Console.Write("Porfavor, Introduzca el numero 2: ");
                numero2 = int.Parse(Console.ReadLine());
                if (numero1 == 0)
                {
                    Console.WriteLine("Ingresaste 0, fin del programa");
                    break;
                }
                if(numero1 < numero2)
                {

                    for (int i = numero1; i <= numero2; i++)
                    {
                        if(i % 2 == 0)
                        {
                            Console.WriteLine($"{i}");
                        }
                    }
                }
                else
                {
                    Console.WriteLine("Numero 1 no es menor a Numero 2");
                }
            } while (numero1 != 0);
        }
    }
}
