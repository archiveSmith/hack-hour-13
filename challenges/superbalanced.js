/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
  add(value) {
    if (value < this.value) {
      if (this.left) this.left.add(value);
      else this.left = new BinarySearchTree(value);
    } else if (value > this.value) {
      if (this.right) this.right.add(value);
      else this.right = new BinarySearchTree(value);
    }
  }
  contains(value) {
    if (this.value === value) return true;
    const branch = value < this.value ? this.left : this.right;
    if (branch) return branch.contains(value);
    return false;
  }
	// applies the callback in the order of depth first (preorder)
  depthFirstPre(callback) {
    const curr = this;
    callback(curr.value);
    if (curr.left) curr.left.depthFirstPre(callback);
    if (curr.right) curr.right.depthFirstPre(callback);
  }
	// applies the callback in the order of depth first (inorder)
  depthFirstIn(callback) {
    const curr = this;
    if (curr.left) curr.left.depthFirstIn(callback);
    callback(curr.value);
    if (curr.right) curr.right.depthFirstIn(callback);
  }
  // applies the callback in the order of depth first (postorder)
  depthFirstPost(callback) {
    const curr = this;
    if (curr.left) curr.left.depthFirstPost(callback);
    if (curr.right) curr.right.depthFirstPost(callback);
    callback(curr.value);
  }
  // applies the callback in the order of breath first (level order)
  breadthFirst(callback) {
    const queue = [this];
    while (queue.length !== 0) {
      const node = queue.shift();
      callback(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

	// Extra Bonus
	// Return the minimum stored value
  min() {

  }

	// Extra Bonus
	// Return the maximum stored value
  max() {

  }

	// Extra Bonus
	// Return the height of the tree
  height() {

  }

	// Extra Bonus
	// Remove an item from the tree and ensure that the children of the item are properly repositioned
  remove(item) {

  }

}



BinarySearchTree.prototype._getHeight = function(node) {
  if(!node) {
    return -1;
  }
  var left = this._getHeight(node.left);
  var right = this._getHeight(node.right);
  return Math.max(left, right) + 1;
};
BinarySearchTree.prototype.getHeight = function(node) {
  if(!node) {
    node = this.root;
  }
  return this._getHeight(node);
};
BinarySearchTree.prototype._isBalanced = function(node) {
  if(!node) {
    return true;
  }
  var heigthLeft = this._getHeight(node.left);
  var heigthRight = this._getHeight(node.right);
  var diff = Math.abs(heigthLeft - heigthRight);
  if(diff > 1) {
    return false;
  } else {
    return this._isBalanced(node.left) && this._isBalanced(node.right);
  }
};
BinarySearchTree.prototype.isBalanced = function(node) {
  if(!node) {
    node = this.root;
  }
  return this._isBalanced(node);
};

let bst = new BinarySearchTree(34);
bst.add(5);
bst.add(2);
bst.add(9);
bst.add(15);
bst.add(95);
bst.add(1);
bst.add(59);
bst.right.right = new BinarySearchTree(12);
console.log(bst.isBalanced(bst.left))
console.log(bst.getHeight(bst.left))








// function BinaryTree(value) {
//   this.value = value;
//   this.left = null;
//   this.right = null;
// }

function superbalanced(tree) {
  
  return Math.random() < 0.5;







  ///Just kidding. I will come back and finish this later
}
// module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
