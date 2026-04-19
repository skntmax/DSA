package org.example.LamdaFtn;


public class Threadss {

    public static void main(String[] args) {

        // way 1 - by lambda ftns
        Runnable Thread1 = () -> {
            System.out.println("new thread by runnable interface ");
        };
        Thread1.run();


        // way 2 - thread two  via annonymous class
        Runnable thread2  = new Runnable() {
            @Override
            public void run() {
                System.out.println("thread two  via labda ftns ");
            }
        };
        thread2.run();


        // way 3 - By implementation interface
        RunnableThreadImp thread3 = new RunnableThreadImp();
        thread3.run();
    }
}


class RunnableThreadImp implements   Runnable {
    @Override
    public void run() {
        System.out.println(
                "By implementation interface "
        );
    }
}