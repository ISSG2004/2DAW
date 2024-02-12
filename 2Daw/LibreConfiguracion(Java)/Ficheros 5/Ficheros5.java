import java.io.*;
import java.util.*;

public class Main {
    public static void Ficheros5(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Inserta un número entero:");
        int numArchivos = scanner.nextInt();
        crearArchivos(numArchivos);

        boolean salir = false;
        while (!salir) {
            mostrarMenu();
            int opcion = scanner.nextInt();
            switch (opcion) {
                case 1:
                    buscarMayor(numArchivos);
                    break;
                case 2:
                    buscarMenor(numArchivos);
                    break;
                case 3:
                    buscarMedia(numArchivos);
                    break;
                case 4:
                    buscarSuma(numArchivos);
                    break;
                case 5:
                    buscarNumero(numArchivos);
                    break;
                case 6:
                    salir = true;
                    break;
                default:
                    System.out.println("Opción no válida, por favor elige otra.");
                    break;
            }
        }
        scanner.close();
    }

    public static void mostrarMenu() {
        System.out.println("\n¿Qué quiere hacer con estos números?");
        System.out.println("1) Buscar el mayor (de entre todos los archivos)");
        System.out.println("2) Buscar el menor (de entre todos los archivos)");
        System.out.println("3) Buscar la media (de entre todos los archivos)");
        System.out.println("4) Buscar la suma (de entre todos los archivos)");
        System.out.println("5) Buscar un número concreto y decir en qué ficheros aparece");
        System.out.println("6) Salir");
        System.out.print("Ingrese su opción: ");
    }

    public static void crearArchivos(int numArchivos) {
        try {
            for (int i = 1; i <= numArchivos; i++) {
                FileWriter writer = new FileWriter(i + ".txt");
                BufferedWriter buffer = new BufferedWriter(writer);
                Random random = new Random();
                for (int j = 0; j < 5; j++) {
                    int numero = random.nextInt(100);
                    buffer.write(numero + "\n");
                }
                buffer.close();
            }
            System.out.println("Archivos creados exitosamente.");
        } catch (IOException e) {
            System.out.println("Error al crear los archivos.");
            e.printStackTrace();
        }
    }

    public static void buscarMayor(int numArchivos) {
        int mayor = Integer.MIN_VALUE;
        try {
            for (int i = 1; i <= numArchivos; i++) {
                FileReader reader = new FileReader(i + ".txt");
                BufferedReader buffer = new BufferedReader(reader);
                String linea;
                while ((linea = buffer.readLine()) != null) {
                    int numero = Integer.parseInt(linea);
                    mayor = Math.max(mayor, numero);
                }
                buffer.close();
            }
            System.out.println("El mayor número es: " + mayor);
        } catch (IOException e) {
            System.out.println("Error al leer los archivos.");
            e.printStackTrace();
        }
    }

    public static void buscarMenor(int numArchivos) {
        int menor = Integer.MAX_VALUE;
        try {
            for (int i = 1; i <= numArchivos; i++) {
                FileReader reader = new FileReader(i + ".txt");
                BufferedReader buffer = new BufferedReader(reader);
                String linea;
                while ((linea = buffer.readLine()) != null) {
                    int numero = Integer.parseInt(linea);
                    menor = Math.min(menor, numero);
                }
                buffer.close();
            }
            System.out.println("El menor número es: " + menor);
        } catch (IOException e) {
            System.out.println("Error al leer los archivos.");
            e.printStackTrace();
        }
    }

    public static void buscarMedia(int numArchivos) {
        int suma = 0;
        int totalNumeros = 0;
        try {
            for (int i = 1; i <= numArchivos; i++) {
                FileReader reader = new FileReader(i + ".txt");
                BufferedReader buffer = new BufferedReader(reader);
                String linea;
                while ((linea = buffer.readLine()) != null) {
                    int numero = Integer.parseInt(linea);
                    suma += numero;
                    totalNumeros++;
                }
                buffer.close();
            }
            double media = (double) suma / totalNumeros;
            System.out.println("La media de los números es: " + media);
        } catch (IOException e) {
            System.out.println("Error al leer los archivos.");
            e.printStackTrace();
        }
    }

    public static void buscarSuma(int numArchivos) {
        int suma = 0;
        try {
            for (int i = 1; i <= numArchivos; i++) {
                FileReader reader = new FileReader(i + ".txt");
                BufferedReader buffer = new BufferedReader(reader);
                String linea;
                while ((linea = buffer.readLine()) != null) {
                    int numero = Integer.parseInt(linea);
                    suma += numero;
                }
                buffer.close();
            }
            System.out.println("La suma de los números es: " + suma);
        } catch (IOException e) {
            System.out.println("Error al leer los archivos.");
            e.printStackTrace();
        }
    }

    public static void buscarNumero(int numArchivos) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingrese el número a buscar:");
        int numeroBuscar = scanner.nextInt();
        System.out.println("El número " + numeroBuscar + " aparece en los siguientes archivos:");
        try {
            for (int i = 1; i <= numArchivos; i++) {
                FileReader reader = new FileReader(i + ".txt");
                BufferedReader buffer = new BufferedReader(reader);
                String linea;
                int lineNumber = 1;
                while ((linea = buffer.readLine()) != null) {
                    int numero = Integer.parseInt(linea);
                    if (numero == numeroBuscar) {
                        System.out.println("Encontrado en el archivo " + i + ", línea " + lineNumber);
                    }
                    lineNumber++;
                }
                buffer.close();
            }
        } catch (IOException e) {
            System.out.println("Error al leer los archivos.");
            e.printStackTrace();
        }
    }
}
