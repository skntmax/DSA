package org.example.OOPS.singleInheritance;

public class Parent {

    private String father ;
     private String mother ;
    private   int   age ;
    private  String name   ;

    // method overloading ,  constructors with different args
    Parent(Parent  parent) {
        this.name = parent.name;
        this.father = parent.father;
        this.mother = parent.mother;
        this.age = parent.age;
    }
    Parent(String father ,  String mother) {
        this.father = father;
        this.mother = mother;
    }

    Parent(int age) {
      this.age = age ;
    }

    Parent(String name) {
        this.name = name ;
    }

    private int age() {
     return this.age;
    }

    @Override
    public String toString() {
        return super.toString();
    }

    private  void getParent() {
        System.out.println("Father >>"+ this.father+ "Mother>>"+ this.mother );
    }

}
