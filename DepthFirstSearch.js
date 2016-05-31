

var depthFirstSearch = function(baseNode, target){

    if(baseNode.children.length < 1){
      return false;
    }
    if(baseNode.value === target){
      return baseNode;
    }
    var value = false;
    for (var i = 0; i < baseNode.children.length; i++) {
      var temp = depthFirstSearch(baseNode.children[i], target);
      if(temp){
        return temp;
      }
    }
    return value; 
};
