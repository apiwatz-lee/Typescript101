//Tuple: Array-like structure where each element represents some property of a record
//A tuple usually contains multiple different properties to describe one single thing

//Object representing a drink (Example)
//Color --> brown
//Carbonated --> true
//Sugar --> 40
// [brown,true,40]

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

//Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

//tuples not going to use often (just know the idea)
