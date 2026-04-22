package org.example.dsa_qtn.arrays;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MergeIntervals {


    public   static  List<int[]> findInterval(int[][] arr) {
        List<int[]> res = new ArrayList<int[]>();

        for(int i =0 ; i<=arr.length-2; i++ ) {
            System.out.println(Arrays.toString(arr[i]) );
            if(arr[i+1][0]<=arr[i][1]) {
                int[] temp = {arr[i][1] , arr[i+1][1]};
                res.add(temp);
            }
        }

        System.out.println("tmp"+res);
        return res ;
    }



    public static void main(String[] args) {

        int[][] arr = {
                {1,3},
                {2,6},
                {8,10},
                {15,18}
        };

        List<int[]> result =    findInterval(arr);

        System.out.println("merge interval>>"+result);


    }

}
