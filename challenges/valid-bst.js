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
    // let middle = tree.value;
    // let leftPointer = tree.left, rightPointer = tree.right;

    // while (tree.value === null || leftPointer === null && rightPointer === null) {
    //     //check leftside is bigger or right side is smaller, and also do same logic comparison with root of the tree.
    //     if (leftPointer.left.value > leftPointer.value && leftPointer.value > middle &&
    //         rightPointer.right.value <= rightPointer.value && rightPointer.value <= middle) {return false};
    //     leftPointer = leftPointer.left;
    //     rightPointer = rightPointer.right;
    // }
    // return true;

    if (tree.value === null || tree.left === null && tree.right === null) return true;

    return validBST(this.left <= this.value && this.left <= tree.value) && 
           validBST(this.right > this.value && this.right > tree.value)

}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};