let array =[66,43,21,49,44,52,10,2,3]





function quickSort(arr) {

    if(arr.length<=1)  return arr 
     let pivot = arr[0]
      let left = []
      let right = []
      
     for(let i=1; i<arr.length ; i++) {
          if(arr[i]<pivot) {
            left.push(arr[i])  
           }else{
            right.push(arr[i])  
           }
     }

     return [...quickSort(left) , pivot , ...quickSort(right)]
}


console.log("quickSort",quickSort(array))