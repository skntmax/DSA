package org.example.OOPS.singleInheritance.hybridInheritance;

public class Rectangle extends Shape {

     private  long width;
     private  long  height ;
    public Rectangle(String shape, long width, long height) {
        super(shape);
        this.width = width;
        this.height = height;
    }

    @Override
    public String toString() {
        return "Rectangle{" +
                "width=" + width +
                ", height=" + height +
                '}';
    }

    private  long area() {
        return this.width* this.height;
    }

    public static void main(String[] args) {
          Rectangle r = new Rectangle("Rectangle",1,2  );
          System.out.println(r);

    }

}
