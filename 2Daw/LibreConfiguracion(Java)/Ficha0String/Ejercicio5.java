import java.util.Scanner;

public class Ejercicio5 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        String cadena;
        char caracterBuscar;
        System.out.println("Introduce una cadena");
        cadena = teclado.nextLine();
        System.out.print("Ingrese el carácter a buscar: ");
        char caracterBuscado = teclado.next().charAt(0);

        int contador = contarOcurrencias(cadena, caracterBuscado);

        System.out.println("El carácter '" + caracterBuscado + "' aparece " + contador + " veces en el texto.");
    }

    public static int contarOcurrencias(String texto, char caracterBuscado) {
        int contador = 0;
        int indice = texto.indexOf(caracterBuscado);

        while (indice != -1) {
            contador++;
            indice = texto.indexOf(caracterBuscado, indice + 1);
        }

        return contador;
    }
}
