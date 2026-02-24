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

import java.util.LinkedList;
import java.util.List;

public class LL {


    public static void main(String[] args) {
        List<Integer> list = new LinkedList<>();
        list.add(10);
        list.add(20);

    }

}
