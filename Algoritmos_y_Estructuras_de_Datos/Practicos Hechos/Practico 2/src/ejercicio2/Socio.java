/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ejercicio2;

/**
 *
 * @author pablo
 */
public class Socio {

    private String nombre;
    private int numero;
    private static int proximoNumero = 1;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }
    
    public int getProximoNumero(int proximoNumero){
        return this.proximoNumero;
    }


    public Socio(String nombre, int numero) {
        this.nombre = nombre;
        this.numero = proximoNumero;
        proximoNumero++;
    }
    
    @Override
    public String toString(){
        return nombre + " " + numero;
    }
}
