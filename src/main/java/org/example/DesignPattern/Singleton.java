package org.example.DesignPattern;

 class Singleton {
    private static volatile Singleton instance;

    private Singleton() {}

    public static Singleton getSingleton() {
         if(instance==null) {
              // create a new one
             //  “Only one thread at a time can execute this block of code, locking on the Singleton class object.”
             synchronized (Singleton.class) {
                 if (instance == null) {
                     instance = new Singleton();
                 }
             }
         }
         return instance;
    }


    public static void main(String[] args) {
        Singleton  newObj = Singleton.getSingleton();
        Singleton  newObj2 = Singleton.getSingleton();
        System.out.println(newObj);
        System.out.println(newObj2);
    }

}
