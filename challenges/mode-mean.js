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
  let maxMode = -Infinity;
  let maxCount = 0;
  let sum = 0;
  
  array.reduce((obj, curr) => {
    sum += curr;
    obj[curr] ? ++obj[curr] : obj[curr] = 1;
    
    if (obj[curr] > maxCount) {
      maxCount = obj[curr];
      maxMode = curr;
    } else if (obj[curr] === maxCount && curr > maxMode) {
      maxMode = curr;
    }
    return obj;
  }, {});
  
  return (Math.floor(sum / array.length) === maxMode);
}

//first version. Not efficient.
//   let total = 0;

//   for (let i = 0; i < array.length; i++) {
//     total += array[i] ;
//   }

//   let mean = Math.floor(total/array.length);
//   let mode = 0;
//   let currCount = 0;
//   let maxCount = 0;
//   let uniqArray = array.filter(function(item, index, array) {
//     return array.indexOf(item) === index;
//   });

//   for(let i = 0; i < uniqArray.length; i++) {
//     //testing occurence of array[i]
//     currCount = 0;
//     for (let j = 0; j < array.length; j++) {
//       //counting how many times array[i] is in array
//       if (uniqArray[i] === array[j]) {
//         currCount++;
//       }
//     }
    
//     if (currCount > maxCount) {
//       // put new high count in count
//       // record mode  
//       maxCount = currCount;
//       mode = uniqArray[i];

//     } else if (currCount === maxCount) {
//         //i.e. if one number appears as often as another number
//         //see whether uniqArray[i] is bigger than mode
//       if (uniqArray[i] > mode) {
//         mode = uniqArray[i];
//       }
//     }
//   }
  
//   return (mode === mean);
// }

module.exports = modemean;
