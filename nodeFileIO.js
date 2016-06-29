var fs = require('fs');
console.log("banana");

function getRecordsFromFile(filename, cb) {

  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
      console.log("---Error---");
      console.log(err);
      return;
    }
    var theDataArr = data.split(',');
    cb(theDataArr);
  });


}

var codedTriangleNumbers = function(wordsArr){
  var testString;
  var currentSum = 0;
  var count = 0;
  console.log(wordsArr[0]);
  for (var i = 0; i < wordsArr.length; i++) {
    currentSum = 0;

    for (var j = 0; j < wordsArr[i].length; j++) {
      currentSum += wordsArr[i][j].charCodeAt(0) - "A".charCodeAt(0) + 1;
    }
    
    if(isTriangleNum(currentSum)){
      if(currentSum === 1){
        console.log(wordsArr[i]);
      }
      // console.log(wordsArr[i]);
      count +=1;
    }

  }
  console.log(count);
  // return count;
};

var isTriangleNum = function(num){
  if(num < 1){
    return false;
  }
  var i = 1;
  var currentTriangle = 1;
  while(currentTriangle <= num){
    if(currentTriangle === num){
      return true;
    }
    i += 1;
    currentTriangle = (i * (i+1))/2;
  }
  return false;
};
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

var getFactors = function(number){
  if(number <1){
    return "not yet implemented";
  }
  if(number === 1){
    return [1];
  }
  var factors = [1];
  if(isPrime(number)){
    factors.push(number);
    return factors;
  }
  var i = 2;
  var theSqrt = Math.sqrt(number);
  while(i < theSqrt){
    if(number % i === 0){
      factors.push(i);
      factors.push(number/i);
    }
    i++;
  }
  if(theSqrt === Math.floor(theSqrt)){
    factors.push(theSqrt);
    factors.push(theSqrt);
  }
  return factors;
};

// codedTriangleNumbers(['A']);

var records = getRecordsFromFile("p042_words.txt", codedTriangleNumbers);
