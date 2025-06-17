/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ejercicio3;

/**
 *
 * @author pablo
 */
public class Jornalero extends Funcionario {

    private int horasTrabajadas;
    private int valorHora;

    public int getHorasTrabajadas() {
        return horasTrabajadas;
    }

    public void setHorasTrabajadas(int horasTrabajadas) {
        this.horasTrabajadas = horasTrabajadas;
    }

    public int getValorHora() {
        return valorHora;
    }

    public void setValorHora(int valorHora) {
        this.valorHora = valorHora;
    }

    public Jornalero(int horasTrabajadas, int valorHora, String nombre, String ci) {
        super(nombre, ci);
        this.horasTrabajadas = horasTrabajadas;
        this.valorHora = valorHora;
    }

    @Override
    public double calcularSueldo() {
        return this.horasTrabajadas * this.valorHora;
    }

    @Override
    public String toString() {
        return "Sueldo Jornalero de: " + this.getNombre() + ", es de: " + this.calcularSueldo();
    }

}
