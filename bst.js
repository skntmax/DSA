class node{
     constructor(value) {
        this.left= null
        this.right = null
        this.val= value
     }
}

class bst  {
  constructor() {
    this.root = null
  }

  isTreeEmpty() {
     return this.root==null
  }

  makeTree(root , val){
       let newNode   = new node(val)
    if(root==null) {
           this.root = newNode
     }else {
         if(root.val>val) {
              return this.insertNode(root.left,val)
         }else if(root.val<val) {
             return this.insertNode(root.right,val)
         }
         
     }  
  } 


   
    insertNode( root , val ) {
        let newNode  =new node(val)
          if(root.val>val) {
              if(root==null) {
                 root.left = newNode
              } 
          }else if(root.val<val){
            if(root==null) {
                root.right  = newNode
             } 
          }
    }
  
     
}


let tree = new bst()

tree.makeTree(tree.root  , 2)
tree.makeTree(tree.root  , 5)

console.log(tree);
 

