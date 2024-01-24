const apple: number = 5;
const speed: string = 'fast';
const hasName: boolean = true;
const nothingMuch: null = null;
const nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//Classess
class Car {}

let car: Car = new Car();

//Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use type annotations
// 1) when a function returns the 'any' type and we need to clarify the value
const json = '{"x:10,"y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2)when we declare a variable on one line then initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3)when we want a variable to have a type that can't be inferred
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
