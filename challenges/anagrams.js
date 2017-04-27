/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {
  if (string === '') return [''];
  if (string.length === 1) return string;

  const anas = [];

  for (let i = 0; i < string.length; i++) {
    let s = string[0];
    console.log(s, 'im s');
    let rest = anagrams(string.slice(1, string.length));
    console.log(rest, 'im rest');
    for (let j = 0; j < rest.length; j++) {
      anas.push(s + rest[j]);
      //console.log(anas, 'anas in J loop');
    }
    string = string.substr(1, string.length - 1) + s;
    console.log(string, 'string after J loop finish each loop');
  }

  let uniqAnas = [];

  anas.forEach(element => {
    if (uniqAnas.indexOf(element) === -1) uniqAnas.push(element);
  })
  return uniqAnas;
}

module.exports = anagrams;
