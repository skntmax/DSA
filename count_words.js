let str = "Good attempt 👍 — your output actually shows exactly where the logic is going wrong, so let’s fix it without changing your overall approach (substring-based recursion)."

function countWords(str, ln , res=[]) {
    if(ln >= str.length){
     res.push(str.substr(0 , ln ))
    return res
   }

    if(/[ ,\n]/.test(str[ln])) {
     if(ln>0) res.push(str.substr(0 , ln ))
     return countWords(str.substr(++ln) , 0 , res )  //  reset it from start , but with previous response 
    }

  return countWords(str , ++ln , res )  
}



console.log(countWords(str, 0 , [] ).length); 
