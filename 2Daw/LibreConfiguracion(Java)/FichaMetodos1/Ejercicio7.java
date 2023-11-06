import java.util.Scanner;

public class Ejercicio7 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese un valor double (o -1 para salir): ");
        double valor = scanner.nextDouble();

        while (valor != -1) {
            double redondeado = Math.floor(valor + 0.5);
            System.out.println("Número original: " + valor);
            System.out.println("Redondeado al entero más cercano: " + redondeado);

            System.out.print("\nIngrese otro valor double (o -1 para salir): ");
            valor = scanner.nextDouble();
        }

        System.out.println("Programa finalizado.");
    }
}
