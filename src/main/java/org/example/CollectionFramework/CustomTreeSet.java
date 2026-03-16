package org.example.CollectionFramework;

import java.util.Set;
import java.util.TreeSet;

public class CustomTreeSet {

//    Stores elements in sorted order.
//    Internally uses:
//    Red Black Tree
    public static void main(String[] args) {
        Set<Integer> tset = new TreeSet<>();
         tset.add(1);
         tset.add(21);
         tset.add(2);
         tset.add(3);
         System.out.println("tset>>"+tset);
    }
}
