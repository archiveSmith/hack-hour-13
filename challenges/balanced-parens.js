/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function number(input, paren){
  return input.split('').filter(x => 
    x === paren
  ).length
}

function balancedParens(input){
  let clean = input.replace(/[^\[\]\(\)\{\}]/gi, '')
  var flag = true;
  if ( number(clean, '(') !== number(clean, ')') ) flag = false;
  if ( number(clean, '{') !== number(clean, '}') ) flag = false;
  if ( number(clean, '[') !== number(clean, ']') ) flag = false;

  return flag; 
}



/*
replace all non parens with nothing 
count how many char there are with a filter (test).length
*/

//---------------------TESTING----------------------------------
console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false
console.log( balancedParens(' var wow  = { yo: thisIsAwesome() }') ); // true
console.log( balancedParens(' var hubble = function() { telescopes.awesome();') ); // false
//console.log( number('new )', ')') )




module.exports = balancedParens;
