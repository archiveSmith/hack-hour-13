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

function getHeight(node) {
  const right = getHeight(node.right)
  const left = getHeight(node.left)
  return Math.max(left, right) + 1;
}


function superbalanced(tree) {
  const heightRight = getHeight(tree.right);
  const heightLeft = getHeight(tree.left);
  const diff = Math.abs(heightRight - heightLeft);
  return diff > 1 ? true : false;
}

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
