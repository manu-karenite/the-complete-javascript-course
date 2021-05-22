/*
                        The Geometrizer
Create 2 functions that calculate properties of a circle, using the definitions.

Create a function called calcCircumfrence:
Pass the radius to the function.  
Calculate the circumference based on the radius, and output "The circumference is NN".


Create a function called calcArea:
Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".
*/

'use strict';

const PI = 22 / 7;

function calcArea(radius) {
    return ((PI * (radius ** 2)).toFixed(2));
}

function calcCircumference(radius) {
    return ((2 * PI * radius).toFixed(2));
}

console.log(calcArea(5));
console.log(calcCircumference(5));

console.log(calcArea(2.5));
console.log(calcCircumference(2.5));

console.log(calcArea(0));
console.log(calcCircumference(1.2));

/*Output

script.js:13 78.57
script.js:14 31.43
script.js:16 19.64
script.js:17 15.71
script.js:19 0.00
script.js:20 7.54

*/
