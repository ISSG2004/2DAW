package conjuntonumeros;

public class ConjuntoEnteros {
    private boolean[] conjunto;

    public ConjuntoEnteros() {
        conjunto = new boolean[101]; // Inicializa el conjunto con 101 elementos (0 a 100)
    }

    public boolean esta(int numero) {
        if (numero < 0 || numero > 100) {
            return false; // El número está fuera del rango válido
        }
        return conjunto[numero];
    }

    public void insertarElemento(int numero) {
        if (numero >= 0 && numero <= 100) {
            conjunto[numero] = true;
        }
    }

    public void eliminarElemento(int numero) {
        if (numero >= 0 && numero <= 100) {
            conjunto[numero] = false;
        }
    }

    public String toStringConjunto() {
        StringBuilder sb = new StringBuilder();
        boolean first = true;

        for (int i = 0; i <= 100; i++) {
            if (conjunto[i]) {
                if (!first) {
                    sb.append(" ");
                }
                sb.append(i);
                first = false;
            }
        }

        if (sb.length() == 0) {
            return "---"; // Conjunto vacío
        }

        return sb.toString();
    }

    public boolean esIgualA(ConjuntoEnteros otroConjunto) {
        for (int i = 0; i <= 100; i++) {
            if (conjunto[i] != otroConjunto.conjunto[i]) {
                return false;
            }
        }
        return true;
    }

    public static ConjuntoEnteros union(ConjuntoEnteros conjunto1, ConjuntoEnteros conjunto2) {
        ConjuntoEnteros resultado = new ConjuntoEnteros();

        for (int i = 0; i <= 100; i++) {
            resultado.conjunto[i] = conjunto1.conjunto[i] || conjunto2.conjunto[i];
        }

        return resultado;
    }

    public static ConjuntoEnteros interseccion(ConjuntoEnteros conjunto1, ConjuntoEnteros conjunto2) {
        ConjuntoEnteros resultado = new ConjuntoEnteros();

        for (int i = 0; i <= 100; i++) {
            resultado.conjunto[i] = conjunto1.conjunto[i] && conjunto2.conjunto[i];
        }

        return resultado;
    }
}
