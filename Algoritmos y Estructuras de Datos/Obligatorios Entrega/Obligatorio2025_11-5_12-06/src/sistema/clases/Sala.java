/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sistema.clases;

import sistema.tads.Lista;
import java.time.LocalDate;

/**
 *
 * @author pablo
 */
public class Sala implements Comparable<Sala> {

    String nombre;
    private int capacidad;
    private Lista<LocalDate> fechasOcupadas;
    private Lista<Evento> eventosAsignados;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getCapacidad() {
        return capacidad;
    }

    public void setCapacidad(int capacidad) {
        this.capacidad = capacidad;
    }

    public Lista<LocalDate> getFechasOcupadas() {
        return fechasOcupadas;
    }

    public void setFechasOcupadas(Lista<LocalDate> fechasOcupadas) {
        this.fechasOcupadas = fechasOcupadas;
    }

    public Lista<Evento> getEventosAsignados() {
        return eventosAsignados;
    }

    public void setEventosAsignados(Lista<Evento> eventosAsignados) {
        this.eventosAsignados = eventosAsignados;
    }

    @Override
    public boolean equals(Object obj) {
        if (!(obj instanceof Sala)) {
            return false;
        }
        if (obj == null) {
            return false;
        }

        return this.nombre.equals(((Sala) obj).getNombre());
    }

    @Override
    public int compareTo(Sala o) {
        if (this.capacidad == o.capacidad) {
            return 0;
        }
        if (this.capacidad > o.capacidad) {
            return 1;
        }
        return -1;
    }

    @Override
    public String toString() {
        return this.getNombre() +"-"+ this.getCapacidad();
    }

    public Sala(String nombre, int capacidad) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.fechasOcupadas = new Lista<>();
        this.eventosAsignados = new Lista<>();
    }

    public Sala() {
        fechasOcupadas = new Lista<>();
        this.eventosAsignados = new Lista<>();
    }

    //-------------- FUNCIONES AGREGADAS --------------//
    public boolean estaDisponible(LocalDate fecha) {
        return !fechasOcupadas.existe(fecha); // la fecha ya está en la lista?
    }

    public void agendarEvento(LocalDate fecha) {
        fechasOcupadas.agregarFinal(fecha); // se agrega la fecha cuando se asigna un evento a esta sala
    }

    public void agregarEvento(Evento evento) {
        this.eventosAsignados.agregarFinal(evento); //incorporo el evento a la lista
    }

}
