namespace Dominio
{
    public class Auto
    {
        public enum TIPO {USADO, NO_USADO};
        Marca marca;
        string modelo;
        int año;
        TIPO nuevoOUsado;
        string matricula;
        DateTime fechaUltimoServicio;

        public Marca Marca { get => marca; set => marca = value; }
        public string Modelo { get => modelo; set => modelo = value; }
        public int Año { get => año; set => año = value; }
        public TIPO NuevoOUsado { get => nuevoOUsado; set => nuevoOUsado = value; }
        public string Matricula { get => matricula; set => matricula = value; }
        public DateTime FechaUltimoServicio { get => fechaUltimoServicio; set => fechaUltimoServicio = value; }

        public Auto(Marca marca, string modelo, int año, TIPO nuevoOUsado, string matricula, DateTime fechaUltimoServicio)
        {
            this.Marca = marca;
            this.Modelo = modelo;
            this.Año = año;
            this.NuevoOUsado = nuevoOUsado;
            this.Matricula = matricula;
            this.FechaUltimoServicio = fechaUltimoServicio;
        }

        public DateTime ProximoServicio(DateTime fechaUltimoServicio)
        {
            return this.fechaUltimoServicio.AddYears(1);
        }
    }
}
