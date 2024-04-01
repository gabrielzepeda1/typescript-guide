//Why do we care about types in arrays?

/* 
1. TS can do type inference when extracting values from an array 
2. TS can prevent us from adding incompatible values to the array 
3. We can get help with 'map', 'forEach', 'reduce' functions 
4. FLexible - arrays can still contain multiple different types 
*/

const carMakers = ["ford", "toyota", "chevy"];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

//Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

//Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push("2030-10-10");
importantDates.push(new Date());

/* 
When to use typed arrays? 

Any time we need to represent a collection of different records. 
*/
