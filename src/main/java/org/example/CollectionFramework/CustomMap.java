package org.example.CollectionFramework;

import java.util.*;

class Users {

    private String name;
    private Long rollNo;

    public Users(String name, Long rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }

    public String getName() {
        return name;
    }

    public Long getRollNo() {
        return rollNo;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setRollNo(Long rollNo) {
        this.rollNo = rollNo;
    }

    @Override
    public String toString() {
        return "Users{name='" + name + "', rollNo=" + rollNo + "}";
    }
}

public class CustomMap {

    public static void main(String[] args) {

        Map<Integer, Users> mp = new HashMap<>();

        mp.put(1, new Users("skntmax", 1L));
        mp.put(2, new Users("skntmax2", 2L));
        mp.put(3, new Users("skntmax3", 3L));

        // get single object
        System.out.println("User with key 1 -> " + mp.get(1));

        System.out.println("\nIterating Map using entrySet:");

        for (Map.Entry<Integer, Users> entry : mp.entrySet()) {
            System.out.println("Key: " + entry.getKey() +
                    " Value: " + entry.getValue());
        }

        System.out.println("\nIterating Map using forEach:");

        mp.forEach((key, value) ->
                System.out.println(key + " -> " + value)
        );

        // List Example
        List<String> l = new ArrayList<>();
        l.add("rohan");
        l.add("sohan");

        System.out.println("\nCustom List Example");

        for (String ele : l) {
            System.out.println("element >> " + ele);
        }

        // Iterator Example
        System.out.println("\nIterator Example");

        Iterator<String> it = l.iterator();
        while (it.hasNext()) {
            System.out.println(it.next());
        }
    }
}