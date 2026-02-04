package org.example.OOPS.singleInheritance.hirarchialInheritance;

public class Shape {

    private String shape ;

    public Shape(String shape) {
        this.shape = shape;
    }

    public String getShape() {
        return shape;
    }

    public void setShape(String shape) {
        this.shape = shape;
    }

    @Override
    public String toString() {
        return "Shape{" +
                "shape='" + shape + '\'' +
                '}';
    }
}
