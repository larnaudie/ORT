/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package Ejercicio_1al5;

import java.util.Arrays;

/**
 *
 * @author pablo
 */
public class Practico3 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here

        int[] miArray = {4, 3, 4, 2, 1, 7, 5, 6};
        int[] miArraySimetrico = {1, 2, 3, 2, 1};
        //Ejercicio 1
        //System.out.println(mostrarV(miArray));
        //Ejercicio 2
        //System.out.println(calculateAverage(miArray));
        //Ejercicio 3
        //System.out.println(returnImpar(miArray));
        //Ejercicio 4
        //System.out.println(returnPar(miArray));
        //Ejercicio 5
        //System.out.println(maxVec(miArray));
        //Ejercicio 6
        //System.out.println(esSimetrico(miArraySimetrico));
        //Ejercicio 7
        System.out.println(devovlerValoresDeArray(miArray, 4));
        //Ejercicio 8
        //System.out.println(buscarVec(miArray, 9));
        //Ejercicio 9
        //Ejercicio 10
        //System.out.println(invertirVector(miArray));
        //Ejercicio 11
        //Ejercicio 12 (la clase que viene lo vemos)
    }

    /*DESGLOCE DE EJERCICIOS*/
 /*Ejercicio 1
        Implementar una función que reciba un array de enteros y retorne una cadena de texto con su
        contenido formateado.
        Firma: public static String mostrarv(int []v);
        Resultado esperado para vector [6,3,5,1,8,7,2,4]: “6 - 3 – 5 – 1 – 8 – 7 – 2 – 4 */
    public static String mostrarV(int[] externalValues) {
        String values = "";
        for (int i = 0; i < externalValues.length; i++) {
            values += externalValues[i];
            if (i < externalValues.length - 1) {
                values += "-";
            }
        }
        return values;
    }

    /*Ejercicio 2
Implementar una función que calcule el promedio de los valores contenidos en un array de enteros.
Firma: public static double promedio(int []v)*/
    public static double calculateAverage(int[] externalValues) {
        double externalValueslength = externalValues.length;
        double counter = 0;
        double total = 0;
        for (int i = 0; i < externalValues.length; i++) {
            counter += externalValues[i];
            if (i == externalValues.length - 1) {
                total = counter / externalValueslength;
            }
        }
        return total;
    }

    /*Ejercicio 3
Implementar una función que retorne una cadena con los valores impares del array.
Firma: public static String muestroValoresImpares(int v[]);*/
    public static String returnImpar(int[] externalValues) {
        String imparValues = "";
        for (int i = 0; i < externalValues.length; i++) {
            if (externalValues[i] % 2 != 0) {
                imparValues += externalValues[i] + " ";
            }
        }
        return imparValues;
    }

    /*Ejercicio 4
Implementar una función que retorne los valores ubicados en las posiciones pares del array.
Firma: public static String muestroPosPares(int v[]);*/
    public static String returnPar(int[] externalValues) {
        String parValues = "";
        for (int i = 0; i < externalValues.length; i++) {
            if (externalValues[i] % 2 == 0) {
                parValues += externalValues[i] + " ";
            }
        }
        return parValues;
    }

    /*Ejercicio 5
Implementar una función que retorne el valor máximo de un array.
Firma: public int maxVec(int []v);
Considerar los siguientes 2 casos:
- Caso 1: se asume que el array no está vacío y no esta ordenado
- Caso 2: se asume que el array no está vacío y esta ordenado en forma ascendente.*/
    public static int maxVec(int[] externalValues) {
        //Tenia mal el nombre de la funcion
        int maxValue = externalValues[0];
        // y se debia inicializar en 1, no en 0.
        for (int i = 1; i < externalValues.length; i++) {
            if (externalValues[i] > maxValue) {
                maxValue = externalValues[i];
            }
        }
        return maxValue;
    }

    /*Ejercicio 6
Implementar una función que determine si un array es simétrico (es decir, si se lee igual de
izquierda a derecha que de derecha a izquierda).
Firma: public static boolean esSimetrico(int[] v);
Entrada: [1, 2, 3, 2, 1] Salida: true */
    public static boolean esSimetrico(int[] externalValues) {
        boolean noEsSimestrico = true;
        for (int i = 0; i < externalValues.length; i++) {
            int currentValue = externalValues[i];
            if (currentValue != externalValues[externalValues.length - (1 + i)]) {
                return noEsSimestrico = false;
            }
        }
        return noEsSimestrico;
    }

    /*Ejercicio 7
Implementar una función que retorne la posición del menor valor dentro de un rango específico
del array (posiciones dadas).
Firma: public static int posMinVec(int []v,int posDesde, int posHasta);*/
    //SOLUCION PROFE
    public static int posMinVec(int[] externalValues, int posDesde, int posHasta) {
        int posMinimo = posDesde;

        for (int i = posDesde + 1; i <= posHasta; i++) {
            if (externalValues[i] < externalValues[posMinimo]) {
                posMinimo = i;
            }
        }
        return posMinimo;
    }

    /*Ejercicio 8 -> Ejercicio de parcial! aparece en listas (cuando la veamos)
Implementar una función que reciba un array y un valor entero, retornando true si el valor existe
en el array y false en caso contrario.
Firma: public static boolean buscarVec(int []v, int elemento);
Considerar los siguientes casos:
- Caso 1: el vector no está vacío y no esta ordenado
- Caso 2: el vector no está vacío y se encuentra ordenado en forma ascendente*/
    //Ejercicio 8 Caso 1
    public static boolean buscarVec(int[] externalValues, int element) {
        boolean notExist = false;
        //Condicion Caso 1 aplicada en condicion del for:
        for (int i = 0; (i < externalValues.length) && (!notExist); i++) {
            if (externalValues[i] == element) {
                notExist = true;
            }
        }
        return notExist;
    }

    //Ejercicio 8 Caso 2
    public static boolean buscarVec2(int[] externalValues, int element) {
        boolean notExist = false;
        //Condicion Caso 2 aplicada en condicion del for:
        for (int i = 0; (i < externalValues.length) && (!notExist) && (externalValues[i] <= element); i++) {
            if (externalValues[i] == element) {
                notExist = true;
            }
        }
        return notExist;
    }

    /*Ejercicio 9 -> Ejercicio de parcial! aparece en listas (cuando la veamos)
Dado dos vectores v1 y v2, ambos ordenados en forma ascendente, implementar una función
que retorne un nuevo vector ordenado que contenga los elementos de ambos.
Firma: public static int [] unirVectoresOrdenados(int []v1, int []v2);*/
    
    public static int[] unirVectoresOrdenados(int[] v1, int[] v2) {
        //Debemos crear el vector e inicializarlo reservando el espacio con la cantidad de
        //elementos que va a tener, eso es igual al largo de v1 y v2 sumados.
        int[] nuevoVectorOrdenado = new int[v1.length + v2.length];

        //vamos a crear el largo de cada vector
        int largoV1 = v1.length;
        int largoV2 = v2.length;
        //Luego creamos sus indices, que van a ir incrementando a medida que lo vamos recorriendo
        int indiceV1 = 0;
        int indiceV2 = 0;

        //ahora vamos a recorrer nuevoVectorOrdenado, usaremos un for
        //Sabemos que cada espacio que tiene ese nuevo vector, va a ser null o 0
        for (int i = 0; i < nuevoVectorOrdenado.length; i++) {
            //Aca tengo escenarios posibles
            //1) Tengo valores en V1 y V2.  2)Tengo valores en V1   3) Tengo valores en V2
            //En el caso 1, tengo que compararlos para ver cual es mayor o menor para quedarmelo.
            //Esceario 1) Primero compruebo que hayan lugares en ambos indices.
            if ((indiceV1 < largoV1) && (indiceV2 < largoV2)) {
                //Ahora, comparo valores
                if (v1[indiceV1] < v2[indiceV2]) {
                    //Aca hay que tomar el mas chico que es V1, entonces en V3
                    //(nuevoVectorOrdenado)posicion i, cargar el valor
                    nuevoVectorOrdenado[i] = v1[indiceV1];
                    indiceV1++;
                } //Sino, cargamos el indiceV2
                //Si son iguales, elgie tomar el de V2
                else {
                    nuevoVectorOrdenado[i] = v2[indiceV2];
                    indiceV2++;
                }
            } //Este escenario es que algun vector no tiene elementos, se vacio o V1 o V2, el indice llego al largo
            //en ese vector no tengo que buscar mas nada, no se cual de los dos, uno de los dos...
            //Esto es mejorable... pero es para que todos sigan la explicacion
            else {
                //le quedaban elementos a V1
                if (indiceV1 < largoV1) {
                    nuevoVectorOrdenado[i] = v1[indiceV1];
                    indiceV1++;
                } //le quedaban elementos a V2
                else {
                    nuevoVectorOrdenado[i] = v2[indiceV2];
                    indiceV2++;
                }
            }

        }

        return nuevoVectorOrdenado;
    }

    /*Ejercicio 10
Implementar una función que invierta el orden de los elementos de un array.
Firma: public static void invertirVector(int[] v);
Entrada: [1, 2, 3, 4, 5] Salida: [5, 4, 3, 2, 1]*/
    public static String invertirVector(int[] externalValues) {

        int[] arrayInvertido = new int[externalValues.length];
        int arrayInvertidoIndice = 0; //-->> NEcesito el indice para el arrayInvertido.

        //String arrayAsString = ""; // Se me ocurrio convertirlo a String aunque no pide eso la letra.
        for (int i = externalValues.length - 1; i >= 0; i--) {
            arrayInvertido[arrayInvertidoIndice] = externalValues[i];
            arrayInvertidoIndice++;

            //arrayAsString += externalValues[i] + " ";
        }

        //return arrayAsString;
        //Debi importar Arrays.toString
        return Arrays.toString(arrayInvertido);
    }

    /*Ejercicio 11
Implementar una función que elimine todas las apariciones de un valor específico en el array y
retorne un nuevo array con los elementos restantes.
Entrada: v = [3, 4, 5, 3, 7], elemento = 3 Salida: [4, 5, 7]*/
    public static String devovlerValoresDeArray(int[] externalValues, int element) {
        int largoDelArray = 0;
        for (int i = 0; i < externalValues.length; i++) {
            if (externalValues[i] == element) {
                largoDelArray++;
            }
        }

        int[] nuevoArray = new int[largoDelArray];
        int indiceNuevoArray = 0;
        for (int i = 0; i < externalValues.length; i++) {
            if (externalValues[i] == element) {
                nuevoArray[indiceNuevoArray] += externalValues[i];
                indiceNuevoArray++;
            }
        }
        return Arrays.toString(nuevoArray);
    }

    /*Ejercicio 12
Implementar un algoritmo de ordenamiento ascendente utilizando la función
obtenerPosMinima implementada en el ejercicio 6.
Firma: public static void ordenarvec(int []v);*/
    
    
}
