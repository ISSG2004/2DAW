
/**
 * EjerciciosRepasoString 
 *Pedir por teclado una cadena:
Mostrar menú:
Mostrarla al revés
Contar el nº de vocales
Contar el nº de consonantes
Pasar todo a minúscula
Pasar todo a mayúscula
Decir si es palíndroma
 */
import java.util.Scanner;

public class EjerciciosStringIsmaelSanchez {// Ismael Sanchez
    static Scanner teclado = new Scanner(System.in);

    public static void main(String[] args) {
        menu();
    }

    public static void menu() {
        String palabra = new String("");
        int opcion;
        do {
            System.out.println("Escribe una cadena para utilizarla, Introduciendo salir sales del juego");
            palabra = teclado.nextLine();
            if (!palabra.equalsIgnoreCase("salir")) {
                System.out.println("La cadena introducida ha sido " + palabra);
                System.out.println("Introduce un numero para realizar una operacion");
                System.out.println("1.Invertir la cadena");
                System.out.println("2.Contar las vocales");
                System.out.println("3.Contar las consonantes");
                System.out.println("4.Convertir a minuscula");
                System.out.println("5.Convertir a mayuscula");
                System.out.println("6.Comprobar si la palabra es palindroma");
                palabra = palabra.toLowerCase();
                palabra = palabra.trim();
                opcion = teclado.nextInt();
                switch (opcion) {
                    case 1:
                        System.out.println(invertirString(palabra));
                        teclado.nextLine();
                        break;
                    case 2:
                        System.out.println("La palabra tiene " + contarVocales(palabra) + " vocales");
                        teclado.nextLine();
                        break;
                    case 3:
                        System.out.println("La palabra tiene " + contarConsonantes(palabra) + " consonantes");
                        teclado.nextLine();
                        break;
                    case 4:
                        System.out.println(convertirMinusculas(palabra));
                        teclado.nextLine();
                        break;
                    case 5:
                        System.out.println(contarConsonantes(palabra));
                        teclado.nextLine();
                        break;

                    case 6:
                        System.out.println("La palabra es palindroma? " + esPalindroma(palabra));
                        teclado.nextLine();
                        break;
                    default:
                        break;
                }
            }

        } while (!palabra.equalsIgnoreCase("salir"));
    }

    public static String invertirString(String cadena) {
        String cadena2 = new String();
        for (int i = cadena.length() - 1; i >= 0; i--) {
            cadena2 = cadena2 + cadena.charAt(i);
        }
        return cadena2;
    }

    public static int contarVocales(String cadena) {
        int contador = 0;
        Character caracter;
        for (int i = 0; i < cadena.length(); i++) {
            caracter = cadena.charAt(i);
            if (caracter == 'a' || caracter == 'e' || caracter == 'o' || caracter == 'i' || caracter == 'u') {
                contador++;
            }
        }
        return contador;
    }

    public static int contarConsonantes(String cadena) {
        int contador = 0;
        Character caracter;
        for (int i = 0; i < cadena.length(); i++) {
            caracter = cadena.charAt(i);
            if (caracter != 'a' || caracter != 'e' || caracter != 'o' || caracter != 'i' || caracter != 'u') {
                contador++;
            }
        }
        return contador;
    }

    public static String convertirMinusculas(String cadena) {
        return cadena.toLowerCase();
    }

    public static String convertirMayuculas(String cadena) {
        return cadena.toUpperCase();
    }

    public static boolean esPalindroma(String cadena) {
        boolean palindroma = false;
        String aux = new String();
        cadena = cadena.toLowerCase().replace("á", "a").replace("é", "e").replace("í", "i").replace("ó", "o")
                .replace("ú", "u").replace(" ", "").replace(".", "").replace(",", "");
        aux = new StringBuilder(cadena).reverse().toString();
        if (cadena.equals(aux)) {
            palindroma = true;
        }
        return palindroma;
    }
}