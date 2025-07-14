using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{

    //DEFINIMOS LA CLASE CON SUS ATRIBUTOS

    public class Usuario
    {
        int id;
        static int ultimoId;
        string nombre;
        string apellido;
        string mail;
        string contrasenia;

        public Usuario() { }

     //DEFINIMOS SU CONSTRUCTOR
        public Usuario(string nombre, string apellido, string mail, string contrasenia)
        {
            this.id = ++ultimoId;
            this.nombre = nombre;
            this.apellido = apellido;
            this.mail = mail;
            this.contrasenia = contrasenia;
        }

        //DEFINIMOS SUS PROPIEDADES  
        public int Id { get => id; set => id = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public string Apellido { get => apellido; set => apellido = value; }
        public string Mail { get => mail; set => mail = value; }
        public string Contrasenia { get => contrasenia; set => contrasenia = value; }
    }
}
