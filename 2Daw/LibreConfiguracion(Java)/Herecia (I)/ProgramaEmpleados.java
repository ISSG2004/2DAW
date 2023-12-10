class Empleado {
    private String nombre;
    private int edad;
    private double salario;
    public static final double PLUS = 300.0;

    public Empleado(String nombre, int edad, double salario) {
        this.nombre = nombre;
        this.edad = edad;
        this.salario = salario;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

    public void plus() {
        // Método genérico que puede ser sobreescrito en las clases hijas
    }

    @Override
    public String toString() {
        return "Nombre: " + nombre + ", Edad: " + edad + ", Salario: " + salario;
    }
}

class Comercial extends Empleado {
    private double comision;

    public Comercial(String nombre, int edad, double salario, double comision) {
        super(nombre, edad, salario);
        this.comision = comision;
    }

    public double getComision() {
        return comision;
    }

    public void setComision(double comision) {
        this.comision = comision;
    }

    @Override
    public void plus() {
        if (getEdad() > 30 && comision > 200) {
            setSalario(getSalario() + PLUS);
        }
    }

    @Override
    public String toString() {
        return super.toString() + ", Comisión: " + comision;
    }
}

class Repartidor extends Empleado {
    private String zona;

    public Repartidor(String nombre, int edad, double salario, String zona) {
        super(nombre, edad, salario);
        this.zona = zona;
    }

    public String getZona() {
        return zona;
    }

    public void setZona(String zona) {
        this.zona = zona;
    }

    @Override
    public void plus() {
        if (getEdad() < 25 && zona.equals("zona 3")) {
            setSalario(getSalario() + PLUS);
        }
    }

    @Override
    public String toString() {
        return super.toString() + ", Zona: " + zona;
    }
}

public class ProgramaEmpleados {
    public static void main(String[] args) {
        Comercial comercial1 = new Comercial("Juan", 35, 1500, 250);
        Repartidor repartidor1 = new Repartidor("Ana", 22, 1200, "zona 3");

        System.out.println("Antes del plus:");
        System.out.println(comercial1);
        System.out.println(repartidor1);

        comercial1.plus();
        repartidor1.plus();

        System.out.println("\nDespués del plus:");
        System.out.println(comercial1);
        System.out.println(repartidor1);
    }
}
