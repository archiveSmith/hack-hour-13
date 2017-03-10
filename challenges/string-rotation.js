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
  if (s1.length !== s2.length) return false;
  
  let s1array = s1.split('');
  let s2array = s2.split('');
  
  let reordered = [];
  for (let i = 0; i < s1array.length; i += 1){
    if (s1array.slice(0, i) === s2array.slice(i, s2array.length)) {
      reordered = [].concat(s2array.slice(i, s2array.length), s2array.slice(0, i));
    }
  }
  return isSubstring(s1, reordered.join(''));
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
