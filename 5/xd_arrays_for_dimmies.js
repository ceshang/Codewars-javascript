/*
The goal of this kata is to code a dim function which will create an xD-array and fill it with a default value.
dim( d1 [,d2 [,d3 [... ]]], value )

EXAMPLES
dim( 3,3,"x" ) // => [['x','x','x'],['x','x','x'],['x','x','x']]
dim( 2,2,2,0 ) // => [[[0,0],[0,0]],[[0,0],[0,0]]]
dim( 3, true ) // => [true,true,true]
*/

function dim(){
  var args = Array.prototype.slice.call(arguments);

  return args.length==2? 
   Array.apply(null, Array(args[0])).map(function(){return typeof args[1] === "function"? args[1]():args[1]})
  :Array.apply(null, Array(args[0])).map(function(){return dim.apply(this,args.slice(1))})
}
