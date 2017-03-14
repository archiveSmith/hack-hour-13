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
<<<<<<< HEAD
  let temp = s1 + s1;
  if (s1.length !== s2.length) return false;
  if (isSubstring(temp, s2)) return true;
  return false;
=======

>>>>>>> 982b5f4f0fadd6f168ccde4257e9a17882ddc00a
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
