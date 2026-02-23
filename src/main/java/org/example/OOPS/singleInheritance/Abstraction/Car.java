package org.example.OOPS.singleInheritance.Abstraction;

public class Car extends  Vhicle{

    public Car(String vhicleName) {
        super(vhicleName);
    }

    @Override // must
    void start() {
        System.out.println(this.vhicleName+ "car starts");
    }

}
