package com.example;
public class Persona {
    protected String nif;
    protected int altura;
    protected int edad;

    public Persona(){
        this.nif = "11111111A";
        this.altura=175;
        this.edad=25;
    }
    public Persona(String nif, int altura, int edad) {
        this.nif = nif;
        this.altura = altura;
        this.edad = edad;
    }

    public void hablar() {
        System.out.println("La persona habla bla bla.");
    }

    public void comer() {
        System.out.println("La persona come  ñam ñam.");
    }
}
    

