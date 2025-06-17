/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Ejercicio1;

/**
 *
 * @author pablo
 */
public class Persona {

    private String nombre;
    private String apellido;
    private int edad;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public Persona(String nombre, String apellido, int edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    public String imprimirSoloNombres() {
        return nombre + " " + apellido;
    }

    public String imprimirSoloEdad() {
        int edad = this.edad;
        // Formas de convertir int a string
//        1)
          return "" + edad;
//        2)
//        return String.valueOf(edad);
//        3)
//        return String.format("%d", edad);
//        4)
//        return Integer.toString(edad);
    }

    @Override
    public String toString() {
        return nombre + " " + apellido + " " + edad;
    }

// Constructor Implicito
// Definimos al constructor de la clase vacio para que al instancia
// No nos pida valores obligatorios por parametro.
//public Persona() {}
//  Constructor Explicito
//  Si comentamos el public Persona() {} Debemos explicitar los valores.
}
