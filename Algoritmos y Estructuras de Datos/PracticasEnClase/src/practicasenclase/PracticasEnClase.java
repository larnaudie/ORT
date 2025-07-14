/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package practicasenclase;

/**
 *
 * @author pablo
 */
public class PracticasEnClase {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    }

    public static boolean tresConsecutivos(int[][] m) {
        boolean tiene = false;
        int aux = 0;
        int contador = 0;
        for (int fila = 0; (fila < m.length) && !(tiene); fila++) {
            for (int columna = 0; (columna < m[fila].length) && !(tiene); columna++) {
                
                if(aux == m[fila][columna]){
                    contador++;
                    if(contador>= 3){
                        tiene = true;
                    }
                }else{
                    aux = m[fila][columna];
                    contador = 0;
                }
            }
        }
        return tiene;
    }

}
