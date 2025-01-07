
 class Stack  {
      #MAX_SIZE 
      #STACK
     constructor() {
       this.#MAX_SIZE  = 100  
       this.#STACK = []
     }
      
     isEmpty() {
         return this.#STACK.length==0
     } 
     
     isFull() {
        return this.#STACK.length==this.#MAX_SIZE
     }

     push(ele) {
        if(this.isFull()) {
            return "Stack is full "
        }   
        this.#STACK.push(ele)
        console.log(ele,"pushed")
        return this.#STACK
     }

     pop() {
        if(this.isEmpty()) {
            console.log("Stack is empty ")
            return "Stack is empty "
        }   
        console.log(this.#STACK[this.#STACK.length-1],"popped")
        this.#STACK.pop()
        return this.#STACK
      }
 
      getAllItems() {
        for(let i=this.#STACK.length-1 ; i>=0 ; i --) {
            console.log(this.#STACK[i])        
           }
       }    
       
    }


    const instance = new Stack()

    instance.push({name:"skntmax"})
     instance.push({name:"rahul"})
     instance.push({name:"sunny"})
     instance.push({name:"gonda"})
     instance.push({name:"rahul"})
    
     console.log("\n")
   console.log("=================================>")
   
   instance.pop()
   instance.pop()
   instance.pop()
   instance.pop()
   instance.pop()


   instance.getAllItems()