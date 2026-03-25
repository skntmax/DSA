package org.example.LamdaFtn;

// Lambda Expressions in Java (introduced in Java 8) let you write anonymous functions—small pieces of behavior you can pass around—using a compact syntax.
// Lambdas work with functional interfaces
//👉 Interface having exactly one abstract method

// Examples:
//        Runnable
//        Comparator
//        Callable
//        Predicate, Consumer, Supplier

//  ways 1 - by  lamba ftns
//  way 2 -  by  annonymous classes
//  way 3 -  by implementing functional interfaces
public class Main {

    public static void main(String[] args) {
        //  functional interfaces can be invoked  by three ways

        //  ways 1 - by  lamba ftns
        Students s = ()->  System.out.println("hi hello from students side, and this is custom implementation ");
        s.sayHello();


        //  way 2 -  by  annonymous classes
        Students s2 =  new Students() {
            @Override
            public void sayHello() {
                System.out.println("lamda ftns by annonymous classes ");
            }
        };
        s2.sayHello();

        //  way 3 -  by implemneting interfaces
        Students s3 =new StudentImp();
        s3.sayHello();


    }
}

//  way 3 -  by implementaion interfaces
class StudentImp implements Students {
    @Override
    public void sayHello() {
        System.out.println("by implemneting  Student functional interface");
    }
}

