import java.util.Random;
import java.util.Scanner;

public class Ejercicio26 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        char jugarDeNuevo;

        do {
            jugarAdivinaElNumero();
            System.out.print("¿Quieres jugar de nuevo? (s/n): ");
            jugarDeNuevo = scanner.next().charAt(0);
        } while (jugarDeNuevo == 's' || jugarDeNuevo == 'S');

        System.out.println("¡Gracias por jugar! Hasta luego.");
    }

    public static void jugarAdivinaElNumero() {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        int numeroAdivinar = random.nextInt(1000) + 1;
        int intento;
        boolean adivinado = false;

        System.out.println("Adivina un número entre 1 y 1000.");

        while (!adivinado) {
            System.out.print("Introduce tu intento: ");
            intento = scanner.nextInt();

            if (intento == numeroAdivinar) {
                System.out.println("¡Felicidades! ¡Adivinaste el número!");
                adivinado = true;
            } else if (intento < numeroAdivinar) {
                System.out.println("Demasiado bajo. ¡Inténtalo de nuevo!");
            } else {
                System.out.println("Demasiado alto. ¡Inténtalo de nuevo!");
            }
        }
    }
}

