/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package tads.listaInt;

import java.util.ArrayList;

/**
 *
 * @author Admin
 */
public class ListaSE implements ILista {

    private Nodo inicio;

    public ListaSE() {
        inicio = null;
    }

    @Override
    public boolean esVacia() {
        return inicio == null;
    }

    @Override
    public void agregarInicio(int n) {
        Nodo nuevo = new Nodo();
        nuevo.setDato(n);
        nuevo.setSiguiente(inicio); //
        inicio = nuevo;
    }

    @Override
    public void agregarFinal(int n) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public void borrarInicio() {
        if(!esVacia()){
            inicio = inicio.getSiguiente();
        }
    }

    @Override
    public void borrarFin() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public void vaciar() {
        inicio = null;
    }

    @Override
    public void mostrar() {
        Nodo aux = inicio;

        while (aux != null) {
            System.out.print(aux.getDato() + " ");
            aux = aux.getSiguiente();
        }

    }

    //@Override
    
    // el primer elemento es la posicion 0
    public int obtenerElemento(int indice) {

        Nodo aux = inicio;

        int actual = 0;
        
        while (aux != null) {
            if(actual == indice){
                return aux.getDato();
            } else {
                aux = aux.getSiguiente();
                actual++;
            }
        }
        throw new IndexOutOfBoundsException();
        
    }
    
    // PRE: La lista está ordenada en forma ascendente
    // POST: Se genera un lista ordenada con el nuevo elemento incorporado
    public void insertarOrdenado(int dato){
        // Caso lista vacia
        if(esVacia()){
            agregarInicio(dato);
        } else {
            // La lista tiene solo un elemento
            if (inicio.getSiguiente()==null){
                if (dato > inicio.getDato()){
                    agregarFinal(dato);
                } else {
                    agregarInicio(dato);
                }
            } else {
                // Caso general lista con más de 1 elemento
                Nodo aux = inicio;
                Nodo insertar = new Nodo();
                insertar.setDato(dato);
                
                // While posicionador
                while((aux.getSiguiente() != null)&&(aux.getSiguiente().getDato() < dato)){
                    aux = aux.getSiguiente();
                }
                      
                insertar.setSiguiente(aux.getSiguiente());
                aux.setSiguiente(insertar);
            
            }
        
        
        }
        
        
    
    }

    
    
    
}
