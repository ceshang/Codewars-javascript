/*
In this kata, you should calculate type of triangle with three given sides a, b and c (given in any order).
Examples
triangleType(2, 4, 6); // return 0 (Not triangle)
triangleType(8, 5, 7); // return 1 (Acute, angles are approx. 82°, 38° and 60°)
triangleType(3, 4, 5); // return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
triangleType(7, 12, 8); // return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
*/

function triangleType(a, b, c){
  var arr = [a,b,c].sort(function(x,y){return x-y});
  if(arr[0]+arr[1]>arr[2]){
    switch(Math.sign(arr[0]**2+arr[1]**2-arr[2]**2)){
      case -1:return 3;
      case 0:return 2;
      case 1:return 1;
    }
  }
  else return 0;
}
