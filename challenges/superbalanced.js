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
  // set the height to 0 for the root
  let maxHeight = 0;

  function heightCheck(eachTree, height) {
    // if there is no more branches, just return
    if (!eachTree) {
      // check to see if the max height value is more than 1 different from prev value
      if (Math.abs(maxHeight - height) === 1 || maxHeight === 0 || maxHeight === height) {
        // if the max height is less than the height, add one to overall height
        if (maxHeight < height) {
          maxHeight = height;
        }
        return true;
      } else {
        return false;
      }
    }
    // every time when going one level deeper, add one to height
    // do recursion
    height += 1;
    return heightCheck(eachTree.left, height) && heightCheck(eachTree.right, height);
  }

  return heightCheck(tree, 0);
}

// optimized solution. instead of keeping track of the maxHeight, this solution just checks each level to see if the left and right tree height are the same
// function height(tree) {
//   if (tree === null) return 0;
//   return 1 + Math.max(height(tree.left), height(tree.right));
// }

// function superbalanced(tree) {
//   if (tree === null) return true;
//   return Math.abs(height(tree.left) - height(tree.right)) <= 1 && superbalanced(tree.left) && superbalanced(tree.right);
// }

// var a = new BinaryTree(20);
// var b = new BinaryTree(10);
// var c = new BinaryTree(15);
// var d = new BinaryTree(5);
// var e = new BinaryTree(18);

// a.left = b;
// a.right = c;
// b.left = d;
// c.right = e;

// console.log(superbalanced(a));



module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
