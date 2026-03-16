package org.example.CollectionFramework;

import java.util.LinkedList;
import java.util.Queue;
//Used for FIFO (First In First Out).
public class CustomQueue {

//    Ticket Queue
//    Person1 Person2
//    Person3
//
    public static void main(String[] args) {
        Queue<Integer> q = new LinkedList<>();
        q.offer(1);
        q.offer(2);
        q.offer(3);
        q.offer(211);
        System.out.println(q.poll()); //  remove from original queue
        System.out.println(q); // [2, 3, 211]


    }
}
