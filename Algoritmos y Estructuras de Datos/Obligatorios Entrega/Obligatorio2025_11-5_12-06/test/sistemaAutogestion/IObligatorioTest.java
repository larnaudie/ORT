/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/UnitTests/JUnit4TestClass.java to edit this template
 */
package sistemaAutogestion;

import java.time.LocalDate;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author pesce
 */
public class IObligatorioTest {

    private Sistema miSistema;

    public IObligatorioTest() {
        miSistema = new Sistema();
    }

    @Before
    public void setUp() {
        miSistema = new Sistema();
        miSistema.crearSistemaDeGestion();
    }

    //TESTEO REQUERIMIENTO 1.1 
    @Test
    public void testCrearSistemaDeGestion() {

        Retorno retorno = miSistema.crearSistemaDeGestion();

        assertEquals(Retorno.ok().resultado, retorno.resultado);
    }

    //TESTEO REQUERIMIENTO 1.2 - OK 
    @Test
    public void testRegistrarSalaOK() {
        Retorno retorno = miSistema.registrarSala("Sala Aire", 80);
        assertEquals(Retorno.ok().resultado, retorno.resultado);

        retorno = miSistema.registrarSala("Sala Fuego", 150);
        assertEquals(Retorno.ok().resultado, retorno.resultado);

        retorno = miSistema.registrarSala("Sala Agua", 200);
        assertEquals(Retorno.ok().resultado, retorno.resultado);

        retorno = miSistema.registrarSala("Sala Tierra", 100);
        assertEquals(Retorno.ok().resultado, retorno.resultado);

        retorno = miSistema.registrarSala("Sala Elemento", 1); //CASO BORDE - CAPACIDAD 1 (tenía que ser mayor a 0)
        assertEquals(Retorno.ok().resultado, retorno.resultado);
    }

    /*
    //TESTEO REQUERIMIENTO 1.2 - ERROR1 - ESTE TEST DA ERROR (rojo) PORQUE LOS ULTIMOS TRES CASOS, PERMITEN OBSERVAR QUE EL PROGRAMA DIFERENCIA MAYÚSCULAS Y MINÚSCULAS, ASÍ COMO ESPACIOS EXTRAS
    //ESTO NOS PERMITIÓ DAR CUENTA DE QUE ES NECESARIO QUE EL SISTEMA NO DISTINGA MAYÚSCULAS DE MINÚSCULAS, PARA EVITAR NOMBRES REPETIDOS DE SALAS.
    @Test
    public void testRegistrarSalaERROR1() {
        miSistema.registrarSala("Sala Aire", 100);
        
        Retorno retorno = miSistema.registrarSala("Sala Aire", 80); //ERROR POR IGUAL NOMBRE
        assertEquals(Retorno.error1().resultado, retorno.resultado);
        
        retorno = miSistema.registrarSala("sala aire", 200);
        assertEquals(Retorno.error1().resultado, retorno.resultado);
        
        retorno = miSistema.registrarSala("Sala Aire ", 60);
        assertEquals(Retorno.error1().resultado, retorno.resultado);
        
        retorno = miSistema.registrarSala("sALA aIRE", 150);
        assertEquals(Retorno.error1().resultado, retorno.resultado);
    }
     */
    //TESTEO REQUERIMIENTO 1.2 - ERROR1 - LUEGO DE CONTROLAR QUE NO SE DISTINGA MAY DE MIN EN REGISTRO SALA
    @Test
    public void testRegistrarSalaERROR1() {
        miSistema.registrarSala("Sala Aire", 100);
        
        Retorno retorno = miSistema.registrarSala("Sala Aire", 80); //ERROR POR IGUAL NOMBRE
        assertEquals(Retorno.error1().resultado, retorno.resultado);
        
        retorno = miSistema.registrarSala("sala aire", 200);
        assertEquals(Retorno.error1().resultado, retorno.resultado);
        
        retorno = miSistema.registrarSala("Sala Aire ", 60);
        assertEquals(Retorno.error1().resultado, retorno.resultado);
        
        retorno = miSistema.registrarSala("sALA aIRE", 150);
        assertEquals(Retorno.error1().resultado, retorno.resultado);
    }

    //TESTEO REQUERIMIENTO 1.2 - ERROR2 - CAPACIDAD ES MENOR O IGUAL A 0
    @Test
    public void testRegistrarSalaERROR2() {

        Retorno retorno = miSistema.registrarSala("Sala Aire", 0);
        assertEquals(Retorno.error2().resultado, retorno.resultado);

        retorno = miSistema.registrarSala("Sala Fuego ", -1);
        assertEquals(Retorno.error2().resultado, retorno.resultado);

        retorno = miSistema.registrarSala("Sala Viento ", -2);
        assertEquals(Retorno.error2().resultado, retorno.resultado);
    }

