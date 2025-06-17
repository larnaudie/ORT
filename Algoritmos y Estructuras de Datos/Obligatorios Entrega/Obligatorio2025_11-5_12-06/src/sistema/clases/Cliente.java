/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sistema.clases;

/**
 *
 * @author pablo
 */
public class Cliente implements Comparable<Cliente>{

    private String cedula;
    private String nombre;


    public String getCedula() {
        return cedula;
    }

    public void setCedula(String cedula) {
        this.cedula = cedula;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    @Override
    public boolean equals(Object obj) {
        if (!(obj instanceof Cliente)) {
            return false;
        }
        if (obj == null) {
            return false;
        }

        return this.cedula.equals(((Cliente) obj).getCedula());
    }
    
    @Override
    public String toString() {
         return this.getCedula() + "-" + this.getNombre();
    }
    
    public Cliente(String cedula, String nombre) {
        this.cedula = cedula;
        this.nombre = nombre;
    }
    
    public Cliente(){
        
    }
    
    @Override
    public int compareTo(Cliente otro) {
        return this.cedula.compareTo(otro.cedula);
    }
    
    //-------------- FUNCIONES AGREGADAS --------------//
    
    public boolean esCedulaValida() {
    if (cedula == null || cedula.length() != 8) {
        return false;
    }

    for (int i = 0; i < cedula.length(); i++) {
        if (!Character.isDigit(cedula.charAt(i))) {
            return false;
        }
    }

    return true;
}
}
