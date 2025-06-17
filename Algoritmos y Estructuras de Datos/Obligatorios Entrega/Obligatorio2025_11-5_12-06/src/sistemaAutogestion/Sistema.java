package sistemaAutogestion;

import sistema.clases.Cliente;
import sistema.clases.Evento;
import sistema.clases.Sala;
import sistema.tads.Lista;
import java.time.LocalDate;

public class Sistema implements IObligatorio {

    private Lista<Sala> listaDeSalas;
    private Lista<Evento> listaDeEventos;
    private Lista<Cliente> listaDeClientes;

    //-------------- REQUERIMIENTO 1.1 --------------//
    @Override
    public Retorno crearSistemaDeGestion() {
        listaDeSalas = new Lista();
        listaDeEventos = new Lista();
        listaDeClientes = new Lista();
        return Retorno.ok();
    }

    //-------------- REQUERIMIENTO 1.3 --------------//
    @Override
    public Retorno eliminarSala(String nombre) {
        
        String nombreEstandarizado = estandarizarNombre(nombre);
        Sala salaConNombre = null;

        for (int i = 0; i < listaDeSalas.largoLista(); i++) {
            Sala sala = listaDeSalas.obtenerElementoInt(i);
            if (sala.getNombre().equals(nombreEstandarizado)) {
                salaConNombre = sala;
                break;
            }
        }
        if (salaConNombre == null) {
            return (Retorno.error1()); //En letra: "sala no existe"
        } else {
            listaDeSalas.borrarElemento(salaConNombre);
        }
        return (Retorno.ok());
    }

    //-------------- REQUERIMIENTO 1.2 --------------//
    @Override
    public Retorno registrarSala(String nombre, int capacidad) {

        if (capacidad <= 0) {
            return (Retorno.error2()); // Según letra: capacidad es menor o igual a 0
        }

        String nombreEstandarizado = estandarizarNombre(nombre);

        //Primero se hace una instancia de Sala con el nombre recibido
        Sala sBusq = new Sala();
        sBusq.setNombre(nombreEstandarizado);

        //luego buscamos que ya no exista este registro
        Sala salaReal = listaDeSalas.buscarElemento(sBusq);
        if (salaReal != null) {
            return (Retorno.error1()); //En letra: "ya existe una sala con ese nombre"
        }

        sBusq.setCapacidad(capacidad);

        //se agrega al inicio (por requerimiento 2.1 para que quede orden inverso al registro) y se retorna Ok (solicitado en letra)
        listaDeSalas.agregarInicio(sBusq);
        return (Retorno.ok()); //se pudo registrar
    }

    //-------------- REQUERIMIENTO 1.4 --------------//
    @Override
    public Retorno registrarEvento(String codigo, String descripcion, int aforoNecesario, LocalDate fecha) {

        Evento nuevoEvento = new Evento(codigo, descripcion, aforoNecesario, fecha);
        if (listaDeEventos.buscarElemento(nuevoEvento) != null) {
            return Retorno.error1(); //por letra: ya existe evento con ese código
        }

        if (aforoNecesario <= 0) {
            return Retorno.error2(); //por letra:aforo necesario debe ser mayor a 0
        }

        Sala salaDisponible = null;

        for (int i = 0; i < listaDeSalas.largoLista(); i++) {

            Sala sala = listaDeSalas.obtenerElementoInt(i);

            if (sala.getCapacidad() >= aforoNecesario && sala.estaDisponible(fecha)) {
                salaDisponible = sala;
                break;
            }
        }

        if (salaDisponible == null) {
            return (Retorno.error3()); //por letra: no hay salas disponibles para esa fecha con aforo suficiente
        }
        nuevoEvento.asignarSala(salaDisponible);    // Asignar la sala
        salaDisponible.agendarEvento(fecha); //Reservar esa fecha
        salaDisponible.agregarEvento(nuevoEvento); //guardar evento en su sala
        nuevoEvento.setCantidadEntradasDisponibles(aforoNecesario);
        nuevoEvento.setCantidadEntradasVendidas(0);
        listaDeEventos.insertarOrdenado(nuevoEvento); //insertar por codigo ordenado en la lista de eventos del sistema

        return Retorno.ok();
    }

    //-------------- REQUERIMIENTO 1.5 --------------//
    //primera entrega
    @Override
    public Retorno registrarCliente(String cedula, String nombre) {

        String nombreConveritdo = letrasCapitalesEnMayuscula(nombre);
        //Primero se hace una instancia de Cliente con la CI recibida
        Cliente cBusq = new Cliente(cedula,nombreConveritdo);
        
        if (!cBusq.esCedulaValida()) {
            return Retorno.error1(); // Cédula no válida. Por letra: no tiene exactamento 8 digitos. Además le agregamos el chequeo de que sea numérico
        }

        //luego buscamos que ya no exista este registro
        Cliente clienteReal = listaDeClientes.buscarElemento(cBusq);
        if (clienteReal != null) {
            return (Retorno.error2()); //En letra: "ya existe cliente registrado con esa CI"
        }
        //se iserta ordenado por requerimiento de letra (Listar en orden CI)
        listaDeClientes.insertarOrdenado(cBusq);
        System.out.println(cBusq.toString());
        System.out.println("Largo lista: " + listaDeClientes.largoLista());
        return (Retorno.ok()); //se pudo registrar
    }

