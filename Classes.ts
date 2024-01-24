//Classes --> Blueprint to create an object with some fields(values) and method(function) to represent a 'thing'
//remark: will comeback to re study

class Vehicle {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep beep');
  }
}

//Inheritance
class Carz extends Vehicle {
  //overwritten on the child class
  drive(): void {
    console.log('vroom');
  }
}

const vehicle = new Vehicle('orange');
vehicle.drive();
vehicle.honk();

const carz = new Carz('boom');
carz.drive();
carz.honk();

//Modifiers: public/private/protected

//public: the method can be called any where,any time
//private: this method can only be called by other methods in this class
//protected: thid method can be called by other methods in this class, or by other method in child classes
