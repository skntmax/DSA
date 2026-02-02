package org.example;

import java.util.Scanner;

public class SkipWords {
    public static void main(String[] args) {
        Scanner s   =  new Scanner(System.in);
        Scanner   sch =  new Scanner(System.in);
//        System.out.print("enter string >>");
         String w =  s.nextLine();
         System.out.println(w);

        System.out.print("Enter Char >>");
        String  c =  sch.next();
        System.out.println("Enter Char >>"+ c );

        String ans = "";
        String out = skipW(w, c,0, ans);
        System.out.println(out);
    }

      static   String  skipW(String w ,String c ,   int i ,  String ans) {
          // base condition
          if (i >= w.length()) {
              return ans;
          }

          if (w.startsWith(c, i)) {
//              System.out.println(w.substring(c.length()+1));
              return  skipW(w , c , i+c.length() , ans);
          }
          ans += w.charAt(i);
          return  skipW(w,c,i+1 , ans);
      }
 }

