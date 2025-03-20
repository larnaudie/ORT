namespace Ejercicio_8
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ingresa una palabra: ");
            string palabra = Console.ReadLine();
            string palabraMinuscula = palabra.ToLower();
            string palabraInvertida = "";

            //Si coloco palabraMinuscula.Length sin el -1 caigo afuera de la palabra en la posicion final
            for (int i = palabraMinuscula.Length - 1; i >= 0; i--)
            {
                palabraInvertida += palabraMinuscula[i];
            }

            if (palabraMinuscula == palabraInvertida)
            {
                Console.WriteLine($"La palabra '{palabra}' es un palíndromo.");
            }
            else
            {
                Console.WriteLine($"La palabra '{palabra}' no es un palíndromo.");
            }
        }
    }
}
