const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates: Date[] = [new Date(), new Date()];
const carsByMake: string[][] = [];

// TS Help with type inference when extracting values
const car2 = carsByMake[0]; //when over on variable can see that car2 has been assigned with type array
const myCar = carMakers.pop();

//TS can prevent us from adding incompatible values to the array
carMakers.push(); // can push only string

//We can get help with 'map', 'forEach', 'reduce' functions
carMakers.map((car: string): string => {
  return car; // if we put . after car , we can see it's allow only string method
});

//Flexible - arrays can still contain multiple different types
const importantDates: (Date | string)[] = [new Date(), '2032-10-10'];
importantDates.push(); //we can push more than one type as we assigned to this array

//Where to use typed arrays ? --> Anytime we need to represent a collection of records with some arbitary sort order
