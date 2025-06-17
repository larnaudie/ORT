
package sistema.entidades;

/**
 *
 * @author Hugo Cepeda
 */
public class Producto {
    
    private int codigo;
    private String descripción;

    public Producto(){
    }
    
    public Producto(int codigo, String descripción) {
        this.codigo = codigo;
        this.descripción = descripción;
    }

    
    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public String getDescripción() {
        return descripción;
    }

    public void setDescripción(String descripción) {
        this.descripción = descripción;
    }

    @Override
    public boolean equals(Object obj) {
        if (!(obj instanceof Producto)){
            return false;
        }
        if (obj == null){
            return false;
        }
        
        return this.codigo == ((Producto)obj).getCodigo();
    }
    
    
    
}
