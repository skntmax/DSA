package org.example.CollectionFramework;

// linked list

//Internal Working:
//
//Doubly Linked List
//
//Each node has:
//
//data
//
//        next
//
//prev

//Time Complexity:
//
//        get() → O(n)
//
//        add/remove at beginning → O(1)

//Best when:
//
//        Frequent insertions/deletions

import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.ListIterator;
// mentains order
// index based searching
// non thread safe

public class LL {
    public static void main(String[] args) {
        User u1 = new User();
        u1.setName("shashi");
        u1.setAge(12);

        User u2 = new User();
        u2.setName("rohan");
        u2.setAge(24);

        User u3 = new User();
        u3.setName("sam");
        u3.setAge(39);

        List<User>  l1 = new LinkedList<User>();
        l1.add(u1);
        l1.add(u2);
        l1.add(u3);

        // traversal using iterator
        Iterator<User>  i1 = l1.iterator();
        System.out.println("using iterator  ------------------------------------------------------------------");
        if(i1.hasNext()) {
            System.out.println(i1.next());
        }
        System.out.println("using iterator ------------------------------------------------------------------");


        // traversal using  foreach
        System.out.println("using foreach loop ------------------------------------------------------------------");
        l1.forEach((User u)->{
            System.out.println("name:"+  u.getName());
            System.out.println("age:"+  u.getAge());
        });
        System.out.println("using foreach loop ------------------------------------------------------------------");



        // using for loop
        System.out.println("using for loop ------------------------------------------------------------------");
        for(int i =0 ; i<  l1.size() ; i++ ) {
            System.out.println(l1.get(i));
        }
        System.out.println("using for loop  ------------------------------------------------------------------");

    }
}
