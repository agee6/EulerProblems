var fs = require('fs');

function getRecordsFromFile(filename, cb) {

  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
      console.log("---Error---");
      console.log(err);
      return;
    }

    var dataArr = data.split(',');
    dataArr = dataArr.sort();
    cb(dataArr);
  });

}

var getSumOfNameScore = function(nameArray){
  var sum = 0;
  var currName;

  for (var i = 0; i < nameArray.length; i++) {
    currName = nameArray[i].replace('"', '');
    currName = currName.replace('"', '');
    sum+= (alphabeticalValue(currName) * (i+1));
  }
  console.log(sum);
  return sum;
};

var alphabeticalValue = function(name){
  var sum = 0;
  for (var i = 0; i < name.length; i++) {
    sum += (name[i].charCodeAt() - "A".charCodeAt() + 1);
  }
  return sum;
};

getRecordsFromFile('names.txt', getSumOfNameScore);
