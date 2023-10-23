import java.util.Scanner;

public class Ejercicio16 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        boolean salir = false;
        byte opcion = 0;
        do {
            System.out.println("1 español a morse");
            System.out.println("2 morse a español");
            System.out.println("0 salir");
            opcion = teclado.nextByte();
            switch (opcion) {
                case 1:
                    españolMorse();
                    break;
                case 2:
                    morseEspañol();
                    break;
                case 0:
                    salir = true;
                    break;
                default:
                    break;
            }
        } while (salir == false);
    }

    public static void españolMorse() {
        Scanner teclado = new Scanner(System.in);
        String frase = new String(" ");
        String fraseMorse = new String(" ");
        System.out.println("Introduce una frase y la convertiré a morse");
        frase = teclado.nextLine();
        frase = frase.toUpperCase();
        for (int i = 0; i < frase.length(); i++) {
            switch (frase.charAt(i)) {
                case ' ':
                    fraseMorse = fraseMorse + ("   ");
                    break;
                case 'A':
                    fraseMorse = fraseMorse + (" .- ");
                    break;
                case 'B':
                    fraseMorse = fraseMorse + (" -... ");
                    break;
                case 'C':
                    fraseMorse = fraseMorse + (" -.-. ");
                    break;
                case 'D':
                    fraseMorse = fraseMorse + (" -.. ");
                    break;
                case 'E':
                    fraseMorse = fraseMorse + (" . ");
                case 'F':
                    fraseMorse = fraseMorse + (" ..-. ");
                case 'G':
                    fraseMorse = fraseMorse + (" --. ");
                    break;
                case 'H':
                    fraseMorse = fraseMorse + (" .... ");
                    break;
                case 'I':
                    fraseMorse = fraseMorse + (" .. ");
                    break;
                case 'J':
                    fraseMorse = fraseMorse + (" .--- ");
                    break;
                case 'K':
                    fraseMorse = fraseMorse + (" -.- ");
                    break;
                case 'L':
                    fraseMorse = fraseMorse + (" .-.. ");
                    break;
                case 'M':
                    fraseMorse = fraseMorse + (" -- ");
                    break;
                case 'N':
                    fraseMorse = fraseMorse + (" -. ");
                    break;
                case 'O':
                    fraseMorse = fraseMorse + (" --- ");
                    break;
                case 'P':
                    fraseMorse = fraseMorse + (" .--. ");
                    break;
                case 'Q':
                    fraseMorse = fraseMorse + (" --.- ");
                    break;
                case 'R':
                    fraseMorse = fraseMorse + (" .-. ");
                    break;
                case 'S':
                    fraseMorse = fraseMorse + (" ... ");
                case 'T':
                    fraseMorse = fraseMorse + (" - ");
                    break;
                case 'U':
                    fraseMorse = fraseMorse + (" ..- ");
                    break;
                case 'V':
                    fraseMorse = fraseMorse + (" ...- ");
                    break;
                case 'W':
                    fraseMorse = fraseMorse + (" .-- ");
                    break;
                case 'X':
                    fraseMorse = fraseMorse + (" -..- ");
                    break;
                case 'Y':
                    fraseMorse = fraseMorse + (" -.-- ");
                    break;
                case 'Z':
                    fraseMorse = fraseMorse + (" --.. ");
                    break;
                case '0':
                    fraseMorse = fraseMorse + (" .---- ");
                    break;
                case '1':
                    fraseMorse = fraseMorse + (" ..--- ");
                    break;
                case '2':
                    fraseMorse = fraseMorse + (" ...-- ");
                    break;
                case '3':
                    fraseMorse = fraseMorse + (" ....- ");
                    break;
                case '4':
                    fraseMorse = fraseMorse + (" ..... ");
                    break;
                case '5':
                    fraseMorse = fraseMorse + (" -.... ");
                    break;
                case '6':
                    fraseMorse = fraseMorse + (" --... ");
                    break;
                case '7':
                    fraseMorse = fraseMorse + (" ---.. ");
                    break;
                case '8':
                    fraseMorse = fraseMorse + (" ----. ");
                    break;
                case '9':
                    fraseMorse = fraseMorse + (" ----- ");
                    break;
                default:
                    frase = fraseMorse + ("+");
            }

        }
        System.out.println(fraseMorse);
    }

    public static void morseEspañol() {
        Scanner teclado = new Scanner(System.in);
        String convertido = new String("");
        int longitud;
        String caracter;
        String morse[];
        System.out.println(
                "Dime la longitud del morse\nSi al convertirlo sale un simbolo + es porque el caracter introducido está mal");
        longitud = teclado.nextInt();
        teclado.nextLine();
        morse = new String[longitud];
        for (int i = 0; i < longitud; i++) {
            System.out.println("Introduceme el caracter en morse");
            caracter = teclado.nextLine();
            while (caracter.length() > 5) {
                System.out.println("El caracter es muy largo, introduce uno que sea valido");
                caracter = teclado.nextLine();
            }
            morse[i] = caracter;
        }
        for (int i = 0; i < longitud; i++) {
            switch (morse[i]) {
                case " ":
                    convertido = convertido + " ";
                    break;
                case ".-":
                    convertido = convertido + "a";
                    break;
                case "-...":
                    convertido = convertido + "b";
                    break;
                case "-.-.":
                    convertido = convertido + "c";
                    break;
                case "-..":
                    convertido = convertido + "d";
                    break;
                case " . ":
                    convertido = convertido + "e";
                    break;
                case "..-.":
                    convertido = convertido + "f";
                    break;
                case "--.":
                    convertido = convertido + "g";
                    break;
                case "....":
                    convertido = convertido + "h";
                    break;
                case "..":
                    convertido = convertido + "i";
                    break;
                case ".---":
                    convertido = convertido + "j";
                    break;
                case "-.-":
                    convertido = convertido + "k";
                    break;
                case ".-..":
                    convertido = convertido + "l";
                    break;
                case "--":
                    convertido = convertido + "m";
                    break;
                case "-.":
                    convertido = convertido + "n";
                    break;
                case "---":
                    convertido = convertido + "o";
                    break;
                case ".--.":
                    convertido = convertido + "p";
                    break;
                case "--.-":
                    convertido = convertido + "q";
                    break;
                case ".-.":
                    convertido = convertido + "r";
                    break;
                case "...":
                    convertido = convertido + "s";
                    break;
                case "-":
                    convertido = convertido + "t";
                    break;
                case "..-":
                    convertido = convertido + "u";
                    break;
                case "...-":
                    convertido = convertido + "v";
                    break;
                case ".--":
                    convertido = convertido + "w";
                    break;
                case "-..-":
                    convertido = convertido + "x";
                    break;
                case "-.--":
                    convertido = convertido + "y";
                    break;
                case "--..":
                    convertido = convertido + "z";
                    break;
                case ".----":
                    convertido = convertido + "0";
                    break;
                case "..---":
                    convertido = convertido + "1";
                    break;
                case "...--":
                    convertido = convertido + "2";
                    break;
                case "....-":
                    convertido = convertido + "3";
                    break;
                case ".....":
                    convertido = convertido + "4";
                    break;
                case "-....":
                    convertido = convertido + "5";
                    break;
                case "--...":
                    convertido = convertido + "6";
                    break;
                case "---..":
                    convertido = convertido + "7";
                    break;
                case "----.":
                    convertido = convertido + "8";
                    break;
                case "-----":
                    convertido = convertido + "9";
                    break;
                default:
                    convertido = convertido + "+";
                    break;
            }
        }
        System.out.println(convertido);
    }
}
