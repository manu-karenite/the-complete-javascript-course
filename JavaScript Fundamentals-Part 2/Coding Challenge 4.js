/*

Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. 
Use a for loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 

Bonus:

4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given
array.
4.1. Call the function with the 'totals' array

*/

'use strict';


//case 1 : 

const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
const tips = new Array();
const totals = new Array();


for (let i = 0; i < bills.length; i++) {
    const tipValue = (bills[i] >= 50 && bills[i] <= 300) ? 0.15 * bills[i] : 0.2 * bills[i];
    tips.push(tipValue);
    totals.push(Number(bills[i]) + Number(tips[i]));
}

console.log(bills);
console.log(tips);
console.log(totals);


const avgBill = function (totals) {
    let sum = 0;
    for (let i = 0; i < totals.length; i++) {
        sum = sum + totals[i];

    }
    return (sum / totals.length);
}

console.log(`The Mean Value of the Total Bills = ${avgBill(totals)}..!`);
