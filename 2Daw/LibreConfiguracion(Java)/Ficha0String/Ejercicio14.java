import java.util.Scanner;

public class Ejercicio14 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.println("Introduce la fecha en el formato dd/MM/yyyy:");
        String fechaString = teclado.nextLine();
        String[] fecha = fechaString.split("/");
        if (fecha.length != 3) {
            System.out.println("Formato de fecha incorrecto. Debe ser dd/MM/yyyy.");
            return;
        }

        int dia, mes, anio;

        try {
            dia = Integer.parseInt(fecha[0]);
            mes = Integer.parseInt(fecha[1]);
            anio = Integer.parseInt(fecha[2]);
        } catch (NumberFormatException e) {
            System.out.println("Formato de fecha incorrecto. Los componentes deben ser números.");
            return;
        }

        String[] meses = {
                "enero", "febrero", "marzo", "abril", "mayo", "junio",
                "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
        };

        if (dia < 1 || dia > 31 || mes < 1 || mes > 12) {
            System.out.println("Fecha inválida.");
            return;
        }
        System.out.println("Fecha en el segundo formato: " + dia + " de " + meses[mes - 1] + " de " + anio);
    }
}
