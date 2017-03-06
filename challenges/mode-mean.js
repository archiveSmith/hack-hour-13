/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

 function modemean(array, memo = {}) {
   const mean = Math.floor((array.reduce((accum, curr) => accum + curr)) / array.length);

   for (let i = 0; i < array.length; i++) {
     if(memo.hasOwnProperty(memo[array[i]])) {
       memo[array[i]]++;
     } else {
     memo[array[i]] = 1;
     }
   }

   const mode = Number(Object.keys(memo).reduce((accum, curr) => memo[accum] > memo[curr] ? accum : curr));
   return mode === mean;
 }

module.exports = modemean;
