package org.example.OOPS.singleInheritance.polymorphism;

public class Dog extends   AnimalClass{
    public Dog(String name) {
        super(name);
    }

    public static void main(String[] args) {
        Dog dog = new Dog("doggy1");
        dog.speak();

        Cat cat = new Cat("catty1");
        cat.speak();
    }


    @Override
    public void speak() {
        System.out.println("dog speak  bhow bhow  ");
    }
}
