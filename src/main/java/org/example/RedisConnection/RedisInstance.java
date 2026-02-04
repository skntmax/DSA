package org.example.RedisConnection;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.beans.factory.annotation.Autowired;

@SpringBootApplication
public class RedisInstance implements CommandLineRunner {

    @Autowired
    private RedisTemplate<String, String> redisTemplate;

    public static void main(String[] args) {
        SpringApplication.run(RedisInstance.class, args);
    }

    @Override
    public void run(String... args) {
        redisTemplate.opsForValue().set("name", "shashi");
        String value = redisTemplate.opsForValue().get("name");
        System.out.println("Redis Value => " + value);
    }
}
