

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
  var pent = (3*n -1) * n / 2 ;
  return pent;
};
var isPentagonal = function(num){
  var n = (2*num +1) /3;
  debugger;
  if(Math.floor(n) === n && n > 1){
    return true;
  }else{
    return false;
  }
};

var pairPents = function(){
  var i = 1;
  var j = 2;
  while( i < 1000){
    while(j< i +100){
      if(isPentagonal(pentagonal(i) + pentagonal(j))){
        if(isPentagonal(pentagonal(j) - pentagonal(i))){

          return pentagonal(j) - pentagonal(i);
        }
      }
      j++;
    }
    i++;
    j = i +1;
  }
  return "we failed!";
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

var powerDigitSum = function(base, power){
  var sum = 0;
  var sumString = '';
  var maxInt = 9007199254740991;
  var tempPow = 1;
  var tempPowString = '';
  var i = 0;
  while(i <= power){
    return "failing!";
  }
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
  var numDigits = 3;
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
        sumArr = currentSum.toString().split(' ');
        if(isMixed(sumArr, possibleOptions[j])){
          sum += currentSum;
          allFiveDigits.push(possibleOptions[j]);
        }
      }
    }

  }
};

var isMixed = function(checkArr, fromArr){

};

var getAllCombinations = function(Options, numberToChoose){
  var allOptions = [];
  var mix = numberToChoose;
  while(mix > 0){
    mix += 1;
  }

};
var betterWaysToMakeChange = function(amount, totalWays, coins){
  if(coins === undefined){
    coins = [1,2,5,10,20, 50, 100, 200];
  }
  if(totalWays === undefined){
    totalWays = 0;
  }

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
    if(amount === coins[i]){
      totalCombs +=1;
      //totalCombs = makeChange(amount,totalCombs,coins.slice(0,coins.length-1));
    }else{
      totalCombs = makeChange(amount - coins[i], totalCombs, coins.slice(0, i+1));
    }

  }
  return totalCombs;

};
var usedChars = [];
var permArr = [];
var permute = function(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr;
};


var fibonacciBySize = function(size){



};
