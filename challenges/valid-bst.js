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



function validBST(tree, min = -Infinity, max = Infinity) {
  if (tree === null) return true;
  if (tree.value <= min || tree.value > max) return false;
  return validBST(tree.left, min, tree.value) && validBST(tree.right, tree.value, max);
}

// const root = new BinaryTree(0);
// const left = new BinaryTree(-2);
// const right = new BinaryTree(2);
// const leftRight = new BinaryTree(0);
// const leftLeft = new BinaryTree(-3);
// const rightLeft = new BinaryTree(1.5);
// const rightRight = new BinaryTree(3);
//
// root.left = left;
// root.right = right;
//
// left.left = leftLeft;
// left.right = leftRight;
//
// right.left = rightLeft;
// right.right = rightRight;
//
// console.log(validBST(root));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
