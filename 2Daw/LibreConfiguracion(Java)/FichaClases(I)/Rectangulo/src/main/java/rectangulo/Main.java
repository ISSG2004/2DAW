package rectangulo;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Rectangulo rectangulo1=new Rectangulo();
        Scanner teclado=new Scanner(System.in);
        float base=0,altura=0;
        System.out.println("Introduce la base para el rectangulo");
        base=teclado.nextFloat();
        rectangulo1.setAnchura(base);
        System.out.println("Introduce la base para el rectangulo");
        altura=teclado.nextFloat();
        rectangulo1.setLongitud(altura);
        System.out.println("El perimetro del rectangulo es "+rectangulo1.calcularPerimetro());
        System.out.println("El area del rectangulo es "+rectangulo1.calcularArea());
    }
}