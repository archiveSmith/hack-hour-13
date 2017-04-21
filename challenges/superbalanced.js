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
  let leftCount = 0;
  let rightCount = 0;

  function count(value) {
    if (tree.left) {
      leftCount ++;
      tree.value = tree.left;
      count(tree.value);
    } else if (tree.right) {
      rightCount ++;
      tree.value = tree.right
      count(tree.value);
    } 
  }
  count(tree.value); 
  if (Math.abs(leftCount - rightCount) <= 1) return true;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