     //TESTEO REQUERIMIENTO 1.3 - OK 
    @Test
    public void testEliminarSalaOK() {
        //Completar para primera entrega
        Retorno retorno = miSistema.registrarSala("Sala Espacio", 500);
        assertEquals(Retorno.ok().resultado, retorno.resultado);
        
        retorno = miSistema.eliminarSala("Sala Espacio");
        assertEquals(Retorno.ok().resultado, retorno.resultado);
    }

    //TESTEO REQUERIMIENTO 1.3 - ERROR1 
    @Test
    public void testEliminarSalaERROR1() {
        //Completar para primera entrega
        Retorno retorno = miSistema.registrarSala("Sala Zitarrosa", 500);
        assertEquals(Retorno.ok().resultado, retorno.resultado);
        
        retorno = miSistema.eliminarSala("Sala Espacio");
        assertEquals(Retorno.error1().resultado, retorno.resultado);
    }

    //TESTEO REQUERIMIENTO 1.4 - OK 
    @Test
    public void testRegistrarEventoOK() {

        miSistema.registrarSala("Sala Viento", 100);

        LocalDate fecha = LocalDate.of(2025, 5, 15);
        Retorno retorno = miSistema.registrarEvento("AAQ23", "Noche de gala", 50, fecha);
        assertEquals(Retorno.ok().resultado, retorno.resultado);

        LocalDate fecha1 = LocalDate.of(2025, 4, 20);
        retorno = miSistema.registrarEvento("ABC12", "Baile gitano", 1, fecha1);
        assertEquals(Retorno.ok().resultado, retorno.resultado);

        LocalDate fecha2 = LocalDate.of(2025, 3, 13);
        retorno = miSistema.registrarEvento("XYZ34", "Bingo", 90, fecha2);
        assertEquals(Retorno.ok().resultado, retorno.resultado);

        LocalDate fecha3 = LocalDate.of(2025, 2, 3);
        retorno = miSistema.registrarEvento("LMN567", "Reunión empresarial", 30, fecha3);
        assertEquals(Retorno.ok().resultado, retorno.resultado);

        /*fecha = LocalDate.of(2026, 2, 3);
        retorno = miSistema.registrarEvento("LXX567", "Reunión empresarial", 101, fecha);
        assertEquals(Retorno.ok().resultado, retorno.resultado); - ARROJA ERROR 3 POR AFORO MAYOR A CAPACIDAD SALA (C-100 / AFORO 101 - BORDE)*/

 /*fecha = LocalDate.of(2024, 2, 3);
        retorno = miSistema.registrarEvento("LMN327", "Festejo aniversario", 0, fecha);
        assertEquals(Retorno.ok().resultado, retorno.resultado); - ARROJA ERROR 1 POR AFORO IGUAL A 0*/
 /*
        fecha = LocalDate.of(2025, 1, 3);
        retorno = miSistema.registrarEvento("AAQ23", "Reunión empresarial", 30, fecha);
        assertEquals(Retorno.ok().resultado, retorno.resultado); - CON ESTE EJEMPLO COMPROBAMOS QUE NOS TIRA ERROR 1 POR REPETIRSE CÓDIGO DE EVENTO*/
    }

    //TESTEO REQUERIMIENTO 1.4 - ERROR1 
    //SE ASUME QUE EL CÓDIGO DEL EVENTO NO ES CASE SENSITIVE, POR LO TANTO AAQ123 ES DIFERENTE A aaq123.
    @Test
    public void testRegistrarEventoERROR1() {

        miSistema.registrarSala("Sala Baile", 200);
        LocalDate fecha1 = LocalDate.of(2025, 6, 15);
        LocalDate fecha2 = LocalDate.of(2026, 6, 15);
        LocalDate fecha5 = LocalDate.of(2025, 11, 15);
        LocalDate fecha6 = LocalDate.of(2026, 3, 15);
        LocalDate fecha7 = LocalDate.of(2025, 2, 13);

        miSistema.registrarEvento("AAQ23", "Bailamos", 90, fecha1);
        miSistema.registrarEvento("ZZZ12", "Lectura compartida", 100, fecha2);

        Retorno retorno = miSistema.registrarEvento("AAQ23", "Noche de gala", 50, fecha5);
        assertEquals(Retorno.error1().resultado, retorno.resultado);

        retorno = miSistema.registrarEvento("ZZZ12", "Noche de gala", 50, fecha6);
        assertEquals(Retorno.error1().resultado, retorno.resultado);

        retorno = miSistema.registrarEvento("ZZZ12", "Té", 150, fecha7);
        assertEquals(Retorno.error1().resultado, retorno.resultado);

        /*fecha = LocalDate.of(2025, 7, 20);
        retorno = miSistema.registrarEvento("aaq23", "Baile gitano", 120, fecha);
        assertEquals(Retorno.error1().resultado, retorno.resultado); - CON ESTE ARROJA ERROR PORQUE EN REALIDAD NO ES CÓDIGO REPETIDO (SE DETALLA ARRIBA NO CASE SENSITIVE) */
    }

