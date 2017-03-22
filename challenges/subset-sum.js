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
  // const temp = [];
  // for (let i = 0; i < array.length; i += 1) {
  //   if (array[i] < target) {
  //     temp.push(array[i])
  //   }
  // }
  // let sum = temp.reduce((acc, curr) => acc + curr)
  // console.log(sum)
  // temp.forEach(integer => {
  //   if (sum - )
  // }

  const combinations = [];

  let sliced  = array.slice();
  function comboFinder(sliced) {
    if (sliced.length < 2) return
    for (let i = 0; i < sliced.length; i += 1) {
      let arrLength = sliced.length;
      // console.log(sliced)
      while (sliced.length > 1) {
        combinations.push(sliced.reduce((acc, curr) => acc + curr))
        sliced.shift();
        // console.log(sliced)
        // console.log(combinations)
      }
    }
    sliced  = array.slice().shift()
    console.log(array)
    // comboFinder(sliced)
  }

  comboFinder(array)
  console.log(combinations)
}
subsetSum([3, 7, 4, 2], 5)
module.exports = subsetSum;
