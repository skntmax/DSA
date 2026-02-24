package org.example.Generics;

import java.sql.Array;
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
    GenericBox<String> box = new GenericBox<>(); //  string type  generics  for BOX class
    box.setValue("ok");
    System.out.println(box.getValue());

    // ar
        ArrayList<Integer> list =  new ArrayList<>();
         list.add(1);
         list.add(2);
         list.add(3);
         list.add(4);

         String[] names ={ "A","B"};

         //  generic utility to print numbers
         Integer[] num1 =  { 1,2,3,5,};
         Utility.printArray(num1);


         // using Array List
        Utility.printArray(new ArrayList[]{list});

        //  using  String of Array List
        Utility.printArray(names);
        System.out.println(printUsers());
    }

    public  static ArrayList<MyDto>  printUsers() {
        MyDto user1  = new MyDto("skntmax", 12 ,  "B.tech");
        MyDto user2 = new MyDto("skntmax2", 20 ,  "bsc");
        MyDto user3  = new MyDto("skntmax3", 30 ,  "MSC");
        MyDto user4  = new MyDto("skntmax4", 40 ,  "Biotech");
        ArrayList<MyDto> studentobj = new ArrayList<>();
        studentobj.add(user1);
        studentobj.add(user2);
        studentobj.add(user3);
        studentobj.add(user4);


        studentobj.forEach((student)->{
            System.out.printf("Name: %s | Age: %d | Degree: %s%n",
                    student.getName(),
                    student.getAge(),
                    student.getQualifition());
        });

        return studentobj ;
    }
}
