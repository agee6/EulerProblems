

var oneAway = function(string1, string2){
  if(string1.length < string2.length){
    var string3 = string1;
    string1 = string2;
    string2 = string3;
  }
  if(string1 === string2){
    return false;
  }else if(string1.length === string2.length){
    return(checkSwitch(string1, string2));
  }else if(string1.length === string2.length + 1){
    return(checkInsertion(string1, string2));
  }else{
    return false;
  }
};

var checkSwitch = function(string1, string2){
  var changes = 0;
  for (var i = 0; i < string1.length; i++) {
    if(string1[i] !== string2[i]){
      changes += 1;
    }
  }
  if(changes === 1){
    return(true);
  }
};

var checkInsertion = function(string1, string2){
  var changes = 0;
  var i = 0;
  var j = 0 ;
  while(i < string1.length){

  }
  
};
