
function Promise(f){
  this.resolved = false;
  this.pending = true;
  this.triggered = false;
  this.onFullfil = null;
  this.onReject = null;
  var resolve = function(result){
      this.result = result;
      this.resolved = true;
      this.pending = false;
      if(this.triggered){
        this.onFullfil(result);
      }
    }.bind(this);
  var reject = function(result){
    this.result = result;
    this.resolved = false;
    this.pending = false;
    if(this.triggered){
      this.onReject(result);
    }
  }.bind(this);

  f(resolve, reject);
}

Promise.prototype.then = function(onFullfilled, onRejected){

  if(this.pending){
    this.onFullfil = onFullfilled;
    this.onReject = onRejected;
    this.triggered = true;
  }else if(this.resolved){
    onFullfilled(this.result);
  }else{
    onRejected(this.result);
  }
  this.triggered = true;
};

Promise.all = function(promiseArr){

  var thePromise = new Promise(function(resolve, reject){
    var fullfilledArr = [];
    var resultsArr = [];
    var count = 0;
    for (var i = 0; i < promiseArr.length; i++) {
      promiseArr[i].then(function(result){
        count += 1;
        resultsArr.push(result);
        if(count === promiseArr.length){
          resolve(resultsArr);
        }
      }, function(result){
        reject(result);
      });
    }

  }); 

  return thePromise;
};


var p1 = new Promise(function(resolve){

  console.log("yay");
  window.setTimeout(function(){
    var num = Math.floor(Math.random() * 6 + 1);
    resolve(num);

  }, 2000);

});
