/*
The directions given to the man are, for example, the following:
plan = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, better stay to the same place! 
So the task is to give to the man a simplified version of the plan. plan = ["WEST"]
Other examples: In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away. 
What a waste of time! Better to do nothing. The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, 
therefore, the final result is [] (nil in Clojure). In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], 
"NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST",
so the whole path is reducible to ["WEST", "WEST"].

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => []
*/

function dirReduc(arr){
  var str=arr.join('');
  var regex=/EASTWEST|NORTHSOUTH|WESTEAST|SOUTHNORTH/;
  
  while (regex.test(str)) str = str.replace(regex,'');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
}
