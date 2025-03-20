using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class Cuenta
    {
        public enum MONEDA { UYU = 858, USD = 840, ARS = 032 };
        decimal saldoActual;
        MONEDA monedaCuenta;
        int numeroCuenta;
        int cantidadDepositos = 0;
        int cantidadRetiros = 0;

        public MONEDA MonedaCuenta { get => monedaCuenta; }
        public int NumeroCuenta { get => numeroCuenta; }
        public decimal SaldoActual { get => saldoActual; set => saldoActual = value;}

        public Cuenta(decimal saldoActual, MONEDA monedaCuenta, int numeroCuenta)
        {
            this.saldoActual = saldoActual;
            this.monedaCuenta = monedaCuenta;
            this.numeroCuenta = numeroCuenta;
        }

        public decimal Depositar(decimal monto, MONEDA moneda)
        {
            if (!moneda.Equals(this.monedaCuenta))
            {
                throw new Exception("Tipo de moneda incorrecta");
            }
            else
            {
                if (moneda.Equals(MONEDA.USD))
                {
                    this.saldoActual += monto;
                    cantidadDepositos++;
                    if (cantidadDepositos > 3)
                    {
                        this.saldoActual -= 100;
                    }
                }
                if (moneda.Equals(MONEDA.UYU))
                {
                    this.saldoActual += monto;
                    cantidadDepositos++;
                    if (cantidadDepositos > 3)
                    {
                        this.saldoActual -= 100;
                    }
                }
                if (moneda.Equals(MONEDA.ARS))
                {
                    this.saldoActual += monto;
                    cantidadDepositos++;

                    if (cantidadDepositos > 3)
                    {
                        this.saldoActual -= 100;
                    }
                }
                return this.saldoActual;
            }
        }
        public decimal Retirar(decimal monto, MONEDA moneda)
        {
            if (!moneda.Equals(this.monedaCuenta))
            {
                throw new Exception("Tipo de moneda incorrecta");
            }
            else if (monto is string)
            {
                throw new Exception("formato de monto incorrecto");
            }
            else
            {
                if (moneda.Equals(MONEDA.USD))
                {
                    this.saldoActual -= monto;
                    cantidadRetiros++;
                }
                else if (moneda.Equals(MONEDA.UYU))
                {
                    this.saldoActual -= monto;
                    cantidadRetiros++;
                }
                else if (moneda.Equals(MONEDA.ARS))
                {
                    this.saldoActual -= monto;
                    cantidadRetiros++;
                }
                return this.saldoActual;
            }
        }

    }
}
