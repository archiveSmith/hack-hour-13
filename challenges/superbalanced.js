/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
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

function superbalanced(tree, left_count, right_count) {
  if(tree.left){
    var what = 'temp';
  }
  return 1;
}

// var binarySearchTree = new BinaryTree(5);
// binarySearchTree.add(2);
// binarySearchTree.add(3);
// binarySearchTree.add(7);
// binarySearchTree.add(6);
// console.log(binarySearchTree);

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
