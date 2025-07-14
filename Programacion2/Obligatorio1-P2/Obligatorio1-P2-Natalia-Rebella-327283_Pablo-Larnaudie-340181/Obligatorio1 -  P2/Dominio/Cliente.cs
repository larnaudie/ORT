using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{

    //DEFINIMOS LA CLASE CON SUS ATRIBUTOS
    public class Cliente : Usuario
    {
        private int saldoDisponible;

        //DEFINIMOS SUS PROPIEDADES

        public int SaldoDisponible { get => saldoDisponible; set => saldoDisponible = value; }

        public Cliente() { }

        //DEFINIMOS SU CONSTRUCTOR 

        public Cliente(int saldoDisponible, string nombre, string apellido, string mail, string contrasenia) : base(nombre, apellido, mail, contrasenia)
        {
            this.saldoDisponible = saldoDisponible;
        }
    }
}
