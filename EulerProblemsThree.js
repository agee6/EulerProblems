
var latticePaths = function(size){
  var initialPath = new Path([0,0]);
  var activePaths = [initialPath];
  var finishedPathCount = 0;
  var newPaths = [];
  var steps = 0;
  while(steps < size * 2){
    for (var i = 0; i < activePaths.length; i++) {
      var cur = activePaths[i].move(size);
      if(cur === 'done'){
        finishedPathCount++;
      }else{
        newPaths.push(cur);
        newPaths.push(activePaths[i]);
      }
    }
    activePaths = newPaths;
    newPaths = [];
    steps++;
  }

  return finishedPathCount;
};

var latticePathsThree = function(size){
  if(size < 2){
    return 1;
  }
  var currentRow = [1, 1];
  var nextRow = [];
  for (var i = 0; i < (size * 2) -1; i++) {
    nextRow = [1];
    for (var j = 0; j < currentRow.length -1 ; j++) {

      nextRow.push(currentRow[j] + currentRow[j +1]);
    }
    nextRow.push(1);
    currentRow = nextRow;
  }
  return currentRow[Math.floor(currentRow.length/2)];
};

function Path(position){
  this.pos = position;

}
Path.prototype.move = function(size){
  if(this.pos[0] + 1 <= size && this.pos[1] + 1 <= size){
    this.pos = [this.pos[0] + 1, this.pos[1]];
    return (new Path([this.pos[0] - 1, this.pos[1] + 1]));
  }else {
    return 'done';
  }
};
var latticeTwoPointO = function(size){
  var numPaths = Math.pow(2,size);
  var i = 1;
  while(i < size){
    numPaths += (numPaths - Math.pow(2, i));
    i++;
  }
  return numPaths;
};

var powerDigitSum = function(base, pow){
  var curr = '';
  var carry = 0;
  var tempProd = 0;
  var temp = '';
  var idx = 1;
  curr += base;
  while(idx < pow){

    for (var i = curr.length-1; i >= 0; i--) {
      tempProd = (parseInt(curr[i]) * base) + carry;
      carry = Math.floor(tempProd/10);
      temp = (tempProd % 10) + temp;
    }
    temp = carry + temp;
    curr = temp;
    temp = '';
    idx++;
  }
  var finalSum = 0;
  for (var j = 0; j < curr.length; j++) {
    finalSum += parseInt(curr[j]);
  }
  return finalSum;
};

var factorialSum = function(num){
  if(num < 0){
    return "wtf man";
  }
  var fact = getFactorialString(num);
  var sum = 0;
  for (var i = 0; i < fact.length; i++) {
    sum += parseInt(fact[i]);
  }
  return sum;
};
var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
var getFactorialString = function(num){

  if(num < 0){
    return "wft";
  }
  if(num < 2){
    return '1';
  }
  var factString = '';
  var temp = 1;
  var i = 1;
  while(i <= num){
    if(i < 12){
      temp *= i;
      factString = temp.toString();
    }else{
      factString = bigMultiply(factString, i);
    }
    i++;
  }
  return factString;
};

var bigMultiply = function(stringNum, num){
  var revNumString = stringNum.split('').reverse().join('');
  var multiplied = '';
  var carry = 0;
  var multi, plied, temp;
  for (var i = 0; i < revNumString.length; i++) {
    multi = parseInt(revNumString[i]) * num + carry;
    plied = multi % 10;
    carry = Math.floor(multi/10);
    multiplied = plied + multiplied;
  }
  multiplied = carry + multiplied;
  return multiplied;
};

var lexiographicPerm = function(num){
  var count = 0;
  var i = 123456789;
  while(i <= 987654321){
    if(isPermutation(i)){
      count++;
      if(count === num){
        return i;
      }
    }
    i++;
  }
  return "number not found";
};
var lexiographicPerm2 = function(num){
  console.time('possible');
  var possible = permute("0123456789".split(''));
  console.timeEnd('possible');
  console.time('sort');
  possible.sort(function(a,b){
    return(parseInt(a.join('')) - parseInt(b.join('')));
  });
  console.timeEnd('sort');
  return(possible[num-1].join(''));
};

var isPermutation = function(num){
  var stringNum = num.toString();
  var numbersObj = {};

  for (var i = 0; i < stringNum.length; i++) {
    if(numbersObj[stringNum[i]] === undefined && stringNum[i] !== '0'){
      numbersObj[stringNum[i]] = 1;
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

var distinctPowers = function(start, finish){
    var powersObj = {};
    var curr, reduced, checkBase, checkPow;
    var count = 0;
    for (var i = start; i <= finish; i++) {
      for (var j = start; j <= finish; j++) {
        reduced = inLowestPower(i);
        checkBase = reduced[0];
        checkPow = reduced[1] * j;
        curr = checkBase + "toThe" + checkPow;
        if(powersObj[curr] === undefined){
          powersObj[curr] = 1;
          count ++;
        }
      }
    }
    return count;
};

var primePermutation = function(numDigits){
  var possibleDigits = '0123456789'.split('');

};

var inLowestPower = function(num){
  var base = 2;
  var pow = 0;
  var check;
  while(base <= Math.sqrt(num)  ){
    check = num;
    while(check > 0){
      if(check === 1){
        return [base, pow];
      }
      if(check % base !== 0 ){
        break;
      }else{
        pow++;
        check = check/base;
      }
    }
    pow = 0;
    base++;
  }
  return [num, 1];
};
