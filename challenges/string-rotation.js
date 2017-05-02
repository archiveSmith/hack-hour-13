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

function stringRotation(s1, s2) {

//in s2, locate the first letter of s1
//beginning from this letter until the length, concatenate it with all letters up to it
//pass in this new concatenated string with s1 to the isSubstring function
//return its value

//edge cases
  if(typeof s1 !== 'string' || typeof s2 !== 'string' || s1.length !== s2.length) return false;

  let firstLetter = s2.indexOf(s1[0]);
  let corrected = s2.substr(firstLetter,s2.length) + s2.substr(s2[0],firstLetter);

  return isSubstring(s1,corrected);

  
}

// console.log(stringRotation("hello","he"));

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
