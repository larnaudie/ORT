using System.Net;
namespace Consola
{
    using Dominio;
    using System;
    using static Dominio.CategoriasEnum;
    using static System.Runtime.InteropServices.JavaScript.JSType;

    internal class Program
    {
        static void Main(string[] args)
        {
            //Método que se visualizará al momento de iniciar la Consola
            Opciones();
        }

        static void Menu()
        {
            string[] titulos = { "Listar Clientes", "Listar Articulos por Categoria", "Alta de articulo", "Listar publicaciones por fecha" };

            int opcion = 1;
            foreach (string titulo in titulos)
            {
                Console.WriteLine($"{opcion} - {titulo}");
                opcion++;
            }
        }

        static void Opciones()
        {
            int valor = -1;
            while (valor != 0)
            {
                Console.Clear();
                Menu();
                Console.Write("Ingrese opcion:");
                valor = LeerEntero();
                switch (valor)
                {
                    case 1:
                        Punto1();
                        break;
                    case 2:
                        Punto2();
                        break;
                    case 3:
                        Punto3();
                        break;
                    case 4:
                        Punto4();
                        break;
                    default:
                        break;
                }
            }
        }

        // Llamar al método que lista clientes e indicar que hacer para seguir
        static void Punto1()
        {
            ListarClientes();
            Console.WriteLine("Enter para seguir");
            Console.ReadLine();
        }
        static void Punto2()
        {
            Console.WriteLine("Para acceder a los artículos por categoría, digita el número correspondiente:");
            Console.WriteLine("1 - ROPA");
            Console.WriteLine("2 - CALZADO");
            Console.WriteLine("3 - ELECTRONICA");
            Console.WriteLine("4 - HOGAR");
            Console.WriteLine("5 - COSMETICA");
            try
            {
                int parametro;
                if (int.TryParse(Console.ReadLine(), out parametro))
                {
                    // Llama a ListarArticulosCategoria con el número de categoría
                    ListarArticulosCategoria(parametro);
                }
                else
                {
                    Console.WriteLine("Entrada no válida.");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            Console.WriteLine("Enter para seguir");
            Console.ReadLine();
        }
        static void Punto3()
        {
            AltaArticulos();
            Console.WriteLine("Punto 3");
            Console.WriteLine("Enter para seguir");
            Console.ReadLine();
        }

        static void Punto4()
        {
            Console.WriteLine("Punto 4");

            // Leer fecha de inicio
            Console.WriteLine("Ingresar fecha de inicio (AAAA/MM/DD):");
            DateTime fechaInicio;
            while (!DateTime.TryParse(Console.ReadLine(), out fechaInicio))
            {
                Console.WriteLine("Formato inválido. Intente de nuevo (AAAA/MM/DD):");
            }

            // Leer fecha de fin
            Console.WriteLine("Ingresar fecha de fin (AAAA/MM/DD):");
            DateTime fechaFin;
            while (!DateTime.TryParse(Console.ReadLine(), out fechaFin))
            {
                Console.WriteLine("Formato inválido. Intente de nuevo (AAAA/MM/DD):");
            }

            // Llamar al método con las fechas ingresadas
            ListarPublicacionPorFecha(fechaInicio, fechaFin);

            Console.WriteLine("Enter para seguir");
            Console.ReadLine();
        }
        static int LeerEntero()
        {
            string texto = Console.ReadLine();
            int resultado = 0;
            while (!int.TryParse(texto, out resultado))
            {
                Console.Write("Error. Vuelva a ingresar el valor:");
                texto = Console.ReadLine();
            }
            return resultado;
        }

        static void ListarClientes()
        {
            // Llamada al método ListarClientes que se encuentra en la instancia de Sistema
            List<string> detalleClientes = Sistema.Instancia.ListarClientes();

            // Verificar si la lista está vacía
            if (detalleClientes.Count == 0)
            {
                Console.WriteLine("No hay clientes para listar.");
            }
            else
            {
                //Mostrar la lista de clientes
                Console.WriteLine("Lista de Clientes:");
                foreach (string unCliente in detalleClientes)
                {
                    Console.WriteLine(unCliente);
                }
            }
        }

        static void ListarArticulosCategoria(int categoriaFiltrada)
        {
            // Llamada al método ListarArticulosCategoria que se encuentra en la instancia de Sistema
            List<Articulo> listaPorCategoria = Sistema.Instancia.ListarArticulosCategoria(categoriaFiltrada);

            // Verificar si la lista está vacía
            if (listaPorCategoria.Count == 0)
            {
                Console.WriteLine("No hay articulos para listar.");
            }
            else
            {
                //Filtrar por categoría y mostrar 
                Console.WriteLine($"Hay articulos para listar");
                foreach (Articulo i in listaPorCategoria)
                {
                    Console.WriteLine($"{i.Id}, {i.Nombre}, ${i.Precio}, {i.CategoriaArt}");
                }
            }

            static void AgregarArticulo(string nombre, CategoriasEnum.Categorias categoria, int precio)
            {
                // Crea un nuevo artículo con los datos recibidos
                Articulo nuevoArticulo = new Articulo
                {
                    Nombre = nombre,
                    CategoriaArt = categoria,
                    Precio = precio
                };

                // Llama al método en el sistema que agrega el artículo a la lista
                Sistema.Instancia.CrearArticulo(nuevoArticulo);

                Console.WriteLine("Artículo agregado correctamente.");
            }
        }

        static void AltaArticulos()
        {
            try
            {
                //Nombre artículo
                Console.WriteLine("Ingrese el nombre del artículo:");
                string nombre = Console.ReadLine();

                // Ingreso y validación de la categoría
                Console.WriteLine("Seleccione el número de la categoría (1 - ROPA, 2 - CALZADO, 3 - ELECTRONICA, 4 - HOGAR, 5 - COSMETICA):");
                int categoriaSeleccionada;
                while (!int.TryParse(Console.ReadLine(), out categoriaSeleccionada) || categoriaSeleccionada < 1 || categoriaSeleccionada > 5)
                {
                    Console.WriteLine("Categoría no válida. Por favor, ingrese un número entre 1 y 5.");
                }

                // Convertir el número ingresado en la categoría correspondiente
                CategoriasEnum.Categorias categoria = (CategoriasEnum.Categorias)categoriaSeleccionada;

                // Ingreso del precio del artículo y validar que sea numérico y mayor que 0.
                Console.WriteLine("Ingrese el precio del artículo:");
                int precio;
                while (!int.TryParse(Console.ReadLine(), out precio) || precio < 0)
                {
                    Console.WriteLine("Precio no válido. Por favor, ingrese un número entero positivo.");
                }
                // Llama al método para agregar el artículo
                Sistema.Instancia.AgregarArticulo(nombre, categoria, precio);

                // Si no hubo ninguna excepción, mostramos el mensaje de éxito
                Console.WriteLine("Artículo agregado exitosamente.");

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }


        }

        static void ListarPublicacionPorFecha(DateTime fechaInicio, DateTime fechaFin)
        {
            try
            {
                List<Publicacion> listaPublicacionesFecha = Sistema.Instancia.ListarPublicacionPorFecha(fechaInicio, fechaFin);

                // Verificar si la lista está vacía
                if (listaPublicacionesFecha.Count == 0)
                {
                    Console.WriteLine("No hay publicaciones entre esas fechas para listar.");
                }
                else
                {
                    // Filtrar y mostrar las publicaciones encontradas
                    Console.WriteLine($"Los articulos encontrados en ese rango de fechas son: ");
                    foreach (Publicacion unaPublicacion in listaPublicacionesFecha)
                    {
                        Console.WriteLine($"ID: {unaPublicacion.Id}, NOMBRE: {unaPublicacion.Nombre}, ESTADO: {unaPublicacion.Estado}, FECHA: {unaPublicacion.FechaPublicacion}");
                    }
                }
            }
            catch (ArgumentException ex)
            {
                // Mensaje específico para el error de rango de fechas
                Console.WriteLine(ex.Message);
            }
            catch (Exception ex)
            {
                // Captura cualquier otro error inesperado
                Console.WriteLine("Ocurrió un error inesperado: " + ex.Message);
            }
        }

    }
}
