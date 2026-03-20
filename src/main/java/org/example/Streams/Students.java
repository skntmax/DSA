package org.example.Streams;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class Students {

    public static void main(String[] args) {


        // step1
        // mutable object - can't modify
        List<Integer> l2 = new ArrayList<>();


        // step 2
        // immutable objects
        List<Integer> l3 = List.of(134, 55, 66, 7, 6, 4, 343);
        System.out.println(l3 );
        l3.stream().filter(e-> e.equals(55)).forEach((ele)->{
            System.out.println("ele found>>"+ ele);
        });


        List<String> l5 = Arrays.asList("a","b","c");
        l5.stream().map(String::toUpperCase).forEach(x -> System.out.println(x));


        // step 3 , list containing object type StudentDto
        StudentDto s1 =new StudentDto("shashi kant", 12 , "B1", "csjmu");
        // mutable object - can modify further to n times
        List<StudentDto>  list = new ArrayList<>();

        System.out.println(list.stream().filter(e->  e.classNumber.equals(12)));
        list.add(s1);



    }

}
