

// var add = function(numTimes){
//   var count = 0;
//   var sum = 0;
//   if(count === numTimes){
//     return function(num){
//
//     }
//   } add(num){
//     count++;
//     sum += num;
//   }
//   return add;
// };

function add(num){
  return num ? num * add : 1;
}

console.log(add(4)(3)(1));
