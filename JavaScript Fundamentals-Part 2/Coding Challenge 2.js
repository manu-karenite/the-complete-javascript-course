/*


Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, 
and if the value is different, the tip is 20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100

2. And now let's use arrays! So create an array 'bills' containing the test data below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before

4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44

*/


'use strict';

let val = new Array(125, 55, 44);
let tip = new Array();
let total = new Array();

let entry;


let calculateTip = function (val) {
    let i = 0;
    while (i < val.length) {

        entry = val[i];
        tip.push((entry >= 50 && entry <= 300) ? (0.15 * entry) : (0.2 * entry));
        total.push(Number(entry) + Number(tip[i]))
        i++;

    }
}

calculateTip(val);
console.log(tip);
console.log(total);

/*
Output
(3) [18.75, 111, 8.8]
0: 18.75
1: 111
2: 8.8
length: 3
__proto__: Array(0)

(3) [143.75, 666, 52.8]
0: 143.75
1: 666
2: 52.8
length: 3
__proto__: Array(0)

*/
