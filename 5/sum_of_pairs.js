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
