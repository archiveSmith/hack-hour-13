/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.
  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
  */
  
//const items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];

  //weights must sum to weight available
  //value must be as high as possible.
  //return value

  //iterate through array and collect weights.
  //find array location of the ones that sum to weight available.

function solveKnapsack(items, weightTarget, totalValue = 0) {
  //base case
  if (!items.length) return totalValue;
  //keep track of max
  let currMax = -Infinity;
  //iterate through items getting remainder of weight needed
  for (let i = 0; i < items.length; i++) {    
    const item = items[i];
    // update weight
    const remainder = weightTarget - item.weight;
    // get other items that are less than remaining weight
    const restOfItems = items.slice(i + 1).filter(item => item.weight <= remainder);
    //update max of using current in combination and passing in the value so far
    const totalWithCurr = solveKnapsack(restOfItems, remainder, totalValue + item.value);
    //take larger of current Max or total with current item.
    currMax = Math.max(currMax, totalWithCurr);    
  }
  return currMax;
};

// this version is if can use items of same weight multiple times: 'unbounded knapsack problem'
// function solveKnapsack(items, weightAvailable) {
//   const capacities = [];
//   for (let i = 0; i <= weightAvailable; i++) {
//     capacities[i] = 0;
//   }

//   for (let curr = 0; curr <= weightAvailable; curr++) {
//     let maxValue = 0;

//     for (let j = 0; j < items.length; j++) {
//       let item = items[j];

//       if (item.value != 0 && item.weight === 0) return Infinity;

//       if (item.weight <= curr) {
//         let currMaxValue = item.value + capacities[curr - item.weight];
//         maxValue = Math.max(currMaxValue, maxValue);
//       }
//     }
//     capacities[curr] = maxValue;
//   }
//   return capacities[weightAvailable];
// };



module.exports = solveKnapsack;


