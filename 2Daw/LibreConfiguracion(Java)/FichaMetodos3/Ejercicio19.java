import java.util.ArrayList;
public class Ejercicio19 {
    public static boolean esPerfecto(int numero) {
        int suma = 1;

        for (int i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i == 0) {
                suma += i;
                if (i != numero / i) {
                    suma += numero / i;
                }
            }
        }

        return suma == numero;
    }

    public static ArrayList<Integer> encontrarNumerosPerfectos(int rangoInicio, int rangoFin) {
        ArrayList<Integer> numerosPerfectos = new ArrayList<>();

        for (int num = rangoInicio; num <= rangoFin; num++) {
            if (esPerfecto(num)) {
                numerosPerfectos.add(num);
                System.out.println(num + " es un número perfecto. Factores: " + obtenerFactores(num));
            }
        }

        return numerosPerfectos;
    }

    public static ArrayList<Integer> obtenerFactores(int numero) {
        ArrayList<Integer> factores = new ArrayList<>();
        factores.add(1);

        for (int i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i == 0) {
                factores.add(i);
                if (i != numero / i) {
                    factores.add(numero / i);
                }
            }
        }

        return factores;
    }

    public static void main(String[] args) {
        // Encontrar números perfectos en el rango de 1 a 1000
        ArrayList<Integer> numerosPerfectosEnRango = encontrarNumerosPerfectos(1, 1000);
        // Imprimir resultados
        System.out.println("Números perfectos encontrados: " + numerosPerfectosEnRango);
    }
}


