import java.util.Scanner;

public class Ejercicio9 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Introduce un texto");
        int codigo = teclado.nextInt();
        char caracter = (char) codigo;
        System.out.println("El carácter correspondiente al código " + codigo + " es: " + caracter);
    }
}
