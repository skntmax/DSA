  
class node {
      
      constructor(val) {
           this.val = val 
           this.next= null 
        }         
   }

 
class ll {
      
     constructor() {
        this.head = null
        this.tail =this.head  
        this.size = 0      
     }
     


      insertNode(val) {
           let newNode = new node(val)
            if(this.head==null) {
               this.head = newNode
               this.tail = this.head
               this.size++ 
            }else{
                this.tail.next = newNode
                this.tail = newNode
                this.size++
            }
       }

        

       traverse() {
           let temp = this.head
           while(temp!=null) {
                console.log("val>>" , temp.val);
                temp = temp.next
              } 
          }
        


       insertnodeAtbeginning(val) {
          let newNode = new node(val)

          if(this.head == null) {
                this.head= newNode 
                }else{
                
               let tHead = this.head
               this.head = newNode
               this.head.next = tHead 
           
           } 
          
       }

        
       insertAtLast(val) {

          let newNode = new node(val)
           if(this.head == null) {
                this.head= newNode
                this.size++ 
           }else{
                let tmpHead = this.head 
                  while(tmpHead.next!=null) {
                    tmpHead= tmpHead.next
                  }
                  console.log(" last value " ,tmpHead);
                  tmpHead.next = newNode
                  tmpHead=this.head 
                  this.tail = newNode
                 this.size++ 
              }
         
          }


     }
      

     let obj = new ll()

obj.insertNode(5)
obj.insertNode(2)
obj.insertNode(3)
obj.insertNode(4)
obj.insertNode(5)
obj.insertNode(6)
// obj.traverse()
obj.insertnodeAtbeginning(1)
 obj.insertAtLast(7)

console.log(obj);