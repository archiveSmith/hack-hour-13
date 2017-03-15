/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  let currVal = 0;
  console.log('array', array);
  console.log('target', target);
  // // have to be able to "sum" two numbers together
  // if (!Array.isArray(array)) {
  //   return false;
  // }

  // // if target is not a number
  // if (typeof target !== 'number') return false;

  // // if the elements inside array are not numbers
  // array.forEach(value => {
  //   if (typeof value !== 'number') return false;
  // })

  // // if array is only a single number 
  // if (array.length === 1) {
  //   return array[0] === target;
  // }

// * * * * * * * * // recursive method // * * * * * * * * //
  if (target === 0) return true;
  if (!array.length) return false;

  return subsetSum(array.slice(1), target) || subsetSum(array.slice(1), target - array[0]);


// * * * * * * * * // non-recursive method // * * * * * * * * // 
//   for (let i = 0; i < array.length; i += 1) {
//     for (let j = i + 1; j < array.length; j += 1) {
//       currVal = array[i] + array[j];
//       let k = j + 1;
//       while (k !== j) {
//         if (k >= array.length) {
//           k = 0;
//         }
//         if (k !== j && k < array.length && k !== i) {
//           currVal += array[k];
//         } 
//         if (currVal === target) return true;
//         k += 1;
//       }
//     }
//   }
//   return false;
}

// console.log(subsetSum([3, 7, 4, 2], 5))
// console.log(subsetSum([3, 34, 4, 12, 5, 12], 32))
// console.log(subsetSum([8, 2, 4, 12], 13))
// console.log(subsetSum([8, -2, 1, -3], 6))
// console.log(subsetSum([8, -2, '1', '-3'], 6))

module.exports = subsetSum;
