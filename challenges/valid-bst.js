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


function validBST(tree, leftCompare = null, rightCompare = null) {
    if (leftCompare !== null && tree.value > leftCompare) return false;
    if (rightCompare !== null && tree.value <= rightCompare) return false;
    if (tree.left && !validBST(tree.left, tree.value, rightCompare)) return false;
    if (tree.right && !validBST(tree.right, leftCompare, tree.value)) return false;
    return true;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};

