import java.util.Scanner;

public class Ejercicio6 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Ingrese una línea de texto: ");
        String texto = teclado.nextLine();

        texto = texto.toLowerCase();

        int[] contadorLetras = new int[26];

        for (int i = 0; i < texto.length(); i++) {
            char caracter = texto.charAt(i);
            if (Character.isLetter(caracter)) {
                int indice = caracter - 'a';
                contadorLetras[indice]++;
            }
        }

        System.out.println("Letra\tOcurrencias");
        for (int i = 0; i < contadorLetras.length; i++) {
            char letra = (char) ('a' + i);
            int ocurrencias = contadorLetras[i];
            System.out.println(letra + "\t" + ocurrencias);
        }
    }
}
