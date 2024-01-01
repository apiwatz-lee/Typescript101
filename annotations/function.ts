//Type annotation : Code we add to tell Typescript what type of arguments a function will receive and what type of values it will return
//Type inference : Typescript tries to figure out what type of value a function will return

const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};
