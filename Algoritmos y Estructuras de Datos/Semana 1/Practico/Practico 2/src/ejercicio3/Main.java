/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package ejercicio3;
import java.util.ArrayList;
import java.util.List;
import ejercicio3.Funcionario;
import java.util.Collections;
/**
 *
 * @author pablo
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        List<Funcionario> funcionarios = new ArrayList<>();
        
        funcionarios.add(new Mensual(4500, "Pablo", "12345"));
        funcionarios.add(new Jornalero(20, 400, "Analia", "12345"));
        funcionarios.add(new Jornalero(20,500, "Claudia", "23451"));
        funcionarios.add(new Mensual(5000, "Priscila", "45312"));
        funcionarios.add(new Jornalero(10,600, "Guillermo", "12345"));
        funcionarios.add(new Mensual(11000, "German", "123654"));
        
        Collections.sort(funcionarios);
        
        System.out.println("Funcionarios ordenados de mayor a menor; ");
        for(Funcionario funcionario : funcionarios){
            System.out.println(funcionario);
        }
    }
   
}
