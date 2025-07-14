using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class Marca
    {
        string nombre;
        string pais;

        public Marca(string nombre, string pais)
        {
            this.nombre = nombre;
            this.pais = pais;
        }

        public string Nombre { get => nombre; set => nombre = value; }
        public string Pais { get => pais; set => pais = value; }
    }
}
