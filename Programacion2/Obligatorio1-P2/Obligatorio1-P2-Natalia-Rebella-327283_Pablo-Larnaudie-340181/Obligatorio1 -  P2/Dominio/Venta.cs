using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Dominio.EstadosEnum;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Dominio
{

    //DEFINIMOS LA CLASE CON SUS ATRIBUTOS

    public class Venta : Publicacion
    {
        bool enOferta;
        public Venta() { }
        //DEFINIMOS SU CONSTRUCTOR

        public Venta(bool enOferta, string nombre, EstadosEnum.Estados estado, DateTime fechaPublicacion, List<Articulo> articulos, Cliente? clienteCompra, Usuario? usuarioFinalizo, DateTime? fechaFinalizada = null) : base( nombre, estado, fechaPublicacion, articulos, clienteCompra, usuarioFinalizo, fechaFinalizada = null)
        {
            EnOferta = enOferta;
        }

    //DEFINIMOS SUS PROPIEDADES  
        public bool EnOferta { get => enOferta; set => enOferta = value; }
    }
}
