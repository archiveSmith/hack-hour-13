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

// function validBST(tree) {
//   const tr = tree;
//   const val = tr.value;
//   return (function check(BST) {
//     if (BST === null) return true;
//     if (BST.value === val) {
//       if ((BST.left !== null && BST.left.value > BST.value) ||
//         (BST.right !== null && BST.right.value < BST.value)) return false;
//     }
//     if (BST.value !== val) {
//       if ((BST.left !== null && (BST.left.value > BST.value || BST.right.value > val)) ||
//         (BST.right !== null && (BST.right.value < BST.value || BST.left.value < val))) return false;
//     }
//     return check(BST.left) && check(BST.right);
//   }(tr));
// }

function validBST(tree, val) {
  if (val === undefined) val = tree.value;
  if (tree === null) return true;
  if ((tree.left !== null && tree.left.value > val) ||
    (tree.right !== null && tree.right.value < val)) return false;
  return validBST(tree.left, tree.left.value) && validBST(tree.right, tree.right.value);
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
