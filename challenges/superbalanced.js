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

function superbalanced(tree) {
  if (tree.left === null && tree.right === null) return true;
  let max = 0;
  let min;
  const recurse = (tree, level = 0) => {
    if (tree === null) {
      if (min === undefined) min = level;
      if (level > max) max = level;
      if (level < min) min = level;
      return level
    }
    let left = recurse(tree.left, level + 1);
    let right = recurse(tree.right, level + 1);
  }
  recurse(tree);
  return Math.abs(max - min) < 2;
}

// const tree = new BinaryTree(5);
// tree.left = new BinaryTree(3);
// tree.left.left = new BinaryTree(2);
// tree.left.right = new BinaryTree(4);
// tree.right = new BinaryTree(7);
// tree.right.left = new BinaryTree(6);
// tree.right.right = new BinaryTree(8);
// tree.right.right.right = new BinaryTree(9);
// tree.right.right.right.right = new BinaryTree(10);

// console.log(superbalanced(tree));

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
