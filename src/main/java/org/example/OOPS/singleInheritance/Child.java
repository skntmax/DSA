package org.example.OOPS.singleInheritance;
// example of  single inheritance

public class Child extends   Parent {
    private  String name ;
     Parent  parentObj ;

    @Override
    public String toString() {
        return "Child{" +
                "name='" + name + '\'' +
                ", parentObj=" + parentObj +
                '}';
    }

    public static void main(String[] args) {
        Parent  newP = new Parent("pyare Lal", "Usha devi");
        Child c = new Child("skntmax", newP);
        System.out.println(c);
    }

    Child(String name ,  Parent p ) {
        super(p);
        this.name = name ;
      }

      private void setName(String name) {
       this.name = name ;
     }

}
