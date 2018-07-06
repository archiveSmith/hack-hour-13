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

// function branchDepth (tree, depth = 1) {
//   if (!tree) return depth;
//   return Math.max(branchDepth(tree.left, depth + 1), branchDepth(tree.right, depth + 1));
// }

// function superbalanced(tree) {
//   // create a left depth and a right depth and have them equal
//   // the total depth for when tree is finally null
//   const leftDepth = branchDepth(tree.left);
//   const rightDepth = branchDepth(tree.right);
//   return Math.abs(leftDepth - rightDepth) <= 1;
// }


// function superbalanced(tree) {
//   if (tree.left === null && tree.right === null) return true;
//   let max = 0;
//   let min;
//   const recurse = (tree, level = 0) => {
//     if (tree === null) {
//       if (min === undefined) min = level;
//       if (level > max) max = level;
//       if (level < min) min = level;
//       return level
//     }
//     let left = recurse(tree.left, level + 1);
//     let right = recurse(tree.right, level + 1);
//   }
//   recurse(tree);
//   return Math.abs(max - min) <= 1;
// }

function height(tree) {
  if (tree === null) {
      return 0;
  }
  return 1 + Math.max(height(tree.left), height(tree.right));
}

function superbalanced(tree) {
  if (tree === null) {
    return true;
  }
  return Math.abs(height(tree.left) - height(tree.right)) <= 1;
  //&& superbalanced(tree.left) && superbalanced(tree.right);
}

// function superbalanced(tree) {
//   let leftCount = 0;
//   let rightCount = 0;

//   function count(value) {
//     if (tree.left) {
//       leftCount ++;
//       tree.value = tree.left;
//       count(tree.value);
//     } else if (tree.right) {
//       rightCount ++;
//       tree.value = tree.right
//       count(tree.value);
//     } 
//   }
//   count(tree.value); 
//   if (Math.abs(leftCount - rightCount) <= 1) return true;
// }

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
