/*
                         The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.

calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"

Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

'use strict';

const maxAge = 90;
function calculateSupply(age, requirement) {
    const ageLeft = maxAge - age; //in years
    const required = ageLeft * 365 * requirement;

    const ans = `You will need ${required} snacks to last you until the ripe old age of ${maxAge}`;
    return ans;
}

console.log(calculateSupply(28, 36));
console.log(calculateSupply(28, 2.5));
console.log(calculateSupply(28, 400));

/*Output

You will need 814680 snacks to last you until the ripe old age of 90
script.js:13 You will need 56575 snacks to last you until the ripe old age of 90
script.js:14 You will need 9052000 snacks to last you until the ripe old age of 90

*/
