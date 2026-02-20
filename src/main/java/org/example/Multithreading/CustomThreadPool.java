package org.example.Multithreading;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class CustomThreadPool {
    public static void main(String[] args) {

        ExecutorService executor = Executors.newFixedThreadPool(10);

        for (int i = 0; i < 5; i++) {
            int task = i;
            executor.submit(() -> {
                System.out.println("Executing task " + task);
            });
        }

        executor.shutdown();
    }

}
