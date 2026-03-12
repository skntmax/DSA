let str = "Rather , than pushing back and error-handling behavior between the two approaches. " 


function countWords(str, i=0, res = []) {
   
    if(i > str.length ) {
         return res 
     }

     if (str[i] === " " || str[i] === "," || str[i] === "") {
        if (i > 0) {
            res.push(str.substr(0, i));
        }
        return countWords(str.substr(i + 1), 0, res);
        }

     return countWords(str , i+1  , res)     
}


console.log(countWords(str , 0));


