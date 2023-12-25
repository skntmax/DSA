class newNode {     
     constructor(data) {
         this.data = data 
         this.next = null   
     } 
       
}

class ll {
    
     

    constructor() {
          this.head = null      
          this.tail = this.head       
      } 
     
     addNode(data) {
         
         let new_node = new newNode(data)
          if(this.head==null) {
             this.head = new_node
             this.tail = new_node 
          }else{
           this.tail.next = new_node
           this.tail = new_node   
          }
     }


     traverse() {
        
      let temp =this.head
       while(temp!=null) {
            //    console.log(temp);
            temp = temp.next
           }
      }
}



let root = new ll()
root.addNode(3)
root.addNode(4)
root.addNode(5)
root.addNode(6)
root.traverse()
 

console.log(root);