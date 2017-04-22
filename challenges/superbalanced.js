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

function getHeight(bst) {
  if(!bst) {
    return 0;
  }

  return 1 + Math.max(getHeight(bst.right), getHeight(bst.left));
}

function superbalanced(tree) {
  if(!tree) return true;

  const leftHeight = getHeight(tree.left);
  const rightHeight = getHeight(tree.right);

  return Math.abs(leftHeight - rightHeight) <= 1 && superbalanced(tree.left) && superbalanced(tree.right);
}


let bt = new BinaryTree(1);
// bt.left = new BinaryTree(1);
bt.right = new BinaryTree(1);
bt.right.right = new BinaryTree(1);
bt.right.right.right = new BinaryTree(1);

console.log(superbalanced(bt));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
