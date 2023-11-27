import java.util.InputMismatchException;
import java.util.Scanner;

public class Ejercicio17 {
    static Scanner teclado = new Scanner(System.in);

    public static void main(String[] args) {
        int numero;
        System.out.println("Introduce los grados farenheit como un número entero:");
        numero = pedirNum();
        System.out.printf("%d grados farenheit equivalen a %.2f grados centígrados.\n", num, centigrados(num));
        System.out.println("Introduce los grados centígrados como un número entero:");
        numero = pedirNum();
        System.out.printf("%d grados centígrados equivalen a %.2f grados farenheit.\n", num, farenheit(num));
    }

    public static double centigrados(int numero) {
        return 5.0 / 9.0 * (numero - 32);
    }

    public static double farenheit(int numero) {
        return 9.0 / 5.0 * numero + 32;
    }

    public static int pedirNum() {
        int numero;
        try {
            numero = teclado.nextInt();
        } catch (InputMismatchException e) {
            System.out.println("¡Introduce un número entero!");
            teclado.nextLine();
            return pedirNum();
        }
        teclado.nextLine();
        return numero;
    }
}