package org.example.dsa_qtn.arrays;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;


//  O(n) time complexity
public class PrefixSum {
    public static ArrayList<Integer>   pSum(int[] arr) {

        int initalSum =  0;
        ArrayList<Integer> res =  new ArrayList<Integer>();
        for(int i=0 ; i<arr.length ; i++) {
            initalSum  = initalSum+arr[i];
            res.add(initalSum);
        }
        return  res;
    }
    public static void main(String[] args) {
        int [] arr = {2, 4, 6, 8};
        ArrayList<Integer> res =  pSum(arr);
        System.out.println("prefix sum "+ res
        );

    }
}
