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

BinaryTree.prototype.add = function (value) {
    if (value < this.value) {
        if (!this.left) {
            this.left = new BinaryTree(value);
        }
        else {
            return this.left.add(value);
        }
    }
    else {
        if (!this.right) {
            this.right = new BinaryTree(value);
        }
        else {
            return this.right.add(value);
        }
    }
};

BinaryTree.prototype.contains = function (value) {
    if (value === this.value) {
        return true;
    }
    else if (value < this.value) {
        if (this.left === value) {
            return true;
        }
        else {
            this.value = this.left;
            return this.value.contains(value);
        }
    }
    else if (value > this.value) {
        if (this.right === value) {
            return true;
        }
        else {
            this.value = this.right;
            return this.value.contains(value);
        }
    }
    else {
        return false;
    }
};

function validBST(tree) {
    if (tree.left === null || tree.right === null) { return true; }
    if (tree.left < tree.val) {
        validBST(tree.left);
    } else if (tree.left > tree.val) {
        return false;
    } else if (){
        
    }



}

var binarySearchTree = new BinaryTree(5);
binarySearchTree.add(2);
binarySearchTree.add(3);
binarySearchTree.add(7);
binarySearchTree.add(6);
console.log(binarySearchTree);

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
