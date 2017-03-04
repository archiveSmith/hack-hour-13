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
  const modeCache = {};
  const mean = Math.floor(array.reduce((a,b) => a+b, 0) / array.length);
  array.forEach((el) => {
    modeCache[el] ? modeCache[el]++ : modeCache[el] = 1;
  });
  var max = -Infinity;
  var mode = -Infinity;
  for (var key in modeCache) {
    if (modeCache[key] >= max && parseInt(key, 10) > mode) {
      max = parseInt(modeCache[key], 10);
      mode = parseInt(key);
    }
  }
  return mode === mean;
}

module.exports = modemean;
