/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  
  //handles negative exponents as though they were positive
	let abs = false;
	if (power < 0) {
	  power = Math.abs(power);
	  abs = true;
	}
	
	let answer = 1;
	for(i = 0; i < power; i++) {
	  answer = base * answer;
	}
	
	//make negative again
	if (abs === true) {
	  answer =  1 / answer;
	}
	return answer;
}

module.exports = pow;
