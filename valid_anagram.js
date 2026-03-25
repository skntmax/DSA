let Input = "raat"
let cmp = "car" 

let res = {}
function countChar(string ) {
    let arr = string.split("")
    console.log(arr);
    for(ele in arr ) {
        res[arr[ele]] = res[arr[ele]]+1 || 0  
    }
    return res 
}

function compare(s, r ) {
     let keys1 = Object.keys(s);
    let keys2 = Object.keys(r);

    if (keys1.length !== keys2.length) return false;
    let res = true 
    for(key of keys1 ) {
        if(s[key]!== r[key]) {
            return false 
        }
    }
     return res 
}


function checkValidAnagram(Input, cmp) {
     
    let left = countChar(Input)
    let right = countChar(cmp)
    console.log(left , right);
    let res = compare(left , right )
    console.log(res);
}

checkValidAnagram(Input , cmp)

