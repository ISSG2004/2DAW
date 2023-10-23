import java.util.Scanner;

public class Ejercicio4 {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.println("Escribe una frase");
        String frase = teclado.nextLine();
        System.out.println("cadena en mayuscula--> " + frase.toUpperCase());
        System.out.println("cadena en minuscula--> " + frase.toLowerCase());
    }
}
