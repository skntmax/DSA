class queue {
 
    #MAX_SIZE 
    #QUEUE
   constructor() {
     this.#MAX_SIZE  = 100
     this.front= 0    // deletion will be performed using this one  
     this.rear= 0    // insertion will be performed using this one 
     this.#QUEUE = []
    }

    isEmpty() {
        return this.rear==0
    } 
     
    isFull() {
       return this.rear==(this.#MAX_SIZE-1)
    }


    enqueue(ele){
      if(this.isFull()){
         console.log("queue is full")
         return "queue is full"
        }else { 
                this.#QUEUE[this.rear]  = ele 
                this.rear++ 
                console.log("ele is added in the queue >>" , ele)
        }
        
    }
    

   showElements() {
      let str = "" 
        for(let i=this.front; i<this.rear;i++) {
            str = str+' >> '+this.#QUEUE[i]
        }         
        console.log(str )
        return str
   }


    dequeue(){
        if(this.isFull()){
           console.log("queue is full")
           return "queue is full"
          }else { 
                 this.front++
          }
      }
      

       topElement() {
         if(this.isEmpty()) {
             return
         }
          
         return this.#QUEUE[this.rear-1]
      }
}


const instance = new queue()
instance.enqueue(5)
instance.enqueue(3)
instance.enqueue(8998)
instance.dequeue()
instance.dequeue()
instance.dequeue()


instance.showElements()
console.log("top element>>." ,instance.topElement()) 
