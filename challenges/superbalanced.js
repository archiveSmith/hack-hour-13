
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

function getHeight(bst) {
  if (!bst) return 0;
  return 1 + Math.max(getHeight(bst.right), getHeight(bst.left));
}

function superbalanced2(tree) {
  if (!tree) return true;

  return Math.abs(getHeight(tree.left) - getHeight(tree.right)) <= 1 && superbalanced(tree.left) && superbalanced(tree.right);
}


function superbalanced(tree) {
  let rightLevels = 0;
  let leftLevels = 0;
  let curr = tree;

  while(curr.right) {
    rightLevels++;
    curr = curr.right;
  }
  //reset the curr value back to the top of the tree
  curr = tree;
  while(curr.left) {
    leftLevels++;
    curr = curr.left;
  }

  if (Math.abs(rightLevels - leftLevels) <= 1) {
    return true;
  } else {
    return false;
  }

  console.log('RIGHT LEVELS', rightLevels);
  console.log('LEFT LEVELS', leftLevels);
  console.log('LEVEL DIFF', Math.abs(rightLevels - leftLevels))
}

//////////////////////TESTING///////////////////////////////
let tree = new BinaryTree(10);
tree.left = new BinaryTree(6);
tree.left.left = new BinaryTree(2);
tree.left.right = new BinaryTree(8);
tree.left.left.left = new BinaryTree(1);
tree.right = new BinaryTree(14);
tree.right.right = new BinaryTree(16);
//tree.right.left = new BinaryTree(12);
//tree.right.right.right = new BinaryTree(20);
//-----------------------------------------------------------
//console.log( superbalanced2(tree) );
console.log(tree);
/*
traverse the tree on each side(recursion)
go until no more nodes
keep track of how many levels deep each side is
if they are <= 1, then sides are balanced 

*/










module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
