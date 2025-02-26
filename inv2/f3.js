let name ="shashi kant" 
let vowel = ['a','e','i','o','u']


function findStr(str , vowel) {

     let vowelCount=0 , consonent=0
    for(char of name) {
        if(vowel.includes(char)) {
            vowelCount++
        }else if(char!=" ") {
            consonent++
        }
    }

    return {
        vowelCount  , consonent 
    }
     
}

console.log( findStr(name , vowel ))
