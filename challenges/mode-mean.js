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
  let mean = Math.floor(array.reduce((acc, curr) => {return acc + curr}, 0)/array.length);

  let mode = array.reduce((acc, curr) => {
    if(acc.hasOwnProperty(curr)) {
      acc[curr] = acc[curr]+1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  let modeArr = [];

  for(var key in mode) {
    modeArr.push([key, mode[key]]);
  }

  mode = +modeArr.sort((a, b) => {
    return b[1] - a[1];
  })[0][0];

  return mode === mean;
}

module.exports = modemean;
