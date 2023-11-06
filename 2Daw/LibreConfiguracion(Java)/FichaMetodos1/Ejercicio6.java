import java.util.ArrayList;
import java.util.Scanner;

public class Ejercicio6 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double totalRecibos = 0;

        System.out.println("Bienvenido al sistema de estacionamiento");
        System.out.println("Ingrese las horas de estacionamiento para cada cliente (o -1 para salir):");

        double tarifaMinima = 2.0; // Cuota mínima por hasta 3 horas
        double tarifaHoraExtra = 0.5; // Tarifa por cada hora o fracción adicional
        double tarifaMaxima = 10.0; // Tarifa máxima por 24 horas

        double horasEstacionadas;
        do {
            System.out.print("Horas estacionadas (-1 para salir): ");
            horasEstacionadas = scanner.nextDouble();

            if (horasEstacionadas != -1) {
                double pago = calcularPago(horasEstacionadas, tarifaMinima, tarifaHoraExtra, tarifaMaxima);
                totalRecibos += pago;
                System.out.printf("Pago para %.2f horas: %.2f€\n", horasEstacionadas, pago);
            }
        } while (horasEstacionadas != -1);

        System.out.printf("Total de recibos de ayer: %.2f€\n", totalRecibos);
    }

    // Método para calcular el pago basado en las tarifas
    public static double calcularPago(double horas, double tarifaMinima, double tarifaHoraExtra, double tarifaMaxima) {
        if (horas <= 3) {
            return tarifaMinima;
        } else if (horas <= 24) {
            return tarifaMinima + (horas - 3) * tarifaHoraExtra;
        } else {
            return tarifaMaxima;
        }
    }
}
