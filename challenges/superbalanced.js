/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */
'use strict';

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// can assume BST is valid
function superbalanced(tree) {
  // null case
  // using false to be coerced into 0 on higher recursive levels
  if (!tree) return true;
  // check if diff of subtree heights is at most 1
  function getTreeHeight(tree) {
    // if node is null, return 0
    if (!tree) return 0;
    // add 1 (current node) + maximum subtree height
    return 1 + Math.max(getTreeHeight(tree.left), getTreeHeight(tree.right));
  }
  // if left is superbalanced and right is superbalanced, return true
  return Math.abs(getTreeHeight(tree.left) - getTreeHeight(tree.right)) <= 1
    && superbalanced(tree.left)
    && superbalanced(tree.right);
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
