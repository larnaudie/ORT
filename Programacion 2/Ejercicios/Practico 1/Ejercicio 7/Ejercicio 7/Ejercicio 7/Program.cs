namespace Ejercicio_7
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ingrese una palabra: ");
            string palabra = Console.ReadLine();
            string palabraMinuscula = palabra.ToLower();
            int cantidadCaracteres = palabra.Length;
            string palabraInvertida = "";

            for (int i = cantidadCaracteres -1; i >= 0; i--)
            {
                palabraInvertida += palabra[i];
            }
            Console.WriteLine($" La palabra queda {palabraInvertida}");
        }
    }
}
