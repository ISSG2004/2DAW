import java.util.Scanner;

public class Ejercicio3 {
    static Scanner teclado = new Scanner(System.in);

    public static void main(String[] args) {
        String cadena1, cadena2;
        System.out.println("Escribe una palabra para compararla");
        cadena1 = teclado.nextLine();
        System.out.println("Ecribe otra palabra");
        cadena2 = teclado.nextLine();
        if (cadena1.compareTo(cadena2) > 0) {
            System.out.println(cadena1 + " es mayor que " + cadena2);
        } else if (cadena1.compareTo(cadena2) == 0) {
            System.out.println("Ambas cadenas tienen la misma longitud");
        } else {
            System.out.println(cadena2 + " es mayor que " + cadena1);
        }

    }
}
