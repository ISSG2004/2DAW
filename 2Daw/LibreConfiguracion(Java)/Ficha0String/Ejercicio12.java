import java.util.Scanner;

public class Ejercicio12 {
    public static void main(String[] args) {

        Scanner teclado = new Scanner(System.in);

        System.out.println("Introduce un texto");
        String lineaDeTexto = teclado.nextLine();

        lineaDeTexto = lineaDeTexto.toLowerCase();

        int[] contadorLetras = new int[26];

        for (int i = 0; i < lineaDeTexto.length(); i++) {
            char caracter = lineaDeTexto.charAt(i);
            if (Character.isLetter(caracter)) {
                int indice = caracter - 'a';
                contadorLetras[indice]++;
            }
        }
        System.out.println("Repeticiones de letras:");
        for (char letra = 'a'; letra <= 'z'; letra++) {
            int indice = letra - 'a';
            int cantidad = contadorLetras[indice];
            System.out.println(letra + ": " + cantidad);
        }
    }
}
