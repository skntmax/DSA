package org.example.OOPS.singleInheritance.Abstraction;
// Abstraction means hiding implementation details and showing only essential behavior.


// vhicle is the main class , ans bike , car is it's subclasses and acting as abstration layer

abstract  public class Vhicle {

    public  String  vhicleName;

    public Vhicle(String vhicleName) {
        this.vhicleName = vhicleName;
    }

    // abstract method
    abstract   void start();

    // Concrete method
    void stop() {
        System.out.println(this.vhicleName+ " stopped");
    }

}
