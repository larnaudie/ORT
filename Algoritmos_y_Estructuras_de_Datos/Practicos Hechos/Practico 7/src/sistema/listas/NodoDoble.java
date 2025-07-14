/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sistema.listas;

/**
 *
 * @author pablo
 */
public class NodoDoble {
    
    private int dato;
    private NodoDoble siguiente;
    private NodoDoble anterior;
    

    public void setDato(int dato) {
        this.dato = dato;
    }
    
    public int getDato() {
        return this.dato;
    }
    
    public void setSiguiente(NodoDoble setSiguienteNodo) {
        this.siguiente = setSiguienteNodo;
    }

    public NodoDoble getSiguiente() {
        return this.siguiente;
    }

    public void setAnterior(NodoDoble setAnteriorNodo){
       this.anterior = setAnteriorNodo;
    }
    
    public NodoDoble getAnterior(){
        return this.anterior;
    }
}
