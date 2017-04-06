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
   // traverse down the binary tree in postorder and test if its left is <= value, and its right is greater than value
   // create a variable to hold whether the right branch returns true
   let rightBranch = false;
   // create a variable to hold whether the left branch returns true
   let leftBranch = false;

   if (tree.right) {
     rightBranch = validBST(tree.right);
   }

   if (tree.left) {
     leftBranch = validBST(tree.left);
   }

   // if the branch has no branch to left or right, return the value
   if (!tree.left && !tree.right) return true;

   return (tree.left.value <= tree.value && tree.right.value > tree.value) &&
   (leftBranch && rightBranch);
 }

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
