/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy


Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

*/


//Sample Case

let d1 = 97;
let d2 = 112;
let d3 = 80;

let k1 = 109;
let k2 = 95;
let k3 = 50;

let avg_dolphins = (d1 + d2 + d3) / 3;
let avg_koalas = (k1 + k2 + k3) / 3;

if (avg_dolphins > avg_koalas) {
    if (avg_dolphins >= 100)
        console.log(`Dolphins win the Trophy with ${avg_dolphins} points!`);
    else
        console.log(`Dolphins score high but lose the Trophy with ${avg_dolphins} points less than 100!`);

}


else if (avg_koalas > avg_dolphins) {
    if (avg_koalas >= 100)
        console.log(`Koalas win the Trophy with ${avg_koalas} points!`);
    else
        console.log(`Koalas score high but lose the Trophy with ${avg_koalas} points less than 100!`);
}

else {
    //match is drawn
    if (avg_koalas >= 100 && avg_dolphins >= 100)
        console.log(`Match is already drawn with ${avg_koalas} points!`);
    else
        console.log(`Minimum points not attained by both teams , and trophy not awarded to anyone!`);
}




