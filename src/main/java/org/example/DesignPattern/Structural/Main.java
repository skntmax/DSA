package org.example.DesignPattern.Structural;

public class Main {

    public static void main(String[] args) {
        // singleton class and thread safe
//        SingletonClass  db1 = new SingletonClass();
//        db1.getDbInstance();
//        db1.getDbInstance();


//        This is:
//
//✅ A thread created using a Lambda Expression
//✅ Implementing the Runnable functional interface
//✅ Anonymous (no separate class)


//        New – Created but not started
//
//        Runnable – Ready to run but not started yet
//
//        Running – Currently executing
//
//        Blocked / Waiting – Waiting for resource
//
//        Terminated – Finished execution

        Thread runnableThread1 = new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("thread 1");
                SingletonClass  db1 = new SingletonClass();
                db1.getDbInstance();
            }
        });

        Thread  t1 = new Thread(()->{
            System.out.println("thread 1");
            SingletonClass  db1 = new SingletonClass();
            db1.getDbInstance();
        });

        Thread  t2 = new Thread(()->{
            System.out.println("thread 2 ");
            System.out.println("thread 1");
            SingletonClass  db1 = new SingletonClass();
            db1.getDbInstance();
        });

        Thread  t3 = new Thread(()->{
            System.out.println("thread 3 ");
            System.out.println("thread 1");
            SingletonClass  db1 = new SingletonClass();
            db1.getDbInstance();
        });

        t1.start();
        t2.start();
        t3.start();

        runnableThread1.start();

    }
}
