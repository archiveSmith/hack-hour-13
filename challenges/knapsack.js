/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.
  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/
function solveKnapsack(items, weightAvailable) {
  
};
 /////////////////////////////////////////////////////////////// 
let items = [{weight: 1, value : 3}, {weight: 3, value : 5}, {weight: 2, value : 4}];
console.log( solveKnapsack(items, 3) )

/*
1. calculate every weight combination
  a. if their weight is <= weightAvailable store what their value together is
2. stored highest value can keep being overwritten if new value is > old stored value;
3. return highest stored value
//---------------------
STEP 1: 
  add 1st with 2nd, 1st with 3rd, etc.
  add 1st/2nd with 3rd, 1st/2nd with 4th, etc. 


*/



///////////////////////////////////////////////////////////
module.exports = solveKnapsack;