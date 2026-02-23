package org.example.OOPS.singleInheritance.Interface;


//  example  of  interfaces
public class Main {

    public static void main(String[] args) {

        Upi  upi = new Upi();
        upi.Pay();

        NetBanking  netbanking = new NetBanking();
        netbanking.Pay();

    }
}


 class Upi implements   PaymentInterface {
     @Override
     public void Pay() {
         System.out.println("upi payment");
     }
 }


class NetBanking implements   PaymentInterface {
    @Override
    public void Pay() {
        System.out.println("net banking payment");
    }
}

class CreditCard implements   PaymentInterface {
    @Override
    public void Pay() {
        System.out.println("Credit card payment");
    }
}



