package org.example.Multithreading;

//A Thread is a lightweight sub-process — the smallest unit of execution inside a program
//A thread allows a program to perform multiple tasks simultaneously (multithreading).
//🧠 Real-Life Example
//
//    Think of a browser:
//
//    One thread loads the page
//
//    One thread downloads files
//
//    One thread plays video
//
//    All run concurrently.

class ThreadExample extends  Thread{
     ThreadExample(String name) {
          super(name);
     }
     @Override
    public void run() {

        System.out.println(
                "thread function running  "
        );
         runExec();
    }


    public   static  void  runExec( ) {
        try {
            for (int i =0 ; i<10 ; i++) {
                Thread.sleep(1000);
                System.out.println(Thread.currentThread().getName() + " " +(i+1)+"seconds");
            }
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }


     public static void main(String[] args) throws InterruptedException {
         ThreadExample  t1 = new ThreadExample("thread1");
         ThreadExample  t2 = new ThreadExample("thread2");
         t1.start(); // s
         t2.join(); // make sure after thread completion , main class  executes

         t2.start(); // s
         t2.join(); // make sure after thread completion , main class  executes

         System.out.println("main class ");
     }
}



