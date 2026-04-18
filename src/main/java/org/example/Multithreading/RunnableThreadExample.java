package org.example.Multithreading;

public class RunnableThreadExample implements  Runnable {

    public RunnableThreadExample() {
    }

    @Override
    public void run() {
        System.out.println("multithread via  runnable ");
    }

    public static void main(String[] args) {
        RunnableThreadExample newRunnableInstance = new RunnableThreadExample();

        Thread t1 = new Thread(newRunnableInstance);
        t1.start();
    }
}
