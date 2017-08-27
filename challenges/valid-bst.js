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
    function makeArray(node) {
        if (!node) return [];
        return [...makeArray(node.left), node.value, ...makeArray(node.right)];
    }

    const entireArray = makeArray(tree);
    for (let i = 1; i < entireArray.length; i++) {
        if (entireArray[i] < entireArray[i - 1]) return false;
    }

    return true;
}

// keeping track of min and max
// Track Min and Max


function validBST(BST) {
 if (BST instanceof BinaryTree === false) return 'bad input';
 
 /* Create validation helper function
  * INPUT: tree, min, max
  * OUTPUT: boolean
  */
 function isValid(tree, min, max) {
   // Base case: if tree is null, return true as we have reached a leaf successfully
   if (!tree) return true;

   // Current value must be greater than minimum handed down from previous call
   if (tree.value > min &&
       
       // Current value must be less than maximum handed down from previous call
       tree.value < max &&
     
       // If both previous checks pass, run isValid on left branch with same min but max = current value
       isValid(tree.left, min, tree.value) &&
       
       // If both previous checks pass, run isValid on left branch with same max but min = current value
       isValid(tree.right, tree.value, max)) {
     
       // If all recursive calls return true, then entire tree is valid, so return true!
       return true;
   }

   // If a single comparison fails, return false.
   return false;
 }

 // Begin recursive search with BST, -Infinity and Infinity
 return isValid(BST, -Infinity, Infinity);
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
