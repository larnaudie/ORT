/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package tads.listaInt;

/**
 *
 * @author Admin
 */
public class ListaVector implements ILista {

    private int[] elementos;
    private int cantidadElementos;
    
    public ListaVector(int tam_max){
        elementos = new int[tam_max];
        cantidadElementos = 0;
        // {0,0,0,0,0}
    }
    
    @Override
    public boolean esVacia() {
        return cantidadElementos == 0;
    }

    @Override
    // {1,3,4,0,0}
    // cantidad_elementos = 3
    // agregarInicio(8)

    public void agregarInicio(int n) {
    }

    // {1,3,4,0,0}
    // cantidad_elementos = 3
    
    @Override
    public void agregarFinal(int n) {
        if (cantidadElementos < elementos.length){
            elementos[cantidadElementos] = n;
            cantidadElementos++;
        }
        
    }

    @Override
    public void borrarInicio() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public void borrarFin() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public void vaciar() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public void mostrar() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public int obtenerElemento(int indice) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
    
}
