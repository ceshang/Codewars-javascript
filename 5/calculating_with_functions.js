
/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:
  seven(times(five())); // must return 35
  four(plus(nine())); // must return 13
  eight(minus(three())); // must return 5
  six(dividedBy(two())); // must return 3
*/

var cal = function(num,func){
  return func==undefined? num:func(num);
}

function zero(v) {return cal(0,v);}
function one(v) {return cal(1,v);}
function two(v) {return cal(2,v);}
function three(v) {return cal(3,v);}
function four(v) {return cal(4,v);}
function five(v) {return cal(5,v);}
function six(v) {return cal(6,v);}
function seven(v) {return cal(7,v);}
function eight(v) {return cal(8,v);}
function nine(v) {return cal(9,v);}

function plus(x) {return function(y){return x+y;}}
function minus(x) {return function(y){return y-x;}}
function times(x) {return function(y){return x*y;}}
function dividedBy(x) {return function(y){return y/x;}}

