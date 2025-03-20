using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{

    //DEFINIMOS LA CLASE CON SUS ATRIBUTOS
    public class Publicacion
    {
        int id;
        static int ultimoId;
        string nombre;
        EstadosEnum.Estados estado;
        DateTime fechaPublicacion;
        List<Articulo> articulos;
        Cliente? clienteCompra; // Permitir que sea null
        Usuario? usuarioFinalizo; // Permitir que sea null
        DateTime? fechaFinalizada; // Cambiar a DateTime? para permitir null

        // PROPIEDADES
        public int Id { get => id; set => id = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public EstadosEnum.Estados Estado { get => estado; set => estado = value; }
        public DateTime FechaPublicacion { get => fechaPublicacion; set => fechaPublicacion = value; }
        public List<Articulo> Articulos { get => articulos; set => articulos = value; }
        public Cliente? ClienteCompra { get => clienteCompra; set => clienteCompra = value; } // Permitir null
        public Usuario? UsuarioFinalizo { get => usuarioFinalizo; set => usuarioFinalizo = value; } // Permitir null
        public DateTime? FechaFinalizada { get => fechaFinalizada; set => fechaFinalizada = value; } // Cambiar a DateTime?

        // CONSTRUCTOR VACÍO
        public Publicacion() { }

        // CONSTRUCTOR CON PARÁMETROS
        public Publicacion(string nombre, EstadosEnum.Estados estado, DateTime fechaPublicacion, List<Articulo> articulos, Cliente? clienteCompra, Usuario? usuarioFinalizo, DateTime? fechaFinalizada = null)
        {
            this.id = ++ultimoId;
            this.nombre = nombre;
            this.estado = estado;
            this.fechaPublicacion = fechaPublicacion;
            this.articulos = articulos;
            this.clienteCompra = clienteCompra; // Se permite asignar null
            this.usuarioFinalizo = usuarioFinalizo; // Se permite asignar null
            this.fechaFinalizada = fechaFinalizada; // Se permite asignar null
        }
    }
}
