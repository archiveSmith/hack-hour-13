/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 */

 // Input is a tree.
 // Output if valid BST is true otherwise false.
  // Valid if all nodes on left are <= and > for the right.
  // Not valid otherwise.
// Start at root node and traverse left until you reach null and then traverse right until you reach null.

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
  if (!tree) return true;

  if (tree.left && tree.left.value <= tree.value) {
    return validBST(tree.left);
  }
  if (tree.right && tree.right.value > tree.value) {
    return validBST(tree.right);
  }
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
