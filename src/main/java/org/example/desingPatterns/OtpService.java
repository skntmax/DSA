package org.example.desingPatterns;

public class OtpService implements NotificationServiceInterface {

    @Override
    public void sendOtp(long phoneNumber) {
        System.out.println("Otp service executed for this phone number "+ phoneNumber  );
    }

    @Override
    public void sendNotification(String email) {

    }

}
