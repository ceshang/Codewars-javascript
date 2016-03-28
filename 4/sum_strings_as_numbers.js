
/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:
  seven(times(five())); // must return 35
  four(plus(nine())); // must return 13
  eight(minus(three())); // must return 5
  six(dividedBy(two())); // must return 3
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
