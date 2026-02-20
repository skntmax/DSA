package org.example.Multithreading;

public class CustomThread {


    public static void main(String[] args) {
        Thread t1 = new Thread(()->{
            try {
                for (int i =0 ; i<=10 ; i++) {
                    Thread.sleep(1000);
                    System.out.println(Thread.currentThread().getName()+ " " + (i+1) +" second"
                    );
                }
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        });

        Thread t2 = new Thread(()->{
            try {
                for (int i =0 ; i<=10 ; i++) {
                    Thread.sleep(2000);
                    System.out.println(Thread.currentThread().getName()+ " " + (i+1) +" second"
                    );
                }
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }

        });
        t1.start();
        t2.start();
    }
}
