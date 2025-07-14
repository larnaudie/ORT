/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package tads.listaInt.listaGeneric;

import tads.listaInt.*;
import java.util.ArrayList;

/**
 *
 * @author Admin
 */
public class ListaSE_Generica<T> implements ILista_Generica<T> {

    private Nodo_Generica inicio;

    public ListaSE_Generica() {
        inicio = null;
    }

    @Override
    public boolean esVacia() {
        return inicio == null;
    }

    @Override
    public void agregarInicio(T dato) {
        Nodo_Generica nuevo = new Nodo_Generica();
        nuevo.setDato(dato);
        nuevo.setSiguiente(inicio); //
        inicio = nuevo;
    }

    @Override
    public void agregarFinal(T dato) {
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
        Nodo_Generica aux = inicio;

        while (aux != null) {
            System.out.print(aux.getDato() + " ");
            aux = aux.getSiguiente();
        }

    }

    //@Override
    
    // el primer elemento es la posicion 0
    public T obtenerElemento(int indice) {

        Nodo_Generica <T> aux = inicio;

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
    
    public boolean existeElemento(T elemento){
    
        Nodo_Generica aux = inicio;
        boolean existe = false;
        
        while(aux != null && !existe){
            if(aux.getDato().equals(elemento)){
                existe = true;
            }
            aux = aux.getSiguiente();
        }
        return existe;
        
    
    
    }
    
    // PRE: La lista está ordenada en forma ascendente
    // POST: Se genera un lista ordenada con el nuevo elemento incorporado
 /*
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

  */  
    
    
}
