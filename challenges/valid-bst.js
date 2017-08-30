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

function vBST(tree) {
    function arrayBST(node) {
        if (!node) return [];
        return arrayBST(node.left).concat(node.value).concat(arrayBST(node.right))
        //return [...arrayBST(node.left), node.value, ...arrayBST(node.right)];
    }
    const arrayTree = arrayBST(tree);
    console.log(arrayTree)
    //iterate through array and check if values are in order from least to greatest 
    for (let i = 1; i < arrayTree.length; i++) {
        if (arrayTree[i] < arrayTree[i - 1]) return false;
    }
    return true;
}





// module.exports = { BinaryTree: BinaryTree, validBST: validBST };

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

let tree = new BinaryTree(10);
tree.left = new BinaryTree(5);
tree.left.left = new BinaryTree(3);
tree.left.right = new BinaryTree(6);
tree.right = new BinaryTree(14);
console.log(vBST(tree)) //return true 
tree.left.left.left = new BinaryTree(4);
console.log(vBST(tree)) //return false;