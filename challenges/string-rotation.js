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
   // check whether the second string is a substring of the string
   // if it is, return false
   if (typeof s1 !== 'string' || typeof s2 !== 'string') return 'try entering a string';
   if (isSubstring(s1, s2)) return false;
   if (s1 === s2) return true;

   // find the 'index' of s2 that holds the first letter of s1
   // from that, create a new string that is concatentated based upon
   // that letter at which the first was founded

   const theStartChar = s2.indexOf(s1[0]);
   // from this point, split s1 to two substrings, and concatenate them
   const testStr = s2.substr(theStartChar) + s2.substr(0, theStartChar);

   // test whether testStr is equal to s1
   return testStr === s1;
 }

 stringRotation('hello', 'he');

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
