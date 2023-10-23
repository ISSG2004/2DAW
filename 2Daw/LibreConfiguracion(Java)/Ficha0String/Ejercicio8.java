import java.util.Scanner;

public class Ejercicio8 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.println("Introduce un texto");
        String lineaDeTexto = teclado.nextLine();

        String[] palabras = lineaDeTexto.split(" ");

        System.out.println("Palabras que comienzan con 'ED':");
        for (int i = 0; i < palabras.length; i++) {

            if (palabras[i].startsWith("ED") || palabras[i].startsWith("ed")) {
                System.out.println(palabras[i]);
            }
        }
    }
}
