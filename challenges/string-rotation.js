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
'use strict';

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
	if (typeof s1 !== 'string' || typeof s2 !== 'string') throw new Error('At least one not a string');
	if (s1.length !== s2.length) return false;
	if (s1 === '') return true;

	// let firstLetter1 = s1[0];
	// let isRotation = false;
	// // go thru s2 till find s1's first letter
	// for (let i2 = 0; i2 < s2.length; i2 += 1) {
	// 	// if first letter found in s2, check if letters after current letters in s1 and s2 match till hit beginning
	// 	if (s2[i2] === firstLetter1) {
	// 		for (let i1 = 1; i1 < s1.length; i1 += 1) {
	// 			const looped_i2 = (i2 + i1) % s2.length;
	// 			if (s1[i1] !== s2[looped_i2]) {
	// 				break;
	// 			}

	// 			// if manage to get thru whole s1, is rotation
	// 			if (i1 === s1.length - 1) isRotation = true;
	// 		}
	// 	}
	// 	if (isRotation) return true;		
	// }
	// return false;
	return isSubstring(s1.repeat(2), s2);
}

var res = stringRotation('buttface', 'cebuttfa');
console.log(res);

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
