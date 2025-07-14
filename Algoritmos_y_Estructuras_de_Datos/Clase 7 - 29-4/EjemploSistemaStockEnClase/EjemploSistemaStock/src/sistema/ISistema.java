

package sistema;

/**
 *
 * @author Hugo Cepeda
 */
public interface ISistema {
    
    // Retorno
    // OK - Sistema iniciado correctamente
    public Retorno iniciarSistema();

    // Retorno
    // OK - Alta procesada correctamente
    // ERROR1 - El producto ya existe
    public Retorno altaProducto(int codigo, String descripcion);
    
    // Retorno
    // OK - Baja procesada correctamente
    // ERROR1 - El producto no existe en el sistema
    public Retorno bajaProducto(int codigo);

   
    // Retorno
    // OK - Alta procesada correctamente
    // ERROR1 - El cliente ya existe en el sistema
    public Retorno altaCliente(String CI,String nombre,String direccion);
    
    // Retorno
    // OK - Baja procesada correctamente
    // ERROR1 - El cliente NO existe en el sistema
    public Retorno bajaCliente(String CI);

    
    // Retorno
    // OK - Se registró un nuevo pedido en el sistema
    // ERROR1 - El cliente NO existe en el sistema
    // ERROR2 - El producto NO existe en el sistema
    public Retorno registrarPedido(int codigoProducto, String clienteCI);
    

    // Retorno
    // OK - formato del listado "Cliente: <CI> - Producto: <codigo> - Finalizado: <finalizado>#Cliente: <CI> - Producto: <codigo> - Finalizado: <finalizado>#
    public Retorno listarPedidosCliente(String CI);
    
    // OK - formato del listado "Cliente: <CI> - Producto: <codigo> - Finalizado: <finalizado>#Cliente: <CI> - Producto: <codigo> - Finalizado: <finalizado>#
    public Retorno listarPedidosPendientes();

    // OK - Se procesó el siguiente pedido: se eliminó de pedidos pendientes y se marcó como finalizado
    // ERROR1 - No existen pedidos pendientes
    public Retorno realizarSiguientePedido();

    
}
