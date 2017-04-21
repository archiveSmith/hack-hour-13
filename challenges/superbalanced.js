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
  let lh;
  let rh;

  !tree ? 0 : lh = superbalanced(tree.left);
  if (lh === -1) return -1;

  !tree ? 0 : rh = superbalanced(tree.right);
  if (rh === -1) return -1;

  if (Math.abs(lh - rh) > 1) {
    return false;
  } else {
    return true;
  }
}

superbalanced(new BinaryTree(12));
// module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
