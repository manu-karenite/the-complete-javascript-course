/*
-----------------------------------------------------QUESTION-----------------------------------------------------

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:

1)  Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
2)  Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall

*/


let heightJohn = null;
let weightJohn = null;

let heightMark = null;
let weightMark = null;

let bmiJohn = null;
let bmiMark = null;


//Case 1 :

weightMark = 78;
heightMark = 1.69;

weightJohn = 92;
heightJohn = 1.95;

bmiMark = weightMark / (heightMark ** 2);
bmiJohn = weightJohn / (heightJohn ** 2);

let markHigherBMI = bmiMark > bmiJohn;

if (markHigherBMI == true) {
    console.log("Mark has a higher BMI of : " + bmiMark);
}
else {
    console.log("John has a higher BMI or equal BMI of : " + bmiJohn);
}


//case 2

weightMark = 95;
heightMark = 1.88;

weightJohn = 85;
heightJohn = 1.76;

bmiMark = weightMark / (heightMark ** 2);
bmiJohn = weightJohn / (heightJohn ** 2);

markHigherBMI = bmiMark > bmiJohn;

if (markHigherBMI == true) {
    console.log("Mark has a higher BMI of : " + bmiMark);
}
else {
    console.log("John has a higher BMI or equal BMI of : " + bmiJohn);
}





