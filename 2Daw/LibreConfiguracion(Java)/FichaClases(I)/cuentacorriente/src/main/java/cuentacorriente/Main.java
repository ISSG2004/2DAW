package cuentacorriente;

public class Main {
    public static void main(String[] args) {
        CuentaDeAhorros ahorrador1 = new CuentaDeAhorros(2000.00f);
        CuentaDeAhorros ahorrador2 = new CuentaDeAhorros(3000.00f);
        System.out.println("Interes anual ahorrador1: " + ahorrador1.calcularInteresMensual());
        System.out.println("Interes anual ahorrador2: " + ahorrador2.calcularInteresMensual());
    }
}