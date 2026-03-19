package org.example.OOPS.singleInheritance.polymorphism.CompileType;

// compile time polymorphism

//1. Compile-Time Polymorphism (Static Binding)
//
//Also called:
//
//Method Overloading
//
//Static Polymorphism
//
//✔️ Definition:
//
//When the method call is resolved at compile time, it is called compile-time polymorphism.
//
//        ✔️ How it works:
//
//Same method name but different parameters (type, number, or order).



//✔️ Key Points:
//
//Happens at compile time
//
//Method Overloading
//
//Faster execution
//
//No inheritance required
//


public class Main {

    public static void main(String[] args) {

    }

    public int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

}
