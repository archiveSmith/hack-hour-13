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
  // checks if input is a string
  if (typeof s1 !== 'string' || typeof s2 !== 'string') return false;
  //checks length to determine if rotation is possible
  if (s1.length !== s2.length) return false;
  //concat str1 so it becomes easier to tell s2 is a rotation
  const firstStr = s1 + s1;
  isSubstring(firstStr, s2);
}

stringRotation("hello", "hel lo") // false;
stringRotation(3,"str") // Give me a string
stringRotation("hello", "hello") //true;
stringRotation("hello", "llohe") //-> true
stringRotation("hello", "he") //-> false
stringRotation("hello", "ollhe") //-> false (not a rotation, just an anagram)

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
