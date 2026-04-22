package org.example.dsa_qtn.arrays;

import java.util.Arrays;

// o(n) worst case complexity
public class CustomMax {
    public  static  int  findMax(int[ ] arr ) {
         int max = arr[0]  ;
         for(int ele: arr) {
              if(ele>max) {
                   max=ele;
              }
         }
         return max ;
    }


    public  static  int  findMin(int[ ] arr ) {
        if(arr.length==0)  return -1 ;
        int min = arr[0]  ;
        for(int ele: arr) {
            if(ele<min) {
                min=ele;
            }
        }
        return min ;
    }

    public static void main(String[] args) {

        int[] arr = {5,34,2,3,4,1};
        int max  = findMax(arr);
        int min  = findMin(arr);
        System.out.println("min>>"+min);
        System.out.println("max>>"+max);

    }

}
