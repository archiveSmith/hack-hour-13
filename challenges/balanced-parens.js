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

function balancedParens(input){
  let history = [];

  let string = input.match(/([\(\)\{\}\[\]])/g);

  if (string.length % 2 !== 0) return false;

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '{') history.push('{');
    else if (string[i] === ']') history.push(']');
    else if (string[i] === '(') history.push('(');

    else {
      if (string[i] === ')' && history[history.length - 1] !== '(') {
        return false;
      } else if (string[i] === '}' && history[history.length - 1] !== '{') {
        return false;
      } else if (string[i] === ']' && history[history.length - 1] !== '[') {
        return false;
      } else history.pop();
    }
  }

  return true;





  // let brackets = {
  //   '{' : 0,
  //   '}' : 0,
  //   '(' : 0,
  //   ')' : 0,
  //   '[' : 0,
  //   ']' : 0
  // }
  //
  // for (let i = 0; i < input.length; i += 1) {
  //
  //   if (brackets['{'] < brackets['}'] || brackets['('] < brackets[')'] || brackets['['] < brackets[']']) return false;
  //
  //
  //
  //   if (input[i] === '{') brackets['{'] += 1;
  //   else if (input[i] === '}') brackets['}'] += 1;
  //   else if (input[i] === '(') brackets['('] += 1;
  //   else if (input[i] === ')') brackets[')'] += 1;
  //   else if (input[i] === '[') brackets['['] += 1;
  //   else if (input[i] === ']') brackets[']'] += 1;
  // }
  //
  //
  // // console.log(brackets['('], brackets[')']);
  // // console.log(brackets['{'], brackets['}']);
  // // console.log(brackets['['], brackets[']']);
  //
  // return (brackets['{'] === brackets['}'] && brackets['('] === brackets[')'] && brackets['['] === brackets[']']);

}


console.log(balancedParens('('));  // false   balancedParens('()'); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true
console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false

module.exports = balancedParens;
