package sistema.entidades;


/**
 *
 * @author Hugo Cepeda
 */
public class Pedido {
    
    private Cliente cliente;
    private Producto producto;
    
    private boolean finalizado = false;

    public Pedido(Cliente cliente, Producto producto) {
        this.cliente = cliente;
        this.producto = producto;
    }

    public boolean isFinalizado() {
        return finalizado;
    }

    public void setFinalizado(boolean finalizado) {
        this.finalizado = finalizado;
    }


    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    @Override
    public String toString() {
        return "Cliente: " + this.getCliente().getCI() +  " - Producto: "+ this.producto.getCodigo() + " - Finalizado:" + finalizado;
    }
    
    
    
}
