/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Lista;

/**
 *
 * @author pablo
 */
public class Lista implements ILista {
    //Creo el puntero inicio
    private Nodo inicio;
    private int[] elementos;
    private int cantidadElementos;
   
    public Nodo getInicio() {
    return inicio;
    }

    public Lista() {
        inicio = null;
    }

    @Override
    public void agregarInicio(int x) {
        Nodo nuevo = new Nodo();
        nuevo.setDato(x);
        nuevo.setSiguiente(inicio);
        inicio = nuevo;
    }

    @Override
    public void mostrar() {
        Nodo aux = inicio;
        
        while (aux != null) {
            System.out.print(aux.getDato() + " ");
            aux = aux.getSiguiente();
        }
    }

    @Override
    public int cantidadElementos() {
        int count = 0;
        Nodo aux = inicio;
        while (aux != null) {
            count++;
            aux = aux.getSiguiente();
        }
        return count;
    }

    @Override
    public boolean esVacia() {
        return inicio == null;
    }

    @Override
    public void vaciar() {
        inicio = null;
    }

    @Override
    public boolean existeElemento(int x) {
        Nodo aux = inicio;
        boolean existe = false;
        while(aux != null){
            if(aux.getDato().equals(x)){
                existe = true;
            }
            aux = aux.getSiguiente();
        }
        return existe;
    }

    @Override
    public int obtenerElemento(int indice) {
        Nodo aux = inicio;
        int actual = 0;
        while(aux != null){
            if(actual == indice){
                return aux.getDato();
            }else{
                aux = aux.getSiguiente();
                actual++;
            }
            actual ++;
        }
        throw new IndexOutOfBoundsException();
    }

    @Override
    public void agregarFinal(int x) {
        if(cantidadElementos < elementos.length){
            elementos[cantidadElementos] = x;
        }
    }

    @Override
    public void eliminarInicio() {
        if(!esVacia()){
            inicio = inicio.getSiguiente();
        }
    }

    @Override
    public void eliminarFinal() {
            
    }
    
    
}
