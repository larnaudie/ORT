/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sistema.entidades;

import sistema.tads.Lista;

/**
 *
 * @author Hugo Cepeda
 */
public class Cliente {
    
    private String CI;
    private String nombre;
    private String direccion;
    
    private Lista<Pedido> pedidosCliente;
    
    public Cliente(){
        pedidosCliente = new Lista<>();
    }

    public String getCI() {
        return CI;
    }

    public Lista<Pedido> getPedidosCliente() {
        return pedidosCliente;
    }

    public void setPedidosCliente(Lista<Pedido> pedidosCliente) {
        this.pedidosCliente = pedidosCliente;
    }

    public void setCI(String CI) {
        this.CI = CI;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
    
    @Override
    public boolean equals(Object obj) {
        return this.getCI().equals(((Cliente) obj).getCI());
    }
    
}
