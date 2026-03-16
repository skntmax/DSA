package org.example.CollectionFramework;


//Map stores key-value pairs.
//
//Example:
//
//id -> name
//101 -> Ram
//102 -> Shyam
//103 -> Mohan

import java.util.*;

public class CustomMap {

    public static void main(String[] args) {
        Map<Integer,String> map = new HashMap<>();

        map.put(1, "skntmax");
        map.put(2, "skntmax2");
        map.put(3, "skntmax3");
        System.out.println(map);

        System.out.println(map.get(2));

//        loop

        for(int i=0; i<map.size(); i++) {
            System.out.println("map ele "+ i );
        }


        List<String> l = new ArrayList<>();
        l.add("rohan");
        l.add("sohan");
        System.out.println("custom list example");
        for(String  ele : l) {
            System.out.println("element>>"+ ele );
        }


        // iterator using existing list
        Iterator<String> it = l.iterator();
        while(it.hasNext()){
            System.out.println(it.next());
        }


    }
}
