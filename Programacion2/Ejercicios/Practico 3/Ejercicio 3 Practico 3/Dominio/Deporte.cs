using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class Deporte
    {   
        //ponemos private para que ninguna otra clase pueda modificar estos valores
        private string nombre;
        private bool esGrupal;
        private int cantidadProfesores;
        //ponemos static para que cada instancia tenga 1500 y no se modifique luego de instanciarla
        //tambien tiene private, lo que es inaccesible.
        private static int salarioProfesores = 1500;

        public Deporte()
        {

        }

        public Deporte(string nombre, bool esGrupal, int cantidadProfesores)
        {
            this.Nombre = nombre;
            this.EsGrupal = esGrupal;
            this.CantidadProfesores = cantidadProfesores;
        }

        public string Nombre { get => nombre; set => nombre = value; }
        public bool EsGrupal { get => esGrupal; set => esGrupal = value; }
        public int CantidadProfesores { get => cantidadProfesores; set => cantidadProfesores = value; }

        public int Costo(int cantidadProfesores, int salarioProfesores)
        {
            int costoFinal;
            costoFinal = cantidadProfesores * salarioProfesores;
            return costoFinal;
        }

    }
}
