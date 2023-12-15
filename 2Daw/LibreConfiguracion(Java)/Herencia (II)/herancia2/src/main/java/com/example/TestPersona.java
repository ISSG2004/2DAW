package com.example;
public class TestPersona {
    public static void main(String[] args) {
        Persona persona = new Persona("2222222B", 175,22);
        System.out.println("Objeto de persona al que le entran por parametros datos");
        System.out.println(persona.nif);
        System.out.println(persona.altura);
        System.out.println(persona.edad);
        System.out.println("Objeto de persona utilizando el ocnstructor por defecto");
        Persona persona1 = new Persona();
        System.out.println(persona1.nif);
        System.out.println(persona1.altura);
        System.out.println(persona1.edad);
    }
}