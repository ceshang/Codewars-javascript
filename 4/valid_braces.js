/*
All input strings will be nonempty, and will only consist of open parentheses '(' , closed parentheses ')', open brackets '[', closed brackets ']', open curly braces '{' and closed curly braces '}'.

What is considered Valid? A string of braces is considered valid if all braces are matched with the correct brace. 
For example:
'(){}[]' and '([{}])' would be considered valid, while '(}', '[(])', and '[({})](]' would be considered invalid.

Examples: 
validBraces( "(){}[]" ) => returns true 
validBraces( "(}" ) => returns false 
validBraces( "[(])" ) => returns false 
validBraces( "([{}])" ) => returns true 
*/

function validBraces(braces){
 while(/\(\)|\[\]|\{\}/g.test(braces)){
   braces = braces.replace(/\(\)|\[\]|\{\}/g,"")
 }
 return braces.length == 0;
}
