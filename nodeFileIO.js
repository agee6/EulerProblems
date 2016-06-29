var fs = require('fs');

function getRecordsFromFile(filename, cb) {

  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
      console.log("---Error---");
      console.log(err);
      return;
    }
    var theDataArr = data.split(',');
    cb(theDataArr);
  });


}

var codedTriangleNumbers = function(wordsArr){
  var testString;
  var currentSum = 0;
  var count = 0;

  for (var i = 0; i < wordsArr.length; i++) {
    currentSum = 0;

    for (var j = 0; j < wordsArr[i].length; j++) {
      if(wordsArr[i][j] !== '"'){
        currentSum += wordsArr[i][j].charCodeAt(0) - "A".charCodeAt(0) + 1;

      }
    }

    if(isTriangleNum(currentSum)){
      console.log(wordsArr[i]);
      count += 1;
    }

  }
  console.log(count);
  // return count;
};

var isTriangleNum = function(num){
  if(num < 1){
    return false;
  }
  var i = 1;
  var currentTriangle = 1;
  while(currentTriangle <= num){
    if(currentTriangle === num){
      return true;
    }
    i += 1;
    currentTriangle = (i * (i+1))/2;
  }
  return false;
};



// codedTriangleNumbers(['A']);

console.log("A".charCodeAt(0));
var records = getRecordsFromFile("p042_words.txt", codedTriangleNumbers);
