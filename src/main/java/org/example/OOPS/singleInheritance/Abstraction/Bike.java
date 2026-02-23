package org.example.OOPS.singleInheritance.Abstraction;

public class Bike  extends   Vhicle{

    public Bike(String vhicleName) {
        super(vhicleName);
    }

    @Override
     void start() {
         System.out.println(this.vhicleName+ "Bike starts");
     }

}
