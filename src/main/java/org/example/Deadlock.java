package org.example;

//A deadlock happens when: Two or more threads are blocked forever, each waiting for a resource held by the other
//Nobody can move forward.

//    Example:
//Person A holds Pen 🖊️ and waits for Notebook 📒
//Person B holds Notebook 📒 and waits for Pen 🖊️




//Conditions Required for Deadlock
//Deadlock happens only if ALL these exist:

    //1 Mutual Exclusion – Resource cannot be shared
    //
    //2 Hold and Wait – Thread holds one resource while waiting for another
    //
    //3 No Preemption – Resource cannot be forcibly taken
    //
    //4 Circular Wait – Threads waiting in circular chain
public class Deadlock {

    private   static final Object lock1 = new Object();
    private static final Object lock2 = new Object();

    public static void main(String[] args) {


        Thread t1 = new Thread(() -> {
            System.out.println("Thread 1 locked lock1");

            try {
                Thread.sleep(100);
            } catch (Exception e) {
            }

            synchronized (lock2) {
                System.out.println("Thread 1 locked lock2");
            }
        });


        Thread t2 = new Thread(() -> {
            System.out.println("Thread 1 locked lock1");

            try {
                Thread.sleep(100);
            } catch (Exception e) {
            }

            synchronized (lock2) {
                System.out.println("Thread 1 locked lock2");
            }
        });

        t1.start();
        t2.start();
    }
}


//
//What Happens Here?
//Thread 1:
//
//Locks lock1
//
//Waits
//
//Tries to lock lock2
//
//Thread 2:
//
//Locks lock2
//
//Waits
//
//Tries to lock lock1
//
//Now:
//
//Thread 1 waits for lock2
//
//Thread 2 waits for lock1
//
//🚫 Both stuck forever → Deadlock


//    How to Prevent Deadlock
//Always acquire locks in the same order:
        //        synchronized(lock1) {
        //        synchronized(lock2) {
        //                // safe
        //                }
        //                }


