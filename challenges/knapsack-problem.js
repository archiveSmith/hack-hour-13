/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.
  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

// Input -> Array of objects, and weight limit/capacity,
// Output -> Number, maximum value you can fit in your knapsack.

// Base case
   // If inputs are equql to 0, return 0

// Psuedocode
  // Check to see if inputs are proper and are greater than 0.
    // If not, return 0. (BASE CASE)

  // Check item starting at beginning of array.

  // Compare the weight of the items against your weight limit/capacity.
    // If the item is too heavy, remove it or create a shallow copy of the item
    // array that excludes it.

  // If it can fit, create a variable that is a shallow copy/slice of the rest of the items

  // Create a variable that stores the outcome of keeping the item and create a
  // variable that stores the outcome of not keeping it.

  // Both will need a recursive call on the main function.

  // At the end, return the greater of the two variables, which are acting as both
  // possible outcomes.

  // With the recursive calls we are checking every possibility.

const list = [{ weight: 1, value: 3 }, { weight: 2, value: 4 }, { weight: 3, value: 5 }];

function solveKnapsack(items, weightAvailable) {
  if (items.length === 0 || weightAvailable === 0) return 0;

  if (items[0].weight > weightAvailable) return solveKnapsack(items.slice(1), weightAvailable);

  const left = items.slice(1);
  const takeItem = items[0].value + solveKnapsack(left, weightAvailable - items[0].weight);
  const leaveItem = solveKnapsack(left, weightAvailable);

  return (takeItem > leaveItem) ? takeItem : leaveItem;
}

// console.log(solveKnapsack(list, 3));

module.exports = solveKnapsack;
