 class node {
     constructor (data) {
         this.data = data 
         this.next = null;
     }
 }

class linkedList  {
    constructor (data) {
          this.head = {
             data : data ,
             next:null
          }
     this.size = 0   
     this.tail =this.head 

    } 

    appendNode(data){ 
         
         this.size+=1
         let newNode = { 
            date:data ,
            next:null 
          }
             
          this.tail.next = newNode 
          this.tail = newNode
           
         }

    
 }

let node1 = new linkedList(100) 
   node1.appendNode(200) 
   node1.appendNode(300) 
   node1.appendNode(400) 
   console.log(node1);
    
//  let arr = new Array(5).fill(false)


