/*Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
    Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
    Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
    
Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do
  not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

2. Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) 🤓

3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
    too little!"
5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)

6. Log to the console whether there is any dog eating an okay amount of food (just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the
    array's objects 😉)
    
Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
*/

const dogs = [{
        weight: 22,
        curFood: 250,
        owners: ['Alice', 'Bob']
    },
    {
        weight: 8,
        curFood: 200,
        owners: ['Matilda']
    },
    {
        weight: 13,
        curFood: 275,
        owners: ['Sarah', 'John']
    },
    {
        weight: 32,
        curFood: 340,
        owners: ['Michael']
    },
];
//task 1: 
dogs.forEach(function(dogObject) {
    dogObject.recommendedFood = Number(((dogObject.weight ** 0.75 * 28)).toFixed(3));
    //propery made	
});
console.log(dogs);

//task 2
function findSarahDog(dogs) {
    dogs.forEach(function(dogObject) {
        if (dogObject?.owners?.includes('Sarah')) {
            console.log(`Sarah's Dog is ${dogObject.weight} kg of weight !`);
            return;
        }
    })
}
findSarahDog(dogs);

//task 3
const ownersEatTooMuch = dogs.filter(function(e) {
    return (e.curFood > e.recommendedFood)
}).map(function(f) {
    return f.owners;
}).flat(1);
console.log(ownersEatTooMuch);

//task 3
const ownersEatTooLittle = dogs.filter(function(e) {
    return (e.curFood < e.recommendedFood)
}).map(function(f) {
    return f.owners;
}).flat(1);
console.log(ownersEatTooLittle);

const com1 = ownersEatTooMuch.join(' and ')
const com2 = ownersEatTooLittle.join(" and ");

//task -4
console.log(`${com1} dog's eat too little!`);
console.log(`${com2} dog's eat too much!`);

//task-5
console.log(dogs.includes(function(f) {
    return f.recommendedFood === f.curFood;
}))

//task-6
console.log(dogs.some(function(f) {
    return (f.curFood > f.recommendedFood * 0.9 && f.curFood < f.recommendedFood *
        1.10);
}))
//task-7
const eatingOkay = dogs.filter(function(f) {
    return (f.curFood > f.recommendedFood * 0.9 && f.curFood < f.recommendedFood *
        1.10);
})
console.log(eatingOkay);

//task-8

const sortedDog = dogs.sort(function(a, b) {
    return a.recommendedFood - b.recommendedFood;
})
console.log(sortedDog);

/*output

script.js:298 Sarah's Dog is 13 kg of weight !
script.js:313 (3) ["Matilda", "Sarah", "John"]
script.js:323 (3) ["Alice", "Bob", "Michael"]
script.js:329 Matilda and Sarah and John dog's eat too little!
script.js:330 Alice and Bob and Michael dog's eat too much!
script.js:333 false
script.js:339 true
script.js:350 [{…}]
  0: {weight: 32, curFood: 340, owners: Array(1), recommendedFood: 376.722}
  length: 1__proto__: Array(0)

(4) [{…}, {…}, {…}, {…}]
  0:{weight: 8, curFood: 200, owners: Array(1), recommendedFood: 133.191}
  1: {weight: 13, curFood: 275, owners: Array(2), recommendedFood: 191.697}
  2: {weight: 22, curFood: 250, owners: Array(2), recommendedFood: 284.43}
  3: {weight: 32, curFood: 340, owners: Array(1), recommendedFood: 376.722}
  length: 4__proto__: Array(0)
  */
