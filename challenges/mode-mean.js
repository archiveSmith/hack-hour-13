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
  var modeMap = {};
  var mode = -1;
  var modeArray = [];

  //math floors the average of the array contents
  var mean = Math.floor(array.reduce(function(a,e){
    return a+e;
  }) / array.length);
  

  //maps outs elements
  for (var i=0; i<array.length; i++){
    if (modeMap[array[i]] === undefined){
      modeMap[array[i]] = 1;
    } else {
      modeMap[array[i]] ++;
    }
  }

  //gets highest occurrence of number
  for (var key in modeMap){
    if (modeMap[key] > mode) {
      mode = modeMap[key];
    }
  }

  //if multiple numbers of same quantity, puts it into modeArray
  for (var key in modeMap){
    if (modeMap[key] === mode){
      modeArray.push(Number(key));
    }
  }

  //return greatest of the modeArray
  var mode = modeArray.reduce(function(a,e){
    if (a > e){
      return a;
    } else {
      return e;
    }
  });

  //return boolean comparison
  return mean === mode;
}

console.log(modemean([1,2,2,3,5,5,7,7]));

module.exports = modemean;
