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

function stringRotation2(s1, s2) {
  let isRotation = false;
  if (s1.length !== s2.length) return false;
  if (s1 === s2) return true;
  for (let i = 0; i < s1.length; i += 1) {
    if (s2.lastIndexOf(s1.slice(0,i)) === s1.length - i && s2.indexOf(s1.slice(i)) === 0) isRotation = true;
  }
  return isRotation;
}

function isRotation(s1,s2){
  return (s1.length === s2.length && isSubstring(s1.repeat(2), s2)) ? true : false;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
