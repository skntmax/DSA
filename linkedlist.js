class node {
     constructor(value) {
      this.value = value 
      this.next = null 
     }
}

class ll {

     constructor () {  
        this.root = null  
      }

     insert(val) {
         let newNode = new node(val)
        if(this.root==null) {
            this.root=  newNode
        }else if(this.root.next==null) {
           this.root.next = newNode
        }else{
            let temp = this.root
            while(temp.next!=null) {
                temp  =  temp.next
            }
            temp.next = newNode
        }         
     }


     traverse() {
      if(this.root==null) 
        return 

      let tmp = this.root 
      while(tmp!=null) {
        console.log(tmp.value);
        tmp = tmp.next
      }
     }


     addAtPosition(position , val) {

         
     }

     
      
}


const llObj = new ll() 

llObj.insert(2)
llObj.insert(122)
llObj.insert(3)
llObj.insert(4)
llObj.traverse()
// llObj.addAtPosition(2 , 444) // index and value 
 
console.log(llObj); 