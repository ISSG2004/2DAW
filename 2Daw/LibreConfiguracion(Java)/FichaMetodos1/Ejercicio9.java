import java.util.Scanner;

public class Ejercicio9 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese la base (entero): ");
        int base = scanner.nextInt();

        System.out.print("Ingrese el exponente (entero positivo): ");
        int exponente = scanner.nextInt();

        if (exponente < 0) {
            System.out.println("El exponente debe ser un entero positivo.");
        } else {
            int resultadoIterativo = enteroPotencia(base, exponente);
            int resultadoRecursivo = enteroPotenciaRecursivo(base, exponente);

            System.out.println("Resultado (Iterativo): " + resultadoIterativo);
            System.out.println("Resultado (Recursivo): " + resultadoRecursivo);
        }
    }

    // Método para calcular la potencia de un número de manera iterativa
    public static int enteroPotencia(int base, int exponente) {
        int resultado = 1;
        for (int i = 0; i < exponente; i++) {
            resultado *= base;
        }
        return resultado;
    }

    // Método para calcular la potencia de un número de forma recursiva
    public static int enteroPotenciaRecursivo(int base, int exponente) {
        if (exponente == 0) {
            return 1;
        } else {
            return base * enteroPotenciaRecursivo(base, exponente - 1);
        }
    }
}
