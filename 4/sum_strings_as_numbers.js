
/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
*/

function sumStrings(a,b) {

  var digit = 0;
  var len = Math.max(a.length,b.length);
  var result = '';
  var zeroPad = Math.pow(10,Math.abs(a.length-b.length)+1).toString().substr(1);

  if(a.length==len){ b = zeroPad + b; a = '0' + a;}
  else {a = zeroPad + a; b = '0' + b;}

  while(len>=0){
    result = ((parseInt(a[len])||0)+(parseInt(b[len])||0)+digit)%10+result;
    digit = Math.floor(((parseInt(a[len])||0)+(parseInt(b[len])||0)+digit)/10);
    len--;
  };

  return result.replace(/^0+/,'');
}
