package org.example.DesignPattern.Structural;

public class SingletonClass {

    private  SingletonClass dbInstance ;

    // thread safe
    public  SingletonClass getDbInstance() {
         if(dbInstance==null) {
              synchronized (SingletonClass.class) {
                  System.out.println("assigning first time ");
                  dbInstance= new  SingletonClass();
                  return dbInstance;
              }
         }

         System.out.println("already assigned");
         return  dbInstance;
     }

}
