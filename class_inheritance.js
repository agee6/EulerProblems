





function Dog(name, age){
  this.name = name;
  this. age = age;
  this.bark = function(){
    console.log("woof, woof, sir");
  };
}
Dog.speak = function(){
  console.log('yo');
};

Dog.value = 100;

Dog.addValue = function(){
  this.age +=1;
  return this.age;
};

Dog.prototype.greetInDog = function(){
  var greeting = "Hello, Woof wooof, bark. pardon the French, " + this.name;
  console.log(greeting);
};

var inherits = function(Child, Father){
  function Surrogate(){
    this.constructor = Child;
  }
  Surrogate.prototype = Father.prototype;
  Child.prototype = new Surrogate();

};

var buffer = {
  state:[],
  append: function(){
    for (var i = 0; i < arguments.length; i++) {
      this.state.push(arguments[i]);
    }
  }
};
