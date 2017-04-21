/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
<<<<<<< HEAD
  
 let depthLeft = [];
 let depthRight = [];
  const recursion = (tree, leftLevel = 0, rightLevel = 0) => {
    if (tree === null) return true;
    // if (!tree.left && !tree.right) return true;
    
    if (tree.left) {
    //leftLevel++;
    depthLeft.push(leftLevel);
    recursion(tree.left, leftLevel, rightLevel);
  }
  if (tree.right) {
    //rightLevel++;
    depthRight.push(rightLevel);
    recursion(tree.right, leftLevel, rightLevel);
  }
  }
  recursion(tree);
  if (Math.abs(depthLeft.length - depthRight.length) > 1) return false;
  return true;
}

// const tree = new BinaryTree(5);
// tree.left = new BinaryTree(4);
// tree.left.left = new BinaryTree(2);
// tree.left.left.left = new BinaryTree(1);
// tree.right = new BinaryTree(8);
// tree.right.left = new BinaryTree(6);
// tree.right.right = new BinaryTree(10);
// tree.right.right.left = new BinaryTree(9);

// superbalanced(tree);

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
=======

}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
>>>>>>> 6a27eb23ac8fdbd43025d02751fd0f3e74d97a01
