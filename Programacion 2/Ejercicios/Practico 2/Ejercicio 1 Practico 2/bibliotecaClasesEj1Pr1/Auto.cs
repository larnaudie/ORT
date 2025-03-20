namespace bibliotecaClasesEj1Pr1
{
    internal class Auto
    {
        string marca;
        string modelo;
        bool exoneraImpuestos;
        string matricula;

        public Auto(bool exoneraImpuestos, string matricula, string marca, string modelo)
        {
            this.exoneraImpuestos = exoneraImpuestos;
            this.matricula = matricula;
            this.marca = marca;
            this.modelo = modelo;
        }

        public string Marca { get => marca; set => marca = value; }
        public string Modelo { get => modelo; set => modelo = value; }
        public bool ExoneraImpuestos { get => exoneraImpuestos; set => exoneraImpuestos = value; }
        public string Matricula { get => matricula; set => matricula = value; }

        public static void Validar(string unaMatricula, int modelo)
        {
            ValidaMatricula(unaMatricula);
        }

        private static bool ValidaMatricula(string unaMatricula)
        {
            if (unaMatricula.Length != 7)
            {
                throw new Exception("Matricula debe tener un largo de 7 caracteres");
            }
            return true;
        }

        private static int CalcularPatente(int modelo)
        {
            int patente;
            if (modelo > 2015)
            {
                return patente = 17000;
            }
            else
            {
                return patente = -1;
            }
        }
    }
}
