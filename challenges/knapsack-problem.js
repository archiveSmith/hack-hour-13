/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.
  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable, totalValue = 0) {
  // base case: no items passed in
  if (!items.length) return totalValue;
  // hold current max
  let currMax = -Infinity;
  // get max value of having current item w/in combo then w/o it
  for (let idx = 0; idx < items.length; idx++) {    
    const curr = items[idx];

    // update weight
    const newWeightAvail = weightAvailable - curr.weight;

    // get other items that can fit w/in new weight
    const otherItems = items.slice(idx + 1).filter(item => item.weight <= newWeightAvail);

    // update max of using current in combination
    const maxWithCurr = solveKnapsack(otherItems, newWeightAvail, totalValue + curr.value)
    currMax = Math.max(currMax, maxWithCurr);
  }
  return currMax;
};

module.exports = solveKnapsack;