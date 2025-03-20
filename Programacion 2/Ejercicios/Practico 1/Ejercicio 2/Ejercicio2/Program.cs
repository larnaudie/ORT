namespace Ejercicio2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int numeroInicial;
            do
            {
                Console.Write("Ingresa un Numero: ");
                numeroInicial = int.Parse(Console.ReadLine());

                if (numeroInicial == 0)
                {
                    Console.WriteLine("Has ingresado 0, fin del programa");
                    break;
                }

                if (numeroInicial != 0)
                {
                    for (int i = 1; i < 10; i++)
                    {
                        int resultadoNumero = numeroInicial * i;
                        Console.WriteLine($"{numeroInicial} * {i}={resultadoNumero}");
                    }
                }
            }
            while (numeroInicial != 0);
        }
    }

}