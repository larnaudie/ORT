
import org.junit.*;
import sistema.Retorno;
import sistema.Sistema;
import static org.junit.Assert.*;
/**
 *

 */
public class ITest {
    
    private sistema.Sistema miSistema;
    
    public ITest() {
    }
    
    @Before
    public void setUp() {
        miSistema = new Sistema();
        miSistema.iniciarSistema();
    }

    @Test
    public void testAltaProductoOK() {
        Retorno ret = miSistema.altaProducto(20, "Televisores");
        assertEquals(Retorno.ok().resultado, ret.resultado);
    }
    
    @Test
    public void testAltaProductoERROR1() {
        Retorno ret = miSistema.altaProducto(20, "Televisores");
        assertEquals(Retorno.ok().resultado, ret.resultado);

        Retorno ret2 = miSistema.altaProducto(20, "Heladeras");
        assertEquals(Retorno.error1().resultado, ret2.resultado);

        
    }

    @Test
    public void testBajaProductoOK() {
    }
    
    @Test
    public void testBajaProductoERROR() {
    }
    
    @Test
    public void testAltaClienteOK() {
    }

    @Test
    public void testAltaClienteERROR() {
    }

    @Test
    public void testBajaClienteOK() {
    }

    @Test
    public void testBajaClienteERROR() {
    }
    
    
    @Test
    public void testRegistrarPedidoOK() {
    }
    
    @Test
    public void testRegistrarPedidoERROR() {
    }

    @Test
    public void testListarPedidosClienteOK() {
        // CARGA DE DATOS
        Retorno ret = miSistema.altaProducto(20, "Televisores");
        assertEquals(Retorno.ok().resultado, ret.resultado);

        Retorno ret2 = miSistema.altaProducto(25, "Heladeras");
        assertEquals(Retorno.ok().resultado, ret2.resultado);
        
        Retorno ret3 = miSistema.altaCliente("1234", "Pedro", "asdsa");
        assertEquals(Retorno.ok().resultado, ret3.resultado);
        
        Retorno ret4 = miSistema.altaCliente("1235", "Juan", "asdsa");
        assertEquals(Retorno.ok().resultado, ret4.resultado);
        
        Retorno ret5 = miSistema.registrarPedido(20, "1235");
        assertEquals(Retorno.ok().resultado, ret5.resultado);
        
        Retorno ret6 = miSistema.registrarPedido(25, "1235");
        assertEquals(Retorno.ok().resultado, ret6.resultado);
        
        
        // PRUEBA 
        
        Retorno ret7 = miSistema.listarPedidosCliente("1235");
        assertEquals(Retorno.ok().resultado, ret7.resultado);
        String resultadoListado="Cliente: 1235 - Producto: 20 - Finalizado:false#Cliente: 1235 - Producto: 25 - Finalizado:false#";
        assertEquals(resultadoListado, ret7.valorString);
        
        
        
    }
    
    @Test
    public void testListarPedidosPendientes() {
    
    }
    
    @Test
    public void testRealizarSiguientePedido() {
    }

    
}
