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
//take an array, determine if mean and mode are equilivant

function modemean(array) {
// find the mean of our array
  const mean = Math.floor((array.reduce(function (acc, initVal) {
    acc += initVal
    return acc;
  }, 0)) / array.length);
// sort array from smallest to largest
  const sortedArray = array.sort(function (a , b) { return a - b });

  let counter = 0;
  let mode;
  let lastMode = 0;
// loop through sorted array
  for (let i = 1; i < sortedArray.length; i += 1) {
// When values are the same increment counter
    if (sortedArray[i] === sortedArray[i - 1]) {
      counter += 1;
// If counter is greater than lastMode set last mode equal to counter.
      if (counter >= lastMode) {
        lastMode = counter;
  // then change mode to the current value of the sorted array
        mode = sortedArray[i];
      }
    } else {
      counter = 0;
    }
  }
  return mode === mean;
}

//expects modemean([10,10,10,10]) --> true
//expects modemean([10,10,10,28]) --> flalse

module.exports = modemean;
