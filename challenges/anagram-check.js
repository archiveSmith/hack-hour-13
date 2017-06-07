/**
 * Created by angie on 6/7/17.
 */
// DONE!
// Write a function to check whether two given strings are anagram of each other or not

// do a basic check on length first
// ideas
// sort strings

function checkAnagram(arg1, arg2) {
  // edge case
  if (arg1.length !== arg2.length) return 0;
  if (arg1.split('').sort().join('') === arg2.split('').sort().join('')) return 1;
  return 0;
}

function checkAnagramInput(input1, input2) {
  const returnArr = [];
  for (let i = 0; i < input1.length; i += 1) {
    returnArr.push(checkAnagram(input1[i], input2[i]));
  }
  return returnArr;
}

const firstWords = ['iceman', 'aba', 'train'];
const secondWords = ['cinema', 'bab', 'rain'];
console.log(checkAnagramInput(firstWords, secondWords));

