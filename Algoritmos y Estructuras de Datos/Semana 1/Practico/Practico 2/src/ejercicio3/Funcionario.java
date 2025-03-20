/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ejercicio3;

/**
 *
 * @author pablo
 */
public abstract class Funcionario implements Comparable<Funcionario> {

    private String nombre;
    private String ci;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCi() {
        return ci;
    }

    public void setCi(String ci) {
        this.ci = ci;
    }

    public Funcionario(String nombre, String ci) {
        this.nombre = nombre;
        this.ci = ci;
    }
    
    public abstract double calcularSueldo();
    
    @Override
    public boolean equals(Object entraObjetoParaCompararse){
        Funcionario objetoConvertidoAFuncionario = (Funcionario)entraObjetoParaCompararse;
        return this.ci.equals(objetoConvertidoAFuncionario.ci);
    }
    
    public boolean ganaMas(Funcionario otroFuncionarioACompararse){
        return this.calcularSueldo() > otroFuncionarioACompararse.calcularSueldo();
    }
    
    @Override
    public int compareTo(Funcionario otroFuncionario){
        return Double.compare(otroFuncionario.calcularSueldo(), this.calcularSueldo());
    }
}
