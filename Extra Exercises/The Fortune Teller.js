/*
                         The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.

*/

'use strict';
function tellFortune(children, partner, location, job) {
    let ans = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids!`;
    return ans;
}

//calling function

console.log(tellFortune(2, "Sandria", "Paraguay", "SDE-II"));
console.log(tellFortune(3, "Augusta", "London", "HR Manager"));
console.log(tellFortune(2, "Shreya", "India", "IAS Officer"));


/*Output

script.js:9 You will be a SDE-II in Paraguay, and married to Sandria with 2 kids!
script.js:10 You will be a HR Manager in London, and married to Augusta with 3 kids!
script.js:11 You will be a IAS Officer in India, and married to Shreya with 2 kids!

*/
