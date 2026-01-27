package org.example;

import java.util.ArrayList;

public class Backtrack {
    public static void main(String[] args) {
//        subsetProblem("", "abc");
        ArrayList<String>  ans =  subsetProblemArray("","abc");
        System.out.println("total number of subset >>" + ans);
    }

    static void  subsetProblem(String p ,  String up) {
        if(up.isEmpty()) {
            System.out.println(p);
            return ;
        }

        char c =  up.charAt(0);
        subsetProblem(p+c , up.substring(1)) ;
        subsetProblem(p , up.substring(1) ) ;
     }

    static  ArrayList<String>  subsetProblemArray(String p , String up) {
        if(up.isEmpty()) {
            ArrayList<String>  list = new ArrayList<String>();
            list.add(p);
            return list ;
        }

        char c =  up.charAt(0);
        ArrayList<String>  leftAns = subsetProblemArray(p+c , up.substring(1)) ;
        ArrayList<String>  rightAns  = subsetProblemArray(p , up.substring(1) ) ;
        leftAns.addAll(rightAns);
       return leftAns ;
    }

   }


