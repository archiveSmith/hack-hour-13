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
  return !tree || (Math.abs(treeHeight(tree.left) - treeHeight(tree.right)) <= 1 && superbalanced(tree.left) && superbalanced(tree.right));
}

function treeHeight(tree, height = 0) {
  return tree ? Math.max(treeHeight(tree.left, height + 1), treeHeight(tree.right, height + 1)) : height;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};



