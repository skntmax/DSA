let str = '{{{{((([{{{[[[[[[[[[]]]]]]]]]}}}])))}}}}' 

function checkValiParenthesis(string ) {
let arr =[]

for (let i = 0; i < string.length; i++) {
    let char  = string[i]
    if(char=="{" ||  char=="(" || char=="[") {
        arr.push(char)
       } else if(char=="}" ||  char=="]" || char==")") {
            if(char=="}" &&   arr[arr.length-1]=="{") {
                 arr.pop() 
            }
            else if(char==")"  &&  arr[arr.length-1]=="(") {
                arr.pop()
            }
           else if(char=="]" &&   arr[arr.length-1]=="[" ) {
            arr.pop()
            }else {
                return false 
            }
       }else{
        return false
       }
}

if(arr.length==0)
  return true 
else 
    return false 

}

console.log(checkValiParenthesis(str)) 