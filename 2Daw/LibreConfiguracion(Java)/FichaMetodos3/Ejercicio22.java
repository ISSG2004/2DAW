import java.util.Random;
import java.util.Scanner;

public class Ejercicio22 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int caras = 0;
        int cruces = 0;

        System.out.println("Bienvenido al Simulador de Lanzamiento de Monedas");

        while (true) {
            System.out.println("\nMenú:");
            System.out.println("1. Lanzar moneda");
            System.out.println("2. Salir");
            System.out.print("Seleccione una opción: ");

            int opcion = scanner.nextInt();

            switch (opcion) {
                case 1:
                    boolean resultado = tirar();
                    if (resultado) {
                        System.out.println("Cruz");
                        cruces++;
                    } else {
                        System.out.println("Cara");
                        caras++;
                    }
                    break;
                case 2:
                    System.out.println("Saliendo del programa. Resultados finales:");
                    System.out.println("Caras: " + caras);
                    System.out.println("Cruces: " + cruces);
                    return;
                default:
                    System.out.println("Opción no válida. Intente de nuevo.");
            }
        }
    }

    public static boolean tirar() {
        // Simular lanzamiento de moneda
        Random random = new Random();
        return random.nextBoolean();
    }
}
