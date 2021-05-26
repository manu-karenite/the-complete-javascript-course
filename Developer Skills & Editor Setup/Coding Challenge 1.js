/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. 
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]

*/

"use strict";

let printForecast = function (temps) {
  let str = "";
  let sizeOfArray = temps.length;
  for (let i = 0; i < sizeOfArray; i++) {
    str = str + `...${temps[i]}°C in ${i + 1} days`;
  }
  return str;
};
//case 1
let temps = new Array(17, 21, 23);
console.log(printForecast(temps) + "...");

//case 2
temps = [12, 5, -5, 0, 4];
console.log(printForecast(temps) + "...");

/* Output
script.js:13 ...17°C in 1 days...21°C in 2 days...23°C in 3 days...
script.js:17 ...12°C in 1 days...5°C in 2 days...-5°C in 3 days...0°C in 4 days...4°C in 5 days...
*/
