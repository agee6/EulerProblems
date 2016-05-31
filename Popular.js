

var popular = function(nodeArr){

  var possiblePopular = 0;

  var distanceToKnownNode = 1;
  var totalCount = 0;



  while(distanceToKnownNode < nodeArr.length){
    if(knows(nodeArr[possiblePopular], nodeArr[(possiblePopular + distanceToKnownNode) % nodeArr.length])){
      possiblePopular = (possiblePopular + distanceToKnownNode) % nodeArr.length;
      distanceToKnownNode = 1;
    }else{
      distanceToKnownNode += 1;
    }

    totalCount +=1;
    if(totalCount > nodeArr.length * 2){
      return null;
    }

  }
  for(var i = 0; i < nodeArr.length; i ++ ){
    if(!knows(nodeArr[i], nodeArr[possiblePopular])){
      return null;
    }
  }
  return [nodeArr[possiblePopular]];
};
var knows = function(a,b){
  //returns true if a knows b. false if it doesn't. returns false if a === b
};
