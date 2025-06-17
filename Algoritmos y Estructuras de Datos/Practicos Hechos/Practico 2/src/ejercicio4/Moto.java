/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ejercicio4;

import ejercicio4.Vehiculo;

/**
 *
 * @author pablo
 */
public class Moto implements Vehiculo {

    //Propiedades
    private String marca;
    private double cilindrada;
    private double kilometraje;

    //Getters setters
    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public double getCilindrada() {
        return cilindrada;
    }

    public void setCilindrada(double cilindrada) {
        this.cilindrada = cilindrada;
    }

    public double getKilometraje() {
        return kilometraje;
    }

    public void setKilometraje(double kilometraje) {
        this.kilometraje = kilometraje;
    }
    
    //Constructor
    public Moto(String marca, double cilindrada, double kilometraje) {
        this.marca = marca;
        this.cilindrada = cilindrada;
        this.kilometraje = kilometraje;
    }
    
    // Cumple el contrato de la interface que esta implementando (implements Vehiculo)
    @Override
    public double calcularConsumo(double distancia, double listrosConsumo){
        return distancia / listrosConsumo;
    }

}
