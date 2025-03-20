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

//Se usa implements, por que usa el contrato de la interface Vehiculo.
public class Auto implements Vehiculo {

    //Propiedades
    private String marca;
    private String modelo;
    private double kilometraje;
    //Getters Setters
    public String getMarca() {
        return marca;
    }
    public void setMarca(String marca) {
        this.marca = marca;
    }
    public String getModelo() {
        return modelo;
    }
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }
    public double getKilometraje() {
        return kilometraje;
    }
    public void setKilometraje(double kilometraje) {
        this.kilometraje = kilometraje;
    }
    //Constructor
    public Auto(String marca, String modelo, double kilometraje) {
        this.marca = marca;
        this.modelo = modelo;
        this.kilometraje = kilometraje;
    }
    // Cumple el contrato de la interface que esta implementando (implements Vehiculo)
    @Override
    public double calcularConsumo(double distancia, double listrosConsumidos){
        return distancia / listrosConsumidos;
    }

}
