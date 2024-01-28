import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class Ficheros3 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicitar el nombre del archivo
        System.out.print("Ingrese el nombre del archivo: ");
        String nombreArchivo = scanner.nextLine();

        // Menú
        System.out.println("1) Leer y mostrar el archivo");
        System.out.println("2) Escribir al final del archivo");
        System.out.println("3) Triturar el archivo");
        System.out.print("Seleccione una opción (1/2/3): ");

        int opcion = scanner.nextInt();
        scanner.nextLine(); // Consumir el salto de línea

        switch (opcion) {
            case 1:
                leerYMostrarArchivo(nombreArchivo);
                break;
            case 2:
                escribirAlFinalDelArchivo(nombreArchivo);
                break;
            case 3:
                triturarArchivo(nombreArchivo);
                break;
            default:
                System.out.println("Opción no válida");
        }

        scanner.close();
    }

    private static void leerYMostrarArchivo(String nombreArchivo) {
        try (BufferedReader br = new BufferedReader(new FileReader(nombreArchivo))) {
            String linea;
            while ((linea = br.readLine()) != null) {
                System.out.println(linea);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void escribirAlFinalDelArchivo(String nombreArchivo) {
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(nombreArchivo, true))) {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Ingrese la frase o dato a añadir al final del archivo: ");
            String frase = scanner.nextLine();
            bw.write(frase);
            bw.newLine();
            System.out.println("Frase agregada exitosamente al final del archivo.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void triturarArchivo(String nombreArchivo) {
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(nombreArchivo))) {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Ingrese la frase o dato para triturar el archivo: ");
            String frase = scanner.nextLine();
            bw.write(frase);
            bw.newLine();
            System.out.println("Archivo triturado exitosamente.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
