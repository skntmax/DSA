package org.example.OOPS.singleInheritance.hybridInheritance;

public class Circle extends Shape {
   private  long  r ;

    public static void main(String[] args) {
         Circle c = new Circle("Circle", 4 );
         System.out.println(c);
    }


    @Override
    public String toString() {
        return "Circle{" +
                "r=" + r +
                '}';
    }

    @Override
    public String getShape() {
        return super.getShape();
    }

    public Circle(String shape, long r) {
         super(shape);
         this.r = r;
    }

    public long getR() {
        return r;
    }

    public void setR(long r) {
        this.r = r;
    }

    public long area() {
        return  (22/3)*r*r;
    }

    public Circle(String shape) {
        super(shape);
    }
}
