let arr = [ 4,2, 3, 5, 6, -2, 4, 7, 9, 8]  // res[[2,3] , []]
let target = 7 



function  findTarget(arr, target) {
    let res = [ ]

    for(let i=0; i<arr.length-1; i++) {
        
        for(let j=i ; j<arr.length ; j++) {
            if(arr[i]+arr[j]==target) {
                 res.push([arr[i],arr[j]])
            }
        }
    }

    return res 
}

console.log(findTarget(arr ,  target))