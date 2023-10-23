import java.util.Scanner;

public class Ejercicio13 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        String frase = new String("");
        int letra1 = 0, letra2 = 0, letra3 = 0, letra4 = 0, letra5 = 0, letra6 = 0, letra7 = 0;
        System.out.println("Introduce una frase");
        frase = teclado.nextLine();
        String palabras[] = frase.split(" ");
        for (int i = 0; i < palabras.length; i++) {
            palabras[i].length();
            switch (palabras[i].length()) {
                case 1:
                    letra1++;
                    break;
                case 2:
                    letra2++;
                    break;
                case 3:
                    letra3++;
                    break;
                case 4:
                    letra4++;
                    break;
                case 5:
                    letra5++;
                    break;
                case 6:
                    letra6++;
                    break;
                default:
                    letra7++;
                    break;
            }
        }
        System.out.println("Hay " + letra1 + " de 1 letra");
        System.out.println("Hay " + letra2 + " de 2 letras");
        System.out.println("Hay " + letra3 + " de 3 letras");
        System.out.println("Hay " + letra4 + " de 4 letras");
        System.out.println("Hay " + letra5 + " de 5 letras");
        System.out.println("Hay " + letra6 + " de 6 letras");
        System.out.println("Hay " + letra7 + " de 7 o más letras");
    }
}
