/*
that takes in two numbers a and b and returns the last decimal digit of a^b. Note that a and b may be very large!

For example, the last decimal digit of 9^7 is 9, since 9^7 = 4782969. The last decimal digit of (2^200)^(2^300), which has over 10^92 decimal digits, is 6.

The inputs to your function will always be non-negative integers.

*/

var lastDigit = function(str1, str2){  
  if(str2==='0') return 1;
  else{
    var x = parseInt(str1.slice(-1));
    var y = parseInt(str2.slice(-2))%4 || 4;
    return Math.pow(x,y)%10; 
  }
}
