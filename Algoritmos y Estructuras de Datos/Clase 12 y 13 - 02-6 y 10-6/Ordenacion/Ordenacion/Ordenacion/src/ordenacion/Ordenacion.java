
package ordenacion;

/**
 *
 * @author Admin
 */
public class Ordenacion {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    }
    
 
    private static int maxPosVec (int[] v, int desde, int hasta){
        int maximo = Integer.MIN_VALUE ;
        int pos = 0;
        for(int i = desde; i <= hasta; i++){
           if(v[i] > maximo){
                maximo = v[i];
                pos = i;
            } 
        }
        return pos;
    }
    
    private static int minPosVec (int[] v, int desde, int hasta){
        int minimo = Integer.MAX_VALUE ;
        int pos = 0;
        for(int i = desde; i <= hasta; i++){
           if(v[i] < minimo){
                minimo = v[i];
                pos = i;
            } 
        }
        return pos;
    }
    
    
}
