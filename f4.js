let str = "shashi kant"


function charOccurence(str){
let res ={}

for(let char of str) {
    if(res[char]){
        res[char] = res[char]+1 
    }else{
        res[char] = 1 
    }
}

return res  
}

console.log(charOccurence(str))


