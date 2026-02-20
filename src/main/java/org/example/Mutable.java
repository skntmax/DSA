package org.example;

//A mutable class is a class whose object state can be changed after it is created.
//You can modify its internal data after construction.
public class Mutable {

    private   String name ;

    public Mutable(String name) {
        this.name = name;
    }

    public   void setName(String name) {
        this.name = name;
    }

    public static void main(String[] args) {
        Mutable  m  = new Mutable("sunny");
        System.out.println("before>>"+m.getName());

        m.setName("skntmax");

        System.out.println("after>>"+m.getName());
    }

    public String getName() {
        return name;
    }
}
