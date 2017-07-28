/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */
//note: does not work for negative exponents.
function pow(base, power) {
  //base case:
	if (!power) return 1;

	return base * pow(base, power - 1);
}

module.exports = pow;

//first version. Iterative solution that
 //handles negative exponents as though they were positive
// 	let abs = false;
// 	if (power < 0) {
// 	  power = Math.abs(power);
// 	  abs = true;
// 	}
	
// 	let answer = 1;
// 	for(i = 0; i < power; i++) { // or could use 'while (power--)'
// 	  answer = base * answer; // or answer *= base;
// 	}
	
// 	//make negative again
// 	if (abs === true) {
// 	  answer =  1 / answer;
// 	}
// 	return answer;