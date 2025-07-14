/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sistema.tads;

/**
 *
 * @author marod
 */
public interface ILista<T> {
    
    // Ejercicio 1
    //Pos: Retorna true sii el dato pasado como parámetro pertenece a la lista.
    public boolean existeElemento (T x);
    
    //Pre: El elemento x pasado como parámetro pertenece a la lista.
    //Pos: Elimina de la lista la primer ocurrencia del elemento x.
    public void eliminarElemento (T x);
    
    //Pos: Retorna la cantidad de elementos de la lista.
    public int cantidadElementos ();

    //Pos: Inserta el dato pasado como parámetro al final de la lista.
    public void agregarFinal (T x); 
    
     
    public boolean esVacia();
    
    //Pos: Inserta el dato pasado como parámetro al inicio de la lista.
    public void agregarInicio (T x);
    
    public String mostrar(); 
    
    public void vaciar();
    
    //Pos: se elimina el primer elemento de la lista
    public void eliminarInicio();
    
    //Pos: se elimina el último elemento de la lista
    public void eliminarFinal();
    
    //Pos: Devuelve el valor del nodo con elemento T en la lista
    public T obtenerElemento(T x);
    
    //Pos: Devuelve el valor del primer nodo de la lista
    public T obtenerInicio();
    
   
   

}
