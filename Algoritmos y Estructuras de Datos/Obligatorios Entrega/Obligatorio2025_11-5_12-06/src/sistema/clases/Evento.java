/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sistema.clases;

import java.time.LocalDate;

/**
 *
 * @author pablo
 */
public class Evento implements Comparable<Evento> {

    private String codigo;
    private String descripcion;
    private int aforoNecesario;
    private LocalDate fecha;
    private Sala salaAsignada;
    private int cantidadEntradasDisponibles;
    private int cantidadEntradasVendidas;

    public int getCantidadEntradasDisponibles() {
        return cantidadEntradasDisponibles;
    }

    public void setCantidadEntradasDisponibles(int cantidadEntradasDisponibles) {
        this.cantidadEntradasDisponibles = cantidadEntradasDisponibles;
    }

    public int getCantidadEntradasVendidas() {
        return cantidadEntradasVendidas;
    }

    public void setCantidadEntradasVendidas(int cantidasEntradasVendidas) {
        this.cantidadEntradasVendidas = cantidasEntradasVendidas;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getAforoNecesario() {
        return aforoNecesario;
    }

    public void setAforoNecesario(int aforoNecesario) {
        this.aforoNecesario = aforoNecesario;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public Sala getSalaAsignada() {
        return salaAsignada;
    }

    public void setSalaAsignada(Sala salaAsignada) {
        this.salaAsignada = salaAsignada;
    }

    @Override
    public boolean equals(Object obj) {
        if (!(obj instanceof Evento)) {
            return false;
        }
        if (obj == null) {
            return false;
        }

        return this.codigo.equals(((Evento) obj).getCodigo());
    }

    @Override
    public int compareTo(Evento otro) {
        return this.codigo.compareTo(otro.codigo);
    }

    @Override
    public String toString() {
        return this.getCodigo() + "-" + this.getDescripcion() + "-" + this.getSalaAsignada() + "-" + this.getCantidadEntradasDisponibles() + "-" + this.getCantidadEntradasVendidas();
    }

    public Evento(String codigo, String descripcion, int aforoNecesario, LocalDate fecha) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.aforoNecesario = aforoNecesario;
        this.fecha = fecha;
    }

    public Evento() {

    }

    //-------------- FUNCIONES AGREGADAS --------------//
    public void asignarSala(Sala sala) {
        this.salaAsignada = sala;
    }

}
