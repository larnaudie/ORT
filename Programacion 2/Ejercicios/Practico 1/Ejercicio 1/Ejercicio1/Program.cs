namespace Ejercicio1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Random random = new Random();
            int randomNumber = random.Next(1, 10); // Genera un número aleatorio entre 1 y 100
            int inputNumber;

            Console.WriteLine("Adivina el número (entre 1 y 10). Ingresa 0 para terminar.");

            do
            {
                Console.Write("Ingresa un número: ");
                inputNumber = int.Parse(Console.ReadLine());

                if (inputNumber == 0)
                {
                    Console.WriteLine("Fin del ingreso.");
                    break;
                }

                if (inputNumber == randomNumber)
                {
                    Console.WriteLine("¡Correcto! El número es " + randomNumber);
                    break;
                }
                else if(inputNumber > randomNumber)
                {
                    Console.WriteLine("Incorrecto, el numero es mas chico");
                }
                else if(inputNumber < randomNumber)
                {
                    Console.WriteLine("Incorrecto, el numero es mas grande");
                }

            } while (inputNumber != 0);

            Console.WriteLine("Gracias por jugar.");
        }
    }
}
