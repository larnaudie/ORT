package sistema;


import sistema.entidades.Cliente;
import sistema.entidades.Pedido;
import sistema.entidades.Producto;
import sistema.tads.Lista;

/**
 *
 * @author Hugo Cepeda
 */
public class Sistema implements ISistema {
    
    private Lista<Cliente> clientes;
    private Lista<Producto> productos;
    private Lista<Pedido> pedidosPendientes;
    
    
    @Override
    public Retorno iniciarSistema() {
        clientes = new Lista<>();
        productos = new Lista<>();
        pedidosPendientes = new Lista<>();
        return (Retorno.ok());
        
    }

    // Retorno
    // OK - Alta procesada correctamente
    // ERROR1 - El producto ya existe
    // ERROR2 - Codigo > 0
    @Override
    public Retorno altaProducto(int codigo, String descripcion) {
        if (codigo <= 0){
            return (Retorno.error2());
        }
        
        // Buscar ya no existe
        Producto pBuq = new Producto();
        pBuq.setCodigo(codigo);
        
        Producto productoReal = productos.obtenerElemento(pBuq);
        if(productoReal != null){
            return (Retorno.error1());
        }
        
        pBuq.setDescripción(descripcion);
        productos.agregarInicio(pBuq);
        return (Retorno.ok());
    }

    @Override
    public Retorno altaCliente(String CI, String nombre, String direccion) {
        Cliente cBuq = new Cliente();
        cBuq.setCI(CI);
        
        Cliente clienteReal = clientes.obtenerElemento(cBuq);
        if(clienteReal != null){
            return (Retorno.error1());
        }
        
        cBuq.setNombre(nombre);
        cBuq.setDireccion(direccion);
        clientes.agregarInicio(cBuq);
        
        return (Retorno.ok());
    }
    
    
    @Override
    public Retorno registrarPedido(int codigoProducto, String clienteCI) {
        Cliente cBuq = new Cliente();
        cBuq.setCI(clienteCI);
        
        Cliente clienteReal = clientes.obtenerElemento(cBuq);
        if(clienteReal == null){
            return (Retorno.error1());
        }
        
        Producto pBuq = new Producto();
        pBuq.setCodigo(codigoProducto);
        
        Producto productoReal = productos.obtenerElemento(pBuq);
        if(productoReal == null){
            return (Retorno.error2());
        }
        
        Pedido nuevoPedido = new Pedido(clienteReal, productoReal);
        
        pedidosPendientes.agregarFinal(nuevoPedido);
        clienteReal.getPedidosCliente().agregarFinal(nuevoPedido);
        
        return (Retorno.ok());
    }

    // OK - formato del listado "Cliente: <CI> - Producto: <codigo> - Finalizado: <finalizado>#Cliente: <CI> - Producto: <codigo> - Finalizado: <finalizado>#
    @Override
    public Retorno listarPedidosCliente(String CI) {
        Cliente cBuq = new Cliente();
        cBuq.setCI(CI);
        
        Cliente clienteReal = clientes.obtenerElemento(cBuq);  
        if (clienteReal == null){
            return (Retorno.error1());
        }
        
        String reporte = clienteReal.getPedidosCliente().mostrar();
        
        Retorno ret = Retorno.ok();
        ret.valorString = reporte;
        return ret;
        
    }
    
    @Override
    public Retorno realizarSiguientePedido() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }



    @Override
    public Retorno bajaProducto(int codigo) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public Retorno bajaCliente(String CI) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public Retorno listarPedidosPendientes() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

}
