let arr = [3, 7, 2, 9, 4]

function maxEle(arr , i , max) {

    if(i>=arr.length){
        return max 
    }

    if(arr[i]>max) {
        max=arr[i]
    }

    return maxEle(arr, i+1 ,  max )
    
}

console.log(maxEle(arr, 0 , 0 )); 
