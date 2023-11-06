import java.util.Scanner;

public class Ejercicio10 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese la longitud del primer lado (lado1): ");
        double lado1 = scanner.nextDouble();

        System.out.print("Ingrese la longitud del segundo lado (lado2): ");
        double lado2 = scanner.nextDouble();

        double hipotenusa = calcularHipotenusa(lado1, lado2);

        System.out.println("La longitud de la hipotenusa es: " + hipotenusa);
    }

    // Método para calcular la hipotenusa de un triángulo rectángulo
    public static double calcularHipotenusa(double lado1, double lado2) {
        // Aplicando el teorema de Pitágoras: hipotenusa^2 = lado1^2 + lado2^2
        double hipotenusa = Math.sqrt(Math.pow(lado1, 2) + Math.pow(lado2, 2));
        return hipotenusa;
    }
}
