





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

var fixParagraph = function(string, width){
	var newString = [];
	var currentSpaceCount = 0;
	var currentLineLength = 0;
	var broken = string.split(' ');

	for(var i = 0; i < broken.length; i++){
		if( broken[i] !== ' '){
			newString.push(broken[i]);
currentLineLength += broken[i].length + 1;
if(currentLineLength > width){
var firstWord = newString.pop();
var lastWord = newString.pop();
var endString = lastWord + '\/n' + firstWord;
newString.push(endString);
currentLineLength = firstWord.length;
}
		}

	}
	return newString.join(' ');

};

var minimumPossibleWidth = function(string, numberOfLines){
	var brokenString = string.split(' ');
	brokenString.delete(' ');
	//var newString = brokenString.join(‘ ‘);
	var guess = Math.ceil(newString.length/numberOfLines);
	var newString = fixParagraph(string, guess);
	var guessLines = newString.split('\/n').length + 1;
	while(guessLines !==numberOfLines){
		if(guessLines > numberOfLines){
			guess +=1;
		}else{
			guess -=1;
		}
		newString = fixParagraph(string, guess);
		guessLines = newString.split('\/n').length + 1;
	}
	return guess;
}; 
