/*
 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
 -----------------------------------------
  Throw       Score
 ---------   ------------------
 5 1 3 4 1   50 + 2 * 100 = 250
 1 1 1 3 1   1000 + 100 = 1100
 2 4 4 5 4   400 + 50 = 450
*/

function score( array ) {
  var counts = {};
  var points = new Array(6);
  
  for (var i = 0; i < array.length; i++)
    counts[array[i]] = (counts[array[i]] + 1) || 1;
  
  for(i=1;i<7;i++){
    if(i==1) points[i-1]=100*(counts[i.toString()]||0)+700*Math.floor(counts[i.toString()]/3||0);
    else if(i==5) points[i-1]=50*(counts[i.toString()]||0)+350*Math.floor(counts[i.toString()]/3||0);
    else points[i-1]=100*i*Math.floor(counts[i.toString()]/3||0);
  }
  
  return points.reduce(function(a,b) {return a + b;});
}

---------------------------------Solution by SagePtr, FunGuy, Sagobunny----------------------
function score( dice ) {
  var dc = [0,0,0,0,0,0];
  var tdr = [1000,200,300,400,500,600];
  var sdr = [100,0,0,0,50,0];
  dice.forEach(function(x){ dc[x-1]++; });
  return dc.reduce(function(s,x,i){ 
    return s + (x >= 3? tdr[i] : 0) + sdr[i]*(x % 3);
  },0);
}
