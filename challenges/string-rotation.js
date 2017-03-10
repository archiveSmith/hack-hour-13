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
    if (typeof s1 !== 'string' && typeof s2 !== 'string') return 'Please enter a string';
    let str1 = s1 + s1;
    let splitString = str1.split('');
    let str2 = s2.split('');
    for (let i = 0; i < str2.length; i += 1) {
      if (splitString[splitString.indexOf(str2[i])] !== str2[i]) {
        return false;
      }
      return true;
    }
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
