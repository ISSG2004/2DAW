public class Ejercicio10 {
    public static void main(String[] args) {
        System.out.println("Caracteres correspondientes a códigos de tres dígitos en el rango de 000 a 255:");

        for (int codigo = 0; codigo <= 255; codigo++) {
            char caracter = (char) codigo;

            System.out.println("Código: " + codigo + ", Carácter: " + caracter);
        }
    }
}
