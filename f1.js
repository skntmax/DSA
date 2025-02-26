let arr = [1, 2, 3, 1, 2, 4] 
           
//  1- > 1+1 +> 2 
//  2- > 1  => 2 
//  3- > 1
//  4- > 1  

function findDuplicate(array) {
    let res = {}
    
    for(let val of array) {
        if(res[val]) {
            res[val]= res[val]+1 
        } else{
            res[val]=1 
        }
    }

    return Object.entries(res).filter(([key,val])=>val>1)
    
}

console.log( findDuplicate(arr))