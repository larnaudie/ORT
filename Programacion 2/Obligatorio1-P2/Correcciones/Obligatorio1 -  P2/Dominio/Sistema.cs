using System;
using System.Collections.Generic;
using System.Diagnostics.Metrics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Dominio.CategoriasEnum;
using static Dominio.EstadosEnum;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Dominio
{

    //DEFINIMOS LA CLASE CON SUS ATRIBUTOS

    public class Sistema
    {
        List<Usuario> usuarios = new List<Usuario>();
        List<Publicacion> publicaciones = new List<Publicacion>();
        List<Articulo> articulos = new List<Articulo>();

        private static Sistema instancia;

        #region Singleton
        public static Sistema Instancia
        {
            get
            {
                if (instancia == null)
                {
                    instancia = new Sistema();
                }
                return instancia;
            }
        }

        public List<Usuario> Usuarios { get => usuarios;}
        public List<Publicacion> Publicaciones { get => publicaciones;}
        public List<Articulo> Articulos { get => articulos;}

        // Constructor del sistema donde se realiza la precarga de datos
        private Sistema()
        {
            PrecargaArticulos();
            PrecargaClientes();
            PrecargaAdministradores();
            PrecargaPublicaciones();
            //PrecargaOfertas();
        }
        #endregion

        //---------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------

        public void PrecargaArticulos()
        {
            AgregarArticulo("Camiseta de algodón", CategoriasEnum.Categorias.ROPA, 20);
            AgregarArticulo("Jeans ajustados", CategoriasEnum.Categorias.ROPA, 40);
            AgregarArticulo("Chaqueta de cuero", CategoriasEnum.Categorias.ROPA, 100);
            AgregarArticulo("Vestido de verano", CategoriasEnum.Categorias.ROPA, 50);
            AgregarArticulo("Sudadera con capucha", CategoriasEnum.Categorias.ROPA, 35);
            AgregarArticulo("Camisa de manga larga", CategoriasEnum.Categorias.ROPA, 30);
            AgregarArticulo("Shorts de playa", CategoriasEnum.Categorias.ROPA, 25);
            AgregarArticulo("Falda lápiz", CategoriasEnum.Categorias.ROPA, 45);
            AgregarArticulo("Pantalones cortos", CategoriasEnum.Categorias.ROPA, 30);
            AgregarArticulo("Abrigo de invierno", CategoriasEnum.Categorias.ROPA, 120);

            AgregarArticulo("Zapatillas deportivas", CategoriasEnum.Categorias.CALZADO, 60);
            AgregarArticulo("Botines de cuero", CategoriasEnum.Categorias.CALZADO, 80);
            AgregarArticulo("Sandalias", CategoriasEnum.Categorias.CALZADO, 25);
            AgregarArticulo("Bailarinas", CategoriasEnum.Categorias.CALZADO, 30);
            AgregarArticulo("Botas de lluvia", CategoriasEnum.Categorias.CALZADO, 50);
            AgregarArticulo("Zapatos de vestir", CategoriasEnum.Categorias.CALZADO, 90);
            AgregarArticulo("Zapatillas de running", CategoriasEnum.Categorias.CALZADO, 70);
            AgregarArticulo("Zapatos casuales", CategoriasEnum.Categorias.CALZADO, 55);
            AgregarArticulo("Zapatillas de skate", CategoriasEnum.Categorias.CALZADO, 65);
            AgregarArticulo("Chanclas", CategoriasEnum.Categorias.CALZADO, 15);

            AgregarArticulo("Smartphone", CategoriasEnum.Categorias.ELECTRONICA, 300);
            AgregarArticulo("Tableta", CategoriasEnum.Categorias.ELECTRONICA, 250);
            AgregarArticulo("Laptop", CategoriasEnum.Categorias.ELECTRONICA, 800);
            AgregarArticulo("Auriculares inalámbricos", CategoriasEnum.Categorias.ELECTRONICA, 100);
            AgregarArticulo("Televisor 4K", CategoriasEnum.Categorias.ELECTRONICA, 600);
            AgregarArticulo("Reloj inteligente", CategoriasEnum.Categorias.ELECTRONICA, 200);
            AgregarArticulo("Altavoz Bluetooth", CategoriasEnum.Categorias.ELECTRONICA, 80);
            AgregarArticulo("Cámara digital", CategoriasEnum.Categorias.ELECTRONICA, 400);
            AgregarArticulo("Disco duro externo", CategoriasEnum.Categorias.ELECTRONICA, 120);
            AgregarArticulo("Consola de videojuegos", CategoriasEnum.Categorias.ELECTRONICA, 500);

            AgregarArticulo("Lámpara de mesa", CategoriasEnum.Categorias.HOGAR, 40);
            AgregarArticulo("Cojín decorativo", CategoriasEnum.Categorias.HOGAR, 15);
            AgregarArticulo("Espejo de pared", CategoriasEnum.Categorias.HOGAR, 50);
            AgregarArticulo("Cuadro artístico", CategoriasEnum.Categorias.HOGAR, 75);
            AgregarArticulo("Cortinas", CategoriasEnum.Categorias.HOGAR, 30);
            AgregarArticulo("Mesa de centro", CategoriasEnum.Categorias.HOGAR, 150);
            AgregarArticulo("Sillón", CategoriasEnum.Categorias.HOGAR, 200);
            AgregarArticulo("Reloj de pared", CategoriasEnum.Categorias.HOGAR, 25);
            AgregarArticulo("Jarrón decorativo", CategoriasEnum.Categorias.HOGAR, 20);
            AgregarArticulo("Alfombra", CategoriasEnum.Categorias.HOGAR, 100);

            AgregarArticulo("Crema hidratante", CategoriasEnum.Categorias.COSMETICA, 30);
            AgregarArticulo("Champú", CategoriasEnum.Categorias.COSMETICA, 15);
            AgregarArticulo("Jabón exfoliante", CategoriasEnum.Categorias.COSMETICA, 10);
            AgregarArticulo("Perfume", CategoriasEnum.Categorias.COSMETICA, 50);
            AgregarArticulo("Desodorante", CategoriasEnum.Categorias.COSMETICA, 8);
            AgregarArticulo("Maquillaje", CategoriasEnum.Categorias.COSMETICA, 25);
            AgregarArticulo("Crema para manos", CategoriasEnum.Categorias.COSMETICA, 12);
            AgregarArticulo("Acondicionador", CategoriasEnum.Categorias.COSMETICA, 15);
            AgregarArticulo("Gel de ducha", CategoriasEnum.Categorias.COSMETICA, 12);
            AgregarArticulo("Espejo de maquillaje", CategoriasEnum.Categorias.COSMETICA, 20);
        }

        public void PrecargaClientes()
        {
            AgregarCliente(new Cliente(500, "Juan", "Pérez", "juan.perez@example.com", "contrasenia1"));
            AgregarCliente(new Cliente(1000, "María", "Gómez", "maria.gomez@example.com", "contrasenia2"));
            AgregarCliente(new Cliente(750, "Carlos", "Lopez", "carlos.lopez@example.com", "contrasenia3"));
            AgregarCliente(new Cliente(300, "Ana", "Martínez", "ana.martinez@example.com", "contrasenia4"));
            AgregarCliente(new Cliente(1500, "Luis", "Fernández", "luis.fernandez@example.com", "contrasenia5"));
            AgregarCliente(new Cliente(200, "Laura", "Hernández", "laura.hernandez@example.com", "contrasenia6"));
            AgregarCliente(new Cliente(1200, "Jorge", "Sánchez", "jorge.sanchez@example.com", "contrasenia7"));
            AgregarCliente(new Cliente(800, "Elena", "Torres", "elena.torres@example.com", "contrasenia8"));
            AgregarCliente(new Cliente(400, "Pedro", "Ramírez", "pedro.ramirez@example.com", "contrasenia9"));
            AgregarCliente(new Cliente(950, "Sofía", "Vásquez", "sofia.vasquez@example.com", "contrasenia10"));
        }


        public void AgregarCliente(Cliente clienteNuevo)
        {
            try
            {
                VerificarClienteNoExiste(clienteNuevo);
                usuarios.Add(clienteNuevo);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public void VerificarClienteNoExiste(Cliente clienteNuevo)
        {
            if (usuarios.Contains(clienteNuevo))
                throw new Exception("Cliente ya existe.");
        }


        public void PrecargaAdministradores()
        {
            AgregarAdministrador(new Administrador("Ignacio", "Quiroga", "ignacio.admin@example.com", "adminpass1"));
            AgregarAdministrador(new Administrador("Lucía", "Neruda", "lucia.admin@example.com", "adminpass2"));
        }


        public void AgregarAdministrador(Administrador administradorNuevo)
        {
            try
            {
                //VerificarAdminNoExiste(administradorNuevo);
                usuarios.Add(administradorNuevo);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void VerificarAdminNoExiste(Administrador administradorNuevo)
        {
            if (usuarios.Contains(administradorNuevo))
                throw new Exception("Administrador ya existe.");
        }


        //---------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------
        //AGREGARPUBLICACION
        public void AgregarPublicacion(Publicacion publicacionNueva)
        {
            try
            {
                VerificarPublicacionNoExiste(publicacionNueva);
                publicaciones.Add(publicacionNueva);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void VerificarPublicacionNoExiste(Publicacion publicacionNueva)
        {
            if (publicaciones.Contains(publicacionNueva))
            {
                throw new Exception("Publicacion ya existe.");
            }
        }

        public void PrecargaPublicaciones()
        {
            // Publicación 1: "Verano en la Playa"
            //Creacion de la publicacion
            Venta nuevaVenta10 = new Venta(true, "Verano en la Playa", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 7, 15), null, null, null);
            // Carga de Articulos existentes
            nuevaVenta10.AgregarArticulo(articulos[7]);
            nuevaVenta10.AgregarArticulo(articulos[22]);
            nuevaVenta10.AgregarArticulo(articulos[1]);
            AgregarPublicacion(nuevaVenta10);

            // Publicación 2: "Moda Verano"
            // Creacion de la publicacion
            Venta nuevaVenta9 = new Venta(true, "Moda Verano", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 1, 15), null, null, null);
            // Carga de Articulos existentes
            nuevaVenta9.AgregarArticulo(articulos[0]);
            nuevaVenta9.AgregarArticulo(articulos[1]);
            nuevaVenta9.AgregarArticulo(articulos[2]);
            AgregarPublicacion(nuevaVenta9);

            // Publicación 3: "Tecnología y Gadgets"
            // Creacion de la publicacion
            Subasta nuevaSubasta10 = new Subasta(EstadosEnum.Estados.CERRADA, "Tecnología y Gadgets",  new DateTime(2024, 2, 1), null, null, null);
            // Carga de Articulos existentes
            nuevaSubasta10.AgregarArticulo(articulos[3]);
            nuevaSubasta10.AgregarArticulo(articulos[4]);
            nuevaSubasta10.AgregarArticulo(articulos[5]);
            AgregarPublicacion(nuevaSubasta10);

            // Publicación 4: "Cocina Gourmet"
            // Creacion de la publicacion
            Venta nuevaVenta8 = new Venta(false, "Cocina Gourmet", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 3, 10), null, null, null);
            // Carga de Articulos existentes
            nuevaVenta8.AgregarArticulo(articulos[6]);
            nuevaVenta8.AgregarArticulo(articulos[7]);
            nuevaVenta8.AgregarArticulo(articulos[8]);
            AgregarPublicacion(nuevaVenta8);

            // Publicación 5: "Oficina en Casa"
            // Creacion de la publicacion
            Venta nuevaVenta7 = new Venta(true, "Oficina en Casa", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 4, 18), null, null, null);
            // Carga de Articulos existentes
            nuevaVenta7.AgregarArticulo(articulos[9]);
            nuevaVenta7.AgregarArticulo(articulos[10]);
            nuevaVenta7.AgregarArticulo(articulos[11]);
            AgregarPublicacion(nuevaVenta7);

            // Publicación 6: "Deportes al Aire Libre"
            // Creacion de la publicacion
            Subasta nuevaSubasta9 = new Subasta(EstadosEnum.Estados.ABIERTA, "Deportes al Aire Libre", new DateTime(2024, 5, 5), null, null, null);
            // Carga de Articulos existentes
            nuevaSubasta9.AgregarArticulo(articulos[13]);
            nuevaSubasta9.AgregarArticulo(articulos[12]);
            nuevaSubasta9.AgregarArticulo(articulos[14]);
            AgregarPublicacion(nuevaSubasta9);

            // Publicación 7: "Viaje de Invierno"
            // Creacion de la publicacion
            Venta nuevaVenta6 = new Venta(false, "Viaje de Invierno", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 6, 12), null, null, null);
            // Carga de Articulos existentes
            nuevaVenta6.AgregarArticulo(articulos[15]);
            nuevaVenta6.AgregarArticulo(articulos[16]);
            nuevaVenta6.AgregarArticulo(articulos[27]);
            AgregarPublicacion(nuevaVenta6);

            // Publicación 8: "Decoración Hogareña"
            // Creacion de la publicacion
            Venta nuevaVenta5 = new Venta(true, "Decoración Hogareña", EstadosEnum.Estados.CERRADA, new DateTime(2024, 7, 1), null, null, null);
            // Carga de Articulos existentes
            nuevaVenta5.AgregarArticulo(articulos[18]);
            nuevaVenta5.AgregarArticulo(articulos[19]);
            nuevaVenta5.AgregarArticulo(articulos[20]);
            AgregarPublicacion(nuevaVenta5);

            // Publicación 9: "Fitness en Casa"
            // Creacion de la publicacion
            Subasta nuevaSubasta8 = new Subasta( EstadosEnum.Estados.ABIERTA, "Fitness en Casa",  new DateTime(2024, 8, 15), null, null, null);
            // Carga de Articulos existentes
            nuevaSubasta8.AgregarArticulo(articulos[21]);
            nuevaSubasta8.AgregarArticulo(articulos[22]);
            nuevaSubasta8.AgregarArticulo(articulos[23]);
            AgregarPublicacion(nuevaSubasta8);

            // Publicación 10: "Belleza y Cuidado Personal"
            // Creacion de la publicacion
            Venta nuevaVenta4 = new Venta(false, "Belleza y Cuidado Personal", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 9, 8), null, null, null);
            // Carga de Articulos existentes
            nuevaVenta4.AgregarArticulo(articulos[27]);
            nuevaVenta4.AgregarArticulo(articulos[28]);
            nuevaVenta4.AgregarArticulo(articulos[29]);
            AgregarPublicacion(nuevaVenta4);

            // Publicación 11: "Jardinería Básica"
            // Creacion de la publicacion
            Venta nuevaVenta3 = new Venta(true, "Jardinería Básica", EstadosEnum.Estados.CERRADA, new DateTime(2024, 10, 12), null, null, null);
            // Carga de Articulos existentes
            nuevaVenta3.AgregarArticulo(articulos[27]);
            nuevaVenta3.AgregarArticulo(articulos[28]);
            nuevaVenta3.AgregarArticulo(articulos[29]);
            AgregarPublicacion(nuevaVenta3);

            // Publicación 12: "Entretenimiento en Casa"
            // Creacion de la publicacion
            Subasta nuevaSubasta7 = new Subasta(EstadosEnum.Estados.ABIERTA, "Entretenimiento en Casa",  new DateTime(2024, 11, 5), null, null, null);
            // Carga de Articulos existentes
            nuevaSubasta7.AgregarArticulo(articulos[42]);
            nuevaSubasta7.AgregarArticulo(articulos[43]);
            nuevaSubasta7.AgregarArticulo(articulos[44]);
            AgregarPublicacion(nuevaSubasta7);

            // Publicación 13: "Arte y Pintura"
            // Creacion de la publicacion
            Venta nuevaVenta2 = new Venta(false, "Arte y Pintura", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 12, 1), null, null, null);
            // Carga de Articulos existentes
            nuevaVenta2.AgregarArticulo(articulos[33]);
            nuevaVenta2.AgregarArticulo(articulos[34]);
            nuevaVenta2.AgregarArticulo(articulos[35]);
            AgregarPublicacion(nuevaVenta2);


            // Publicación 14: "Ropa de Invierno"
            // Lista de Articulos que tiene la Publicacion Agregada:
            // Creacion de la publicacion
            Venta nuevaVenta1 = new Venta(true, "Ropa de Invierno", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 12, 20), null, null, null);
            // Carga de Articulos existentes
            nuevaVenta1.AgregarArticulo(articulos[36]);
            nuevaVenta1.AgregarArticulo(articulos[37]);
            nuevaVenta1.AgregarArticulo(articulos[38]);
            AgregarPublicacion(nuevaVenta1);

            // Publicación 15: "Lectura de Verano"
            // Creacion de la publicacion
            Subasta nuevaSubasta6 = new Subasta( EstadosEnum.Estados.CERRADA, "Lectura de Verano",  new DateTime(2024, 1, 5), null, null);
            nuevaSubasta6.AgregarArticulo(articulos[42]);
            nuevaSubasta6.AgregarArticulo(articulos[43]);
            nuevaSubasta6.AgregarArticulo(articulos[44]);
            AgregarPublicacion(nuevaSubasta6);


            // Publicación 16: "Electrodomésticos de Cocina"
            // Creacion de la publicacion
            Subasta nuevaSubasta5 = new Subasta(EstadosEnum.Estados.ABIERTA, "Electrodomésticos de Cocina",  new DateTime(2024, 3, 15), null, null);
            // Carga de Articulos existentes
            nuevaSubasta5.AgregarArticulo(articulos[42]);
            nuevaSubasta5.AgregarArticulo(articulos[43]);
            nuevaSubasta5.AgregarArticulo(articulos[44]);
            AgregarPublicacion(nuevaSubasta5);



            // Publicación 17: "Aventura en el Desierto"
            // Creacion de la publicacion
            Subasta nuevaSubasta4 = new Subasta(EstadosEnum.Estados.ABIERTA, "Aventura en el Desierto",  new DateTime(2024, 2, 9), null, null);
            // Carga de Articulos existentes
            nuevaSubasta4.AgregarArticulo(articulos[27]);
            nuevaSubasta4.AgregarArticulo(articulos[28]);
            nuevaSubasta4.AgregarArticulo(articulos[10]);
            AgregarPublicacion(nuevaSubasta4);

            // Publicación 18: "Escapada Romántica"
            // Lista de Articulos que tiene la Publicacion Agregada
            Subasta nuevaSubasta3 = new Subasta(EstadosEnum.Estados.ABIERTA, "Escapada Romántica", new DateTime(2024, 12, 17), null, null);
            nuevaSubasta3.AgregarArticulo(articulos[27]);
            nuevaSubasta3.AgregarArticulo(articulos[28]);
            nuevaSubasta3.AgregarArticulo(articulos[10]);
            AgregarPublicacion(nuevaSubasta3);

            // Publicación 19: "Fiesta en Casa"
            // Creacion de la publicacion
            Subasta nuevaSubasta = new Subasta (EstadosEnum.Estados.ABIERTA, "Fiesta en Casa", new DateTime(2024, 12, 17), null, null);
            nuevaSubasta.AgregarOferta(this.Usuarios[4], 526, new DateTime(2024, 04, 12));
            nuevaSubasta.AgregarArticulo(articulos[11]);
            nuevaSubasta.AgregarArticulo(articulos[18]);
            nuevaSubasta.AgregarArticulo(articulos[8]);
            AgregarPublicacion(nuevaSubasta);
           

            // Publicación 20: "Clásicos de Otoño"
            // Lista de Articulos que tiene la Publicacion Agregada:
            // Creacion de la publicacion
            Subasta nuevaSubasta1 = new Subasta(EstadosEnum.Estados.ABIERTA, "Clásicos del Otoño", new DateTime(2024, 12, 17), null, null);
            // Carga de Articulos existentes
            nuevaSubasta1.AgregarOferta(this.Usuarios[1], 526, new DateTime(2024, 04, 12));
            nuevaSubasta1.AgregarArticulo(articulos[5]);
            nuevaSubasta1.AgregarArticulo(articulos[0]);
            nuevaSubasta1.AgregarArticulo(articulos[3]);
            AgregarPublicacion(nuevaSubasta1);
        }

        //---------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------



        // Método para listar nombres de clientes
        public List<Usuario> ListarClientes()
        {
            List<Usuario> detallesClientes = new List<Usuario>();
            foreach (Usuario usuario in usuarios)
            {
                if(usuario is Cliente)
                {
                    detallesClientes.Add(usuario);
                //detallesClientes.Add($"ID Nombre: {usuario.Nombre}, Apellido: {usuario.Apellido}, Email: {usuario.Mail} Saldo Disponible: ");
                }
            }
            return detallesClientes;
        }

        public List<Articulo> ListarArticulosCategoria(int categoriaFiltrada)
        {
            try
            {
                List<Articulo> listaPorCategoria = new List<Articulo>();

                // Convertir el entero a CategoriasEnum.Categorias
                if (Enum.IsDefined(typeof(CategoriasEnum.Categorias), categoriaFiltrada))
                {
                    CategoriasEnum.Categorias categoriaConvertida = (CategoriasEnum.Categorias)categoriaFiltrada;

                    foreach (Articulo unArticulo in articulos)
                    {
                        if (unArticulo.CategoriaArt == categoriaConvertida)
                        {
                            listaPorCategoria.Add(unArticulo);
                        }
                    }
                }
                else
                {
                    throw new Exception("Categoría no válida.");
                }

                return listaPorCategoria;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            
        }

        //Se usa para agregar dinamicamente desde la consola
        public void AgregarArticulo(string nombre, CategoriasEnum.Categorias categoria, int precio)
        {
            try
            {
                Articulo nuevoArticulo = new Articulo(nombre, categoria, precio);
                // Verificamos que el artículo no exista en la lista antes de agregarlo
                foreach (Articulo articulo in articulos)
                {
                    if (articulo.Nombre == nombre && articulo.CategoriaArt == categoria && articulo.Precio == precio)
                    {
                        throw new Exception("Este artículo ya existe.");
                    }
                }
                // Agregar el artículo a la lista
                articulos.Add(nuevoArticulo);

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void VerificarArticuloNoExiste(Articulo articuloNuevo)
        {
            if (articulos.Contains(articuloNuevo))
                throw new Exception("Articulo ya existe.");
        }


        public List<Publicacion> ListarPublicacionPorFecha(DateTime fechaInicio, DateTime fechaFin)
        {
            // Verificación de que fechaInicio no sea mayor que fechaFin
            if (fechaInicio >= fechaFin)
            {
                throw new ArgumentException("Fecha Fin debe ser mayor a Fecha Inicio.");
            }

            List<Publicacion> listaFiltradaPublicacionesFecha = new List<Publicacion>();

            foreach (Publicacion unaPublicacion in publicaciones)
            {
                if (unaPublicacion.FechaPublicacion >= fechaInicio && unaPublicacion.FechaPublicacion <= fechaFin)
                {
                    listaFiltradaPublicacionesFecha.Add(unaPublicacion);
                }
            }

            return listaFiltradaPublicacionesFecha;
        }

    }
}
