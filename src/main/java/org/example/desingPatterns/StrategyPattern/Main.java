package org.example.desingPatterns.StrategyPattern;

public class Main {

    NotificationServiceInterface ns ;
    public Main(NotificationServiceInterface ns) {
        this.ns = ns;
    }

    public static void main(String[] args) {
        EmailService es = new EmailService();
        OtpService otpS  = new OtpService();

        Main sendOtp =  new Main(otpS);
        sendOtp.sendOtp(786073508);

        Main sendEmail =  new Main(es);
        sendEmail.sendEmail("skntjee@gmail.com");
    }

    public  void sendEmail(String email ) {
        this.ns.sendNotification(email);
    }

    public  void sendOtp(long phoneNumber ) {
        this.ns.sendOtp(phoneNumber);
    }

}
