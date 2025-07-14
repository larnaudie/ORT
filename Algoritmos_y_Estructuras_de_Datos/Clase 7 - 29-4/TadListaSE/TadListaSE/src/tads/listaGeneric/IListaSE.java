/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package tads.listaGeneric;


/**
 *
 * @author Admin
 */
public interface IListaSE <T> {
    
    public boolean esVacia();

    public void agregarInicio(T n);

    public void agregarFinal(T n);

    public void borrarInicio();

    public void borrarFin();

    public void vaciar();

    public void mostrar();
    
    public T obtenerElemento(int indice);
    
}
