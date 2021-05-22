/*
                         The Temperature Converter
                         
It's hot out! Let's make a converter based on the steps here.

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.

Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:

Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/

'use strict';

function calcCelsius(farheneit) {
    const ans = (((100 / 180) * (farheneit - 32)).toFixed(3));
    return (`${farheneit} F is ${ans} C`);
}

function calcFarheneit(celsius) {
    const ans = (Number((1.8 * (celsius)).toFixed(3)) + Number(32));
    return (`${celsius} C is ${ans} F`);

}

console.log(calcCelsius(212));
console.log(calcFarheneit(0));

console.log(calcCelsius(180));
console.log(calcFarheneit(100));

console.log(calcCelsius(32));
console.log(calcFarheneit(25));

/*Output
script.js:14 212 F is 100.000 C
script.js:15 0 C is 32 F
script.js:17 180 F is 82.222 C
script.js:18 100 C is 212 F
script.js:20 32 F is 0.000 C
script.js:21 25 C is 77 F
*/
