package org.example.OOPS.singleInheritance.hirarchialInheritance;

public class Cube extends  Shape {
   private long side ;

    @Override
    public String toString() {
        return "Cube{" +
                "side=" + side +
                '}';
    }

    public static void main(String[] args) {
      Cube c = new Cube("Cube", 4);
        System.out.println(c);
        System.out.println("Area is  "+c.area());
        System.out.println(c.getShape());
    }

    public Cube(String s ,  long side) {
        super(s);
        this.side = side;
    }

    public   long  area() {
        return this.side*4;
    }



}
