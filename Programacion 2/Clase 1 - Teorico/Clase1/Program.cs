namespace Practicos
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Ingrese su precio:");
            string? precio = Console.ReadLine();
            int precioReal;
            bool conversionExitosa = int.TryParse(precio, out precioReal);

            //if( int.TryParse (precio, out precioReal))
            //{
            //    Console.WriteLine (precioReal);
            //}
            //else
            //{
            //    Console.WriteLine("Esta mal escrito");
            //}

            if (conversionExitosa)
            {
                Console.WriteLine(precioReal);
            }
            else
            {
                Console.WriteLine("Esta mal escrito");
            }




            Console.Write("Ingresar el valor de tu precio:");
            string? precio2 = Console.ReadLine();
            int precioReal2;    
            try
            {
                precioReal2 = int.Parse(precio);
                Console.WriteLine($"Buenas noches, el precio es {precioReal}");
            }
            catch(Exception)
            {
                Console.WriteLine("El valor no es numerico");
            }





            Console.WriteLine("Hello, World!");
            string valor = "hola!"; // Tipo String
            int numero = 2; //Tipo Numero
            bool booleano = true; //Tipo booleano
            Console.WriteLine($"{valor}, {numero}, {booleano}");

            Console.Write("Ingresar su nombre:");
            string? valor1 = Console.ReadLine();
            Console.WriteLine($"Bienvenido {valor1}");
            Console.Write("Ingrese su precio:");
            string? precio = Console.ReadLine();
            Console.WriteLine($"Buenas noches, {valor1}, el precio es {precio}");
        }

        int suma(int valor1, int valor2) {
            return valor1 + valor2;
        }
    }
}
