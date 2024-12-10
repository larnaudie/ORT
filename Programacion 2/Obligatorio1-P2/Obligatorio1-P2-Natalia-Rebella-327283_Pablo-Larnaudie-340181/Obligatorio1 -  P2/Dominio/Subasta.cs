using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{

    //DEFINIMOS LA CLASE CON SUS ATRIBUTOS

    public class Subasta : Publicacion
    {
        List<Oferta> ofertas;

        public Subasta() { }

        //DEFINIMOS SU CONSTRUCTOR

        public Subasta(List<Oferta> ofertas, string nombre, EstadosEnum.Estados estado, DateTime fechaPublicacion, List<Articulo> articulos, Cliente? clienteCompra, Usuario? usuarioFinalizo, DateTime? fechaFinalizada = null) : base(nombre, estado, fechaPublicacion, articulos, clienteCompra, usuarioFinalizo, fechaFinalizada = null)
        {
            Ofertas = ofertas;
        }

        //DEFINIMOS SUS PROPIEDADES  
        public List<Oferta> Ofertas { get => ofertas; set => ofertas = value; }
    }
}
