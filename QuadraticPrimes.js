var isPrime = function(num){
  if (num === 2){
    return true;
  }
  if (num < 2 || num % 2 === 0){
    return false;
  }
  var i = 3;
  while(i < num){
    if(num % i === 0){
      return false;
    }
    i += 2;
  }
  return true;
};

var isPrimeSpecial = function(number, primes){

  for (var i = 0; i < primes.length; i++) {
    if(number % primes[i] === 0){
      return false;
    }
  }
  return true;
};

var quadraticPrimes = function(range){
  var isConsecPrime = true;
  var count = 0;
  var n = 0;
  var currentMax = 0;
  var savedVar = [];
  var numToCheck = null;
  for (var a = 1; a < range; a++) {
    for (var b = 1; b < range; b++) {
      n = 0;
      count = 0;
      isConsecPrime = true;
      while(isConsecPrime){
        numToCheck = n * n  + a * n + b;
        if(isPrime(numToCheck)){
          count++;
        }else{
          isConsecPrime = false;
          if(count > currentMax){
            currentMax = count;
            savedVar = [a,b];
          }
        }
        n++;
      }
      n = 0;
      count = 0;
      isConsecPrime = true;
      while(isConsecPrime){
        numToCheck = n * n  - (a * n) + b;
        if(isPrime(numToCheck)){
          count++;
        }else{
          isConsecPrime = false;
          if(count > currentMax){
            currentMax = count;
            savedVar = [-a,b];
          }
        }
        n++;
      }

    }
  }
  console.log(currentMax);
  return savedVar[0] * savedVar[1];
};

console.log(quadraticPrimes(1000));
