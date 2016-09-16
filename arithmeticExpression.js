var findMaxSeries = function(){
  var digits = [1,2,3,4,5,6,7,8,9];
  var maxSeriesLength = 0;
  var maxSeries = [];
  var thisLength;


  for (var a = 0; a < digits.length - 3; a++) {
    for (var b = a + 1; b < digits.length - 2; b++) {
      for (var c = b + 1; c < digits.length - 1; c++) {
        for (var d = c + 1; d < digits.length; d++) {
          thisLength = findSeriesLength([a,b,c,d]);
          if(thisLength > maxSeriesLength){
            maxSeriesLength = thisLength;
            maxSeries = [a,b,c,d];
          }
        }
      }
    }
  }
  return maxSeries;

};

var findSeriesLength = function(digits){
  var target = 1;
  var reachable = true;
  while(reachable){
    if(ableToHitTarget(digits, target)){
      target++;
    }else{
      return target - 1;
    }
  }
};

var ableToHitTarget = function(digits, target){
  var a, b, c, d, op1, op2, op3;
  var ops = [plus, minus, multiply, divide];
  var possible = permute(digits, [], []);
  for (var i = 0; i < possible.length; i++) {
    a = possible[i][0];
    b = possible[i][1];
    c = possible[i][2];
    d = possible[i][3];
    for (var m = 0; m < ops.length; m++) {
      op1 = ops[m];
      for (var n = 0; n < ops.length; n++) {
        op2 = ops[n];
        for (var o = 0; o < ops.length; o++) {
          op3 = ops[o];
          if(op1(op2(a, b), op3(c, d)) === target){
            return true;
          }
          if(op1(op2(op3(a,b), c), d) === target){
            return true;
          }
        }
      }
    }
  }
  return false;
};
var plus = function(a,b){
  return a+b;
};
var minus = function(a,b){
  return a - b;
};
var multiply = function(a, b){
  return a * b;
};
var divide = function(a, b){
  return a / b;
};

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
