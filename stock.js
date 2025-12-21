let arr = [7,6,4,3,1] || [7,1,5,3,6,4]  
// Output: 5

function maxProfit(arr) {
 let maxProfit = 0
 
  for(let i=0;i <arr.length;i++) {
     for(j=i+1 ; j<arr.length ; j++) {
        if(arr[j]> arr[i] ) {
            let max = arr[j] - arr[i]
            if(max>maxProfit) maxProfit=max
        } 
      
     }
  }
  return maxProfit
}

console.log(maxProfit(arr))















