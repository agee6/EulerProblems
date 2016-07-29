

var buildSpiral = function(size){
  var spiral = [[1]];
  var i = 2;
  var mainD = 1;
  var crossD = 1;
  while(spiral.length < size){
    for (var j = 0; j < spiral.length; j++) {
      spiral[j].push(i);
      i++;
    }
    spiral.push([i]);
    mainD += i;
    i++;
    while(spiral[spiral.length -1].length < spiral[0].length){
      spiral[spiral.length -1].unshift(i);
      i++;
    }
    crossD += i;
    for (var k = spiral.length - 1;k >= 0; k--) {
      spiral[k].unshift(i);
      i++;
    }
    spiral.unshift([i]);
    mainD += i;
    i++;
    while(spiral[0].length < spiral[1].length){
      spiral[0].push(i);
      i++;
    }
    crossD += (i-1);
  }
  console.log(mainD + crossD - 1);
  return spiral;

};
var sumSpiralDiagnols = function(size){
  var spiral = buildSpiral(size);

};
buildSpiral(1001);
