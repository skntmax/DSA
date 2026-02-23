package org.example.OOPS.singleInheritance.polymorphism;

public class Cat extends    AnimalClass {

    public Cat(String name) {
        super(name);
    }

    public static void main(String[] args) {
        Cat cat = new Cat("catty1");
        cat.speak();
    }

    @Override
    public void speak() {
        System.out.println("cat speak  meow meow  ");
    }


}


