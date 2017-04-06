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

BinaryTree.prototype.insert = function (Insert) {
    if (this.value > Insert) {
        if (this.left === null) {
            this.left = new BinaryTree(Insert);
        }
        else {
            this.left.insert(Insert);
        }
    }

    if (this.value < Insert) {
        if (this.right === null) {
            this.right = new BinaryTree(Insert);
        }
        else {
            this.right.insert(Insert);
        }
    }
}

function validBST(tree) {
    if (tree === null) return true;

    if (tree.left === null && tree.right === null) return true;

    if (tree.left !== null) {
      console.log(tree.left, 'hi im tree.lefts value')
        tree.left = validBST(tree.left);
    }
    if (tree.right !== null) {
      console.log(tree.right, 'hi im tree.rights value');
        tree.right = validBST(tree.right);
    }

    if (tree.left >= tree.value) {
        return false;
    }
    else if (tree.right <= tree.value) {
        return false;
    }
    else {
        return true;
    }

}

var bst = new BinaryTree(7);
bst.insert(9);
bst.insert(6);
bst.insert(4);

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
