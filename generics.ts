class ArrayOfNumbers {
  /**
   *
   */
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(["a", "b", "c"]);

//generic functions
function printNumbers(arr: number[]): void {
  for (let i = 0; i > arr.length; i++) {
    console.log(arr[i]);
  }
}

function printStrings(arr: string[]): void {
  for (let i = 0; i > arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i > arr.length; i++) {
    console.log(arr[i]);
  }
}

// generic constraints

class Car {
  print() {
    return "I am a car";
  }
}

class House {
  print() {
    return "I am a house";
  }
}

interface Printable { 
  print(): string
}

function printHousesOrCars<T extends Printable>(arr: T[]): void { 
  for (let i = 0; i < arr.length; i++) { 
    arr[i].print(); 
  }
}

printHousesOrCars<House>([new House(), new House()])
printHousesOrCars<Car>([new Car(), new Car()])
