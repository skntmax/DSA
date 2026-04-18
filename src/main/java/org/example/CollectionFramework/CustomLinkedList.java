package org.example.CollectionFramework;

import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedList;
//Uses Doubly Linked List internally.
//Structure
//data | next | prev
//Better when:
//
//        frequent insertions
//
//        frequent deletions
public class CustomLinkedList {

    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<>();

        list.add(10);
        list.add(20);
        list.add(30);

        list.addFirst(5);
        list.addLast(40);
        System.out.println(list);
    }
}
