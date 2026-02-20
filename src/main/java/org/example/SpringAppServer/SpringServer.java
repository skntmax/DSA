package org.example.SpringAppServer;


import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;


public class SpringServer {
    public static void main(String[] args) {
        // Start Spring container
        ApplicationContext context =
                new AnnotationConfigApplicationContext(AppConfig.class);
        System.out.println("Spring Server Started Successfully 🚀");
    }
}
