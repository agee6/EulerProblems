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

// var usedChars = [];
// var permArr = [];
var permute = function(input, usedChars, permArr) {
  var i, ch;

  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length === 0) {
      permArr.push(usedChars.slice());
    }
    permute(input, usedChars, permArr);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr;
};


var primePermutations = function(){
  var dOp = '1234567890'.split('');
  var sols = [];
  var finalSols = [];

  for (var i = 0; i < dOp.length - 3; i++) {

    for (var j = i + 1; j < dOp.length - 2; j++) {

      for (var k = j + 1;  k < dOp.length - 1; k++) {

        for (var l = k + 1; l < dOp.length; l++) {

          var choices = permute([dOp[i], dOp[j], dOp[k], dOp[l]], [],[]).sort(function(a,b){
            return(parseInt(a.join('')) - parseInt(b.join('')));
          });

          sols = [];
          for (var x = 0; x < choices.length; x++) {
            if(isPrime(parseInt(choices[x].join('')))){
              sols.push(choices[x].join(''));
            }

          }
          if(sols.length >=  3){
            finalSols.push(sols);
          }
        }
      }
    }
  }
  debugger;
  var finalFinal = [];
  for (var y = 0; y < finalSols.length; y++) {
    for (var idx = 0; idx < finalSols[y].length - 1; idx++) {
      for (var q = idx + 1; q < finalSols[y].length; q++) {
        if(finalSols[y][q] - finalSols[y][idx] === 3330){
          finalFinal.push(finalSols[y][idx]);
          finalFinal.push(finalSols[y][q]);
        }
      }
    }
  }
  debugger; 
  return finalSols;

};

//console.log(primePermutations());
