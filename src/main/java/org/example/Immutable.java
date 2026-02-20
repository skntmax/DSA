package org.example;

//An immutable class is a class whose object state cannot be changed after it is created.
public class Immutable {
//    String
//    Integer
//    LocalDate
//    LocalDateTime
//    BigDecimal

    private final String name;
    private final int age;

    public Immutable(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public static void main(String[] args) {
        Immutable p = new Immutable("Shashi", 25);
        System.out.println("age>>"+p.getAge());
    }


}
