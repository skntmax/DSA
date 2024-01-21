

class Stack {
    
    
    constructor(){
        this.top =  null 
        this.size = 0
        this.MAX= 10
        this.arr=[]      
    }

    isEmpty(){ 
      return this.size<=this.MAX 
    }

    isFull(){ 
        return this.size==this.MAX 
      }
     

     add(val){
        if(this.isEmpty()){
         this.arr[this.size] =  val
         this.size+=1 
         console.log(val,"added")
         }else{
         return "stack is full"
      }
      }

      pop(){
        if(!this.isFull()){
          console.log(this.arr[this.size-1], "popped")
            this.arr.length = this.size-1 
         this.size-=1 
         }else{
            console.log("stack is empty")
         return "stack is empty"
      }
      }


      
      topEle(){
        if(this.arr.length!==0){
            return this.arr[this.size-1]
        }else{
            return "stack is empty "
        }
      }



}





let stack_obj = new Stack()
stack_obj.add(1)
stack_obj.add(3)
stack_obj.add(4)
stack_obj.add(6)
stack_obj.add(6)
stack_obj.add(6)
stack_obj.add(6)
stack_obj.add(6)
stack_obj.add(6)
stack_obj.add(6)
stack_obj.add(6)
stack_obj.add(6)


stack_obj.pop() 

console.log("top elements " , stack_obj.topEle())  








console.log(stack_obj)
