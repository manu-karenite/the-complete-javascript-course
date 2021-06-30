/*
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the
       game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
       
Your tasks:
1. Create an array 'events' of the different game events that happened (no duplicates)

2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
                                           [FIRST HALF] 17: ⚽ GOAL
*/

'use strict'

const gameEvents = new Map([
 [17, '⚽ GOAL'],
 [36, '� Substitution'],
 [47, '⚽ GOAL'],
 [61, '� Substitution'],
 [64, '� Yellow card'],
 [69, '� Red card'],
 [70, '� Substitution'],
 [72, '� Substitution'],
 [76, '⚽ GOAL'],
 [80, '⚽ GOAL'],
 [92, '� Yellow card'],
 ]);

 let events = new Set();
 for(const [minutes,event] of gameEvents)
    events.add(event);

const eventsArray =[...events];
console.log(eventsArray);

gameEvents.delete(64);
console.log(gameEvents);

console.log(`"An event happened, on average, every ${90/gameEvents.size} minutes`);

for(const [key,value] of gameEvents)
{
    if(key<45)
        console.log(`[FIRST HALF] ${key}: ${value}`);
    else
         console.log(`[SECOND HALF] ${key}: ${value}`);

}

/*-----------------------------------output--------------------------------------*
(4) ["⚽ GOAL", "� Substitution", "� Yellow card", "� Red card"]0: "⚽ GOAL"1: "� Substitution"2: "� Yellow card"3: "� Red card"length: 4__proto__: Array(0)

script.js:25 Map(10) {17 => "⚽ GOAL", 36 => "� Substitution", 47 => "⚽ GOAL", 61 => "� Substitution", 69 => "� Red card", …}[[Entries]]0: {17 => "⚽ GOAL"}1: {36 => "� Substitution"}2: {47 => "⚽ GOAL"}3: {61 => "� Substitution"}4: {69 => "� Red card"}5: {70 => "� Substitution"}6: {72 => "� Substitution"}7: {76 => "⚽ GOAL"}8: {80 => "⚽ GOAL"}9: {92 => "� Yellow card"}size: (...)__proto__: Map
script.js:27 "An event happened, on average, every 9 minutes
script.js:32 [FIRST HALF] 17: ⚽ GOAL
script.js:32 [FIRST HALF] 36: � Substitution
script.js:34 [SECOND HALF] 47: ⚽ GOAL
script.js:34 [SECOND HALF] 61: � Substitution
script.js:34 [SECOND HALF] 69: � Red card
script.js:34 [SECOND HALF] 70: � Substitution
script.js:34 [SECOND HALF] 72: � Substitution
script.js:34 [SECOND HALF] 76: ⚽ GOAL
script.js:34 [SECOND HALF] 80: ⚽ GOAL
script.js:34 [SECOND HALF] 92: � Yellow card
*/
