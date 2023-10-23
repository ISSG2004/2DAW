import java.util.Scanner;

public class Ejercicio15 {

    public static void main(String[] args) {
        boolean[] asientos = new boolean[10]; 
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("Por favor escriba 1 para Primera Clase o 2 para Económico: ");
            int eleccion = scanner.nextInt();

            if (eleccion == 1 || eleccion == 2) {
                int asientoAsignado = asignarAsiento(asientos, eleccion);
                if (asientoAsignado != -1) {
                    imprimirTarjetaEmbarque(eleccion, asientoAsignado);
                } else {
                    System.out.println("Lo sentimos, el avión está lleno. ¿Desea ser colocado en la otra sección? (1 para Sí, 2 para No): ");
                    int opcion = scanner.nextInt();
                    if (opcion == 1) {
                        eleccion = (eleccion == 1) ? 2 : 1; 
                        asientoAsignado = asignarAsiento(asientos, eleccion);
                        if (asientoAsignado != -1) {
                            imprimirTarjetaEmbarque(eleccion, asientoAsignado);
                        } else {
                            System.out.println("El próximo vuelo sale en 3 horas.");
                            break;
                        }
                    } else {
                        System.out.println("El próximo vuelo sale en 3 horas.");
                        break;
                    }
                }
            } else {
                System.out.println("Selección inválida. Por favor escriba 1 para Primera Clase o 2 para Económico.");
            }
        }

        scanner.close();
    }

    public static int asignarAsiento(boolean[] asientos, int seccion) {
        for (int i = (seccion == 1) ? 0 : 5; i < ((seccion == 1) ? 5 : 10); i++) {
            if (!asientos[i]) {
                asientos[i] = true; 
                return i + 1;
            }
        }
        return -1; 
    }

    public static void imprimirTarjetaEmbarque(int seccion, int asiento) {
        System.out.println("Tarjeta de Embarque");
        System.out.println("Sección: " + ((seccion == 1) ? "Primera Clase" : "Económico"));
        System.out.println("Asiento: " + asiento);
       
    }
}
