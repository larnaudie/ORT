using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class Auto
    {
        string marca;
        string modelo;
        bool exoneraImpuestos;
        string matricula;
        int anio;

        public string Marca { get => marca; set => marca = value; }
        public string Modelo { get => modelo; set => modelo = value; }
        public bool ExoneraImpuestos { get => exoneraImpuestos; set => exoneraImpuestos = value; }
        public string Matricula { get => matricula; set => matricula = value; }
        public int Anio { get => anio; set => anio = value; }

        public Auto()
        {
        }

        public Auto(string marca, string modelo, bool exoneraImpuestos, string matricula, int anio)
        {
            this.marca = marca;
            this.modelo = modelo;
            this.exoneraImpuestos = exoneraImpuestos;
            this.matricula = matricula;
            this.anio = anio;
        }
        public void Validar()
        {
            ValidarMatricula();
        }

        private void ValidarMatricula()
        {
            if (matricula.Length != 7)
            {
                throw new Exception("Matricula invalida");
            }
        }

        public decimal CalcularPatente()
        {
            decimal resultado = 10000;
            if (anio < 2015 && !exoneraImpuestos )
            {
                resultado = 12000;
            }
            else if( anio >= 2015 )
            {
                resultado = 17000;
            }
            return resultado;
        }

        public override string ToString()
        {
            string impuestos = exoneraImpuestos ? "Exonera" : "No Exonera";
            return $"Este auto es de marca {marca}, modelo {modelo},";
        }

    }
}
