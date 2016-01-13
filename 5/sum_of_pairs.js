/*
Given a list of integers and a single sum value, 
return the first two values (parse from the left please) in order of appearance that add up to form the sum.
sum_pairs([11, 3, 7, 5], 10)== [3, 7]

sum_pairs([4, 3, 2, 3, 4],6)== [4, 2]

sum_pairs([0, 0, -2, 3], 2)== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],10)== [3, 7]
*/

var sum_pairs=function(ints, s){
    var pair = new Array();
    var range = ints.length;
    for(i=0;i<range;i++){
      var index = ints.slice(i+1,range+1).indexOf(s-ints[i]);
      if(index>-1) {
        pair=[ints[i],s-ints[i]]; 
        range = index+i+1;
      }
    }
    return pair.length>0? pair:undefined;
}
