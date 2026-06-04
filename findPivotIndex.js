let  arr = [1,7,3,6,5,6]
// let  arr = [1,2,3]
// let  arr = [2,1,-1]

function  findPivot(arr) {
    if(!Array.isArray(arr) ||  arr.length==0) return -1
    for(let i=0;i<arr.length-1 ; i++) {
        let rightSum =  arr.slice(i+1, arr.length).reduce((acc,ele)=> acc+ele,0)
        let leftSum = arr.slice(0, i).reduce((acc,ele)=> acc+ele,0)
        if(rightSum==leftSum) return i 
    }
    return -1
}

// console.log(findPivot(arr));


function findmModifiedPivot(arr) {
    // console.log(!Array.isArray(arr) ||  arr.length==0);     
        if(!Array.isArray(arr) ||  arr.length==0) return -1
         let totalSum =  arr.reduce((acc, ele)=>  acc+ele,0)
         let leftSum = 0
         for(let i=0 ; i<arr.length-1 ; i++) {
            let rightSum = totalSum-leftSum-arr[i]
            if(leftSum==rightSum) return i
            leftSum+=arr[i]
         }

         return -1 
}

console.log(findmModifiedPivot(arr));