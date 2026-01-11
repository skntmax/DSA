let str = "visualize backtracking as an animation where the path grows when I include an element and shrinks when I backtrack. Every time I reach the end index, the current path becomes a valid subset."


function  skipWord(str, word , i , res ="") {

    if(str=="") {
        return res  
    }

    if(str.startsWith(word)) {
        // skip the length of word up to 
        return skipWord(str.substr(word.length), word , 0, res )
    }

    res+=str[i]
    i++
    return skipWord(str.substr(i), word , 0, res )
}

console.log(skipWord( str , "an" , 0));