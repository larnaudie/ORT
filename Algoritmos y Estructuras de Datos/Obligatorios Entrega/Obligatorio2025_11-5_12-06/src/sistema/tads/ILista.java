/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package sistema.tads;


/**
 *
 * @author Admin
 */
public interface ILista <T extends Comparable> {
    
    public boolean esVacia();

    public void agregarInicio(T nodo);

    public void agregarFinal(T nodo);

    public void borrarInicio();

    public void borrarFin();
    
    public void borrarElemento(T elemento);
    
    public boolean existe(T elemento);

    public void vaciar();

    public void mostrar();
    
    public String mostrarString();
    
    public T obtenerElementoInt(int indice);
    
    public T buscarElemento(T elemento);
    
    public T obtenerInicio();
    
    public void insertarOrdenado(T elemento);    
    
    //----------------- FUNCIONES AGREGADAS -----------------//
    
    public int largoLista();
    
}
