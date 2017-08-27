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
function height(node){
	if(node === null) return 0;
	else{
		return 1 + Math.max(height(node.left), height(node.right));
	}
}
function superbalanced(tree) {

	return Math.abs(height(tree.left) - height(tree.right)) <= 1;
}

let b = new BinaryTree(4);
b.left = new BinaryTree(3);
b.left.left = new BinaryTree(2);
b.left.left.left = new BinaryTree(1);
b.right = new BinaryTree(5);

let result = superbalanced(b);
console.log('checking thre result, ', result);



module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
