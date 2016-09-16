
var getPossibleArr = function(size){
  var max = size * 2;
  var sum = max;
  var digits = [];
  var sols = [];
  var maxSum = 0;
  var maxSol = [];
  for (var i = 1; i < max - 4; i++) {
    for (var j = i + 1; j < max - 3; j++) {
      for (var k = j + 1; k < max - 2; k++) {
        for (var l = k + 1; l < max - 1; l++) {
          for (var m = l + 1; m < max; m++) {
            sum += 2 * (i + j + k + l + m);
            for (var x = 1; x < max; x++) {
              if(x !== i && x !== j && x !== k && x !== l && x !== m){
                sum += x;
              }
            }
            if(Math.floor(sum/size) === sum/size){
              sols.push([i,j,k,l,m, sum/size]);
              if(maxSum === null || sum > maxSum){
                maxSum = sum;
                maxSol = sols[sols.length - 1];
              }
            }
            sum = max;
          }
        }
      }
    }
  }

  return sols;

};

var checkOptions = function(size){
  var sols = getPossibleArr(size);
  var singles = [];
  var finalSols = [];
  for (var i = 0; i < sols.length; i++) {
    for (var j = 1; j <= size * 2; j++) {
      if(sols[i].indexOf(j) === -1){
        singles.push(j);
      }
    }
    // console.log(singles);
    var target = sols[i].pop();
    var passes = true;
    for (var k = 0; k < sols[i].length; k++) {
      var a = sols[i][k];
      var hasPair = false;
      for (var l = 0; l < sols[i].length; l++) {
        var b = sols[i][l];
        if(singles.indexOf(target - (a + b)) !== -1 && a !== b){
          hasPair = true;
        }
      }
      if(!hasPair){
        passes = false;
        break;
      }
    }
    for (var r  = 0; r < singles.length; r ++) {
      hasPair = false;
      var goal = target - singles[r];
      for (var q = 0; q < sols[i].length - 1; q++) {
        a = sols[i][q];
        for (var s = q + 1; s < sols[i].length; s++) {
          if(sols[i][s] + a === goal){
            hasPair = true;
          }
        }
      }
      if(!hasPair){
        passes = false;
      }
    }
    if(passes){
      finalSols.push(sols[i]);
    }

  }
  return finalSols;

};

console.log(checkOptions(5));
