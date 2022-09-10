

let maxSize = 100
let stack =[]

function push(ele){
     
    if(stack.length>maxSize){ 
       alert("stack is full ")
    }else{
          stack[stack.length]=ele
    }
     
}

 
function pop() {
     
      if(stack.length==0){
         alert("stack is empty ")
      }else{
         for(let i=stack.length-1; i>=0 ;i--){
            stack[i]=stack[i-1]
         }
        //  stack.length = stack.length-1
        stack.shift()         
      }
}


function peak(){
    return stack[stack.length-1]
}

function show(){

     for(let i=0; i<stack.length ; i++){
         console.log(stack[i]+"\n");
     }

}  

// push(1)
// push(3)
// push(24)
// push(6)
// push(44)
// push(21)
// push(66)

// show()
// pop()
// show()
// console.log("peak value ",peak())


let str  = '{{{(([[[[(]]]]))}}}'
let st2  = '{{{(([[[[]]]]))}}}'
let st3  = '{()}'

const balanceParanthesis = (str) => {
  let ans = undefined
   
   for(let i=0; i<str.length; i++){     
       if(str[i]=="{" || str[i]=='(' || str[i]=='[' ){
        push(str) 
       }else{
          if( str[i]==")"){
             if( peak()==str[i] ) {
                 pop()
             } else {
                  return false               
              }   
            }   
         
            if( str[i]=="}"){
         
                if(  peak()==str[i] ) {
                    pop()
                } else {
                     return false               
                }   
               } 


               if( str[i]=="}"){
                if( peak()==str[i] ) {
                    pop()
                } else {
                     return false               
                }   
               } 
      }
 
   }

    if(!isEmpty()){
        return false
    }else{
        return true
    } 

}


 
function isMatching(curr,peak)
{
    if(curr=="(" && peak==")" ) true
    if(curr=="{" && peak=="}" ) true
    if(curr=="[" && peak=="]" ) true
}


function isEmpty(){
   if(stack.length==0) true 
   else false
}
 


// console.log( balanceParanthesis(st3))     




var twoSum = function(nums, target) {
    let sp=0 
    let ep=nums.length-1
     
   while(sp<ep){
        for(let i=sp;i< ep ; i++ ){
      if(nums[sp] + nums[ep]==target){
           return [sp,ep]
       }
       sp++
    //    ep--
        
    }
        
   } 

};

console.log(twoSum([2,7,11,15],9)) 
