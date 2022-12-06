
let input = [1,0,-1,0,-2,2]


var fourSum = function(nums, target) {
    let res = []
    for(let i=0; i<nums.length ; i++) {
      debugger  
        for(let j=i; i<nums.length ; j++) {
          if(nums[j]!=undefined && nums[j+1]!=undefined && nums[j+2]!=undefined && nums[j+3]!=undefined ) {
            let sum = nums[j] + nums[j+1] + nums[j+2] + nums[j+3] 
             if(sum==target){
                res.push( [ nums[j] , nums[j+1] , nums[j+2] , nums[j+3] ].sort() )
                }
               }
             }   
        }
    return res 
};
 
console.log(fourSum(input, 0))