package org.example;

import java.util.ArrayList;

public class SkipChar {
    public static void main(String[] args) {
        String str =  "visualize backtracking as an animation where the path grows when I include an element and shrinks when I backtrack";
        String ans = "";
        System.out.println(skipChar(str, 0 , ans  ));

        ArrayList<Character>  c = new ArrayList<>();
        c.add('a');
        c.add(' ');
        c.add('\n');

        System.out.println(skipArrayChar(str, 0 ,c , ans  ));

    }


    public static  String skipChar(String w, int i , String ans   ) {
        if( i>= w.length()) {
            return  ans ;
        }
        char charater  = w.charAt(i);
        if(  charater== ' ' || charater== '\n' || charater== ',' || charater== '.' ||  charater== 'a'   ) {
            return skipChar(w.substring(i+1,w.length()) ,  0 , ans );
        }
        ans +=charater;
        return skipChar(w.substring(i+1,w.length()) ,  i , ans );
    }


    public static  String skipArrayChar(String w, int i , ArrayList<Character>  c ,  String ans   ) {
        if( i>= w.length()) {
            return  ans ;
        }
        char charater  = w.charAt(i);
        if(c.contains(charater)) {
            return skipArrayChar(w.substring(i+1,w.length()) , 0 ,c, ans );
        }
        ans +=charater;
        return skipArrayChar(w.substring(i+1,w.length()) ,  i , c, ans );
    }
}
