push(), pop(), shift(), unshift(), find(), some(), every()
sort(), includes(), slice(), map(), filter(), reduce(), forEach()
indexOf(), lastIndexOf(), reverse(), concat(), join(), toString()

reduce():-
The reduce method in JavaScript is used to reduce the elements of an array to a single value. 
It takes a callback function as its argument, which is applied to each element of the array. 
The callback function takes four arguments: accumulator, currentValue, currentIndex, and array.
array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
