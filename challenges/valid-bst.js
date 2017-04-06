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

function validBST(tree, leftMin = -Infinity, rightMax = Infinity) {
    // check if tree is null or not
    if (!tree) return true;

    if (
        // check if current node's left and right values are out of order
        // with tree's val or grandparent values
        (
            tree.left && 
            (tree.left.value >= tree.value || tree.left.value <= leftMin)
        ) ||
        (
            tree.right &&
            (tree.right.value <= tree.value || tree.right.value >= rightMax)
        ) ||
        // if valid left and right values,
        // call validBST again to check left and right's children
        !validBST(tree.left, leftMin, tree.value) ||
        !validBST(tree.right, tree.value, rightMax)
    ) {
        return false;
    }

    // node and its children have valid left and right vals
    return true;
}

// // valid tree
// var validTree = new BinaryTree(4);
// validTree.left = new BinaryTree(2);
// validTree.left.left = new BinaryTree(1);
// validTree.left.left.left = new BinaryTree(0);
// validTree.left.right = new BinaryTree(3);
// validTree.right = new BinaryTree(5);

// invalid tree
// var invalidTree = new BinaryTree(4);
// invalidTree.left = new BinaryTree(2);
// invalidTree.left.right = new BinaryTree(5);
// invalidTree.right = new BinaryTree(5);
// invalidTree.right.left = new BinaryTree(0);
// invalidTree.right.right = new BinaryTree(7);

// var res = validBST(invalidTree);
// console.log(res);

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
