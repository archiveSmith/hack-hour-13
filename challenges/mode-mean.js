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


 function modemean(array) {
   const mean;
   const mode;
   let cache = {};

   let sum = array.reduce((prev, curr) => {
     return prev + curr;
   });

   mean = Math.floor(sum/array.length);

   array.forEach((elem) => {
     if (!cache.hasOwnProperty(elem)) {
       cache[elem] = 1;
     } else {
       cache[elem]++;
     }
   });

   mode = Object.keys(cache).reduce((prev, curr) => {
     return cache[prev] > cache[curr] ? prev : curr;
   });

   return mode === mean ? true : false;
 }

 // Hack Hour Solution
 // function modemean(array) {
 //   const mean = Math.floor(array.reduce((sum, curr) => return sum + curr, 0) / array.length);
 //   const mode = {
 //     currenMode: null,
 //     count: 0
 //   }
 //   const table = {};
 //
 //   array.forEach((num) => {
 //     if (table.hasOwnProperty(num)) table[num]++;
 //     else table[num] = 1;
 //     }
 //   });
 //
 //   Object.keys(table).forEach((num) => {
 //     if (table[num] > mode.count) {
 //       mode.currentMode = num;
 //       mode.count = table[num];
 //     }
 //
 //     if (table[num] === mode.count) {
 //       if (Number(num) > Number(mode.currentMode)) {
 //         mode.currentMode = num;
 //       }
 //     }
 //   });
 //   return mean === Number(mode.currentMode);
 // }

module.exports = modemean;
