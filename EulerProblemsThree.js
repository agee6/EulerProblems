
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
    debugger;
  }

  return finishedPathCount;
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
