

var factorial = function(number){
  if(parseInt(number) !== number){
    return "what the heck man?!?";
  }
  if(number === 0){
    return 1;
  }
  var fact = 1;
  while(number > 0){
    fact = fact * number;
    number = number -1;
  }
  return fact;
};

var isDigitFactorial = function(number){
  var stringNum = number.toString();
  var sum = 0;
  var factorials =[1,1,2,6,24,120, 720, 5040, 40320,362880];
  for (var i = 0; i < stringNum.length; i++) {
    sum = sum + factorials[parseInt(stringNum[i])];
    if(sum > number){
      return false;
    }
  }
  if(sum === number){
    return true;
  }else{
    return false;
  }
};

var sumDigitiFactorial = function(maxNum){
  var factorials =[1,1,2,6,24,120, 720, 5040, 40320,362880];
  var totalSum = 0;
  var i = 10;
  while(i <= maxNum){
    if(isDigitFactorial(i)){
      totalSum += i;
    }
    i++;
  }
  return totalSum;
};

var pentagonal = function(n){
  var pent = (((3*n) -1) * n) / 2 ;
  return pent;
};
var isPentagonal = function(num){
  if(num === 0){
    return false;
  }
  var check = Math.sqrt(1 + (24 * num));
  if(Math.floor(check) !== check){
    return false;
  }
  var check2 = ( 1+ check)/6;
  var check3 = (1 - check)/6;
  //debugger;
  if(Math.floor(check2) === check2){
    return true;
  }
  if(Math.floor(check3) === check3 && check3 > 0){
    return true;
  }
  return false;
};

var pairPents = function(startVal, maxBot){
  var i = startVal;
  var j = startVal + 1;
  var minD = null;
  while( i < maxBot){
    while(j < maxBot + 1){
      if(isPentagonal(pentagonal(i) + pentagonal(j))){

        var dif = Math.abs(pentagonal(j) - pentagonal(i));
        if(isPentagonal(dif)){
          debugger;
          if(minD === null || dif < minD){
            minD = dif;
            debugger;
          }
        }
      }
      j++;
    }
    i++;
    j = i+1;
  }
  return minD;
};

var sumOfPowers = function(num){
  if(num < 1){
    return "what you doing foo?";
  }
  if(num < 2){
    return 1;
  }
  var i = 2;
  var sum = 1;
  var factString = '';
  var stillInt = true;
  while (i <= num){
    if(Math.pow(i, i) < 10000000000){
      sum = sum + Math.pow(i, i);
    }else{
      var count = i;
      var tempPow = 1;
      while(count > 0){
        tempPow = tempPow * i;
        if(tempPow > 10000000000){
          tempPow = tempPow % 10000000000;
        }
        count -=1;
      }
      sum = sum + tempPow;
    }
    sum = sum % 10000000000;
    i++;
  }

  return sum;
};

var divisors = function(num){
  //this is divisors not including self
  if(num < 2){
    return [];
  }
  var divs = [1];
  var theSqrt = Math.sqrt(num);
  if(theSqrt === Math.floor(theSqrt)){
    divs.push(theSqrt);
  }
  var i = 2;
  while(i < theSqrt){
    if(num % i === 0){
      divs.push(i);
      divs.push(num/i);
    }
    i++;
  }
  return divs;
};

var d = function(number){
  var divs = divisors(number);
  var sum = 0;
  for (var i = 0; i < divs.length; i++) {
    sum += divs[i];
  }
  return sum;
};
var isAmicable = function(num){
  var pair = d(num);
  return d(pair) === num && num !== pair;
};

var sumOfAmicable = function(maxNum){
  var sum = 0;
  var i = 2;
  while(i < maxNum){
    if(isAmicable(i)){
      sum += i;
    }
    i++;
  }
  return sum;
};
var isAbundant = function(num){
  if(d(num) > num){
    return true;
  }else{
    return false;
  }
};
var sumOfAbundants = function(num){
  if(num < 24){
    return false;
  }
  var i = 12;
  while(i <= num/2){
    if(isAbundant(i) && isAbundant(num-i)){
      return true;
    }
    i++;
  }
  return false;
};


var sumOfAllUnabundant = function(maxNum){
  var sum = 0;
  for (var i = 1; i < 24; i++) {
    sum += i;
  }
  var j = 25;
  while(j < maxNum){
    if(!sumOfAbundants(j)){
      sum +=j;
    }
    j++;
  }
  return sum;
};

