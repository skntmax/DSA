package org.example.desingPatterns.StrategyPattern;

import java.util.HashMap;
import java.util.Map;

public class StaticBlock {
    static Map<String , String> config ;
    static{
        config = new HashMap<>();
        config.put("JAVA_ENV","dev" );
        config.put("VERSION","1.0" );
        System.out.println("env loaded before the main execution ");
    }

    public static void main(String[] args) {
        System.out.println("main class execution ");
        System.out.println("config loaded"+  config.get("JAVA_ENV"));
    }
}
