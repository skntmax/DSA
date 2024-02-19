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
             return "linked list is empty"
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




    containes(val) {
        if(this.head==null){
            return "linked list is empty"
        }else{
             let tmp = this.head
 
            while(tmp)  {
                  if(tmp.val==val ){
                   return true 
                  } 
                 tmp = tmp.next 
            }
        return false       
        }
    }

     
    lastNode() {
         
        if( this.head==null ){
            return "linked list is empty"
        }else{
             let tmp = this.head
            while(tmp)  {
                if(tmp.next==null) {
                 return tmp.val   
                 }
                 tmp = tmp.next
            }
       
        }
    }
  

    
}

let l1 = new LinkedList()
  
l1.insertNode(2)
l1.insertNode(3)
l1.insertNode(22)
l1.insertNode(455)

console.log("total elements >> " , l1.traverseElement()) 
console.log("total size >> " ,  l1.getSize()) 
console.log("containes >>  " ,  l1.containes(123)) 
console.log("last node >>  " ,  l1.lastNode()) 



console.log(l1)