class node {
    constructor(val) {
        this.next = null,
            this.val = val
    }

}

class ll {

    constructor() {
        this.head = null
    }

    inserNode(val) {
        // debugger
        let newNode = new node(val)
        if (this.head == null) {
            this.head = newNode
        } else {
            let temp = this.head
            while (temp.next != null) {
                temp = temp.next
            }
            temp.next = newNode
        }

    }


}



let l1 = new ll()
l1.inserNode(2)
l1.inserNode(4)
l1.inserNode(3)
l1.inserNode(7)
l1.inserNode(45)
l1.inserNode(98)
l1.inserNode(1452)


let l2 = new ll()

l2.inserNode(5)
l2.inserNode(6)
l2.inserNode(4)


console.log(l1);