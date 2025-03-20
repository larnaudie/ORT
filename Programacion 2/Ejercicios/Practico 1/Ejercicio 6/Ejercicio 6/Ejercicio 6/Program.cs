namespace Ejercicio_6
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ingrese una palabra: ");
            string palabra = Console.ReadLine();
            int cantidadCaracteres = palabra.Length;
            int contadorVocales = 0;

            for (int i = 0; i < cantidadCaracteres; i++)
            {   
                palabra.ToLower();
                if (palabra[i] == 'a' || palabra[i] == 'e' || palabra[i] == 'i' || palabra[i] == 'o' || palabra[i] == 'u')
                {
                    contadorVocales++;
                }
            }
            Console.WriteLine($"Su palabra tiene {contadorVocales} vocales");
  
        }
    }
}
