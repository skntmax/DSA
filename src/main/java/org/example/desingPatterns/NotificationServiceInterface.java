package org.example.desingPatterns;

public interface NotificationServiceInterface {
    public abstract void  sendNotification(String email);
    public abstract void  sendOtp(long phoneNumber);
}
