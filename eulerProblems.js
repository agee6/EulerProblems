

var largestPrimeFactor = function(number){
  if(isPrime(number)){
    return number;
  }

  var largestPrime = 1;
  if (number % 2 === 0){
    largestPrime = 2;
  }

  var i = 3;

  while (i <= number){
    if(number % i === 0){
      if(isPrime(i)){
        largestPrime = i;

      }
      number = number/i;
    }
    i += 2;
  }
  return largestPrime;

};

var largestPandigitalPrime = function(options){
  if(options === undefined){
    options = ['1', '2','3','4','5','6','7','8','9'];
  }
  var largest = null;
  var possibleOptions = permute(options);
  var current;

  for (var i = 0; i < possibleOptions.length; i++) {
    current = parseInt(possibleOptions[i].join(''));

    if(current> largest && isPrime(current)){
      largest = current;
    }
  }
  if(largest === null && options.length > 1){
    options.pop();
    return largestPandigitalPrime(options);
  }else if(options.length < 2){
    return "you messed something up brother";
  }else{
    return largest;
  }
};

var usedChars = [];
var permArr = [];
var permute = function(input) {
  var i, ch;

  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length === 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr;
};

var largestPrime = function(maxInt){
  if(maxInt < 2){
    return false;
  }
  if(maxInt === 2){
    return 2;
  }
  var i;
  if(maxInt%2 === 0){
    i = maxInt;
  }else{
    i = maxInt - 1;
  }


  while(i > 0){
    if(isPrime(i)){
      return i;
    }
    i -=1;
  }
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

var isTruncatedPrime = function(number){
  var last = number % 10;
  if(!(last === 7 || last === 3) ){
    return false;
  }
  if(!isPrime(number)){
    return false;
  }
  var stringNum = number.toString();
  for (var i = 1; i < stringNum.length-1; i++) {
    if(!isPrime(parseInt(stringNum.slice(i)))){
      return false;
    }
  }
  for (var j = 1; j < stringNum.length; j++) {
    if(!isPrime(parseInt(stringNum.substr(0,j)))){
      return false;
    }
  }
  return true;

};

var truncatedPrimes = function(){
  var start = new Date();

  var count = 0;
  var sum = 0;
  var i = 11;
  while (count < 11){
    if(isTruncatedPrime(i)){
      count +=1;
      sum += i;
    }
    i += 2;
  }
  var finish = new Date();
  console.log((finish-start)/1000);
  return sum;
};

var truncatedPrimesFailed = function(){
  var firsts = ['2', '3', '5', '7'];
  var mids = ['3', '7', '9'];
  var lasts = ['3', '7'];
  var count = 0;
  var size = 2;
  var currentSize = size;
  var currentNum = '';
  while(count < 11){
    currentSize = size;
    for (var i = 0; i < firsts.length; i++) {
      currentNum += firsts[i];
      for (var j = 0; j < mids.length; j++) {
        currentNum += mids[j];
        for (var k = 0; k < lasts.length; k++) {
          currentNum += lasts[k];
        }
      }
    }
  }
};

var isCircularPrime = function(num){

  if(!isPrime(num)){
    return false;
  }
  var string = num.toString();
  var numRotations = string.length;
  while(numRotations > 0){
    string = rotateString(string);
    if(!isPrime(parseInt(string))){
      return false;
    }
    numRotations -= 1;
  }
  return true;

};

var rotateString = function(string){
  var newString = string.slice(1);
  newString = newString + string[0];
  return newString;
};

var numCircularPrimes = function(maxNum){
  if(maxNum < 3){
    return 0;
  }
  if(maxNum === 3){
    return 1;
  }
  var count = 1;
  var i = 3;
  while(i < maxNum){
    if(isCircularPrime(i)){
      count++;
    }
    i += 2;
  }
  return count;

};
var largestPalindrome = function(digits){
  var n1 = 999;
  var n2 = 999;
  while (n1 > 99){
    while(n2 > (n1-100)){

      if(isPalindrome(n1*n2)){
        return(n1*n2);
      }
      n2 -=1;
    }
    n1 -= 1;
    n2 = n1;
  }
  return 111*111;
};

var isPalindrome = function(num){

  var string = num.toString();
  var i = 0;
  while (i < string.length/2 ){

    if(string[i] !== string[string.length -1-i]){
      return false;
    }
    i+=1;
  }
  return true;
};

var isBinaryPalindrome = function(num){
  var string = (num >>> 0).toString(2);
  var i = 0;
  while (i < string.length/2 ){

    if(string[i] !== string[string.length -1-i]){
      return false;
    }
    i+=1;
  }
  return true;

};

var sumDoublePalindromes = function(maxNum){
  var sum = 1;
  var i = 3;
  while(i < maxNum){
      if(isBinaryPalindrome(i) && isPalindrome(i)){
        sum += i;
      }
      i += 2;
  }
  return sum;
};

var smallestAllDivisor = function(num){
  var factors = [];
  var i = 2;
  var prod = 1;
  while (i <= num){
    if(isPrime(i)){

      factors.push(i);
      prod = prod * i;
    }else{
      var check = i;
      for (var j = 0; j < factors.length; j++) {

        if(check % factors[j] === 0 && check !== 0){
          check = check/factors[j];
        }
      }
      if(check > 1){
        factors.push(check);
        prod = prod * check;
      }
    }
    i++;
  }
  return prod;

};

var differenceInSquares = function(num){
  var sum = 0;
  var sumOfSquares = 0;
  var i = 1;
  while(i <= num){
    sum+= i;
    sumOfSquares += i*i;
    i++;
  }
  var squareOfSums = sum * sum;
  return(squareOfSums - sumOfSquares);

};

var nthPrime = function(n){
  if(n<1){
    return null;
  }
  var currentPrime = 2;
  var primeCount = 1;
  var i = 2;
  while(primeCount <= n){
    if(isPrime(i)){
      currentPrime = i;
      primeCount += 1;
    }
    i++;
  }
  return currentPrime;
};

var largestProduct = function(num){
  var thousandDigits = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
  var digits = thousandDigits.split('');
  var largest = 0;
  var prod = 1;
  var i = num-1;
  while( i < digits.length){
    for (var j = 0; j < num; j++) {
      prod *= thousandDigits[i - j];
    }
    if(prod > largest){
      largest = prod;
    }
    prod = 1;
    i++;
  }
  return largest;
};

var pythagoreanTriple = function(sumsTo){
  for (var a = 3; a < sumsTo/3; a++) {
    for (var b = 4; b < sumsTo/2; b++) {
      var c = Math.sqrt(a*a + b*b);
      if((a + b + c) === sumsTo){
        return a * b * c;
      }
    }
  }
  return "failed";
};

var isPrimeSpecial = function(number, primes){

  for (var i = 0; i < primes.length; i++) {
    if(number % primes[i] === 0){
      return false;
    }
  }
  return true;
};

var sumOfPrimes = function(maxVal){
  if(maxVal < 3){
    return 0;
  }
  if(maxVal === 3){
    return 2;
  }
  var i = 3;
  var sum = 2;
  var primes = [2];
  while(i< maxVal){
    if(isPrimeSpecial(i, primes)){
      sum += i;
      primes.push(i);
    }
    i+=2;
  }
  primes.push(sum);
  return primes;
};
var largestConsecutivePrimeSum = function(maxVal){
  if(maxVal<3){
    return null;
  }
  var largestSum = 2;
  var largestLength = 1;
  var primes = sumOfPrimes(maxVal/3+ 10);
  var currentSum = primes.pop();
  var currentLength = primes.length;
  if(currentSum < maxVal && isPrime(currentSum)){
    return currentSum;
  }
  var start = 0;

  while( start < primes.length){
    currentSum = 0;
    currentLength = 0;
    var j = start;
    while(currentSum < maxVal && j < primes.length){
      currentSum += primes[j];
      currentLength += 1;
      if(currentLength > largestLength && isPrime(currentSum)){
        largestLength = currentLength;
        largestSum = currentSum;
      }
      j++;
    }
    start++;
  }

  return largestSum;

};

var triangleNumber = function(divisors){

  var currentTriangle = 0;
  var theFactors = 0;
  var i = 1;
  while(theFactors <= divisors){
    currentTriangle += i;
    theFactors = numberOfFactors(currentTriangle);
    i++;
  }
  return currentTriangle;

};

var numberOfFactors = function(number){
  if(number === 1){
    return 1;
  }
  if(number < 1){
    return "we don't handle this";
  }
  var numFactors = 2;
  if(Math.sqrt(number) === Math.floor(Math.sqrt(number))){
    numFactors += 1;
  }
  var step = 2;
  while(step < Math.sqrt(number)){
    if(number % step === 0){
      numFactors += 2;
    }
    step++;
  }
  return numFactors;
};

var lengthCollatz = function(startNum){
  var theLength = 1;
  var numb = startNum;
  while(numb > 1){
    if(numb%2 === 0){
      numb = numb/2;
    }else{
      numb = (3 * numb) + 1;
    }
    theLength += 1;
  }
  return theLength;
};

var longestCollatz = function(maxVal){
  var max = 0;
  var maxPos = 0;
  var currentLength = 0;
  var i = 2;
  while(i < maxVal){
    currentLength = lengthCollatz(i);
    if(currentLength > max){
      max = currentLength;
      maxPos = i;
    }
    i++;
  }
  return maxPos;
};

var traversingGrid = function(size){
  var rootNodes = [[0,0]];
  var newNodes = [];
  while(rootNodes[0][0] < size || rootNodes[0][1] < size){
    for (var i = 0; i < rootNodes.length; i++) {
      if(rootNodes[i][0] + 1 <= size){
        newNodes.push([rootNodes[i][0] + 1, rootNodes[i][1]]);
      }
      if(rootNodes[i][1] + 1 <= size){
        newNodes.push([rootNodes[i][0], rootNodes[i][1] + 1]);
      }
    }
    rootNodes = [];
    for (var j = 0; j < newNodes.length; j++) {
      rootNodes.push(newNodes[j].slice());
    }
    newNodes = [];
  }
  return rootNodes.length;

};
var factorization = function(number){
  if(number < 1){
    return "we don't handle that";
  }
  if(number === 1){
    return 1;
  }
  var factors = [1, number];
  var step = 2;
  if(Math.sqrt(number) === Math.floor(Math.sqrt(number))){
    factors.push(Math.sqrt(number));
  }
  while(step < Math.sqrt(number)){
    if(number % step === 0){
      factors.push(step);
      factors.push(number/step);
    }
    step++;
  }
  return factors;
};

var primeFactorization = function(number){
  if(number < 2){
    return [];
  }
  if(isPrime(number)){
    return [number];
  }
  var factors = factorization(number);
  var primeFactors = [];
  for (var i = 0; i < factors.length; i++) {
    if(isPrime(factors[i])){
      primeFactors.push(factors[i]);
    }
  }
  return primeFactors;
};



var numberOfDistinctPrimeFactors = function(number){
  if(number === 1){
    return 0;
  }
  if(number < 1){
    return "we don't handle this";
  }
  if(isPrime(number)){
    return 1;
  }
  var primeFactors = primeFactorization(number);
  return primeFactors.length;
};



var pathCounter = function(size){
  var numberOfPaths = Math.pow(2,size);
  var step = 0;
  while (step < size){
    numberOfPaths +=
    step -= 1;
  }
  return numberOfPaths;
};

var consecutivePrimeFactors = function(num){
  var i = 1;
  var consecutive = [];
  while(consecutive.length < num){
    var numberFactors = numberOfDistinctPrimeFactors(i);

    if(numberFactors === num){
      consecutive.push(i);
      i++;
      var j = 1;
      while(j < num){
        numberFactors = numberOfDistinctPrimeFactors(i);
        if(numberFactors === num){
          consecutive.push(i);
          i++;
          j++;
        }
        else{
          consecutive = [];
          break;
        }
      }
      if(consecutive.length === num){
        return consecutive;
      }
    }
    i++;
  }
  return consecutive;
};


var lowestNonGoldbach = function(){
  var i = 9;
  var goldback = true;
  while(goldback){
    if(!isPrime(i)){
      console.log(i);
      if(!isGoldbach(i)){
        return i;
      }
    }
    i+=2;
  }
};

var isGoldbach = function(num){
  // if(num % 2 === 0){
  //   return false;
  // }
  // if(isPrime(num)){
  //   return false;
  // }
  var theSqrt;
  var thePrime = num - 2;
  while(thePrime > 2){
    if(isPrime(thePrime)){
      theSqrt = Math.sqrt((num - thePrime)/2);
      if(Math.floor(theSqrt) === theSqrt){
        return true;
      }
    }
    thePrime -=2;
  }
  return false;
};
