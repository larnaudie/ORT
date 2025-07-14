/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ejercicio3;

import ejercicio3.Funcionario;

/**
 *
 * @author pablo
 */
public class Mensual extends Funcionario {

    private double sueldoMensual;

    public double getSueldoMensual() {
        return sueldoMensual;
    }

    public void setSueldoMensual(double sueldoMensual) {
        this.sueldoMensual = sueldoMensual;
    }

    public Mensual(double sueldoMensual, String nombre, String ci) {
        super(nombre, ci);
        this.sueldoMensual = sueldoMensual;
    }
    
    @Override
    public double calcularSueldo(){
        return sueldoMensual;
    }
    
    @Override
    public String toString(){
        return "Sueldo Mensual de: " + this.getNombre() + ", es de: " + this.calcularSueldo();
    }

}
