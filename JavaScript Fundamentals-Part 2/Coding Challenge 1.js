/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
  
  
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
   to the console, together with the victory points, according to the rule above.   
   Example: "Koalas win (30 vs. 13)"

4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

'use strict';


const calcAverage = (mark1, mark2, mark3) => ((mark1 + mark2 + mark3) / 3);

const checkWinner = function (avgD, avgK) {
    if (avgD >= 2 * avgK) {
        return (`Dolphins win (${avgD} vs. ${avgK})`);
    }
    else if (avgK >= 2 * avgD) {
        return (`Koalas win (${avgK} vs. ${avgD})`);
    }
    else
        return ('No Team Wins..!');

}

//case 1
let d1 = 44;
let d2 = 23;
let d3 = 71;

let k1 = 65;
let k2 = 54;
let k3 = 49;

let avg_Dolphin = calcAverage(d1, d2, d3);
let avg_Koalas = calcAverage(k1, k2, k3);

console.log(checkWinner(avg_Dolphin, avg_Koalas));

//case 2

d1 = 85;
d2 = 54;
d3 = 41;

k1 = 23;
k2 = 34;
k3 = 27;

avg_Dolphin = calcAverage(d1, d2, d3);
avg_Koalas = calcAverage(k1, k2, k3);
console.log(checkWinner(avg_Dolphin, avg_Koalas));

/*Output
script.js:30 No Team Wins..!
script.js:44 Dolphins win (60 vs. 28)
*/
