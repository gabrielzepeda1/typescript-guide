class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep beep");
  }
}

const vehicle = new Vehicle('orange'); 
console.log(vehicle.color);

class Car extends Vehicle { 
  constructor(public wheels: number, color: string) { 
    super('red'); 
  }

 private drive(): void { 
    console.log('vroom');
  }

  startDrivingProcess(): void { 
    this.drive(); 
  }
} 

const car = new Car(4, 'red'); 
car.startDrivingProcess
 
/* 
Modifiers: keyword that is placed so that we can add different properties and methods to a class. 
The different modifiers in typescript are: public, private, and protected 
*/ 