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

// BFS METHOD
function validBST(tree) {
  // keep a min & a max value
  const toVisit = [];
  const visited = [];
  toVisit.push(tree);
  while (toVisit.length > 0) {
    const currNode = toVisit.shift();
    if (!visited.includes(currNode)) {
      visited.push(currNode);
      if (currNode.left) {
        toVisit.push(currNode.left);
        if (currNode.left.value > currNode.value) return false;
      } else if (currNode.right) {
        toVisit.push(currNode.right);
        if (currNode.right.value <= currNode.value) return false;
      }
    }
  }
  return true;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
