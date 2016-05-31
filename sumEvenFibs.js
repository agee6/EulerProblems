

var sumEvenFibs = function(maxVal){

  var fibs = [1,2];
  var sum = 2;
  while (fibs[fibs.length -1] <= maxVal){
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
    if(fibs[fibs.length - 1] % 2 === 0){
      sum += fibs[fibs.length - 1];

    }
  

  }
  return sum;

};
