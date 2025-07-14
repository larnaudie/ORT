/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package practico4;

/**
 *
 * @author pablo
 */
public class Practico4 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        int[][] miArrayConArray = {{123}, {456}, {789}};
        int[][] miArrayConArray2 = {{1,2,3}, {4,5,6}, {7,8,9}};

        //para poder acceder a un metodo que no sea Static, tenemos que instanciar la clase Practico 4
        //      ->main es estático: Existe a nivel de clase, no de instancia.
        //      ->mostrarMatriz es no estático: Requiere una instancia de la clase para ser llamado.
        Practico4 unS = new Practico4();
        unS.mostrarMatriz(miArrayConArray);

        unS.mostrardiagonal(miArrayConArray2);
    }

    /*Implementar una función que muestre por consola el contenido de una matriz.
    Firma a utilizar: public void mostrarMatriz(int[][] mat);

     */
    public void mostrarMatriz(int[][] mat) {
        String values = "";
        for (int i = 0; i < mat.length; i++) {
            for (int j = 0; j < mat[i].length; j++) {
                //Aca habia puesto values += j
                //esta mal! debemos acceder a mat[i] y luego a la posicion j.
                values += mat[i][j] + "";
            }
        }
        System.out.println(values);
    }

    /*
Ejercicio 2
Implementar una función que muestre la diagonal principal de una matriz
Firma a utilizar: public void mostrardiagonal(int[][] mat); */
    public void mostrardiagonal(int[][] mat) {
        String values = "";
        System.out.println("//////// largo de mat :" + mat.length);
        for (int i = 0; i < mat.length; i++) { //i = 3 valores {1,2,3} {4,5,6} {7,8,9}
            System.out.println("////////// largo de mat[i] :" + mat[i].length);
            System.out.println("indice de mat -> " + i);
            for (int j = 0; j < mat[i].length; j++) { //j = 3 123
                System.out.println("indice de mat[i] -> " + j);
                System.out.println("valor de mat[i] -> " + mat[i][j]);
                if(i == j){
                    values += mat[i][j];
                }
                
            }
        }
        System.out.println(values);
    }
}
