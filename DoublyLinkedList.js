class NewNode{
    
     constructor(val){
          this.next = null 
          this.val = val 
          this.prev = null
    }    
}
 
 class dll{
     
    constructor() {
       this.head = null
       this.size = 0      
    }

    
    insertAtFirst(val){
        let new_node = new NewNode(val)
        if(this.head==null){
            this.head = new_node
            this.size+=1
          }
       
        }

        appendNode(val){
             
        let new_node = new NewNode(val)
        
        if(this.head.next) {
            let curr = this.head
            
             while(curr.next) {
                curr = curr.next    
              }

            new_node.prev = curr  
            curr.next = new_node
             this.size+=1

             
         }else{
             // for second node only 
             this.head.next=new_node
              new_node.prev= this.head
              this.head.prev=null
              this.size+=1
           }
        }

        

        
        insertAt(index, val ){
        let new_node = new NewNode(val)
         
          if(index > this.size ){
              return "doubly linked list is not too big , please specify the correct index"
           }
          else if(!this.head.next) {
           // if only one element is there 
            this.head.next=new_node
            new_node.prev= this.head
            this.head.prev=null
            this.size+=1

          }else{ 

               let curr = this.head
                for(let i=1 ; i<index-1 ; i++) {
                        curr = curr.next 
                    }   
                    
                 new_node.prev = curr
                 new_node.prev = curr
                 new_node.next =  curr.next
                 curr.next = new_node
                this.size+=1

          }


        }


    }


 
const ll_obj = new dll()

ll_obj.insertAtFirst("s1")
ll_obj.appendNode("s2")
ll_obj.appendNode("s3")
ll_obj.appendNode("s4")
ll_obj.appendNode("s5")
ll_obj.appendNode("s6")
ll_obj.appendNode("s7")
ll_obj.appendNode("s8")
ll_obj.appendNode("s9")
ll_obj.appendNode("s10")
ll_obj.appendNode("s11")




ll_obj.insertAt(10, "in middle") // isert this value at some index 



console.log("dll obj " ,  ll_obj )