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
	let s2Arr = s2.split('');
	let sub = [s2Arr[0]];
	for (let i = 1; i < s1.length; i += 1) {
		if (isSubstring(s1, sub.join('') + s2Arr[i])) {
			sub.push(s2Arr[i]);
		} else {
		  break;
		}
	}
	sub = sub.join('');
	return s2.slice(sub.length) + sub === s1;
}


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
