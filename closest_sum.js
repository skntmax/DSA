// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).


// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).




function allPermutations (items) {
     
    // allPermutations () : return a list of all possible permutations
    // credits: https://stackoverflow.com/questions/9960908/permutations-in-javascript
     
      let results = [];
      function permute (arr, memo) {
        var cur, memo = memo || [];
        for (let i = 0; i < arr.length; i++) {
          cur = arr.splice(i, 1);
          if (arr.length === 0) {
            results.push(memo.concat(cur));
          }
          permute(arr.slice(), memo.concat(cur));
          arr.splice(i, 0, cur[0]);
        }
        return results;
      }
        permute(items);
      return results;
    }


  
 function closest_sum(target , all_combination) {
    let res = target
    for(let val of all_combination ) {
        let sum = val.reduce((acc, ele , index )=> acc+ele , 0 )
          if(sum!=target){
             if(sum<res) {
                 res = sum 
             }
          } 
  }

    return res 
}

var arr  = [-1,2,1,-4]

function combinations(arr, target) {
  let res = []    
  
  for(let val of arr){
     
        console.log("val " , val );
     
    }
    
  return res
  
}


console.log(combinations(arr , 1 ));


//  let all_combination =  allPermutations(arr)
   
  

// console.log(closest_sum(1,all_combination ));

   
  