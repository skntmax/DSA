// singly linked list

class NewNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class ll {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  appendNode(val) {
    let new_node = new NewNode(val);
    if (this.head == null) {
      this.head = new_node;
      this.size += 1;
    } else {
      let tmp = this.head;
      while (tmp.next != null) {
        tmp = tmp.next;
      }
      tmp.next = new_node;
      this.size += 1;
    }
  }

  display(head) {
    if (head == null) return "ll is empty";
    let tmp = head;
    let res = [];
    while (tmp) {
      res.push(tmp.val);
      tmp = tmp.next;
    }
    return res;
  }


  reversell() {
    if (this.head == null) return "ll is empty";
    if (this.head.next == null) {
      return this.head;
    }
    let curr = this.head;
    let prev = null;

    while (curr != null) {
      let tmp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = tmp;
    }

    return prev;
  }


  
}

 
let l1 = new ll();
l1.appendNode(2);
l1.appendNode(3);
l1.appendNode(4);
l1.appendNode(5);
l1.appendNode(6);

console.log(l1.display(l1.head));

console.log("reversed ll ", l1.display(l1.reversell(l1.head)));

console.log(l1);
