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


// binary search trees are great ways of searching through lists
// Easily organize your list by greater and less than values
//Values that are greater go down the right side of the tree 
// Values that are lesser go down the left side of the tree

function validBST(tree) {

    //   check to see if the end of the tree has been reached 
    //   break case in the recursive solution 
    if (tree === null) return true;
    //check if the tree has a left and if the value of the left is greater than the tree value this is incorrect
    //greater values should be on the right of the tree. The tree is incorrect 
    if (tree.left != undefined && tree.left.value > tree.value) {
        return false;
    }
    //check if the tree has a right value and if the right value is less than or equal to the current value
    //less than values should be to the left. The tree is incorrect. Exit and return false
    if (tree.right != undefined && tree.right.value <= tree.value) {
        return false;
    }
    // make a recursive call to move down the tree
    return validBST(tree.left) && validBST(tree.right);
}



module.exports = { BinaryTree: BinaryTree, validBST: validBST };

//     function validBST(tree) {
//         if (tree === null) return true;
//         if (tree.left != undefined && tree.left.value > tree.value) {
//             return false;
//         }
//         if (tree.right != undefined && tree.right.value <= tree.value) {
//             return false;
//         }
//         return isBST(tree.left) && isBST(tree.right);
//     }
// }