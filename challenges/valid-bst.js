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

function buildBST(...args) {
    function addToTree(tree, val) {
        while (true) {
            if (val < tree.value) {
                tree.left ? tree = tree.left : tree.left = new BinaryTree(val); break;
            } else {
                tree.right ? tree = tree.right : tree.right = new BinaryTree(val); break;
            }
        }
    }
    let tree = head = new BinaryTree(args[0]);
    for (let i = 1; i < args.length; i++) {
        addToTree(tree, args[i]);
    }
    return head;
}

function validBST(tree) {

}

console.log(buildBST(15, 13, 14, 25));

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
