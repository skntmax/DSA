package org.example.Array;

import java.util.Arrays;

public class CustomArrayList {
    private  static int  SIZE=0;
    private int[] data;

    @Override
    public String toString() {
        return "CustomArrayList{" +
                "data=" + Arrays.toString(data) +
                '}';
    }

    public static void main(String[] args) {
    CustomArrayList list = new CustomArrayList();
        list.add(5);
        list.add(233);
        list.add(5455);
        list.add(221);
    System.out.println(list+ " || size || "+ SIZE);
    }

    // constructor
    CustomArrayList() {
        data = new int[3]; // initial capacity
    }

    public   Boolean isFull() {
         return SIZE == this.data.length;
    }

    public  void resize(){
        int[] tmp = new int[SIZE*2];
        for(int i =0 ; i< this.data.length; i++) {
            tmp[i] = this.data[i];
        }
        this.data =  tmp ;
    }

    public   void  add(int num) {
        if(isFull()) {
            resize();
        }
        this.data[SIZE++] =num;
    }
}
