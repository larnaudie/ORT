/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package Ejercicio1;
import Ejercicio1.Persona;
/**
 *
 * @author pablo
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        Persona pablo = new Persona("Pablo", "Larnaudie", 29);
        System.out.println(pablo);
        System.out.println(pablo.imprimirSoloNombres());
        System.out.println(pablo.imprimirSoloEdad());
    }
    
}
