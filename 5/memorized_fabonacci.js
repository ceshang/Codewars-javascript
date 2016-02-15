/*
For this particular Kata we want to implement the memoization solution. 

This will be cool because it will let us keep using the tree recursion algorithm while still keeping it sufficiently optimized to get an answer very rapidly.

The trick of the memoized version is that we will keep a cache data structure (most likely an associative array) where we will store the Fibonacci numbers as we calculate them. When a Fibonacci number is calculated, we first look it up in the cache, 
if it's not there, we calculate it and put it in the cache, otherwise we returned the cached number.

*/

var fibonacci = function(n) {

    var cache = [0,1];
    if(n >= cache.length){
      for(j = cache.length-1;j<n;j++) cache.push(cache[j]+cache[j-1])
    }
    return cache[n];
}
