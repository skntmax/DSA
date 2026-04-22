package org.example.dsa_qtn.arrays;

import java.util.Arrays;

//Set Matrix Zeroes

public class MatrixSet {

    public static void main(String[] args) {
      int[][] matrix  = {
              {1,2,3},
              {3,1,4},
              {1,3,2},
      };

      for(int i=0 ;  i< matrix.length ; i++ ) {
            for(int j=0 ; j<matrix[i].length ; j++) {
                matrix[i][j] = 0;
            }
      }
        System.out.println(Arrays.deepToString( matrix));
    }
}
