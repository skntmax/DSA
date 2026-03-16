package org.example.Strings;

//Behind the scenes:
//
//A new object is created.
//
//Old object remains in memory (until GC).

public class MainString {

    public static void main(String[] args) {
        String s = "Hello";
        s = s + " World";
    }
}
