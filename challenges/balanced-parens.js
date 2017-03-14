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

//============================SECOND SOLUTION ==========================

var result = ''
var index;
var curr;
var text;

function moveToNext() {
  curr = text.charAt(index);
  index++;
  return curr;
}

function paren(){
  if (curr === '(') {
    moveToNext();
    result += '(';
    value();
  } else if (curr === ')') {
    moveToNext();      
    result += ')';
    value();
  } else {
    value();
  } 
}

function value() {
  switch(curr) {
    case '(':
    case ')':
      return paren();  
    case '[':
    case ']':
      return bracket();  
    case '{':
    case '}':
      return curley();  
    default: 
      return '';  
  }
}

function balancedParens2(input){
  text = input;
  index = 1;
  curr = text.charAt(0);
  value();
  return result; 
}




console.log(balancedParens2('(()('))

//==============================================================

function balancedParens3(input) {
  const brackets = {'(': ')', '{': '}', '[': ']', ')': false, '}': false, ']': false, }
  const stack = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === stack[stack.length - 1]) {
      stack.pop();
    } else if (input[i] in brackets) {
      let char = brackets[input[i]]
      if (char) {
        stack.push(char)
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}







//---------------------TESTING----------------------------------
console.log(balancedParens('('));  // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true
console.log('----------')
console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false
console.log('----------')
console.log( balancedParens(' var wow  = { yo: thisIsAwesome() }') ); // true
console.log( balancedParens(' var hubble = function() { telescopes.awesome();') ); // false




module.exports = balancedParens;
