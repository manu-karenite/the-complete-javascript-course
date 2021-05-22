/*
                         The Puppy Age Calculator
You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge that:
  takes 1 argument: your puppy's age.
  calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
  
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

'use strict';

function calculateDogAge(puppyAge, convRate) {
    //if passed 2 years ->then 2*7 years
    let ans = `Your dog is ${puppyAge * convRate} years old in Dog's Years!`;
    return ans;
}

//calling function

console.log(calculateDogAge(2, 7));
console.log(calculateDogAge(4, 7));
console.log(calculateDogAge(0.5, 7));


/*Output

script.js:11 Your dog is 14 years old in Dog's Years!
script.js:12 Your dog is 28 years old in Dog's Years!
script.js:13 Your dog is 3.5 years old in Dog's Years!

*/
