/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 */
 

<<<<<<< HEAD
function BinaryTree(value) {
=======
function BinaryTree(val) {
>>>>>>> 46a8a24d5bec493555b5c9012bf7e36ab6f04a86
    this.value = val;
    this.left = null;
    this.right = null;
}

<<<<<<< HEAD
function validBST(node, min, max) {
    if (node === null) {
        return true;
    }
    if (min !== null && node.val > max || max !== null && node.val < min) {
        return false;
    }
    if (!validBST(node.left, min, node.val) || !validBST(node.right, node.val, max)) {
        return false;
    };
    return true;
=======
function validBST(tree) {

>>>>>>> 46a8a24d5bec493555b5c9012bf7e36ab6f04a86
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