    @Override
    public Retorno comprarEntrada(String cedula, String codigoEvento) {
        return Retorno.noImplementada();
    }

    @Override
    public Retorno eliminarEvento(String codigo) {
        return Retorno.noImplementada();
    }

    @Override
    public Retorno devolverEntrada(String cedula, String codigoEvento) {
        return Retorno.noImplementada();
    }

    @Override
    public Retorno calificarEvento(String cedula, String codigoEvento, int puntaje, String comentario) {
        return Retorno.noImplementada();
    }

    //-------------- REQUERIMIENTO 2.1 --------------//
    @Override
    public Retorno listarSalas() {
        if (listaDeSalas.esVacia()) {
            Retorno ret = (Retorno.ok());
            ret.valorString = "No hay salas registrados.";
            return ret;
        }
        String reporte = listaDeSalas.mostrarString();

        Retorno ret = Retorno.ok();
        ret.valorString = reporte;
        return ret;
    }

    //-------------- REQUERIMIENTO 2.2 --------------//
    @Override
    public Retorno listarEventos() {
        if (listaDeEventos.esVacia()) {
            Retorno ret = (Retorno.ok());
            ret.valorString = "No hay eventos registrados.";
            return ret;
        }
        String reporte = listaDeEventos.mostrarString();
        Retorno ret = (Retorno.ok());
        ret.valorString = reporte;
        return ret;
    }

    //-------------- REQUERIMIENTO 2.3 --------------//
    @Override
    public Retorno listarClientes() {

        if (listaDeClientes.esVacia()) {
            Retorno ret = (Retorno.ok());
            ret.valorString = "No hay clientes registrados.";
            return ret;
        }
        String reporte = listaDeClientes.mostrarString();
        Retorno ret = (Retorno.ok());
        ret.valorString = reporte; //le mando el valor para atrás asi lo usa JUNIT
        return ret;
    }
    
    //-------------- REQUERIMIENTO 2.4 --------------//
    @Override
    public Retorno esSalaOptima(String[][] vistaSala) {

    if (vistaSala == null || vistaSala.length == 0 || vistaSala[0].length == 0) {
        Retorno ret = (Retorno.ok());
        ret.valorString = "No se ingresó por parametros valores validos";
        return ret;
    }

    int filas = vistaSala.length;
    int columnas = vistaSala[0].length;

    int columnasOptimas = 0;

    for (int col = 0; col < columnas; col++) {
        int maxOcupadosConsecutivos = 0;
        int actualesOcupados = 0;
        int asientosLibres = 0;

            for (int fila = 0; fila < filas; fila++) {
                String asiento = vistaSala[fila][col];

                if (asiento.equals("O")) {
                    actualesOcupados++;
                    maxOcupadosConsecutivos = Math.max(maxOcupadosConsecutivos, actualesOcupados);
                } else {
                    actualesOcupados = 0; // rompemos la secuencia
                }

                if (asiento.equals("X")) {
                    asientosLibres++;
                }
            }

            if (maxOcupadosConsecutivos > asientosLibres) {
                columnasOptimas++;
            }
        }

        if (columnasOptimas >= 2) {
            Retorno ret = (Retorno.ok());
            ret.valorString = "Es optimo";
            return ret;
        } else {
            Retorno ret = (Retorno.ok());
            ret.valorString = "No es optimo";
            return ret;
        }
    }

    @Override
    public Retorno listarClientesDeEvento(String código, int n) {
        return Retorno.noImplementada();
    }

    @Override
    public Retorno listarEsperaEvento() {
        return Retorno.noImplementada();
    }

    @Override
    public Retorno deshacerUtimasCompras(int n) {
        return Retorno.noImplementada();
    }

    @Override
    public Retorno eventoMejorPuntuado() {
        return Retorno.noImplementada();
    }

    @Override
    public Retorno comprasDeCliente(String cedula) {
        return Retorno.noImplementada();
    }

    @Override
    public Retorno comprasXDia(int mes) {
        return Retorno.noImplementada();
    }

    //------------------ FUNCIONES AGREGADAS ---------------------------//
    private String estandarizarNombre(String nombre) {
        return nombre.trim().toLowerCase().replaceAll("\\s+", " ");
    }
    
        public static String letrasCapitalesEnMayuscula(String texto) {
        if (texto == null || texto.isEmpty()) {
            return texto;
        }

        String[] palabras = texto.split(" ");
        String resultado = "";

        for (String palabra : palabras) {
            if (!palabra.isEmpty()) {
                String primeraLetra = palabra.substring(0, 1).toUpperCase();
                String resto = palabra.substring(1).toLowerCase(); // opcional
                resultado = resultado + primeraLetra + resto + " ";
            }
        }
        
        return resultado.trim();
    }

}
