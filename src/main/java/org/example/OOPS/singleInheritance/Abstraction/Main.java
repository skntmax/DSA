package org.example.OOPS.singleInheritance.Abstraction;

public class Main {

    public static void main(String[] args) {
        Vhicle car1 = new Car("honda");
        Vhicle bike1 = new Bike("yamaha");

        car1.start();
        car1.stop();

        bike1.start();
        bike1.stop();

    }
}
