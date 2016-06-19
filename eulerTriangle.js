

var integerRightTriangles = function(maxInt){
  var perimeters = {};
  var a = 1;
  var b, c, p;
  while(a <= maxInt/3){
    b = a+1;
    while(b <= maxInt/2){
      c = Math.sqrt(a*a + b*b);
      if(Math.floor(c) === c){
        p = a + b + c;
        if(perimeters[p] === undefined){
          perimeters[p] = 1;
        }else{
          perimeters[p] += 1;
        }
      }
      b++;
    }
    a++;
  }
  var maxP = 0;
  var maxLength = 0;
  for (var i = 1; i <= maxInt; i++) {
    if(perimeters[i] > maxLength){
      maxLength = perimeters[i];
      maxP = i;
    }
  }
  return maxP;
};

var champernownNumber = function(n){
  if(n < 1){
    return null;
  }
  if( n < 10){
    return n;
  }
  if(n === 10){
    return 1;
  }
  if(n < 100){
    var temp = (n-10) * 2;
    if(n % 2 === 0){
      return(Math.floor(temp/10));
    }else{
      return(temp % 10);
    }
  }
  if(n < 1000){
    Math.floor(n/10);
  }
};
var cNumb = function(n){
  if(n< 0){
    return null;
  }
  if(n< 10){
    return n;
  }
  var numString = '0123456789';
  var currentNumb = 10;
  while(numString.length <= n){

    numString += currentNumb.toString();
    currentNumb +=1;
  }
  return parseInt(numString[n]);
};

var productOfCNumb = function(maxInt){
  var product = 1;
  var currentNumb = 10;
  while( currentNumb <= maxInt){
    product = product * cNumb(currentNumb);
    currentNumb *= 10;
  }
  return product;
};

var getCycleLength = function(den){
  var check = den;
  while( check > 1 && (check % 5 === 0 || check % 2 === 0)){
    if(check%10 === 0){
      check = check/10;
    }else if(check%2 === 0){
      check = check /2;
    }else{
      check = check/5;
    }
  }
  if(check === 1){
    return 0;
  }
  while( check > 1 && check % 3 === 0){
    check = check/3;
  }
  if(check === 1){
    return 1;
  }

  check = 1/den;
  var cycle = [];
  var cycleCheck = [];
  var hasCycled = false;
  var curr = null;
  while(!hasCycled){
    curr = check;
  }

};

var reciprocalCycles = function(maxVal){

};

var pandigitalMultiples = function(){
  var largest = 123456789;
  var i = 2;
  var j, currentVal;
  var currentSet = [];
  var currentLength = 0;

  while(i < 10000){
    currentLength = 0;
    currentSet = [];
    j = 1;
    while(currentLength < 9){
      currentSet.push(i * j);
      j++;
      currentLength = currentSet.join('').length;
    }

    currentVal = parseInt(currentSet.join(''));
    if(currentVal > largest && isPandigital(currentVal)){
      largest = currentVal;
    }
    i++;
  }
  return largest;
};

var isPandigital = function(num){
  var numString = num.toString();
  var numDigits = numString.length;
  if(numDigits >9){
    return false;
  }
  var digitHash = {};
  for (var i = 0; i < numString.length; i++) {
    if(digitHash[numString[i]] === undefined){
      digitHash[numString[i]] = 1;
    }else{
      return false;
    }
  }
  return true;
};
