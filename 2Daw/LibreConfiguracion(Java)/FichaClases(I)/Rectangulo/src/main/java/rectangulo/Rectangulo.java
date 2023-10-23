package rectangulo;
public class Rectangulo {
    //atributos
    private float longitud;
    private float anchura;
    //constructores
    Rectangulo(){
        this.longitud=1;
        this.anchura=1;
    }
    Rectangulo(float anchura,float longitud){
        this.longitud=longitud;
        this.anchura=anchura;
    }
    //getters y setters
    public float getLongitud() {
        return longitud;
    }
    public void setLongitud(float longitud) {
        if (verificarRango(longitud)) {
            this.longitud = longitud;
        } else {
            this.longitud=20;
        }
        
    }
    public float getAnchura() {
        return anchura;
    }
    public void setAnchura(float anchura) {
        if (verificarRango(anchura)) {
            this.anchura = anchura;
        } else {
            this.anchura = 20;        
        }
    }
    //metodos
    private boolean verificarRango(float numero){
        if (numero>=0&&numero<=20) {
            return true;
        } else {
            return false;
        }
    }
    float calcularPerimetro(){
        return((2*longitud)+(2*anchura));
    }
    float calcularArea(){
        return(longitud*anchura);
    }

}
    

