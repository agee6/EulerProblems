var isPrime = function(num){
  if (num === 2){
    return true;
  }
  // if (num < 2 || num % 2 === 0){
  //   return false;
  // }
  var i = 3;
  while(i <= num/2){
    if(num % i === 0){
      return false;
    }
    i += 2;
  }
  return true;
};


var findNumberOfPrimeSets = function(numberString){
  var replace = 0;
  var replaceLoc = [];
  var primes = [];

  for (var i = 0; i < numberString.length; i++) {
    if(numberString[i] === "*"){
      replaceLoc.push(i);
    }
  }
  numberString = numberString.split('');
  while(replace < 10){
    numberString[replaceLoc[0]] = replace;
    numberString[replaceLoc[1]] = replace;
    if(isPrime(parseInt(numberString.join('')))){
      primes.push(parseInt(numberString.join('')));
    }
    replace++;
  }
  return primes;
};
//
// var primesArr = findNumberOfPrimeSets("56**3");
// console.log(primesArr);

var findNextPrimeSet = function(setSize){
  var i = 101;
  var foundSet = false;
  var primeSet;
  var tried = ['56**3'];
  while(!foundSet){
    if(i % 5 !== 0){
      var curNumString = i.toString();
      var tempNumString;
      for (var j = 1; j < curNumString.length-1; j++) {
        for (var k = j+1; k < curNumString.length; k++) {
          tempNumString = curNumString.split('').reverse();
          tempNumString[j] = '*';
          tempNumString[k] = "*";
          tempNumString = tempNumString.reverse().join('');

          if(tried.indexOf(tempNumString) === -1){
            primeSet = findNumberOfPrimeSets(tempNumString);
            if(primeSet.length >= setSize){
              return [tempNumString, primeSet[0]];
            }
            tried.push(tempNumString);
          }
        }
      }
    }
    debugger;
    i += 2;
  }
};

// console.log(findNextPrimeSet(8));
