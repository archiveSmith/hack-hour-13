/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd (a,b) {
  var divisorsOfA = [];
  for (var i=0; i<=a; i++){
    if( a % i === 0){
      divisorsOfA.push(i);
    }
  }
  var divisorsOfB = [];
  for (var j=0; j<=b; j++){
    if (b % j === 0){
      divisorsOfB.push(j);
    }
  }
  for (var z = divisorsOfA.length-1; z>=0; z--){
    for (var k = divisorsOfB.length-1; k>=0; k--){
      if(divisorsOfA[z] === divisorsOfB[k]){
        return divisorsOfA[z];
      }
    }
  }
}


module.exports = gcd;