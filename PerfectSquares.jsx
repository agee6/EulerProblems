
//returns the number of perfect squares.
var perfectSquares = function(num){
  var squares = [];

  for (var i = 1; i <= num; i++) {
    squares.push(i*i);
  }
  return squares;

};

var closestPerfectSquare = function(num){
  //returns the perfect square closets to given number.
  var nearestBelow = Math.floor(Math.sqrt(num));
  var nearestAbove = Math.ceil(Math.sqrt(num));
  nearestBelow = nearestBelow * nearestBelow;
  nearestAbove = nearestAbove * nearestAbove;
  var maxDiff =  Math.max(Math.abs(nearestAbove - num), Math.abs(nearestBelow - num));
  return maxDiff;
};

var pythagoreanTriple = function(){

}; 
