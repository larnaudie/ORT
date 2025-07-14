using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class Administrador : Usuario
    {

        //DEFINIR CONSTRUCTOR
        public Administrador (string nombre, string apellido, string mail, string contrasenia) : base (nombre, apellido, mail, contrasenia)
        {
           
        }
    }
}
