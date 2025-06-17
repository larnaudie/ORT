/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package ejercicio4;
/**
 *
 * @author pablo
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Moto unaMoto = new Moto("Yamaha", 250, 10000);
        Auto unAuto = new Auto("Suzuky¿i", "Alto", 80000);
        
        double consumoDeLaMoto = unaMoto.calcularConsumo(100, 8);
        double consumoDelAuto = unAuto.calcularConsumo(300, 20);
        
        System.out.println("Consumo del auto: " + consumoDelAuto);
        System.out.println("Consumo del auto: " + consumoDeLaMoto);
    }
   
}
