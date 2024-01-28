class NewNode{
     constructor(value){
         this.val =value 
         this.left = null
         this.right = null
     }
}

class BST {

     constructor(){
     this.head = null     

     }


     appendNode(root, val ){
         let new_node =new NewNode(val)
        if(val<root.val &&  root.left!=null){
             // left node 
             this.appendNode(root.left, val )
        }else if(val>root.val && root.right!=null ){
            this.appendNode(root.right, val )
             
        }else if(val<root.val &&  root.left==null)
         {
             root.left =new_node 
         }
         else if(val>root.val &&  root.right==null)
         {
             root.right =new_node 
         }   
     }
    

     addNode(val){
     let new_node = new NewNode(val)
      let root =this.head
     
      if(root==null){
          this.head= new_node      
         return
      }
      
       if(root.left!=null && val<root.val ){
          // left node
           this.appendNode(root.left, val )
       }else if(root.right!=null && val>root.val){
        //right node 
         this.appendNode(root.right, val )
       }else if(root.left==null && val<root.val ) 
           root.left = new_node
        else if(root.right==null && val>root.val)
            root.right = new_node
        } 


        
        search(root, val ){

             if(val==root.val){
                return true 
             }
              if( root.left!=null && val<root.val  ) {
                // left node 
                return this.search(root.left, val )
              }else if(root.right!=null && val>root.val   ) {
                 // right node 
                 return this.search(root.right, val )
              }else if(root.right==null || root.left==null) { 
              
                return false 
              }
            
        }

        searchNode(val){
        let root = this.head
         if(root==null){
             console.log("tree is empty ")
             return "tree is empty"
         }else{       
            if(val<root.val){
                // heading left node
                 return this.search(root.left , val) 
            }else if(val>root.val){
                // heading right node
                return this.search(root.right , val) 
            }

         }     
          
        }


        preOrder(root){
            if(root){
                console.log(root.val)
                this.preOrder(root.left)
                this.preOrder(root.right)        
            }
        }

        inOrder(root){
            if(root){
                this.inOrder(root.left)
                console.log(root.val)
                this.inOrder(root.right)        
            }
        }



        postOrder(root){
            if(root){
                this.postOrder(root.left)
                this.postOrder(root.right)        
                console.log(root.val)
            }
        }

        searchPosition(root, val){
          
            if(root.val==val){
               return root   
            }  

            if(val<root.val && root.left!=null) {
                 return this.searchPosition(root.left, val )
            
                }else if(val>root.val && root.right!=null) {
                return this.searchPosition(root.right, val )
             }
        
          }


        findAncestor(root , val ){
        
              if(root.left.val==val){
                return root 
              }
              if(root.right.val==val){
                return root 
              }
              if(val<root.val && root.left!=null  ) {
                return this.findAncestor(root.left, val )
              }
              if(val>root.val && root.right!=null) {
                return this.findAncestor(root.right, val )
              }
            
        }

        removeNode(val){
            let root =this.head 

            if(root==null){
                return true 
            }
            if(this.searchNode(val)){
                // searching the node
                   let target_node = this.searchPosition(root,val) 
                  
                    if(target_node.left==null && target_node.right==null) {
                        // simply remove the node , finding nearest ancestor and appeding it's pointer to null 
                           let tmp = root
                             let prev_node =  this.findAncestor(tmp , val  ) 
                             if(prev_node.left.val==val){
                                   prev_node.left= null
                              }else{
                                prev_node.right= null
                              }
                               
                    }else if(target_node.right==null && target_node.left!=null){
                        // if the target node have only one child in left side 
                        let tmp = root
                        let prev_node =  this.findAncestor(tmp , val) 
                        
                        if(prev_node.right.val==val){
                               prev_node.right = target_node.left
                        }else{
                            prev_node.left = target_node.right
                        }
                       

                    }else if(target_node.left==null && target_node.right!=null){
                       // if the target node have only one child in right side 
                       let tmp = root
                       let prev_node =  this.findAncestor(tmp , val) 
                       
                       if(prev_node.left.val==val){
                              prev_node.left = target_node.left
                       }

                    }else{
                      // if the target node having two child in right and left 



                    }
                
            }else{
               // node doesn't exit 
                return "Node doesn't exist "
            }
     

        

             
        }

}



const t1   = new BST()

t1.addNode(8)
t1.addNode(3)
t1.addNode(1)
t1.addNode(6)
t1.addNode(4)
t1.addNode(10)

console.log(t1.removeNode(4)) 

// dfs traversal 
    //post order 
    t1.inOrder(t1.head) // LNR 1,6,3,8,10
    // t1.preOrder(t1.head)  //NLR  8,3,1,6,4,10 
    // t1.postOrder(t1.head)  // LRN  1,4,6,3,10,8

//searching 
// console.log(t1.searchNode(10))  // searching any node 
 
console.log(t1)