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

function branchDepth (tree, depth = 1) {
  if (!tree) return depth;
  return Math.max(branchDepth(tree.left, depth + 1), branchDepth(tree.right, depth + 1));
}

function superbalanced(tree) {
  // create a left depth and a right depth and have them equal
  // the total depth for when tree is finally null
  const leftDepth = branchDepth(tree.left);
  const rightDepth = branchDepth(tree.right);
  return Math.abs(leftDepth - rightDepth) <= 1;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
