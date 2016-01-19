/*
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * 4 ... N

zeros(12) = 2 # 1 * 2 * 3 .. 12 = 479001600 
that has 2 trailing zeros 4790016(00)
*/


function zeros (n) {
  var result = 0;
  while(n>0){
    n=Math.floor(n/5);
    result+=n
  }
  return result;
}
