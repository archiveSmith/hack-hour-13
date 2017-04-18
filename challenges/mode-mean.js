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
  var cache = {};
  var mean = Math.floor(array.reduce((a, b) => a + b) / array.length);
  for (let i = 0; i < array.length; i += 1) {
    if (!cache[array[i]]) { cache[array[i]] = 1;}
    else {cache[array[i]] = cache[array[i]] += 1;}
  }
  var mode = Number(Object.keys(cache).reduce(function(a, b){ return cache[a] > cache[b] ? a : b }));
  return mode === mean;
}

module.exports = modemean;
