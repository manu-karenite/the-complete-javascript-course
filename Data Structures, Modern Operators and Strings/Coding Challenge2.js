/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from before.

Your tasks:
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console 

3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
                            Odd of victory Bayern Munich: 1.33
                            Odd of draw: 3.25
                            Odd of victory Borrussia Dortmund: 6.5
        Get the team names directly from the game object, don't hardcode them (except for "draw")
        
4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this
   game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}

*/

'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};



for (const [goals, Player] of game.scored.entries()) {
    let goall = Number(goals) + 1;
    console.log(`Goal ${goall} : ${Player}`);
}

let averageOdds = 0;
const newOddsArray = Object.values(game?.odds);
for (const i of newOddsArray)
    averageOdds += Number(i);
console.log(`Avarage of all Odds is : ${(averageOdds / newOddsArray.length)}`);

const nameOfTeams = Object.keys(game?.odds);
for (const i of nameOfTeams) {
    if (i == 'x')
        console.log(`Odd Of Draw : ${game.odds[i]}`);
    else
        console.log(`Odds of Victory ${game[i]} : ${game.odds[i]}`);
}

const scorers = {};
const whoScoredGoals = [...game.scored];
console.log(whoScoredGoals);
for (const playerName of whoScoredGoals) {
    if (!scorers[playerName])
        scorers[playerName] = 1;
    else
        scorers[playerName] += Number(scorers[playerName]);
}
console.log(scorers);

/*-------------------------Output----------------------------------------

Goal 1 : Lewandowski
Goal 2 : Gnarby
Goal 3 : Lewandowski
Goal 4 : Hummels
Avarage of all Odds is : 3.6933333333333334
Odds of Victory Bayern Munich : 1.33
Odd Of Draw : 3.25
Odds of Victory Borrussia Dortmund : 6.5
["Lewandowski", "Gnarby", "Lewandowski", "Hummels"]0: "Lewandowski"1: "Gnarby"2: "Lewandowski"3: "Hummels"length: 4__proto__: Array(0)
{Lewandowski: 2, Gnarby: 1, Hummels: 1}
Gnarby: 1
Hummels: 1
Lewandowski: 2
*/
