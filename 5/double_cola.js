/*
Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; 
there are no other people in the queue. 
The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. 
Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.

Return the single line — the name of the person who drinks the n-th can of cola. 
The cans are numbered starting from 1. 
Please note that you should spell the names like this: "Sheldon", "Leonard", "Penny", "Rajesh", "Howard" (without the quotes). 
In that order precisely the friends are in the queue initially.

whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)=="Sheldon"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)=="Penny"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)=="Leonard"
*/

function whoIsNext(names, r) {
  var l = names.length;
  while (r >= l) { r -= l; l *= 2; }
  return names[Math.ceil(names.length * r / l)-1];
}
