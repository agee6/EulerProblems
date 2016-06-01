var numberToWord = function(n){
  if(n === 0){
    return 'zero';
  }
  if(n=== 1){
    return 'one';
  }
  if(n === 2){
    return 'two';
  }
  if(n === 3){
    return 'three';
  }
  if(n === 4){
    return 'four';
  }
  if(n === 5){
    return 'five';
  }
  if(n === 6){
    return 'six';
  }
  if(n === 7){
    return 'seven';
  }
  if(n === 8){
    return 'eight';
  }
  if(n === 9){
    return 'nine';
  }
  if(n === 10){
    return 'ten';
  }
  if(n === 11){
    return 'eleven';
  }
  if(n === 12){
    return 'twelve';
  }
  if(n === 13){
    return 'thirteen';
  }
  if(n === 14){
    return 'fourteen';
  }
  if(n === 15){
    return 'fifteen';
  }
  if(n === 16){
    return 'sixteen';
  }
  if(n === 17){
    return 'seventeen';
  }
  if(n === 18){
    return 'eighteen';
  }
  if(n === 19){
    return 'nineteen';
  }
  if(n === 20){
    return 'twenty';
  }
  if(n === 30){
    return 'thirty';
  }
  if(n === 40){
    return 'forty';
  }
  if(n === 50){
    return 'fifty';
  }
  if(n === 60){
    return 'sixty';
  }
  if(n === 70){
    return 'seventy';
  }
  if(n === 80){
    return 'eighty';
  }
  if(n === 90){
    return 'ninety';
  }
  if(n < 100){
    for(var i = 30; i <= 100; i += 10){

      if(n < i){
        var a = i-10;
        return numberToWord(a) + numberToWord(n-a);
      }
    }
  }
  if(n < 1000){
    var hundreds = Math.floor(n / 100);
    var tens = n % 100;
    if(tens === 0){
      return numberToWord(hundreds) + "hundred";
    }
    return numberToWord(hundreds) + "hundredand" + numberToWord(tens);
  }
  if(n < 1000000){
    var thousands = Math.floor(n/1000);
    var hundreds = n % 1000;
    if(hundreds === 0){
      return numberToWord(thousands) + "thousand";
    }
    return numberToWord(thousands) + "thousand" + numberToWord(hundreds);
  }

};
var numberWordLengthSummer = function(topNum){
  var total = 0;
  for(var i = 1; i<= topNum; i++){
    var numbString = numberToWord(i);
    total += numbString.length;
  }
  return total;
};

var sumOfPowers = function(highestNumber, digitsToSum){

};

var dayOfTheWeek = function(date, month, year){

  var daysFromYear = (year - 1900) * 365;
  var daysFromLeapYear = Math.ceil((year - 1900)/ 4) - 1;
  var daysFromMonth = 0;
  for (var i = 1; i < month; i++) {
    if(i === 1 || i=== 3 || i === 5 || i === 7 || i === 8 || i ===10){
      daysFromMonth += 31;
    }else if(i === 2){
      if(year % 4 === 0){
        daysFromMonth += 29;
      }else{
        daysFromMonth += 28;
      }
    }else{
      daysFromMonth += 30;
    }
  }
  var daysFromMonday = daysFromYear + daysFromLeapYear + daysFromMonth + date;
  return daysFromMonday % 7;


};

var numberOfSundays = function(dayOfWeek){
  var numberOfDays = 0;
  var year = 1901;
  var month = 1;
  while(year <= 2000){
    while(month <= 12){
      if(dayOfTheWeek(1,month, year) === dayOfWeek){
        numberOfDays += 1;
      }
      month++;
    }
    month = 1;
    year++;
  }
  return numberOfDays;
};

var sumOfFactorial = function(num){
  if(num < 0){
    return "what you doing foo?";
  }
  if(num < 2){
    return 1;
  }
  var i = 2;
  var fn = 0;
  var facts = [1];
  var factString = '';
  var stillInt = true;
  while (i <= num){

    if( i % 10 === 0){
      facts[fn] = facts[fn] *(i/10);
    }else{
      facts[fn] = facts[fn] * i;
    }
    while( facts[fn] % 10 === 0){
      facts[fn] = facts[fn]/ 10;
    }

    i++;
    if(facts[fn] * i > 9007199254740991){
      facts[fn] = facts[fn].toString();
      facts.push(1);
      fn++;
    }
  }
  debugger; 
  var factStringRight = '';
  var ones = 0;
  var tens = 0;
  var hundreds = 0;
  for (var place = 0; place < factString.length; place++) {

    var tempVal = parseInt(factString[place]) * i;
    ones = ones + (tempVal % 10);
    if( ones !== 0){
      factStringRight = ones.toString() + factStringRight;
    }
    ones = tens + Math.floor((tempVal% 100)/10);
    tens = Math.floor(tempVal /100);
  }
  factString = factStringRight;

  var sum = 0;
  for (var j = 0; j < factString.length; j++) {
    sum += parseInt(factString[j]);
  }
  return sum;
};
