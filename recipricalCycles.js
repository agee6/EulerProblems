var recipCycles = function(maxD){
  var longestCycle = 0;
  var savedD;
  var d = 1;
  var cycleLength;
  while(d < maxD){
    cycleLength = longDivision(d);
    if(cycleLength > longestCycle){
      console.log('cycleLength:' + cycleLength + ' divisor:' + d);
      savedD = d;
      longestCycle = cycleLength;
    }
    d++;
    //debugger;
    // console.log(d++);
  }
  return savedD;
};

var getCycle = function(den){
  var cycle = [];
  var temp = [];
  var current;
  var p = 1;
  var found = false;
  while(!found ){
    if(Math.floor(Math.pow(10,p)/den) === Math.pow(10,p)/den){

      return 0;
    }else{
      current =  Math.floor(Math.pow(10,p)/den) % 10;
      cycle.push(current);
      if(cycle.length > 9){
        temp = cycle.slice();
        while(temp.length > 3){
          var test = hasCycle(temp);
          if(test){
            return test;
          }else{
            temp.shift();
          }
        }
      }
    }
    p += 1;

  }
};

var hasCycle = function(arr){
  if( arr[0] === arr[1] && arr[1] === arr[2] && arr[2] === arr[3] && arr[0] !== 0){
    return 1;
  }
  var first = arr[0];
  var possibleEnd = [];
  for (var i = 2; i < arr.length; i++) {
    if(arr[i] === first){
      possibleEnd.push(i);
    }
  }
  var len = i;
  var f = 0;
  var s = i;
  for (var j = 0; j < possibleEnd.length; j++) {
    f = 0;
    s = possibleEnd[j];
    while(f < possibleEnd[j] ){
      if(arr[f] !== arr[s]){
        break;
      }
      f++;
      s++;
    }
    debugger;
    if( f >= possibleEnd[j]){
      return possibleEnd[j];
    }
  }
  return false;
};
var getCycleLength = function(arr){
  var first = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if(arr[i] === first){
      return i;
    }
  }
  return 0;
};

var dumbWayToPlay = function(maxD){
  var i = 1;
  var max = 0;
  var savedD;
  while( i< maxD){
    if(longDivision(i)> max){
      max = getCycle(i);
      savedD = i;
    }
    i++;
  }
  return savedD;
};

var longDivision = function(num){
  var sol = [];
  var finished = false;
  var remainder = 1;
  var notCycle = true;
  var cycleLength = null;
  var temp;
  while(remainder > 0 && notCycle){
    remainder = remainder * 10;
    if( remainder >= num ){
      sol.push(Math.floor(remainder/num));
      remainder = remainder % num;
      if(remainder === 0){
        cycleLength = 0;
      }
    }else{
      sol.push(0);
    }
    if(sol.length > 9){
      var stop = sol.length > 5 ? sol.length / 2 : 3;
      temp = sol.slice();
      while(temp.length > stop && notCycle){
        if(isCycle(temp)){
          cycleLength = temp.length / 2;
          notCycle = false;
        }else{
          temp.shift();
        }
      }
    }
  }
  return cycleLength;
};

var isCycle = function(arr){
  if(arr.length % 2 !== 0){
    return false;
  }
  var mid = Math.floor(arr.length / 2);
  var s = 0;
  var l = mid;
  while(s < mid){
    if(arr[s] !== arr[l]){
      return false;
    }
    s++;
    l++;
  }
  return true;
};

//console.log(dumbWayToPlay(1000));

// console.log(recipCycles(10));
