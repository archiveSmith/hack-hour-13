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
	if (!tree || !tree.left && !tree.right) return true; 
	if ((tree.left && tree.left.value > tree.value) || (tree.right && tree.right.value <= tree.value)) return false;
  
	return validBST(tree.left) && validBST(tree.right)
}

// let a = new BinaryTree(5);
// let b = new BinaryTree(4);
// let c = new BinaryTree(6);
// let d = new BinaryTree(2);
// let e = new BinaryTree(10);

// d.left = e;
// c.left = d;
// b.right = c;
// a.left = b;


// validBST(a);

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
