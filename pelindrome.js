// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

let str = "A man, a plan, a canal: Panama".replace(/[,:]/g, "")


console.log( str)

function reverseString(string) {
 if(string=="") return ""
 return string.substr(string.length-1,)+reverseString(string.substr(0,string.length-1))
}


function checkPelindrome(str) {

    return str.toLowerCase().split(' ').join('')==reverseString(str).toLowerCase().toLowerCase().split(' ').join('')
}
 
console.log(checkPelindrome(str)) 
