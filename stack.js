let arr=[]
let maxSize=100
var stackLengh= arr.length
 
function push(ele) {
     if(arr.length>=maxSize){
        alert(" stack is full, only 10 elements are allowed  ")   
     } else{
     arr[stackLengh] = ele
     stackLengh+=1      
     }
}
 
 function pop() {
     if(arr.length<=0){
          alert("stack is empty ")
     }else{
        let popEle= arr[stackLengh-1]
        stackLengh-=1
        arr.length=stackLengh   
       return  popEle
         
     }  
 }

 function display(){

     for(let i=0;  i<arr.length; i++ ){
           console.log(arr[i]+"\n")
     }
 }

 push(2)
 push(3)
 push(4)
 push(4)
 push(54)
 push(454)
 push(556)
 
  
console.log(pop(),"popped") 
console.log(pop(),"popped") 

 display()
  
 