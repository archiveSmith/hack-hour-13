//determine if a number is prime

function isPrime(n) {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

console.log(isPrime(1));