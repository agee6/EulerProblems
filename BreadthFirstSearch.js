

var breadthFirstSearch = function(baseNode, target){

  var q = [baseNode];

  while(q.length > 0){
    var current = q.shift();
    if(current.value === target){
      return q;
    }
    if(current.children.length > 0){
      q = q.concat(current.children);
    }
  }
  return false; 


};
