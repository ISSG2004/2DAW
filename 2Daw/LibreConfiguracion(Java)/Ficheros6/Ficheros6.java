import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

public class Ficheros6 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Preguntar al usuario la fecha para la entrada del diario
        System.out.print("Introduce la fecha para la entrada del diario (YYYY-MM-DD): ");
        String fecha = scanner.nextLine();

        // Preguntar al usuario por la entrada del diario
        System.out.println("Escribe tu entrada de diario (presiona INTRO para finalizar):");
        StringBuilder entrada = new StringBuilder();
        String linea;
        while (!(linea = scanner.nextLine()).isEmpty()) {
            entrada.append(linea).append("\n");
        }

        // Guardar la entrada del diario en el archivo de texto
        try {
            guardarEntradaEnDiario(fecha, entrada.toString());
            System.out.println("Entrada guardada en el diario.");
        } catch (IOException e) {
            System.err.println("Error al guardar la entrada en el diario: " + e.getMessage());
        }

        scanner.close();
    }

    public static void guardarEntradaEnDiario(String fecha, String entrada) throws IOException {
        FileWriter fileWriter = new FileWriter("diario.txt", true); // El true permite añadir al final del archivo
        PrintWriter printWriter = new PrintWriter(fileWriter);
        printWriter.println("\nFecha: " + fecha);
        printWriter.println(entrada);
        printWriter.close();
    }
}
