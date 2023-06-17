class stack {

    constructor() {
        this.stack =[]
        this.MAX=5
    }

    push(value) {
      if(this.isFull()){
        console.log("can't perform push operation , stack is full ") 
        }else {
             this.stack[this.stack.length] = value  
        }
    }


    pop(){
      if(this.isEmpty()) {
        console.log("can't perform pop operation , stack is empty ") 
      }else{
         this.stack.length =this.stack.length-1 
       }
    }

    peakValue() {
        return this.stack[this.stack.length-1]
    }


    checkSize(){
        return this.stack.length
    }

    isEmpty(){
        return this.stack.length==0
    }

    isFull(){
        return this.stack.length==this.MAX
    }
   
}


let my_stack = new stack()
my_stack.push(1)
my_stack.push(2)
my_stack.push(4)
my_stack.push(5)
my_stack.push(6)
my_stack.pop()
my_stack.pop()
my_stack.pop()
my_stack.pop()
my_stack.pop()
my_stack.pop()



console.log(my_stack);
console.log("peak value >>" , my_stack.peakValue());
console.log("stack length >> " , my_stack.checkSize());