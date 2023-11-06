import java.util.Scanner;

public class Ejercicio11 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.print("Ingrese el primer entero (o -1 para salir): ");
            int primero = scanner.nextInt();

            if (primero == -1) {
                break;
            }

            System.out.print("Ingrese el segundo entero: ");
            int segundo = scanner.nextInt();

            boolean esMultiplo = esMultiplo(primero, segundo);

            if (esMultiplo) {
                System.out.println(segundo + " es múltiplo de " + primero);
            } else {
                System.out.println(segundo + " no es múltiplo de " + primero);
            }
        }

        System.out.println("Programa finalizado.");
    }

    // Método para determinar si el segundo entero es múltiplo del primero
    public static boolean esMultiplo(int primero, int segundo) {
        return segundo % primero == 0;
    }
}
