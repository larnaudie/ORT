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
        List<Oferta> ofertas = new List<Oferta>();
        List<Publicacion> publicaciones = new List<Publicacion>();
        List<Articulo> articulos = new List<Articulo>();
        List<Cliente> clientes = new List<Cliente>();
        List<Administrador> administradores = new List<Administrador>();
        List<Venta> ventas = new List<Venta>();
        List<Subasta> subastas = new List<Subasta>();


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

        // Constructor del sistema donde se realiza la precarga de datos
        private Sistema()
        {
            PrecargaArticulos();
            PrecargaClientes();
            PrecargaAdministradores();
            PrecargaPublicaciones();
            PrecargaOfertas();
        }
        #endregion
        public void PrecargaArticulos()
        {
            CrearArticulo(new Articulo("Camiseta de algodón", CategoriasEnum.Categorias.ROPA, 20));
            CrearArticulo(new Articulo("Jeans ajustados", CategoriasEnum.Categorias.ROPA, 40));
            CrearArticulo(new Articulo("Chaqueta de cuero", CategoriasEnum.Categorias.ROPA, 100));
            CrearArticulo(new Articulo("Vestido de verano", CategoriasEnum.Categorias.ROPA, 50));
            CrearArticulo(new Articulo("Sudadera con capucha", CategoriasEnum.Categorias.ROPA, 35));
            CrearArticulo(new Articulo("Camisa de manga larga", CategoriasEnum.Categorias.ROPA, 30));
            CrearArticulo(new Articulo("Shorts de playa", CategoriasEnum.Categorias.ROPA, 25));
            CrearArticulo(new Articulo("Falda lápiz", CategoriasEnum.Categorias.ROPA, 45));
            CrearArticulo(new Articulo("Pantalones cortos", CategoriasEnum.Categorias.ROPA, 30));
            CrearArticulo(new Articulo("Abrigo de invierno", CategoriasEnum.Categorias.ROPA, 120));

            CrearArticulo(new Articulo("Zapatillas deportivas", CategoriasEnum.Categorias.CALZADO, 60));
            CrearArticulo(new Articulo("Botines de cuero", CategoriasEnum.Categorias.CALZADO, 80));
            CrearArticulo(new Articulo("Sandalias", CategoriasEnum.Categorias.CALZADO, 25));
            CrearArticulo(new Articulo("Bailarinas", CategoriasEnum.Categorias.CALZADO, 30));
            CrearArticulo(new Articulo("Botas de lluvia", CategoriasEnum.Categorias.CALZADO, 50));
            CrearArticulo(new Articulo("Zapatos de vestir", CategoriasEnum.Categorias.CALZADO, 90));
            CrearArticulo(new Articulo("Zapatillas de running", CategoriasEnum.Categorias.CALZADO, 70));
            CrearArticulo(new Articulo("Zapatos casuales", CategoriasEnum.Categorias.CALZADO, 55));
            CrearArticulo(new Articulo("Zapatillas de skate", CategoriasEnum.Categorias.CALZADO, 65));
            CrearArticulo(new Articulo("Chanclas", CategoriasEnum.Categorias.CALZADO, 15));

            CrearArticulo(new Articulo("Smartphone", CategoriasEnum.Categorias.ELECTRONICA, 300));
            CrearArticulo(new Articulo("Tableta", CategoriasEnum.Categorias.ELECTRONICA, 250));
            CrearArticulo(new Articulo("Laptop", CategoriasEnum.Categorias.ELECTRONICA, 800));
            CrearArticulo(new Articulo("Auriculares inalámbricos", CategoriasEnum.Categorias.ELECTRONICA, 100));
            CrearArticulo(new Articulo("Televisor 4K", CategoriasEnum.Categorias.ELECTRONICA, 600));
            CrearArticulo(new Articulo("Reloj inteligente", CategoriasEnum.Categorias.ELECTRONICA, 200));
            CrearArticulo(new Articulo("Altavoz Bluetooth", CategoriasEnum.Categorias.ELECTRONICA, 80));
            CrearArticulo(new Articulo("Cámara digital", CategoriasEnum.Categorias.ELECTRONICA, 400));
            CrearArticulo(new Articulo("Disco duro externo", CategoriasEnum.Categorias.ELECTRONICA, 120));
            CrearArticulo(new Articulo("Consola de videojuegos", CategoriasEnum.Categorias.ELECTRONICA, 500));

            CrearArticulo(new Articulo("Lámpara de mesa", CategoriasEnum.Categorias.HOGAR, 40));
            CrearArticulo(new Articulo("Cojín decorativo", CategoriasEnum.Categorias.HOGAR, 15));
            CrearArticulo(new Articulo("Espejo de pared", CategoriasEnum.Categorias.HOGAR, 50));
            CrearArticulo(new Articulo("Cuadro artístico", CategoriasEnum.Categorias.HOGAR, 75));
            CrearArticulo(new Articulo("Cortinas", CategoriasEnum.Categorias.HOGAR, 30));
            CrearArticulo(new Articulo("Mesa de centro", CategoriasEnum.Categorias.HOGAR, 150));
            CrearArticulo(new Articulo("Sillón", CategoriasEnum.Categorias.HOGAR, 200));
            CrearArticulo(new Articulo("Reloj de pared", CategoriasEnum.Categorias.HOGAR, 25));
            CrearArticulo(new Articulo("Jarrón decorativo", CategoriasEnum.Categorias.HOGAR, 20));
            CrearArticulo(new Articulo("Alfombra", CategoriasEnum.Categorias.HOGAR, 100));

            CrearArticulo(new Articulo("Crema hidratante", CategoriasEnum.Categorias.COSMETICA, 30));
            CrearArticulo(new Articulo("Champú", CategoriasEnum.Categorias.COSMETICA, 15));
            CrearArticulo(new Articulo("Jabón exfoliante", CategoriasEnum.Categorias.COSMETICA, 10));
            CrearArticulo(new Articulo("Perfume", CategoriasEnum.Categorias.COSMETICA, 50));
            CrearArticulo(new Articulo("Desodorante", CategoriasEnum.Categorias.COSMETICA, 8));
            CrearArticulo(new Articulo("Maquillaje", CategoriasEnum.Categorias.COSMETICA, 25));
            CrearArticulo(new Articulo("Crema para manos", CategoriasEnum.Categorias.COSMETICA, 12));
            CrearArticulo(new Articulo("Acondicionador", CategoriasEnum.Categorias.COSMETICA, 15));
            CrearArticulo(new Articulo("Gel de ducha", CategoriasEnum.Categorias.COSMETICA, 12));
            CrearArticulo(new Articulo("Espejo de maquillaje", CategoriasEnum.Categorias.COSMETICA, 20));
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

        public void PrecargaAdministradores()
        {
            AgregarAdministrador(new Administrador("Ignacio", "Quiroga", "ignacio.admin@example.com", "adminpass1"));
            AgregarAdministrador(new Administrador("Lucía", "Neruda", "lucia.admin@example.com", "adminpass2"));
        }

        public void PrecargaOfertas()
        {
            AgregarOferta(new Oferta( clientes[2],123,new DateTime(2024, 05,12)) );
            AgregarOferta(new Oferta( clientes[8], 563, new DateTime(2024, 05, 12)) );
        }

        public void AgregarOferta(Oferta unaOferta)
        {
            try
            {
                VerificarOferta(unaOferta);
                ofertas.Add(unaOferta);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void VerificarOferta(Oferta unaOferta)
        {
            if (ofertas.Contains(unaOferta))
                throw new Exception("Oferta ya existe.");
        }

        public void PrecargaPublicaciones()
        {
            // Publicación 1: "Verano en la Playa"
            List<Articulo> veranoPlayaArticulos = new List<Articulo>
    {
        new Articulo { Nombre = "Shorts de playa", Precio = 25 },
        new Articulo { Nombre = "Sandalias", Precio = 25 },
        new Articulo { Nombre = "Camiseta de algodón", Precio = 20 }
    };
            AgregarPublicacion(new Venta(true,"Verano en la Playa", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 7, 15), veranoPlayaArticulos, null, null, null));

            // Publicación 2: "Deportivo y Urbano"
            List<Articulo> deportivoUrbanoArticulos = new List<Articulo>
    {
        new Articulo { Nombre = "Zapatillas deportivas", Precio = 60 },
        new Articulo { Nombre = "Sudadera con capucha", Precio = 35 },
        new Articulo { Nombre = "Pantalones cortos", Precio = 30 }
    };
            AgregarPublicacion(new Venta(false, "Deportivo y Urbano", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 7, 20), deportivoUrbanoArticulos, null, null, null));

            // Publicación 3: "Aventura en la Montaña"
            List<Articulo> aventuraMontanaArticulos = new List<Articulo>
    {
        new Articulo { Nombre = "Chaqueta de cuero", Precio = 100 },
        new Articulo { Nombre = "Botas de lluvia", Precio = 50 },
        new Articulo { Nombre = "Zapatillas de running", Precio = 70 }
    };
            AgregarPublicacion(new Venta(false, "Aventura en la Montaña", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 7, 25), aventuraMontanaArticulos, null, null, null));

            // Publicación 4: "Estilo Casual"
            List<Articulo> estiloCasualArticulos = new List<Articulo>
    {
        new Articulo { Nombre = "Jeans ajustados", Precio = 40 },
        new Articulo { Nombre = "Camisa de manga larga", Precio = 30 },
        new Articulo { Nombre = "Zapatos casuales", Precio = 55 }
    };
            AgregarPublicacion(new Venta(true, "Estilo Casual", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 8, 2), estiloCasualArticulos, null, null, null));

            // Publicación 5: "Ejercicio al Aire Libre"
            List<Articulo> ejercicioAireLibreArticulos = new List<Articulo>
    {
        new Articulo { Nombre = "Zapatillas de running", Precio = 70 },
        new Articulo { Nombre = "Camiseta de algodón", Precio = 20 },
        new Articulo { Nombre = "Shorts de playa", Precio = 25 }
    };
            AgregarPublicacion(new Venta(false, "Ejercicio al Aire Libre", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 8, 5), ejercicioAireLibreArticulos, null, null, null));

            // Publicación 6: "Tecnología Moderna"
            List<Articulo> tecnologiaModernaArticulos = new List<Articulo>
    {
        new Articulo { Nombre = "Smartphone", Precio = 300 },
        new Articulo { Nombre = "Reloj inteligente", Precio = 200 },
        new Articulo { Nombre = "Altavoz Bluetooth", Precio = 80 }
    };
            AgregarPublicacion(new Venta(true, "Tecnología Moderna", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 8, 10), tecnologiaModernaArticulos, null, null, null));

            // Publicación 7: "Elegancia en el Hogar"
            List<Articulo> eleganciaHogarArticulos = new List<Articulo>
    {
        new Articulo { Nombre = "Lámpara de mesa", Precio = 40 },
        new Articulo { Nombre = "Espejo de pared", Precio = 50 },
        new Articulo { Nombre = "Cuadro artístico", Precio = 75 }
    };
            AgregarPublicacion(new Venta(true, "Elegancia en el Hogar", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 8, 15), eleganciaHogarArticulos, null, null, null));

            // Publicación 8: "Belleza Natural"
            List<Articulo> bellezaNaturalArticulos = new List<Articulo>
    {
        new Articulo { Nombre = "Crema hidratante", Precio = 30 },
        new Articulo { Nombre = "Jabón exfoliante", Precio = 10 },
        new Articulo { Nombre = "Perfume", Precio = 50 }
    };
            AgregarPublicacion(new Venta(true, "Belleza Natural", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 8, 20), bellezaNaturalArticulos, null, null, null));

            // Publicación 9: "Relax en Casa"
            List<Articulo> relaxCasaArticulos = new List<Articulo>
    {
        new Articulo { Nombre = "Sillón", Precio = 200 },
        new Articulo { Nombre = "Cojín decorativo", Precio = 15 },
        new Articulo { Nombre = "Jarrón decorativo", Precio = 20 }
    };
            AgregarPublicacion(new Venta(true, "Relax en Casa", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 8, 25), relaxCasaArticulos, null, null, null));

            // Publicación 10: "Fiesta de Verano"
            List<Articulo> fiestaVeranoArticulos = new List<Articulo>
    {
        new Articulo { Nombre = "Vestido de verano", Precio = 50 },
        new Articulo { Nombre = "Sandalias", Precio = 25 },
        new Articulo { Nombre = "Falda lápiz", Precio = 45 }
    };
            AgregarPublicacion(new Venta(false, "Fiesta de Verano", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 9, 1), fiestaVeranoArticulos, null, null, null));

            // Publicación 11: "Día de Oficina"
            List<Articulo> oficinaArticulos = new List<Articulo>
    {
        new Articulo { Nombre = "Zapatos de vestir", Precio = 90 },
        new Articulo { Nombre = "Pantalones cortos", Precio = 30 },
        new Articulo { Nombre = "Camisa de manga larga", Precio = 30 }
    };
            AgregarPublicacion(new Subasta(null ,"Día de Oficina", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 9, 5), oficinaArticulos, null, null, null));

            // Publicación 12: "Viaje de Negocios"
            List<Articulo> viajeNegociosArticulos = new List<Articulo>
    {
        new Articulo { Nombre = "Laptop", Precio = 800 },
        new Articulo { Nombre = "Auriculares inalámbricos", Precio = 100 },
        new Articulo { Nombre = "Reloj inteligente", Precio = 200 }
    };
            AgregarPublicacion(new Subasta(null, "Viaje de Negocios", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 9, 10), viajeNegociosArticulos, null, null, null));

            // Publicación 13: "Gamer Zone"
            List<Articulo> gamerZoneArticulos = new List<Articulo>
    {
        new Articulo { Nombre = "Consola de videojuegos", Precio = 500 },
        new Articulo { Nombre = "Auriculares inalámbricos", Precio = 100 },
        new Articulo { Nombre = "Disco duro externo", Precio = 120 }
    };
            AgregarPublicacion(new Subasta(null, "Gamer Zone", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 9, 15), gamerZoneArticulos, null, null, null));

            // Publicación 14: "Invierno Caliente"
            List<Articulo> inviernoCalienteArticulos = new List<Articulo>
    {
        new Articulo { Nombre = "Abrigo de invierno", Precio = 120 },
        new Articulo { Nombre = "Botines de cuero", Precio = 80 },
        new Articulo { Nombre = "Guantes de lana", Precio = 15 }
    };
            AgregarPublicacion(new Subasta(null, "Invierno Caliente", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 11, 22), inviernoCalienteArticulos, null, null, null));


            // Publicación 15: "Día de Campo"
            List<Articulo> diaCampoArticulos = new List<Articulo>
    {
        new Articulo { Nombre = "Chanclas", Precio = 15 },
        new Articulo { Nombre = "Zapatillas deportivas", Precio = 60 },
        new Articulo { Nombre = "Pantalones cortos", Precio = 30 }
    };
            AgregarPublicacion(new Subasta(null, "Día de Campo", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 7, 16), diaCampoArticulos, null, null, null));

            // Publicación 16: "Rutina de Cuidado Facial"
            List<Articulo> rutinaFacialArticulos = new List<Articulo>
    {
        new Articulo { Nombre = "Crema hidratante", Precio = 30 },
        new Articulo { Nombre = "Champú", Precio = 15 },
        new Articulo { Nombre = "Jabón exfoliante", Precio = 10 }
    };
            AgregarPublicacion(new Subasta(null, "Rutina de Cuidado Facial", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 3, 12), rutinaFacialArticulos, null, null, null));

            // Publicación 17: "Aventura en el Desierto"
            List<Articulo> aventuraDesiertoArticulos = new List<Articulo>
    {
        new Articulo { Nombre = "Botines de cuero", Precio = 80 },
        new Articulo { Nombre = "Sombrero de playa", Precio = 25 },
        new Articulo { Nombre = "Camiseta de algodón", Precio = 20 }
    };
            AgregarPublicacion(new Subasta(null, "Aventura en el Desierto", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 2, 9), aventuraDesiertoArticulos, null, null, null));

            // Publicación 18: "Escapada Romántica"
            List<Articulo> escapadaRomanticaArticulos = new List<Articulo>
    {
        new Articulo { Nombre = "Vestido de verano", Precio = 50 },
        new Articulo { Nombre = "Bailarinas", Precio = 30 },
        new Articulo { Nombre = "Perfume", Precio = 50 }
    };
            AgregarPublicacion(new Subasta(null, "Escapada Romántica", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 5, 30), escapadaRomanticaArticulos, null, null, null));

            // Publicación 19: "Fiesta en Casa"
            List<Articulo> fiestaCasaArticulos = new List<Articulo>
    {
        new Articulo { Nombre = "Altavoz Bluetooth", Precio = 80 },
        new Articulo { Nombre = "Lámpara de mesa", Precio = 40 },
        new Articulo { Nombre = "Cojín decorativo", Precio = 15 },
    };
            List<Oferta> ofertaFiestaCasaArticulos = new List<Oferta>
    {
       new Oferta( clientes[2],123,new DateTime(2024, 05,12))
        };
            AgregarPublicacion(new Subasta(ofertaFiestaCasaArticulos, "Fiesta en Casa", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 6, 13), fiestaCasaArticulos, null, null, null));

            // Publicación 20: "Clásicos del Otoño"
            List<Articulo> clasicosOtonoArticulos = new List<Articulo>
    {
        new Articulo { Nombre = "Abrigo de invierno", Precio = 120 },
        new Articulo { Nombre = "Botines de cuero", Precio = 80 },
        new Articulo { Nombre = "Bufanda de lana", Precio = 30 }
    };
            List<Oferta> ofertaclasicosOtonoArticulos = new List<Oferta>
    {
       new Oferta( clientes[8],526,new DateTime(2024, 04,12))
        };
            AgregarPublicacion(new Subasta(ofertaclasicosOtonoArticulos, "Clásicos del Otoño", EstadosEnum.Estados.ABIERTA, new DateTime(2024, 12, 17), clasicosOtonoArticulos, null, null, null));
        }


        public void AgregarAdministrador(Administrador administradorNuevo)
        {
            try
            {
                VerificarAdminNoExiste(administradorNuevo);
                administradores.Add(administradorNuevo);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void VerificarAdminNoExiste(Administrador administradorNuevo)
        {
            if (administradores.Contains(administradorNuevo))
                throw new Exception("Administrador ya existe.");
        }

        public void AgregarCliente(Cliente clienteNuevo)
        {
            try
            {
                VerificarClienteNoExiste(clienteNuevo);
                clientes.Add(clienteNuevo);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void VerificarClienteNoExiste(Cliente clienteNuevo)
        {
            if (clientes.Contains(clienteNuevo))
                throw new Exception("Cliente ya existe.");
        }

        public void CrearArticulo(Articulo articuloNuevo)
        {
            try
            {
                VerificarArticuloNoExiste(articuloNuevo);
                articulos.Add(articuloNuevo);
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

        // Método para listar nombres de clientes
        public List<string> ListarClientes()
        {
            List<string> detallesClientes = new List<string>();
            foreach (Cliente unCliente in clientes)
            {
                detallesClientes.Add($"ID:{unCliente.Id} Nombre: {unCliente.Nombre}, Apellido: {unCliente.Apellido}, Email: {unCliente.Mail} Saldo Disponible: {unCliente.SaldoDisponible}");
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
            if (publicaciones.Contains(publicacionNueva)){
                throw new Exception("Publicacion ya existe.");
            }
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
