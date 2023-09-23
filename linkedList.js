class node {
     constructor(val){  
         this.val = val 
         this.next  = null 
        }
}
 
class ll {
   
     constructor(){ 
         this.head = null 
         this.tail = this.head  
        }
         
    insertNode(val) {
         
         let new_node = new node(val )
          
               if(this.head == null) {
                 this.head = new_node
                 this.tail = new_node 
               }else{
                  this.tail.next = new_node
                  this.tail = new_node 
                 }
          }
     
}

let obj = new  ll()
obj.insertNode(2)
obj.insertNode(3)
obj.insertNode(23)
obj.insertNode(45)
obj.insertNode(12)
 
console.log('====================================');
console.log(obj);
console.log('====================================');