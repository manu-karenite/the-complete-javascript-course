/*----------Ref : File Uploaded as Coding Challenge1.jpg----------

We're building a football betting app (soccer for my American friends )!
Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.

Your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')

2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the
   goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
   
3. Create an array 'allPlayers' containing all players of both teams (22 players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') 
   containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
   
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the
   number of goals that were scored in total (number of player names passed in)
   
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary
operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored

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

//TASK 1
  const players1 = new Array(...game.players[0]);
  console.log(...players1);
  console.log(typeof(players1));

  const players2 = new Array(...game.players[1]);
  console.log(...players2);
  console.log(typeof(players2));

//TASK2
  let [gk,...fieldPlayers]=[...players1];
  console.log(gk);
  console.log(...fieldPlayers);
//TASK 3
  let allPlayers = [...players1,...players2];
  console.log(...allPlayers);

//TASK4 
  let players1Final=[...players1,'Thiago','Coutinho','Perisic'];
  console.log(...players1Final);

//TASK5
  let {odds :{team1 , x:draw , team2}} = game;
  console.log(draw);

//TASK6
  let printGoals = function(...players) 
  {
    //players array contain all the names now
    for(let i=0;i<players.length;i++)
    {
      console.log(`Goal ${i+1} was scored by ${players[i]}`);
    }
    console.log(`Total Number of goals scored were : ${players.length}!`);
  }

  printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
  printGoals(...game.scored);

//TASK7  (by short-circuiting)
  team1<team2 && console.log(`Team 1 is more likely to win`);
  team1>team2 && console.log(`Team 2 is more likely to win`);
  team1===team2 && console.log(`There's gonna be a draw !`);

/* OUTPUT 
script.js:107 Neuer Pavard Martinez Alaba Davies Kimmich Goretzka Coman Muller Gnarby Lewandowski
script.js:108 object
script.js:111 Burki Schulz Hummels Akanji Hakimi Weigl Witsel Hazard Brandt Sancho Gotze
script.js:112 object
script.js:115 Neuer
script.js:116 Pavard Martinez Alaba Davies Kimmich Goretzka Coman Muller Gnarby Lewandowski
script.js:119 Neuer Pavard Martinez Alaba Davies Kimmich Goretzka Coman Muller Gnarby Lewandowski Burki Schulz Hummels Akanji Hakimi Weigl Witsel Hazard Brandt Sancho Gotze
script.js:122 Neuer Pavard Martinez Alaba Davies Kimmich Goretzka Coman Muller Gnarby Lewandowski Thiago Coutinho Perisic
script.js:124 3.25
script.js:132 Goal 1 was scored by Davies
script.js:132 Goal 2 was scored by Muller
script.js:132 Goal 3 was scored by Lewandowski
script.js:132 Goal 4 was scored by Kimmich
script.js:134 Total Number of goals scored were : 4!
script.js:132 Goal 1 was scored by Lewandowski
script.js:132 Goal 2 was scored by Gnarby
script.js:132 Goal 3 was scored by Lewandowski
script.js:132 Goal 4 was scored by Hummels
script.js:134 Total Number of goals scored were : 4!
script.js:140 Team 1 is more likely to win
*/
