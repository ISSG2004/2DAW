package cuentacorriente;

public class CuentaDeAhorros {
    // atributos
    static float tasaInteresesAnual;
    private float saldoAhorros;

    // Constructores
    public CuentaDeAhorros() {
        this.saldoAhorros = 0;
        this.tasaInteresesAnual = 4;
    }

    public CuentaDeAhorros(float saldoAhorros) {
        this.saldoAhorros = saldoAhorros;
        this.tasaInteresesAnual = tasaInteresesAnual;
    }

    // getters y setters
    public float getSaldoAhorros() {
        return saldoAhorros;
    }

    public void setSaldoAhorros(float saldoAhorros) {
        this.saldoAhorros = saldoAhorros;
    }

    // metodos
    public float calcularInteresMensual() {
        return ((this.saldoAhorros * tasaInteresesAnual) / 12);
    }

    static float modificarTasaInteres(float tasaInteres) {
        return tasaInteres;
    }

}
