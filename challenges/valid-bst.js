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
    let left;
    let right;
    if (tree.left === null && tree.right === null) return true;  

    if (tree.left === null); 
    else if (tree.left.value <= tree.value) {left = validBST(tree.left)}
    else return false;

    if (tree.right === null); 
    else if (tree.right.value > tree.value) {right = validBST(tree.left)}
    else return false;

    return (left && right);
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};

// let first = new BinaryTree(5); // left true 
// first.left = new BinaryTree(3); // left true
// first.right = new BinaryTree(6); 
// first.left.left = new BinaryTree(1); // base case true
// first.left.right = new BinaryTree(9);
// first.right.left = new BinaryTree(6);
// first.right.right = new BinaryTree(9);

// console.log(validBST(first));


