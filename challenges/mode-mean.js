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
  const mean = Math.floor(array.reduce((a, b) => a + b, 0) / array.length);
  let mode = 0;
  let maxNumOfRepeats = 0;
  // uses an object to store number of times the number is repeated in array
  const numTimes = {};
  array.forEach((x) => {
    if (numTimes.hasOwnProperty(x)) {
      numTimes[x] = x;
    } else {
      numTimes[x] += 1;
    }
  });

  Object.keys(numTimes).forEach((x) => {
    if (numTimes[x] === maxNumOfRepeats) {
      if (x > mode) {
        mode = x;
      }
    }
    if (numTimes[x] > maxNumOfRepeats) {
      maxNumOfRepeats = numTimes[x];
      mode = x;
    }
  });

  return Number(mode) === mean;
}

module.exports = modemean;
