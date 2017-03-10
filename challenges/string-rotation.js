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

  //grab the first letter of our non-rotated input string
  let firstLetter = s1[0];

  //figure out the index of that first letter in the rotated string so we can un-reverse
  let rotationLength = s2.indexOf(firstLetter);

  //unreverse the second string
  s2 = s2.slice(rotationLength, s2.length) + s2.slice(0, rotationLength);

  //check to see if the input string and the unreversed second input string are equal (must be equal length as well)
  return isSubstring(s1,s2) && s1.length === s2.length;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
