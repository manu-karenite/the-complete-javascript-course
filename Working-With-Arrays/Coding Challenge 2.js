/*Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. 
  If the dog is > 2 years old, humanAge = 16 + dogAge * 4

2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs 

4. Run the function for both test datasets
    Test data:
    § Data 1: [5, 2, 4, 1, 15, 8, 3]
    § Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

const age1 = [5, 2, 4, 1, 15, 8, 3];
const age2 = [16, 6, 10, 5, 6, 1, 4]

const arrayOfAges = [[5, 2, 4, 1, 15, 8, 3],[16, 6, 10, 5, 6, 1, 4]];



const solveProblem = function(age1)
{
  
//step 1: we'll use map to get a new arra of dog's age to human years
        const dogAgeToHuman = age1.map(function(currentAge)
                                    {
        const humanAge =(currentAge<=2) ? (2*currentAge) : (16 + 4*currentAge);
        return humanAge;
      });

      //step2 : use filter to filter out using 18 years of age
      const filtered_dogAgeToHuman = dogAgeToHuman.filter(function(currentAge)
                                                         {
        if(currentAge>=18)
          return currentAge;
      });
  

      //step 3 : reduce to get age sum of all and then obtaining avg;
      const totalAge = filtered_dogAgeToHuman.reduce(function(sum,age,index,filtered_dogAgeToHuman)
                                                    {
        return (sum +  age);
      },0);
   console.log(totalAge/filtered_dogAgeToHuman.length)
}

for (let i=0;i<arrayOfAges.length;i++)
  {
    solveProblem(arrayOfAges[i]);
  }

/*OUPUT
44
47.333333333333336
*/
