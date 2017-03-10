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
  const mean = Math.floor(array.reduce((acc, curr) => { return acc + curr; }, 0) / array.length);

  let mode = 0;

  let newArr = array.reduce((acc, curr) => {
    if (acc.hasOwnProperty(curr)) {
      acc[curr] = acc[curr] + 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  newArr.forEach((element) => { element[Object.keys(element)] > mode ? mode = element : mode; });

  return mode === mean;
}

module.exports = modemean;
