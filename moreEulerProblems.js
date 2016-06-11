

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
