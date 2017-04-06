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

function validBST(tree, valArr = []) {
    if(!tree.left) return true;
    if(!tree.right) return true;
    
    valArr.push(tree.val);

    for(let i = 0; i <= valArr.length; i += 1){
        if(i === valArr.length-1 && tree.right.value <= tree.value) return false;
        if(tree.left.value > valArr[i] && tree.right.value > valArr[i]) return false;
    }

    return validBST(tree.left, valArr) && validBST(tree.right, valArr); 

}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
