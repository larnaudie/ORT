namespace Dominio
{
    public class Cuenta
    {
        public enum TIPOCUENTA { CUENTACORREINTE, CAJAAHORRO };
        public enum TIPOMONEDA { UYU, USD };

        string titular;
        decimal saldoActual;
        TIPOCUENTA tipoCuenta;
        TIPOMONEDA tipoMoneda;
        int numeroCuenta;
        //hay que inicializarlo en 0 aca.
        int numeroMovimientos=0;

        //Cuenta pablo = new Cuenta("Pablo", 1000, 1, 2, 12345678912)
        public Cuenta(string titular, decimal saldoActual, TIPOCUENTA tipoCuenta, TIPOMONEDA tipoMoneda, int numeroCuenta)
        {
            this.titular = titular;
            this.saldoActual = saldoActual;
            this.tipoCuenta = tipoCuenta;
            this.tipoMoneda = tipoMoneda;
            this.numeroCuenta = numeroCuenta;
        }

        //Hay que eliminar los sets por que no queremos darle valores, sino leerlos.
        public string Titular { get => titular; }
        public decimal SaldoActual { get => saldoActual; }
        public TIPOCUENTA TipoCuenta { get => tipoCuenta; }
        public TIPOMONEDA TipoMoneda { get => tipoMoneda; }
        public int NumeroCuenta { get => numeroCuenta; }

        public void Depositar(TIPOMONEDA tipoMoneda, decimal ingreso)
        {
            //NO tipoMoneda igual a tipoMoneda -> si tipo moneda no es igual a el tipo moneda de la clase.
            if (!tipoMoneda.Equals(this.tipoMoneda))
            {
                throw new Exception("El tipo de moneda no es valido");
            }
            else
            {
                if (tipoMoneda.Equals(TIPOMONEDA.UYU) && ingreso > 50000)
                {
                    throw new Exception("Saldo excede limite 50000 UYU");
                }
                else if (tipoMoneda.Equals(TIPOMONEDA.USD) && ingreso > 1000)
                {
                    throw new Exception("Saldo excede limite 1000 USD");
                }
                else
                {
                    this.saldoActual += ingreso;
                    this.numeroMovimientos++;
                }
            }
        }

        public void Retirar(decimal importe, TIPOMONEDA tipoMoneda)
        {
            if (!tipoMoneda.Equals(this.tipoMoneda))
            {
                throw new Exception("El tipo de moneda no es correcto");
            }
            else
            {
                //Me falto un bloque if entero:
                if (numeroMovimientos > 5)
                {
                    throw new Exception("La cantidad de movimientos excedio el limite");
                }
                else
                {
                    if (this.saldoActual < importe)
                    {
                        throw new Exception("No tiene saldo suficiente para retirar");
                    }
                    else
                    {
                        //el profe lo puso sin el this.
                        this.saldoActual -= importe;
                        this.numeroMovimientos++;
                    }

                }

            }
        }

    }
}
