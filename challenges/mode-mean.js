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
    let sum = 0;
    let mean;
    let mode;
    let modeObj = {};
    
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    mean = Math.floor(sum/array.length);
    
    
    for (let i = 0; i < array.length; i++) {
      if (!modeObj.hasOwnProperty(array[i])) {
        modeObj[array[i]] = 1;
      } else {
        modeObj[array[i]] = modeObj[array[i]] += 1;
      }
    }
    mode = Number(Object.keys(modeObj).reduce(function(a, b) {
      if (modeObj[a] > modeObj[b]) {
        return a;
      } else {
        return b;
      }
    }));
    return mode === mean;
}

module.exports = modemean;
