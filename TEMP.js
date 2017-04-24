/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (power > 0) {
    if (power === 1) { return base }
    return base * pow(base, power - 1)
  } else {
    if (power === 1) { return base }
    return 1 / (base * pow(base, power + 1))

  }
}

console.log(pow(2, 6), 'should equal', Math.pow(2,6) )
console.log(pow(10, -10), 'should equal', Math.pow(10,-10) )