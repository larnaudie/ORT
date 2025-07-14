/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package modelo;

/**
 *
 * @author Admin
 */
public class Persona {
    
    private String nombre;
    private String cedula;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCedula() {
        return cedula;
    }

    public void setCedula(String cedula) {
        this.cedula = cedula;
    }

    @Override
    public String toString() {
        return nombre + "-" + cedula;
    }

    @Override
    public boolean equals(Object obj) {
        if (!(obj instanceof Persona)){
            return false;
        }
        if (obj == null){
            return false;
        }
        
        return this.cedula.equals(((Persona)obj).getCedula());
        
    }


    
    
    
}
