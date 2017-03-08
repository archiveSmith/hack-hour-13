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
  let obj = {};
  var count  = 0;
  var max = 0;

  let mean = Math.floor(array.reduce(function(acc, curr){
    return acc += curr;

  })/array.length);

  let mode = array.forEach(function(item){
    obj[item] ? obj[item]++ : obj[item] = 1;

    if(obj[item] > 1){
      max = item;
      count = obj[item];
    }
  });

  mode = max;

  return mean === mode ? true : false;
}

module.exports = modemean;
