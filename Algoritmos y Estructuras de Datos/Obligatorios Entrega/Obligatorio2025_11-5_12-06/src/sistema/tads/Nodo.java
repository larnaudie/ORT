/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sistema.tads;

/**
 *
 * @author Admin
 */
public class Nodo <T extends Comparable> {
    
    private T dato;
    
    private Nodo siguienteNodo;
    
    public T getDato() {
        return dato;
    }

    public void setDato(T dato) {
        this.dato = dato;
    }

    public Nodo getSiguiente() {
        return siguienteNodo;
    }

    public void setSiguiente(Nodo setSiguienteNodo) {
        this.siguienteNodo = setSiguienteNodo;
    }
    
}
