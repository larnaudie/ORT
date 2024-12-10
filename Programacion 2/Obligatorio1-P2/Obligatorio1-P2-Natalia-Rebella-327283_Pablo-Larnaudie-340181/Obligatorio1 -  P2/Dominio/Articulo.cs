using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{

    //DEFINIMOS LA CLASE CON SUS ATRIBUTOS
    public class Articulo 
    {
        int id;
        static int ultimoId;
        string nombre;
        CategoriasEnum.Categorias categoriaArt;
        int precio;


        //DEFINIMOS SUS PROPIEDADES
        public int Id { get => id; set => id = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public CategoriasEnum.Categorias CategoriaArt { get => categoriaArt; set => categoriaArt = value; }
        public int Precio { get => precio; set => precio = value; }

        public Articulo() { }


        //DEFINIMOS SU CONSTRUCTOR
        public Articulo(string nombre, CategoriasEnum.Categorias categoriaArt, int precio)
        {
            this.id = ++ultimoId;
            this.nombre = nombre;
            this.categoriaArt = categoriaArt;
            this.precio = precio;
        }

    }
}
