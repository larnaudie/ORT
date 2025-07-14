using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class Cuenta
    {
        public enum TIPOCUENTA { CUENTACORRIENTE, CAJADEAHORRO }
        public enum MONEDA { UYU = 858, USD = 840, ARS = 032 };
        decimal saldoActual;
        TIPOCUENTA tipoDeCuenta;
        MONEDA monedaCuenta;
        int numeroCuenta;
        int cantidadRetiros = 1;

        public decimal SaldoActual { get => saldoActual; }
        public TIPOCUENTA TipoDeCuenta { get => tipoDeCuenta; }
        public MONEDA MonedaCuenta { get => monedaCuenta; }
        public int NumeroCuenta { get => numeroCuenta; }

        public Cuenta(decimal saldoActual, TIPOCUENTA tipoDeCuenta, MONEDA monedaCuenta, int numeroCuenta)
        {
            this.saldoActual = saldoActual;
            this.tipoDeCuenta = tipoDeCuenta;
            this.monedaCuenta = monedaCuenta;
            this.numeroCuenta = numeroCuenta;
        }

        public void Depositar(decimal importe, MONEDA unaMoneda)
        {
            if (!unaMoneda.Equals(this.MonedaCuenta))
            {
                throw new Exception("Moneda incorrecta");
            }
            else
            {
                if (unaMoneda.Equals(MONEDA.UYU) && importe > 50000)
                {
                    throw new Exception("La cantidad de pesos es mayor a 50000");
                }
                if (unaMoneda.Equals(MONEDA.USD) && importe > 1000)
                {
                    throw new Exception("La cantidad de dolares es mayor a 1000");
                }
            }
            // aca si
            saldoActual += importe;
        }

        public void Retirar(decimal importe) 
        {
            if (this.cantidadRetiros > 5)
            {
                if (monedaCuenta.Equals(MONEDA.UYU))
                {
                    importe += 50;
                }
                if (monedaCuenta.Equals(MONEDA.USD))
                {
                    importe += 1;
                }
            }
            if (this.saldoActual < importe)
            {
                throw new Exception("No alcanza el saldo para el retiro.");
            }
            else
            {
                this.cantidadRetiros++; 
                this.saldoActual -= importe;
            }
        }

    }
}
