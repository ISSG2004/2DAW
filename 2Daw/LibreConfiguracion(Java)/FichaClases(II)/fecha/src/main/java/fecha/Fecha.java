package fecha;

/**
 * Fecha
 */
public class Fecha {
    private String dia;
    private String mes;
    private String anno;

    Fecha(Integer dia, Integer mes, Integer anno) {
        this.dia = String.valueOf(dia);
        this.mes = String.valueOf(mes);
        this.anno = String.valueOf(anno);
    }

    Fecha(Integer dia, String mes, Integer anno) {
        this.dia = String.valueOf(dia);
        this.mes = mes;
        this.anno = String.valueOf(anno);
    }

    Fecha(Integer dia, Integer anno) {
        this.dia = String.valueOf(dia);
        this.anno = String.valueOf(anno);
    }

    void mostrarFechaFormato1() {
        System.out.println(mes + " / " + dia + " / " + anno);
    }

    void mostrarFechaFormato2() {
        System.out.println(mes + " " + dia + ", " + anno);
    }

    void mostrarFechaFormato3() {
        System.out.println(dia + " " + anno);
    }
}