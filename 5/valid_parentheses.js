/*
Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. 
validParentheses should return true if the string is valid, and false if it's invalid.
validParentheses( "()" ) => returns true 
validParentheses( ")(()" ) => returns false 
validParentheses( "(" ) => returns false 
validParentheses( "(())((()())())" ) => returns true
*/


function validParentheses(parens){
  var result = 0;
  
  for (var i = 0 ; i < parens.length && result >= 0; i++) {
    result += (parens[i] === '(') ? 1 : -1;    
  }
  
  return result === 0;
}

function validParentheses(parens){
  var regex = /\(\)/;
  while (regext.test(parens)) parens = parens.replace(regex, "");
  return !parens;
}
