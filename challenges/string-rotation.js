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


function stringRotation(s1, s2) {
  if (typeof s1 !== 'string' || typeof s2 !== 'string') {return 'error'}
  if (s1.length === 0 && s2.length === 0) {return true}

  var arr1 = [];
  var arr2 = [];

  for (let i = 0; i < s1.length; i++) {
    if (i === 0) {arr1.push(s1)}
    else {
      arr1.push(s1.slice(i) + s1.slice(0, i))
    }
  }

  for (let i = 0; i < s2.length; i++) {
    if (i === 0) {arr2.push(s2)}
    else {
      arr2.push(s2.slice(i) + s2.slice(0, i))
    }
  }
  
  var flag = false;

  arr1.forEach(x => {
    if (arr2.indexOf(x) >= 0 ) {flag = true}
  })

  return flag; 
}

//=======================ANOTHER WAY========================

function isSubstring(s1, s2) {
  return s1.indexOf(s2) !== -1;
}

function stringRotation2(s1, s2) {
  return s1.length === s2.length && isSubstring(
  s1.concat(s1), s2)
}


console.log('SUBSTRING', isSubstring('ellohelloh', 'hello'))



//=====================TEST CASES ================================
console.log(stringRotation("elloh", "hello"));
console.log(stringRotation("hello", "llohe"));
console.log(stringRotation("lohel", "llohe"));
console.log(stringRotation("l", "l"));





module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
