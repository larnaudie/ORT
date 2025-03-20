using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{

    //DEFINIMOS LA CLASE CON SUS ATRIBUTOS

    public abstract class Usuario
    {
        int id;
        static int ultimoId;
        string nombre;
        string apellido;
        string mail;
        string contrasenia;
        List<Cliente> clientes = new List<Cliente>();
        List<Administrador> administradores = new List<Administrador>();

        protected Usuario(string nombre, string apellido, string mail, string contrasenia)
        {
            Nombre = nombre;
            Apellido = apellido;
            Mail = mail;
            Contrasenia = contrasenia;
        }

        public string Nombre { get => nombre; set => nombre = value; }
        public string Apellido { get => apellido; set => apellido = value; }
        public string Mail { get => mail; set => mail = value; }
        public string Contrasenia { get => contrasenia; set => contrasenia = value; }

        public override bool Equals(object? obj)
        {
            return obj is Usuario usuario &&
                   Mail == usuario.Mail;
        }

    }
}
