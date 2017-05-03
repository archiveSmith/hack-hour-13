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
  // if s1 or s2 does not have value, return no value
  if (s1 === '' && s2 === '') return 'Please enter string values';
  // if s1 or s2 are not string, return not string
  if (typeof s1 !== 'string' || typeof s2 !== 'string') return 'Please enter strings';
  // if length is different, return false;
  if (s1.length !== s2.length) return false;
  // take first ch in s1, find index of in s2
  const idx = s2.indexOf(s1[0]);
  // get slice of s2 from idx to the end
  const sliceS2 = s2.slice(idx);
  // if slice from s2 to end is not in s1, return false
  if (!isSubstring(s1, sliceS2)) return false;
  // otherwise, compare of the two is the same
  // slice s2 from index, concat to beginning to index
  const newS2 = sliceS2 + s2.slice(0, idx);
  // compare the two strings, if the same, return true else return false
  return s1 === newS2;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
