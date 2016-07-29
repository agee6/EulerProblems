var isPandigital = function(num){
  var numString = num.toString();
  var numDigits = numString.length;
  if(numDigits >9){
    return false;
  }
  var digitHash = {};
  for (var i = 0; i < numString.length; i++) {
    if(numString[i] === '0'){
      return false;
    }
    if(digitHash[numString[i]] === undefined){
      digitHash[numString[i]] = 1;
    }else{
      return false;
    }
  }
  return true;
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

var isPrimeDivisible = function(numArr){
  var primes = [2,3,5,7,11,13,17];
  for (var i = 0; i < primes.length; i++) {
    //console.log(parseInt(numArr.slice(i+1, i+4).join('')));
    if(parseInt(numArr.slice(i+1, i+4).join('')) % primes[i] !== 0){
      return false;
    }
  }
  return true;

};

var subStringDiv = function(){
  var panDigits = permute('1234567890'.split(''));
  console.log(panDigits.length); 
  var sum = 0;
  for (var i = 0; i < panDigits.length; i++) {
    if(isPrimeDivisible(panDigits[i])){
      sum += parseInt(panDigits[i].join(''));
    }
  }
  return sum;
};
console.log(subStringDiv());
