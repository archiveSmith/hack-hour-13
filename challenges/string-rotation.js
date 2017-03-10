/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

// function stringRotation(s1, s2) {
//   if (typeof s1 !== 'string' || typeof s2 !== 'string') {return 'error'}
//   if (s1.length === 0 || s2.length === 0) {return true}

//   let firstLetter = s1.charAt(0);
//   let foundIndex = s2.indexOf(firstLetter); 
//   let testString = s2.slice(foundIndex) + s2.slice(0, foundIndex);
//   return testString === s1
// }

function stringRotation(s1, s2) {
  if (typeof s1 !== 'string' || typeof s2 !== 'string') {return 'error'}
  if (s1.length === 0 || s2.length === 0) {return true}

  var arr1 = [];
  var arr2 = [];

  for (let i = 0; i < s1.length; i++) {
    if (i === 0) {arr1.push(s1)}
    else {
      arr1.push(s1.slice(i) + s1.slice(0, i))
    }
  }

  for (let i = 0; i < s2.length; i++) {
    if (i === 0) {arr2.push(s2)}
    else {
      arr2.push(s2.slice(i) + s2.slice(0, i))
    }
  }
  
  var flag = false;

  arr1.forEach(x => {
    if (arr2.indexOf(x) >= 0 ) {flag = true}
  })

  return flag; 
}

/*
RETURN BOOLEAN
  idea 1: write out word as many times as number of chars and somehow line up chars to see if they're equal 

  idea 2: find index of first letter of first word in second string and then make string from that letter on   
  slice(foundIndex) + slice(0, foundIndex)

  idea3: loop thru each words making iterations of them starting on different chars, if any one of the iterations for both strings are the same: true; 
  foundIndex = i and store strings in an array;
  loop thru one array using indexOf to see if one value is in other array 

*/ 

//=====================TEST CASES ================================
console.log(stringRotation("elloh", "hello"));
console.log(stringRotation("hello", "llohe"));
console.log(stringRotation("lohel", "llohe"));
console.log(stringRotation("l", "l"));





module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
