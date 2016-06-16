

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
