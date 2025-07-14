/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package Lista;

/**
 *
 * @author pablo
 */
public interface ILista {
    
    public void agregarInicio(int x);
    
    public void mostrar();
    
    public int cantidadElementos();
    
    public boolean esVacia();
    
    public void vaciar();
    
    public boolean existeElemento(int x);
    
    public int obtenerElemento(int indice);
    
    public void agregarFinal (int x);
    
    public void eliminarInicio();
    
    public void eliminarFinal();
    
}
