class node {
    constructor(val) {
      this.val= val 
      this.left= null 
      this.right= null 
    }
}

class bst {
        
   constructor() {
       this.root = null
   }
    
    isTreeEmpty() {
       return this.root==null
    }

    makeTree(root, value ) {
          
        
    }
    
   insertNode(val) {
     let newNode = new node(val)
      if(this.isTreeEmpty())  {
          this.root= newNode
      }else {
         if(this.root.val>newNode.val) {
             return this.makeTree(this.root.left , val)
         }
      }   
      
   }

}



let tree  = new bst()
console.log(tree);