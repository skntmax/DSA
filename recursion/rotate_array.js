let arr = [1,2,3,4,5,6]

function rotateArray(arr, res=[]) {
    if(arr.length==0) return res
      res.push(arr[arr.length-1])
      return rotateArray(arr.slice(0, arr.length-1) , res )
}

console.log(rotateArray(arr,));