    //TESTEO REQUERIMIENTO 1.4 - ERROR2 - AFORO NECESARIO MENOR IGUAL QUE 0
    @Test
    public void testRegistrarEventoERROR2() {

        miSistema.registrarSala("Sala Baile", 200);
        LocalDate fecha5 = LocalDate.of(2025, 11, 15);
        LocalDate fecha6 = LocalDate.of(2026, 3, 15);

        Retorno retorno = miSistema.registrarEvento("AAQ23", "Noche de gala", 0, fecha5);
        assertEquals(Retorno.error2().resultado, retorno.resultado);

        retorno = miSistema.registrarEvento("ZZZ12", "Noche de gala", -1, fecha6);
        assertEquals(Retorno.error2().resultado, retorno.resultado);
    }

    //TESTEO REQUERIMIENTO 1.4 - ERROR3 - SALAS NO DISPONIBLES PARA ESA FECHA CON AFORO SUFICIENTE
    @Test
    public void testRegistrarEventoERROR3() {

        miSistema.registrarSala("Sala Eventos", 100);
        LocalDate fecha1 = LocalDate.of(2025, 12, 15);
        LocalDate fecha2 = LocalDate.of(2026, 12, 15);

        Retorno retorno1 = miSistema.registrarEvento("AAQ23", "Noche de gala", 100, fecha1);
        assertEquals(Retorno.ok().resultado, retorno1.resultado);

        //misma fecha
        Retorno retorno2 = miSistema.registrarEvento("AB7DG", "Evento", 90, fecha1);
        assertEquals(Retorno.error3().resultado, retorno2.resultado);

        //aforo insuficiente fecha disponible
        Retorno retorno3 = miSistema.registrarEvento("A456SD", "Fiesta", 101, fecha2);
        assertEquals(Retorno.error3().resultado, retorno3.resultado);

        //aforo insuficiente y misma fecha
        Retorno retorno4 = miSistema.registrarEvento("ALLL80", "Reunión", 100, fecha1);
        assertEquals(Retorno.error3().resultado, retorno4.resultado);
    }

    //TESTEO REQUERIMIENTO 1.5 - OK
    @Test
    public void testRegistrarClienteOK() {
        //Completar para primera entrega
        Retorno retorno = miSistema.registrarCliente( "45678914","Juan Perez");
        assertEquals(Retorno.ok().resultado, retorno.resultado);
        
        retorno = miSistema.registrarCliente( "36498751","ana rodriguez");
        assertEquals(Retorno.ok().resultado, retorno.resultado);
    }

    //TESTEO REQUERIMIENTO 1.5 - ERROR1
    //Asumismos que la cedula es valida siendo numerica y con 8 digitos
    @Test
    public void testRegistrarClienteERROR1() {
        //Completar para primera entrega
        //Test con 9 digitos
        Retorno retorno = miSistema.registrarCliente( "456789147","Julio Cesar");
        assertEquals(Retorno.error1().resultado, retorno.resultado);
        //Test con 7 digitos
        retorno = miSistema.registrarCliente( "4567891","Marco Aurelio");
        assertEquals(Retorno.error1().resultado, retorno.resultado);
        //Test con 8 letras
        retorno = miSistema.registrarCliente( "asdfghjk","Cleopatra Nilo");
        assertEquals(Retorno.error1().resultado, retorno.resultado);
        //Test con letras y numeros
        retorno = miSistema.registrarCliente( "1234ghjk","Alejandro Magno");
        assertEquals(Retorno.error1().resultado, retorno.resultado);
        //Test con simbolos
        retorno = miSistema.registrarCliente( "!¡?¿#@_-", "Pompeyo Magno");
        assertEquals(Retorno.error1().resultado, retorno.resultado);
        //Test con simbolos y letras
        retorno = miSistema.registrarCliente( "!@#abcde", "Trajano Romano");
        assertEquals(Retorno.error1().resultado, retorno.resultado);
        //Test con simbolos y numeros
        retorno = miSistema.registrarCliente( "!1234?86", "Marcus Ulpius Traianus");
        assertEquals(Retorno.error1().resultado, retorno.resultado);
        //Test con simbolos, numeros y letras
        retorno = miSistema.registrarCliente( "!1234abc", "Escipion El Africano");
        assertEquals(Retorno.error1().resultado, retorno.resultado);
    }

