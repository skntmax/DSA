package org.example.dsa_qtn;

import java.util.Arrays;
import java.util.HashMap;


//🔹 Visual Summary
//Step 1:
//        i=0 → value=2 → store in map
//
//        Step 2:
//        i=1 → value=7 → need 2 → found in map ✅
//
//        Answer = indices [0,1]

public class TwoSum {


    public static int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int needed = target - nums[i];

            if (map.containsKey(needed)) {
                return new int[]{map.get(needed), i};
            }

            map.put(nums[i], i);
        }

        return new int[]{}; // if no solution
    }

    public static void main(String[] args) {

        int[] nums = {2, 7, 11, 15};
        int target = 9;

        int[] result = twoSum(nums, target);
        System.out.println(Arrays.toString(result));

    }
}
