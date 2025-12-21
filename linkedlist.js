class node { 
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedList {
    
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insert at end
    insert(data) {
        let newNode = new node(data);
        if(this.head === null) {    
           this.head = newNode;
           this.size++;
           return this;
        }

        // 1 element 
        if(this.head.next==null) {
            this.head.next = newNode;
            this.size++;
            return this;
        }

        // more than 1 element
        let tmp =  this.head
        while(tmp.next!= null) {
          tmp = tmp.next;
        }
        tmp.next = newNode;
        this.size++;
        return this 
    }


    insertAt(data, index) {
   if(index < 0 || index > this.size) { 
        return "index out of bound"
    }


    let newNode = new node(data);
     if(index === 0) {
         newNode.next = this.head
         this.head = newNode 
         this.size++;
        return this 
      }

      let curr = this.head 
      if(index === this.size) {
       while(curr.next!=null)  {
        curr = curr.next
       }
       curr.next = newNode 
       this.size++;
       return this 
      }

      if(index > 0 && index < this.size) {
       let currentIndex = 0 
        while(currentIndex < index - 1) {
          curr = curr.next
          currentIndex++;
        }
       newNode.next = curr.next.next 
       curr.next = newNode
       this.size++;
       return this
     }
  } 

    reverseLinkedList() {
        // first preserver next pointer address 
        // move forward by assign
        let prev = null 
         let curr = this.head 
         let next = null 
         while(curr != null) {
            next = curr.next 
            curr.next = prev 
            prev = curr
            curr = next 
          }
           this.head = prev 
           return this
        }

    }


let l1 = new LinkedList();

l1.insert(10);
l1.insert(20);
l1.insertAt(50,2);
l1.insert(30);
l1.insert(40);

// l1.insertAt(0,0);


 l1.reverseLinkedList()




console.log(l1)

