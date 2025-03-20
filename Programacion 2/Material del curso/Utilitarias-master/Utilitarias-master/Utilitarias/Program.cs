namespace Utilitarias
{
    internal class Program
    {
        enum Estados { COMPRADO=1, VENDIDO=2,ARRENDADO=3, FUERA_DE_SERVICIO=4 };
        static Estados estadoInmueble;
        static DateTime fechaDeIngreso; 
        static void Main(string[] args)
        {
            estadoInmueble = (Estados)Utils.LeerEnum("Ingrese el código de estado correcto", estadoInmueble.GetType());
            Console.WriteLine($"El valor elegido fue {estadoInmueble}");
            fechaDeIngreso = Utils.LeerFecha("Ingrese la fecha de ingreso");
            Console.WriteLine($"La fecha de ingreso fue {fechaDeIngreso.ToShortDateString()}");
        }
    }
}
