class node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList { 

     constructor() { 
        this.head = null 
        this.size = 0;
     }

    appendNode(data) {
        if(this.head==null) {
        this.head = new node(data);
        this.size++;
        return this.head     
        }
        let current = this.head
        while(current.next) {
            current = current.next
        }
        current.next = new node(data)
        this.size++;
        return this.head
    }

    pop() {
        //   if no node is present
         if(this.head==null) {
          return null  
          }

          // if only on1 node is present
          if(this.head.next==null) {
            this.head = null;
          }

        let current = this.head;
        while(current.next.next) {
            current = current.next
        }

        current.next = null;
        this.size--;
        return this.head
    }

    removeAt(index) {
        if(index < 0 &&  index > this.size) {
            return "Please enter a valid index"
        }
        
        if(this.head==null) {
         return null
        }

        let current = this.head;
        let count = 0 

        if(count==index) {
            this.head = current.next;
            this.size--;
            return this.head
        }
        
        while(count < index - 1 && current) { // edge case for index > size
            current = current.next;
            count++;
        }

        current.next = current.next.next;
        this.size--;
        return this.head
    }

    insertAt(data, index) {
    if(index < 0 || index > this.size) {
        return "Please enter a valid index"
    }
    
      const newNode = new node(data);


    // Insert at beginning
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return this.head;
    }


    let current = this.head;
    let count = 0;

    while (count < index - 1 && current) { // edge case for index > size
      current = current.next;
      count++;
    }
     newNode.next = current.next;
     current.next = newNode;
     this.size++
    }

}
 
let ll1 = new LinkedList();
ll1.appendNode(10)
ll1.appendNode(20)
ll1.appendNode(30)

ll1.insertAt(5,1)
ll1.removeAt(1)
// ll1.pop()

console.log(ll1)