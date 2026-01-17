let arr = [1,7,7, 8,8 ,9,0]
//  no of pairs 

function findIndex(arr, i=0, target=8, res=[], c=0)  {

    // console.log(i)
     if(i==arr.length) {
      if(c >= 2) return  res  
      else  return [-1,-1]
     }
     
     if(arr[i]==target) {
      c++
      res.push(i)
     }
        
    return findIndex(arr, i+1 , target , res , c)
} 

console.log(findIndex(arr));