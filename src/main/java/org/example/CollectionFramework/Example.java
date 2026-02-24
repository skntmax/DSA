package org.example.CollectionFramework;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


//LIST Interface (Ordered + Allows Duplicates)
//Characteristics:
//
//        ✔ Ordered
//✔ Allows duplicates
//✔ Index based
//


//Main Implementations:
//
//ArrayList
//
//        LinkedList
//
//Vector
//
//        Stack



public class Example {
    public static void main(String[] args) {
        // generics with collection
        Collection<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Spring");

        System.out.println(list);
        System.out.println(list.size());


        List<String> list2 = new ArrayList<>();
        list2.add("A");
        list2.add("B");
        list2.add("A");  // allowed

        System.out.println(list2.get(1));


    }
}



//4.1 ArrayList
//Internal Working:
//
//Uses dynamic array
//
//Default size = 10
//
//When full → new array created (size * 1.5)