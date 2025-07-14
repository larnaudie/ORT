/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package pruebas;

import modelo.Persona;

import tads.listaGeneric.ListaSE;

 
/**
 *
 * @author Admin
 */
public class Pruebas {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        /*
        ListaSE l = new ListaSE();
        l.agregarInicio(6);
        l.agregarInicio(5);
        l.agregarInicio(33);
        
        l.mostrar();
        
        System.out.println("Buscando pos 1:" + l.obtenerElemento(1));      
        */
        
        
        ListaSE lista = new ListaSE();
        
        Persona p1 = new Persona();
        Persona p2 = new Persona();
        Persona p3 = new Persona();
        
        p1.setCedula("1234");
        p1.setNombre("Juan");
        
        p2.setCedula("34356");
        p2.setNombre("Pedro");
        
        p3.setCedula("541123");
        p3.setNombre("Carlos");

        lista.agregarInicio(p1);
        lista.agregarInicio(p2);
        lista.agregarInicio(p3);
        
        lista.mostrar();
        
        
        Persona pBusq = new Persona();
        pBusq.setCedula("54113");
        
        System.out.println("Existe 541123: " + lista.existeElemento(pBusq));
        

        
    }
    
}
