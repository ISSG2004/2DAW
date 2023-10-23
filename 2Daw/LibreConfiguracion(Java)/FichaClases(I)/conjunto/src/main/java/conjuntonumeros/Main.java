package conjuntonumeros;

public class Main {
    public static void main(String[] args) {
        ConjuntoEnteros conjunto1 = new ConjuntoEnteros();
        ConjuntoEnteros conjunto2 = new ConjuntoEnteros();

        conjunto1.insertarElemento(3);
        conjunto1.insertarElemento(5);
        conjunto1.insertarElemento(7);

        conjunto2.insertarElemento(5);
        conjunto2.insertarElemento(7);
        conjunto2.insertarElemento(9);

        System.out.println("Conjunto 1: " + conjunto1.toStringConjunto());
        System.out.println("Conjunto 2: " + conjunto2.toStringConjunto());

        ConjuntoEnteros union = ConjuntoEnteros.union(conjunto1, conjunto2);
        ConjuntoEnteros interseccion = ConjuntoEnteros.interseccion(conjunto1, conjunto2);

        System.out.println("Unión: " + union.toStringConjunto());
        System.out.println("Intersección: " + interseccion.toStringConjunto());

        System.out.println("¿Conjunto 1 es igual a Conjunto 2? " + conjunto1.esIgualA(conjunto2));
    }
}