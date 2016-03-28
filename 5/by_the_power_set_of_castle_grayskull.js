/*
Write a function that returns all of the sublists of a list or Array.

Your function should be pure; it cannot modify its input.

Example:

power([1,2,3]);
// => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
*/

function power(s) {
  var result = [[]];
  
  for(i=0;i<s.length;i++){
    var len = result.length;
    for(j=0;j<len;j++){
      result.push(result[j].concat(s[i]));
    }
  }
  
  return result;
}
--------------------------------by xcthulhu, FunGuy, royJang, etc-----------------
function power(s) {
  return s.reduce( function(p, e) {
      return p.concat( p.map ( function(sub) { 
        return sub.concat([e]);}));
    }, [[]]);
}
