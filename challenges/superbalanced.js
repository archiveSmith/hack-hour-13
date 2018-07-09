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
  return Math.abs(height(tree.left) - height(tree.right)) <= 1
  //works without line below, too
  && superbalanced(tree.left) && superbalanced(tree.right);
}

//first effort
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

//from Interview Cake: 
//(Their definition of superbalanced is a little different: A tree is "superbalanced" if the difference between the depths of any two leaf nodes ↴ is no greater than one.)

// Solution
// We do a depth-first walk ↴ through our tree, keeping track of the depth as we go. When we find a leaf, we add its depth to an array of depths if we haven't seen that depth already.

// Each time we hit a leaf with a new depth, there are two ways that our tree might now be unbalanced:

// There are more than 2 different leaf depths
// There are exactly 2 leaf depths and they are more than 1 apart.
// Why are we doing a depth-first walk and not a breadth-first ↴ one? You could make a case for either. We chose depth-first because it reaches leaves faster, which allows us to short-circuit earlier in some cases.

  function isBalanced(treeRoot) {

  // A tree with no nodes is superbalanced, since there are no leaves!
  if (!treeRoot) {
    return true;
  }

  const depths = []; // We short-circuit as soon as we find more than 2

  // Nodes will store pairs of a node and the node's depth
  const nodes = [];
  nodes.push([treeRoot, 0]);

  while (nodes.length) {

    // Pop a node and its depth from the top of our stack
    const nodePair = nodes.pop();
    const node = nodePair[0];
    const depth = nodePair[1];

    if (!node.left && !node.right) {

      // Сase: we found a leaf
      // We only care if it's a new depth
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);

        // Two ways we might now have an unbalanced tree:
        //   1) More than 2 different leaf depths
        //   2) 2 leaf depths that are more than 1 apart
        if (
          (depths.length > 2)
          || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)
        ) {
          return false;
        }
      }
    } else {

      // Case: this isn't a leaf - keep stepping down
      if (node.left) {
        nodes.push([node.left, depth + 1]);
      }
      if (node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }

  return true;
}

// Complexity
// O(n)O(n) time and O(n)O(n) space.

