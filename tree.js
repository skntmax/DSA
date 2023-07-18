class newNode {
     constructor(val){
         this.val = val
         this.left= null 
         this.right = null 
     }
}
class tree {
     
        constructor(){
            this.root = null
        }
        
        insertNode(value){
             let new_node = new newNode(value)
             if(this.root==null){
                 this.root=new_node
             }else {
                  this.insertSingleNode(this.root , new_node)
             }
        }

        insertSingleNode(root, new_node){
            if(root.val>new_node.val) {
                   if(root.left==null){
                        root.left = new_node
                   }else{
                       this.insertSingleNode(root.left , new_node )
                     }        
            }

            if(root.val<new_node.val) {
                if(root.right==null){
                     root.right = new_node
                }else{
                    this.insertSingleNode(root.right , new_node )
                  }
                  
                    
         }

             
        }
    
        isTreeEmpty(){
            return this.root==null
        }
        
}

const obj = new tree () 
obj.insertNode(8978)
obj.insertNode(293)
obj.insertNode(653)
obj.insertNode(21762572)
obj.insertNode(99879)
console.log(obj);