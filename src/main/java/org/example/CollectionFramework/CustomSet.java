package org.example.CollectionFramework;
import java.util.HashSet;
import java.util.Set;

public class CustomSet {

    @Override
    public String toString() {
        return super.toString();
    }

    public static void main(String[] args) {
        Set<Integer> set  = new HashSet<>();
        set.add(1);
        System.out.println("custom set to string "+set.toString());
        System.out.println("custom set "+set);
    }
}
