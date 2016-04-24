/*

You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071
If no bigger number can be composed using those digits, return -1:

*/

function nextBigger(n){

  var digit_arr = n.toString().split('');
  var left = [];
  var right = []; 
  var temp = [];
  var x = digit_arr.length-1;
  
  while(digit_arr[x]<=digit_arr[x-1]){ x--; }
  
  if(x===0) return -1;
  else{
    left = digit_arr.slice(0,x);
    right = digit_arr.slice(x).sort();
  
    for(i=0;i<right.length;i++){
      if(right[i]>left[left.length-1]){
        temp.push(right[i]);
        right[i] = left[left.length-1];
    
        return Number(left.slice(0,left.length-1).concat(temp).concat(right).join(''));
      }
    }
  }
}

//-------------Kestas, smarediya21, sbower, Gyv4ik, alexch_----------------------
//暴力寻找法

/*
Array.prototype.every([current value],[index(optional)],[array(optional)])
*/

const sortedDigits = n => { let arr = n.toString().split(''); arr.sort((a, b) => b - a); return arr; };

function nextBigger(n){
  
  let arr = sortedDigits(n);
  let max = parseInt(arr.join(''), 10);
  
  for(var i = n + 1; i <= max; i++){
    if(sortedDigits(i).every((x, j) => x === arr[j])){
      return i;
    }
  }
  
  return -1;
}
