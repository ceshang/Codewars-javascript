/*
isPrime(5)
=> true
*/

function isPrime(num) {
  for(var i = 2; i < num/2+1; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
