package org.example.dsa_qtn.arrays;

import java.util.*;

public class DuplicatesInArray {


    public static void main(String[] args) {
        int[] arr = {23,1,2,3,4,4,1,1,1,};

        Map<Integer, Integer> map = new HashMap<Integer , Integer>();
        List<List<Integer>> ls = new ArrayList<List<Integer>>();
        for(int ele: arr) {
             if(!map.containsKey(ele)) {
                 // add
                 map.put(ele, 0);
             }else{
                   // modify
                     int count = map.get(ele);
                     ls.add(Arrays.asList(ele,count+1 ));
             }
        }

        System.out.println("res"+ls);
    }
}
