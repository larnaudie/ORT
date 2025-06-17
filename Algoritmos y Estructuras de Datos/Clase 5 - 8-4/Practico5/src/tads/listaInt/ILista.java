/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package tads.listaInt;

/**
 *
 * @author Admin
 */
public interface ILista {
    
    public boolean esVacia();

    public void agregarInicio(int n);

    public void agregarFinal(int n);

    public void borrarInicio();

    public void borrarFin();

    public void vaciar();

    public void mostrar();
    
    public int obtenerElemento(int indice);
    
}
