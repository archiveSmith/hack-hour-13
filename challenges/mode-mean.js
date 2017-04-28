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
  array = array.sort();
  var count = array.length;

  var mean = Math.floor(array.reduce(function (prev, current) {
    prev += current;
    // console.log(prev);
    return prev;
  }, 0));

  mean = Math.floor(mean / count);
  // console.log('mean', mean);

  var mode = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      mode.push(array[i]);
      // console.log(mode);
    }
  }

  if (mode.length > 1) {
    mode = mode[mode.length - 1];
  }

  mode = Number(mode);

  if (mode === mean) {
    return true;
  }
  return false;
}

module.exports = modemean;
