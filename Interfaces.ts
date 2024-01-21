//The interplay between interfaces and classes is how we're going to really get very strong code reuse when we are writting typescript code.
//Interfaces --> Creates a new type, describing the property names and value types of an object

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name:${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (vehicle: Reportable): void => {
  console.log(vehicle.summary());
};

printSummary(oldCivic);
printSummary(drink);

//interface คือสิ่งที่บอกว่า value ที่นำมา refer ด้วย จำเป็นต้องมี property นั้นๆ
//reuse interface in different object
