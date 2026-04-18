package org.example.CollectionFramework;


import java.util.ArrayList;
import java.util.List;

class User {
    String  name ;
    int age ;

    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public  User() {

    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
public class BackendUser {

    public static void main(String[] args) {
        List<User> u  = new ArrayList<>();
        u.add(new User("skntmax", 23 ));
        u.add(new User("rahul", 22 ));
        u.add(new User("mayank", 30 ));
        System.out.println(u.toString());
    }
}
