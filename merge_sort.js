let arr =[66,43,21,49,44,52,10,2,3]


function mergeSort(array) {

    if(array.length<=1) return array

    let mid = Math.floor(array.length/2)

  let left = mergeSort(array.slice(0,mid))     
   let right = mergeSort(array.slice(mid)) 

  return merge(left , right)

}

 
function merge(left ,right ) {
 let sortedArr = []
 
 while(left.length && right.length ) {
   if(left[0]<right[0]) {
       sortedArr.push(left.shift())
    }else{
       sortedArr.push(right.shift())  
    }   
   }

   return [...sortedArr , ...left, ...right]
}

console.log(mergeSort(arr))