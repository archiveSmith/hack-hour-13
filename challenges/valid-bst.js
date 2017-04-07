/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 */


function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function validBST(BST) {
  if (BST instanceof BinaryTree === false) {return 'wrong data given'}

  function recurse (tree, min, max) {
    if (!tree) return true;

    if (tree.value <= min || tree.value >= max) return false;
    
    let left = recurse(tree.left, min, tree.value)
    let left = recurse(tree.right, tree.value, max)

    return left && right;
  }
  return recurse(BST, -Infinity, Infinity); 
}

//////////////////////TESTING////////////////////////////////////
let tree = new BinaryTree(10);
tree.left = new BinaryTree(7);
tree.right = new BinaryTree(12);
//console.log('MY TREE', tree);
console.log( '*******', validBST(tree) )

//////////////////////////////////////////////////////////////////////////
/*
at any given currNode:
  1. check if this.right is > currNode
  2. check if this.left is <= currNode 
repeat this process til we no longer have any more rights/lefts

while(this.right && this.left) {
  if (this.right > this.value)
}
*/










module.exports = { BinaryTree: BinaryTree, validBST: validBST };
