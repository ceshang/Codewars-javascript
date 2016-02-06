/*
Write your own Primes class with class method Primes.first(n) that returns an array of the first n prime numbers.
Test.assertSimilar(Primes.first(1), [2])
Test.assertSimilar(Primes.first(2), [2, 3])
Test.assertSimilar(Primes.first(5), [2, 3, 5, 7, 11])
Test.assertSimilar(Primes.first(20).slice(15,20), [53, 59, 61, 67, 71])
Test.assertEquals(Primes.first(100)[99], 541)
Test.assertEquals(Primes.first(80)[79], 409)
*/

function Primes(){
  var result=[];

  this.first = function(n){

  function isPrime(num) {
    if(num<2) return false;
    for (var i = 2; i < num/2+1; i++) {
        if(num%i==0) return false;
    }
    return true;
  }
  
  if (n>result.length){
    for(var j = result[result.length-1]+1||0; result.length< n; j++){
      if(isPrime(j)) result.push(j);
    }
    return result;
  }
  else return result.slice(0,n);

}

var Primes = new Primes();