var digitFractions = function(){
  var fakeReductions = [];
  var product = 1;
  var i = 11;
  var j;
  while(i < 99){
    if(i% 10 === 0){
      i++;
    }
    j = i+1;
    while(j < 100){
      if(j%10 ===0){
        j++;
      }
      if((i/j) === fakeDivide(i, j)){
        fakeReductions.push([i,j]);
      }
      j++;
    }
    i++;
  }
  return fakeReductions;
};
var fakeDivide = function(numerator, denominator){
  var nOnes = numerator % 10;
  var nTens = Math.floor(numerator/10);
  var dOnes = denominator %10;
  var dTens = Math.floor(denominator/10);
  if(nOnes === dTens){
    return(nTens/dOnes);
  }
  if(nOnes === dOnes){
    return nTens/dTens;
  }
  if(nTens === dOnes){
    return nOnes/dTens;
  }
  if(nTens === dTens){
    return nOnes/dOnes;
  }
  return false;

};
var fiveDigit = function(){
  var fivePowers = [];
  for (var base = 0; base < 10; base++) {
    fivePowers.push(Math.pow(base, 5));
  }
  var maxInt = 0;
  var numDigits = 2;
  var sum = 0;
  var currentSum = 0;
  var allFiveDigits = [];
  var sumArr;

  while (numDigits < 7){

    for (var i = 0; i < fivePowers.length; i++) {
      if(fivePowers[i].toString().length <= numDigits && i > maxInt){
        maxInt = i;
      }
    }


    var possibleOptions = getAllCombinations(maxInt, numDigits);

    for (var j = 0; j < possibleOptions.length; j++) {
      currentSum = 0;
      for (var k = 0; k < possibleOptions[j].length; k++) {
        currentSum += fivePowers[possibleOptions[j][k]];
      }
      if(currentSum.toString().length === numDigits){
        sumArr = possibleOptions[j].join('');
        if(parseInt(sumArr) === currentSum){

          sum += currentSum;
          allFiveDigits.push(possibleOptions[j]);
        }
      }
    }
    numDigits++;

  }
  debugger;
  return sum;
};

var isMixed = function(checkArr, fromArr){

};

var getAllCombinations = function(options, numberToChoose){
  var allOptions = [];
  var mix = numberToChoose;
  var chooseFrom = [];
  var i = 0;
  while(i < options){
    chooseFrom.push(i);
    i++;
  }
  var currentOption = [];

  return makeCombinations(chooseFrom, numberToChoose, allOptions, currentOption);

};
var makeCombinations = function(chooseFrom, numberToChoose, allOptions, currentOption){
  if(currentOption.length === numberToChoose){
    allOptions.push(currentOption);
    return allOptions;
  }
  for (var i = chooseFrom.length; i >= 0; i--) {

    currentOption.push(i);
    allOptions = makeCombinations(chooseFrom,numberToChoose, allOptions,currentOption.slice());
    currentOption = currentOption.slice();
    currentOption.pop();
  }
  return allOptions;
};

var waysToMakeChange = function(amount){
    var coins = [1,2,5, 10, 20, 50, 100, 200];
    var largestCoin = coins.length -1;
    var ways = 0;
    if (amount < 1){
      return 0;
    }
    if (amount === 1){
      return 1;
    }
    while (coins[largestCoin] >=  amount){
      if(coins[largestCoin] === amount){
        ways += 1;
      }
      coins.pop();
      largestCoin -=1;
    }
    return makeChange(amount, ways, coins);

};
var makeChange = function(amount,totalCombs, coins){
  if(amount === 0){
    return(totalCombs +1);
  }
  if(amount < 0){
    return(totalCombs);
  }
  for (var i = coins.length -1; i >= 0; i-=1) {

    totalCombs = makeChange(amount - coins[i], totalCombs, coins.slice(0, i+1));

  }
  return totalCombs;

};

var getNextfib = function(fibs){
  var first = fibs[fibs.length -1].split('').reverse();
  var second = fibs[fibs.length - 2].split('').reverse();
  var numberTwo, ones;
  var carryOver = 0;
  var curSum = 0;
  var solutionString = '';
  for (var i = 0; i < first.length; i++) {
    if(second[i] === undefined){
      numberTwo = 0;
    }else{
      numberTwo = parseInt(second[i]);
    }
    curSum = parseInt(first[i]) + numberTwo + carryOver;
    ones = curSum % 10;
    solutionString  = ones.toString() + solutionString;
    carryOver = Math.floor(curSum /10);
  }
  if( carryOver > 0){
    solutionString = carryOver.toString() + solutionString;

  }

  return(solutionString);

};


var fibonacciBySize = function(size){
  var fibs = ['1','1'];
  var minIndex = 1;
  var curSize = 1;
  var fibsLength = 2;
  var tempSize;
  while(curSize < size){
    fibs.push(getNextfib(fibs));
    fibs.shift();
    fibsLength += 1;
    tempSize = fibs[fibs.length - 1].length;

    if(tempSize > curSize){
      curSize = tempSize;
      minIndex = fibsLength;
    }
  }


  return fibsLength;

};
