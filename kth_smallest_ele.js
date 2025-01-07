// n = 6
// arr[] = 7 10 4 3 20 15
// k = 3
// l=0 r=5

let arr = [7 ,10, 4, 3, 20, 15 ]
let n= 6 
let k = 3 

tmp = 1 
let l=0 , r = n-1

 function kth() {
    let min = Number.NEGATIVE_INFINITY 

    for(let i=l ; i<r ; i++) {
       if(arr[i]>min) {
         min=arr[i]
         tmp++
       }   
    //      console.log(tmp)
       if(tmp==k){
         return min 
       }
    }
 }
 

 console.log(kth()) 

 