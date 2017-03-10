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
	function modeMean(array) {
  let modeObj = {};
  let mode = 0;
  let mean = 0;
  let count = 0;
  let max = 0;
  
  
  
  for (var i = 0; i < array.length; i++) {
    mean += array[i];
    if(!modeObj[array[i]]) {
      modeObj[array[i]] = 1;
    } else {
      modeObj[array[i]] += 1;
    }
  }
  
  
  console.log(modeObj);
  
  for(var key in modeObj) {
    if (modeObj[key] > count) {
    max = key;
    count = modeObj[key];
    }
  }
  
  mode = max;
 
  
  
  mean = Math.floor(mean /= array.length);
  console.log(mode);
  mode = Number(mode);
  
  return mode === mean;
}
}

module.exports = modemean;