    //TESTEO REQUERIMIENTO 1.5 - ERROR2
    @Test
    public void testRegistrarClienteERROR2() {
        //Completar para primera entrega
        Retorno retorno = miSistema.registrarCliente( "45678914","Juan Perez");
        assertEquals(Retorno.ok().resultado, retorno.resultado);
        
        retorno = miSistema.registrarCliente( "45678914","Juan Perez");
        assertEquals(Retorno.error2().resultado, retorno.resultado);
        
    }

    //TESTEO REQUERIMIENTO 2.1 
    @Test
    public void testListarSalas() {
        //Completar para primera entrega
        miSistema.registrarSala("Sala Aire", 80);
        miSistema.registrarSala("Sala Fuego", 150);
        miSistema.registrarSala("Sala Agua", 200);
        miSistema.registrarSala("Sala Tierra", 100);
        miSistema.registrarSala("Sala Elemento", 1); //CASO BORDE - CAPACIDAD 1 (tenía que ser mayor a 0)
      
        Retorno retorno = miSistema.listarSalas();
        assertEquals(retorno.ok().resultado, retorno.resultado);
        
        String esperado = "sala elemento-1#sala tierra-100#sala agua-200#sala fuego-150#sala aire-80#";
        assertEquals(esperado, retorno.valorString);
        miSistema.listarSalas();
    }

    //TESTEO REQUERIMIENTO 2.2
    @Test
    public void testListarEventos() {
    miSistema.registrarSala("Sala Aire", 220);

    LocalDate fecha1 = LocalDate.of(2025, 12, 15);
    miSistema.registrarEvento("AAQ23", "Noche de gala", 100, fecha1);

    LocalDate fecha2 = LocalDate.of(2024, 12, 15);
    miSistema.registrarEvento("AZD456", "Tango feliz", 150, fecha2);

    LocalDate fecha3 = LocalDate.of(2023, 12, 15);
    miSistema.registrarEvento("AZK765", "Lectura", 200, fecha3);

    Retorno retorno = miSistema.listarEventos();
    System.out.println("Valor retornado: " + retorno.valorString);
    assertEquals(Retorno.ok().resultado, retorno.resultado);

    String esperado = "AAQ23-Noche de gala-sala aire-220-100-0#AZD456-Tango feliz-sala aire-220-150-0#AZK765-Lectura-sala aire-220-200-0#";
    assertEquals(esperado, retorno.valorString);
       
    }

    //TESTEO REQUERIMIENTO 2.3 
    @Test
    public void testListarClientes() {
        //Completar para primera entrega 
        
        miSistema.registrarCliente( "45678913","Julio Cesar");
        miSistema.registrarCliente( "35678982","Marco Aurelio");
        miSistema.registrarCliente( "15678965","Alejandro Magno");
        miSistema.registrarCliente( "55678956", "Pompeyo Magno");
        miSistema.registrarCliente( "49267892", "Escipion El Africano");
      
        Retorno retorno = miSistema.listarClientes();
        assertEquals(retorno.ok().resultado, retorno.resultado);
        String esperado = "15678965-Alejandro Magno#35678982-Marco Aurelio#45678913-Julio Cesar#49267892-Escipion El Africano#55678956-Pompeyo Magno#";
        assertEquals(esperado, retorno.valorString);
    }

    //TESTEO REQUERIMIENTO 2.4 
 @Test
    public void testEsSalaOptima() {
        String[][] vistaSala = {
        {"#", "#", "#", "#", "#", "#", "#"},
        {"#", "#", "X", "X", "X", "X", "#"},
        {"#", "O", "O", "X", "X", "X", "#"},
        {"#", "O", "O", "O", "O", "X", "#"},
        {"#", "O", "O", "X", "O", "O", "#"},
        {"#", "O", "O", "O", "O", "O", "#"},
        {"#", "X", "X", "O", "O", "O", "O"},
        {"#", "X", "X", "O", "O", "O", "X"},
        {"#", "X", "X", "O", "X", "X", "#"},
        {"#", "X", "X", "O", "X", "X", "#"},
        {"#", "#", "#", "O", "#", "#", "#"},
        {"#", "#", "#", "O", "#", "#", "#"}
    	};

	Retorno ret = miSistema.esSalaOptima(vistaSala);
    	assertEquals(Retorno.Resultado.OK, ret.resultado);
    	assertEquals("Es optimo", ret.valorString);
    }

}
