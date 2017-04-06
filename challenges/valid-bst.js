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

function validBST(tree) {
  console.log(tree);
  // traverse down the binary tree in postorder and test if its left is <= value, and its right is greater than value

  if (tree.right) {
    validBST(tree.right);
  }

  if (tree.left) {
    validBST(tree.right);
  }

  return tree.left <= tree.value && tree.right > tree.value;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
