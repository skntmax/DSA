let array = [[234, 56, 788, 23], [333], [23, 45], [45, 7], 0];

let res = []

function flatArr(arr){
       if(Array.isArray(arr) && arr.length==0)  return res 
       for(let val of arr) {
        //    console.log(val);
        if(Array.isArray(val)) {
             flatArr(val)
        }else{
            res.push(val)
        }
       }
    return res 
}

console.log((flatArr(array)));


