let arr1 = [1,3,76,32,12,33,56,35]
let arr2 = [23,89,667,55,32,122,78]
  
  


let max = arr1.length

function merge(arr) {

        for(let i=0; i<arr.length ; i++) {
            arr1[max] =arr[i]
            max++     
           } 
      
           return arr1
}



console.log(merge(arr2))