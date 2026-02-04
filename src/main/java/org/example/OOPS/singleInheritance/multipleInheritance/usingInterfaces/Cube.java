package org.example.OOPS.singleInheritance.multipleInheritance.usingInterfaces;

public class Cube implements   Drawable , Printable {

    @Override
    public void draw() {
        System.out.println("draw ");
    }

    @Override
    public void print() {
        System.out.println("print ");
    }
}
