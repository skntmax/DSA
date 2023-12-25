// single linked list 

class node{
    constructor(val){
         this.val  = val 
         this.next = null
    }
     
}

class LinkedList { 
    
    constructor() {
        this.head = null
        this.top = null  
        this.size = 0   
    }

     
    insertNode(val){
        let new_node =  new node(val)
         if(this.head==null) {
             // 0 elements 
             this.head = new_node
             this.top = new_node
             this.size +=1 
         }else if(this.head.next==null){
             // only one element 
            this.head.next  =  new_node
            this.size +=1 
         }else {
             // more than one element
             let tmp = this.head 
              while(tmp){
                 if(tmp.next==null) {
                    tmp.next = new_node
                    this.size +=1
                  return 
                 }else {
                     tmp = tmp.next
                 }                     
              }
         }
            
      }
      

      getSize(){
         return this.size 
      }
      
       traverseElement() {
         if(this.head==null){
             return "linked list is empty "
         }else{
              let tmp = this.head
              let res = []
             while(tmp)  {
                   res.push(tmp.val) 
                  tmp = tmp.next 
             }
         return res      
         }

      }
  
     

}

let l1 = new LinkedList()
  
l1.insertNode(2)
l1.insertNode(3)

console.log(l1.traverseElement()) 
console.log(l1.getSize()) 

console.log(l1)