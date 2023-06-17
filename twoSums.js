// Input: nums = [3,3], target = 6
// Output: [0,1]

var twoSum = function(nums, target) {
 
     for(let i=0; i<nums.length ; i++ ) {
        for(let j=i+1 ; j<nums.length ; j++) {
             if(nums[i]+nums[j]==target) return [i,j]
        }
     }
};

// let ans = twoSum([2,7,11,15] ,9)
// let ans = twoSum([3,2,4] ,6)
let ans = twoSum([3,3] ,6)
console.log(ans)