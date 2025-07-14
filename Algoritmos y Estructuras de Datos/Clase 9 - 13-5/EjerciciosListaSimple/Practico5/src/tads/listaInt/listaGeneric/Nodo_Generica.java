/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package tads.listaInt.listaGeneric;

import tads.listaInt.*;

/**
 *
 * @author Admin
 */
public class Nodo_Generica <T> {
    
    private T dato;
    
    private Nodo_Generica siguiente;
    
    public T getDato() {
        return dato;
    }

    public void setDato(T dato) {
        this.dato = dato;
    }

    public Nodo_Generica getSiguiente() {
        return siguiente;
    }

    public void setSiguiente(Nodo_Generica siguiente) {
        this.siguiente = siguiente;
    }
    
    
    
}
