
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
  let mean = array.reduce((acc, curr) => 
    acc += curr
  )/array.length;

  let counter = {};

  array.forEach(n => {
    counter.hasOwnProperty(n) ? counter[n]++ : counter[n] = 1
  })

  console.log(counter);
  var count = 0;
  var mode = 0;
 
  Object.keys(counter).forEach(key => {
    if (counter[key] > count) {
      mode = key;
      count = counter[key];
    } if (counter[key] === count && Number(key) > Number(mode) ) {
      mode = key;
    }
  })

  // for (key in counter) {
  //   if (counter[key] > count) {
  //     mode = key;
  //     count = counter[key];
  //   } 
  // }
  
  console.log(mean);
  console.log(mode);
  return mode == Math.floor(mean);   
}


console.log(modemean([2,4,5,3,5,4,6]) )

/*
find mode
  set counter {} for each # of times n exists in array; 
  find largest using for in loop
find mean
compare

*/










module.exports = modemean;



