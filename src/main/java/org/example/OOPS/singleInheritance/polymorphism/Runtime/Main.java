package org.example.OOPS.singleInheritance.polymorphism.Runtime;



//2. Runtime Polymorphism (Dynamic Binding)
//
//Also called:
//
//Method Overriding
//
//Dynamic Polymorphism
//
//✔️ Definition:
//
//When the method call is resolved at runtime, it is called runtime polymorphism.
//
//        ✔️ How it works:
//
//A subclass provides a specific implementation of a method already defined in the parent class.


//Happens at runtime
//
//Method Overriding
//
//Requires inheritance
//
//Uses dynamic method dispatch
//
//Slightly slower than compile-time

class Animal {
    String animalName;

    Animal(String  animalName){
         this.animalName = animalName;
    }

    void   walk() {
        System.out.println(this.animalName+"  walks");
    }
}

class Dog extends  Animal {
    Dog(String name) {
         super(name);
    }

}

class Cat extends  Animal {
    Cat(String name) {
        super(name);
    }

    // method ovveriding
    @Override
    void   walk() {
        System.out.println(this.animalName+"walks like meow meow ");
    }
}

public class Main {

    public static void main(String[] args) {
        Dog d1 = new Dog("santy");
        Cat c1 = new Cat("nay");

        d1.walk();
        c1.walk();
    }
}
