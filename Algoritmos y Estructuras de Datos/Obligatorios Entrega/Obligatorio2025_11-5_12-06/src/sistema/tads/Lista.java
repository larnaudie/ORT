/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sistema.tads;

/**
 *
 * @author Admin
 */
public class Lista<T extends Comparable> implements ILista<T> {

    //Creo el puntero inicio
    private Nodo<T> inicio;
   
    public Nodo<T> getInicio() {
    return inicio;
    }

    public Lista() {
        inicio = null;
    }

    @Override
    public boolean esVacia() {
        return inicio == null;
    }

    @Override
    public void agregarInicio(T elemento) {
        Nodo<T> nuevo = new Nodo();
        nuevo.setDato(elemento);
        nuevo.setSiguiente(inicio); //
        inicio = nuevo;
    }

    @Override
    public void agregarFinal(T elemento) {
        Nodo<T> nuevo = new Nodo();
        nuevo.setDato(elemento);
        if (inicio == null) {
            inicio = nuevo;
        } else {
            Nodo<T> actual = inicio;
            while (actual.getSiguiente() != null) {
                actual = actual.getSiguiente();
            }
            actual.setSiguiente(nuevo);
        }
    }

    @Override
    public void borrarInicio() {
        if (!esVacia()) {
            inicio = inicio.getSiguiente();
        }
    }

    @Override
    public void borrarFin() {

        if (!esVacia()) {
            //si inicio no tiene un siguiente, entonces llamamos a vaciar() metodo
            if (inicio.getSiguiente() == null) {
                this.vaciar();
            } else {

                //sino, uso un puntero auxiliar que recorre while dos posiciones adelante no sea null. 
                //cuando sucede que siguiente siguiente es igual a null, entonces se borra la referencia del anterior a null. 
                Nodo<T> actual = inicio;

                while (actual.getSiguiente().getSiguiente() != null) {
                    actual = actual.getSiguiente();

                }
                actual.setSiguiente(null);
            }
        }
    }

    @Override
    public void borrarElemento(T elemento) {

        //verificar que no esté vacío
        if (inicio != null) {

            //Si el primer nodo es igual a lo que quiero borrar corro de lugar el inicio al siguiente y ahi se  borra el primero
            if (inicio.getDato().equals(elemento)) {
                inicio = inicio.getSiguiente();
            } else {
                //sino, recorro mientras que siguiente tenga el dato que busco eliminar.
                Nodo<T> actual = inicio;
                while (actual.getSiguiente() != null && !actual.getSiguiente().getDato().equals(elemento)) {
                    actual = actual.getSiguiente();
                }
                if (actual.getSiguiente() != null) {
                    Nodo<T> aBorrar = actual.getSiguiente();
                    actual.setSiguiente(aBorrar.getSiguiente());
                    aBorrar.setSiguiente(null);

                }
            }
        }
    }

    @Override
    public boolean existe(T elemento) {
        Nodo<T> aux = inicio;
        boolean existe = false;

        while (aux != null && !existe) {
            if (aux.getDato().equals(elemento)) {
                existe = true;
            }
            aux = aux.getSiguiente();
        }
        return existe;
    }

    @Override
    public void vaciar() {
        inicio = null;
    }

    @Override
    public void mostrar() {
        Nodo<T> aux = inicio;

        while (aux != null) {
            System.out.print(aux.getDato() + " ");
            aux = aux.getSiguiente();
        }
    }
    
     @Override
    public String mostrarString() {

        Nodo mostrar = inicio;
        String res = "";
        while (mostrar != null) {
            res += mostrar.getDato() + "#";
            mostrar = mostrar.getSiguiente();
        }
        
        return res;
    }


    @Override
    public T obtenerElementoInt(int indice) {
        Nodo<T> aux = inicio;

        int actual = 0;

        while (aux != null) {
            if (actual == indice) {
                return aux.getDato();
            } else {
                aux = aux.getSiguiente();
                actual++;
            }
        }
        return null;
    }

    @Override
    public T buscarElemento(T elemento) {
        Nodo<T> actual = inicio;

        while (actual != null) {
            if (actual.getDato().equals(elemento)) {
                return actual.getDato();
            }
            actual = actual.getSiguiente();
        }

        return null;
    }

    @Override
    public T obtenerInicio() {
        return inicio.getDato();
    }
    
@Override
    public void insertarOrdenado(T elemento) {
    // caso lista vacía
    if (esVacia()) {
        agregarInicio(elemento);
    } else {
        // lista tiene un solo elemento
        T datoInicio = inicio.getDato();
        if (inicio.getSiguiente() == null) {
            if (datoInicio.compareTo(elemento) < 0) {
                agregarFinal(elemento);
            } else if (datoInicio.compareTo(elemento) > 0) {
                agregarInicio(elemento);
            } else {
                // dato igual, insertar después del primero
                Nodo insertar = new Nodo();
                insertar.setDato(elemento);
                insertar.setSiguiente(inicio.getSiguiente());
                inicio.setSiguiente(insertar);
            }
        } else {
            // caso general: insertar en lista con más de un nodo
            if (datoInicio.compareTo(elemento) > 0) {
                agregarInicio(elemento);
            } else {
                Nodo aux = inicio;
                Nodo insertar = new Nodo();
                insertar.setDato(elemento);
                while ((aux.getSiguiente() != null) && (aux.getSiguiente().getDato().compareTo(elemento) < 0)) {
                    aux = aux.getSiguiente();
                }
                insertar.setSiguiente(aux.getSiguiente());
                aux.setSiguiente(insertar);
            }
        }
    }
    }
    
    //--------------------- FUNCIONES AGREGADAS ----------------------//
       
    @Override
    public int largoLista() {
        int count = 0;
        Nodo aux = inicio;
        while (aux != null) {
            count++;
            aux = aux.getSiguiente();
        }
        return count;
    }
   
}
