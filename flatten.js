let array = [[234, 56, 788, 23], [333], [23, 45], [45, 7], 0];



function f2(arr , depth = 1 ) {
    let res = []


    for(let ele of arr) {
        if(Array.isArray(ele) && ele.length>0 ) {
              f2(ele)
        }else{
         res.push(ele)
        }
    }
     
    return res 
}

console.log( f2 (array));
 
function flatArray(arr, depth=1) {
     let res = []
     if (arr.length == 0) return [];
     if (depth == 0) return res;


    for(const ele of arr) { 
        if(depth>1) {
            depth--
            flatArray(arr,  depth)
        }  
        
        if(Array.isArray(ele) && ele.length>0 && depth==0 ) {
            ele.forEach((element) => {
                res.push(element);
              });
        }else{
            res.push(ele)
        }
     }
     return res     
}

// console.log(flatArray(array )) 