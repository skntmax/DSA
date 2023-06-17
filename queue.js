class queue { 
    #MAX;
     
  constructor(){
    this.front = null ,
    this.rear =null ,
     this.queue = [] ,
     this.#MAX = 10
  }

    enqueue(value) {
        if(this.isFull()) {
        console.log("can't perform enque operation , stack is full ")     
        }else{
            this.queue[this.queue.length] = value
            // this.rear =this.queue.length-1
        }
      }

      dequeue() {
        if(this.isEmpty()) {
        console.log("can't perform dequeue operation , stack is full ")     
        }else{
             
            //  for(let i=0; i<this.queue.length ; i++) {
            //    this.queue[i] =this.queue[i+1] 
            //  } 
              
            this.queue.shift()
        }
         
      }

     
  peakValue() {
        return this.queue[this.queue.length-1]
    }

    checkSize(){
        return this.queue.length
    }

    isEmpty(){
        return this.queue.length==0
    }

    isFull(){
        return this.queue.length==this.#MAX
    }

}


// --------------------linear queue ----------------------
// let my_queue = new queue()

// my_queue.enqueue(2)
// my_queue.enqueue(90)
// my_queue.enqueue(12)
// my_queue.enqueue(445)
// my_queue.enqueue(32)
// my_queue.dequeue()
// console.log(my_queue);
 
// --------------------linear queue ----------------------
























// class cicularQueue { 
//     #MAX;
  
//     constructor(){
//     this.front = -1 ,
//     this.rear =-1 ,
//     this.queue = [] ,
//     this.currentSize = 0 
//     this.#MAX = 5
//   }

//     enqueue(value) {
//          if(this.currentSize==this.#MAX) {
//                console.log("can't perform enque operation , queue is full");
//          }else{
//             if(this.rear>this.#MAX-1) {
//                 this.rear=0
//               }else{
//                 this.rear++
//                 this.queue[this.rear]= value
//                 this.currentSize = this.queue.length 
//                 if(this.front==-1) {
//                     this.front= this.rear
//                  }
//               }


//          }
        
        
//       }

//       dequeue() {
//         if(this.isEmpty()) {
//         console.log("can't perform dequeue operation , stack is full ")     
//         }else{

//               if(this.front>this.#MAX-1) {
//                 this.queue[this.front] = null 
//                 this.front = -1 
//               }else{
//                 if(this.front==this.#MAX-1) {

//                 }else{
//                     this.queue[this.front] = null
//                     this.front++
//                 }

//               }
             
            
//         }
         
//       }

     
//   peakValue() {
//         return this.queue[this.queue.length-1]
//     }

//     checkSize(){
//         return this.queue.length
//     }

//     isEmpty(){
//         return this.queue.length==0
//     }

//     isFull(){
//         return this.queue.length==this.#MAX
//     }

// }

// let c_q = new cicularQueue()

// c_q.enqueue(2)
// c_q.enqueue(3)
// c_q.enqueue(3)
// c_q.enqueue(3)
// c_q.dequeue()
// c_q.dequeue()
// c_q.dequeue()
// c_q.enqueue(1)
// console.log(c_q);