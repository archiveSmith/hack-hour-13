/* You are given a tree. Write a function to check if it is a 
 * valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be 
 * <= its value
 *      at any given node, the value of all the nodes in its right tree must 
 * be > its value
 */
 
function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
	function makeArray(node) {
		if (!node) return [];
		return [...makeArray(node.left), node.value, ...makeArray( node.right)];
	}

	const entireArray = makeArray(tree);
	for (let i = 1; i < entireArray.length; i += 1) {
		if (entireArray[i] < entireArray[i -1]) return false;
	}
	return true;
}

//alternative using recursive helper function:

// function validBST(BST) {
	// 	if (BST instanceof BinaryTree === false) return 'bad input';
	
	// 	function isValid (tree, min, max) {
		// 		if (!tree) return true;
		
		// 		if (tree.value > min && tree.value < max && isValid(tree.left, min, 
		// tree.value) && isValid(tree.right, tree.value, max)) {
			// 			return true;
			// 		}
			// 		return false;
			// 	}
			// 	return isValid(BST, -Infinity, Infinity);
			// }
		
//Iterative solution from Interview Cake:
// function isBinarySearchTree(treeRoot) {
				
// 				// Start at the root, with an arbitrarily low lower bound
// 				// and an arbitrarily high upper bound
// 				const nodeAndBoundsStack = [];
// 				nodeAndBoundsStack.push({
// 					node: treeRoot,
// 					lowerBound: Number.NEGATIVE_INFINITY,
// 					upperBound: Number.POSITIVE_INFINITY,
// 				});
				
// 				// Depth-first traversal
// 				while (nodeAndBoundsStack.length) {
// 					const { node, lowerBound, upperBound } = nodeAndBoundsStack.pop();
					
// 					// If this node is invalid, we return false right away
// 					if (node.value <= lowerBound || node.value >= upperBound) {
// 						return false;
// 					}
					
// 					if (node.left) {
						
// 						// This node must be less than the current node
// 						nodeAndBoundsStack.push({
// 							node: node.left,
// 							lowerBound,
// 							upperBound: node.value,
// 						});
// 					}
					
// 					if (node.right) {
						
// 						// This node must be greater than the current node
// 						nodeAndBoundsStack.push({
// 							node: node.right,
// 							lowerBound: node.value,
// 							upperBound,
// 						});
// 					}
// 				}
				
// 				// If none of the nodes were invalid, return true
// 				// (At this point we have checked all nodes)
// 				return true;
// 			}
			
module.exports = {BinaryTree: BinaryTree, validBST: validBST};
