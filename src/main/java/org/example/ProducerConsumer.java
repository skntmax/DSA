package org.example;


//Producer–Consumer Using BlockingQueue (Java)
//The Producer–Consumer problem is a classic multithreading problem where:
//        🏭 Producer thread creates data
//
//        🛒 Consumer thread consumes data
//
//        📦 They share a common buffer


//The challenge is:
    //Make sure producer doesn’t overflow the buffer
    //Make sure consumer doesn’t read when buffer is empty



//solution :

//    In Java, we solve this easily using:
//
//    java.util.concurrent.BlockingQueue
//
//    It automatically:
//
//            ✔ Blocks producer if queue is full
//
//    ✔ Blocks consumer if queue is empty
//
//    ✔ Handles synchronization internally
//
//    ✔ Prevents race conditions
//
//    No need for wait(), notify(), or manual synchronization.



import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

public class ProducerConsumer {
    private static BlockingQueue<Integer> queue = new ArrayBlockingQueue<>(5);


    public static void main(String[] args) {

        // Producer
        Thread producer = new Thread(() -> {
            int value = 0;
            try {
                while (true) {
                    System.out.println("Producing: " + value);
                    queue.put(value);   // blocks if full
                    value++;
                    Thread.sleep(500);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        });

        Thread consumer = new Thread(() -> {
            try {
                while (true) {
                    int value = queue.take();  // blocks if empty
                    System.out.println("Consuming: " + value);
                    Thread.sleep(1000);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        });

        producer.start();
        consumer.start();
    }
}
