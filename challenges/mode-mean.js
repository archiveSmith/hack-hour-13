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

   const mean = Math.floor(array.reduce((acc, curr) => { return acc + curr; }, 0) / array.length);

   let mode = 0;

   const newArr = array.reduce((acc, curr) => {
     return acc[curr] ? acc.concat(acc[curr] = acc[curr] + 1) : acc.concat(acc[curr] = 1);
   }, []);

   newArr.forEach((element) => { if (element > mode) mode = newArr.indexOf(element); });
    // if greater, reassign mode to the current element

   return mode === mean;
 }

module.exports = modemean;
