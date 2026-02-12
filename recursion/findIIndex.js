let arr = [5, 7,7, 8,8, 9]

function findIndex(arr,  i ,   count=0 ,  target=7 , res = []) {
  if(i==arr.length) {
     return  res 
  }
   if(target==arr[i]) {
    count++
    res.push(i)
   }
  
   
   return findIndex(arr, i+1 , count , target ,  res )
}

console.log(findIndex(arr, ));