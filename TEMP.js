function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  if (a < b) {[a, b] = [b, a]}

  while(true) {
    if (b === 0) {return a}
    a = a % b;
    if (a === 0) {return b}
    b = b % a;
  }
}