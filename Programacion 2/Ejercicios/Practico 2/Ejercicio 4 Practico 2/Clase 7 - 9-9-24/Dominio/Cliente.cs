using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class Cliente
    {
        string cedula;
        string nombre;
        Cuenta cuenta;

        public string Cedula { get => cedula; set => cedula = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public Cuenta Cuenta { get => cuenta; set => cuenta = value; }

        public Cliente(string cedula, string nombre, Cuenta cuenta)
        {
            Cedula = cedula;
            Nombre = nombre;
            Cuenta = cuenta;
        }
    }
}
