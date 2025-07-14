/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package practico5;

import modelo.Persona;
import tads.listaInt.ListaSE;
import tads.listaInt.ListaVector;
import tads.listaInt.listaGeneric.ListaSE_Generica;

/**
 *
 * @author Admin
 */
public class Practico5 {

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
        
        
        ListaSE_Generica lista = new ListaSE_Generica();
        
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
        
        ListaSE lista1 = new ListaSE();
        lista1.agregarFinal(2);
        lista1.agregarFinal(4);
        lista1.agregarFinal(8);
        lista1.agregarFinal(10);
        
        ListaSE lista2 = new ListaSE();
        lista2.agregarFinal(1);
        lista2.agregarFinal(5);
        lista2.agregarFinal(9);
        lista2.agregarFinal(12);
        
        ListaSE lista3 = lista1.intercalar(lista2);
        lista3.mostrar();

    }
    
}
