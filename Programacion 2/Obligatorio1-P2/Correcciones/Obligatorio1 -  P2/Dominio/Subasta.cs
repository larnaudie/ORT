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


        //DEFINIMOS SU CONSTRUCTOR
        public Subasta(
            EstadosEnum.Estados estado,
            string nombre,
            DateTime fechaPublicacion,
            Cliente? clienteCompra,
            Administrador? usuarioFinalizo,
            DateTime? fechaFinalizada = null):
            base(
                  nombre,
                  estado,
                  fechaPublicacion,
                  clienteCompra,
                  usuarioFinalizo,
                  fechaFinalizada = null
                  )
        {
            Ofertas = new List<Oferta>();
        }

        //DEFINIMOS SUS PROPIEDADES  
        public List<Oferta> Ofertas { get => ofertas; set => ofertas = value; }

        public void AgregarOferta(Usuario cliente, int monto, DateTime fechaOferta)
        {
            if (cliente is Cliente)
            {
                Oferta nuevaOferta = new Oferta(cliente, monto, fechaOferta);
                this.Ofertas.Add(nuevaOferta);
            }
            else
            {
                throw new Exception("No Se agrego Oferta");
            }
        }

        public override string ToString()
        {
            return $"Tipo Subasta: {base.Id}, {base.Estado}, {base.Nombre}, {base.FechaPublicacion}";
        }
    }
}
