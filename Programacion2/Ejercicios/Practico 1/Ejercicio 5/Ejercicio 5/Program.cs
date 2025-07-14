namespace Ejercicio_5
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int numero;
            int numeroAcumulado = 0 ;
            do
            {
                Console.WriteLine("Si desea cancelar ingrese 0, sino; otro numero");
                numero = int.Parse(Console.ReadLine());
                

                if (numero == 0)
                {
                    Console.WriteLine("fin del programa, ingreso 0");
                    Console.WriteLine($"El valor final es {numeroAcumulado}");
                    break;
                }

                Console.WriteLine("Ingrese un valor: ");
                int nuevoNumero = int.Parse(Console.ReadLine());
                numeroAcumulado += nuevoNumero;

                Console.WriteLine($"el valor acumulado es {numeroAcumulado}");
                numero += nuevoNumero;

            } while (numero != 0);
        }
    }
}
