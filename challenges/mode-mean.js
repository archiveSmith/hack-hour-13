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
  let mean = array.reduce(function(a, b) {
    return (a + b);
  });
  mean = mean/array.length;
  const obj = {};
  for (let i = 0; i < array.length; i += 1) {
    if (!obj[array[i]]) {
      obj[array[i]] = 1;
    } else {
      obj[array[i]] += 1;
    }
  }
let mode;
let counter = 0;
for (let key in obj) {
  if (counter < obj[key]) {
    counter = obj[key];
  }
  if (counter === obj[key])
    mode = parseInt(key);
  }
return mean === mode;
}
module.exports = modemean;
