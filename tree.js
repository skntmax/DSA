class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}



const root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right.right = new TreeNode(6);


// Here’s a clear visual representation of a Binary Tree 🌳
//                 1
//                /   \
//              2       3
//            /   \       \
//          4       5       6


//          How to read this visually

// 1 is the root

// Left side goes to the left child

// Right side goes to the right child

// Each level represents one depth level