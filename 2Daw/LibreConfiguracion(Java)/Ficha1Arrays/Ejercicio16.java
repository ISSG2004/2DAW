import java.util.Scanner;
public class Ejercicio16 {
    public static void main(String[] args) {
        int[][] ventas = new int[5][4];
        Scanner scanner = new Scanner(System.in);

        for (int vendedor = 1; vendedor <= 4; vendedor++) {
            for (int producto = 1; producto <= 5; producto++) {
                System.out.print("Ingrese las ventas del vendedor " + vendedor + " para el producto " + producto + ": ");
                ventas[producto - 1][vendedor - 1] = scanner.nextInt();
            }
        }
        System.out.println("\nResumen de ventas del último mes:");
        System.out.println("Producto | Vendedor 1 | Vendedor 2 | Vendedor 3 | Vendedor 4 | Total Producto");

        for (int producto = 0; producto < 5; producto++) {
            int totalProducto = 0;
            System.out.print("    " + (producto + 1) + "    |");
            for (int vendedor = 0; vendedor < 4; vendedor++) {
                System.out.print("    " + ventas[producto][vendedor] + "     |");
                totalProducto += ventas[producto][vendedor];
            }
            System.out.println("    " + totalProducto);
        }
        System.out.print("Total Vendedor ");
        int totalVendedor;
        int totalGeneral = 0;
        for (int vendedor = 0; vendedor < 4; vendedor++) {
            totalVendedor = 0;
            for (int producto = 0; producto < 5; producto++) {
                totalVendedor += ventas[producto][vendedor];
            }
            System.out.print("    " + totalVendedor + "     ");
            totalGeneral += totalVendedor;
        }
        System.out.println("    " + totalGeneral);
    }
}


