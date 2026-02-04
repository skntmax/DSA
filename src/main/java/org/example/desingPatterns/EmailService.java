package org.example.desingPatterns;

public class EmailService implements NotificationServiceInterface {

    @Override
    public void sendNotification(String email) {
        System.out.println(" Email service logic execution "+email );
    }

    @Override
    public void sendOtp(long phoneNumber) {

    }
}
