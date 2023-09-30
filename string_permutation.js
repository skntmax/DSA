let S = 'a1b2'


 var letterCasePermutation  =  function(S) { 
    
    const result = [];
const dfs = (i, S, slate) => {

     // base case
        if(i==S.length)  {
            result.push(slate.join('')); 
            return;
            }

//dfs recursive case
console.log('S[i]' ,S)
let char = S[i];
if(!Number.isInteger (parseInt(char))) { 
    
     // uppercase
        slate.push(char.toUpperCase()); 
        dfs(i+1, S, slate);
        slate.pop();

          // Lowercase
        slate.push(char.toLowerCase());
         dfs(i + 1, S, slate);
        slate.pop();
} 

else {
            slate.push(char);
            dfs(i+1, S, slate);
            slate.pop();
}
}

dfs(0, S, []); 
return result;
 
}

console.log(letterCasePermutation(S)) 