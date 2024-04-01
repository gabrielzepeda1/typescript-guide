// Interfaces - Creates a new type, describing the property names and value types of an object.

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(`Name: ${item.summary}`);
};
printSummary(oldCivic);
printSummary(drink);

/* General Strategy For Reusable Code in TS 

-Create functions that accept arguments that are typed with interfaces 
-Objects/classes can decide to 'implement' a given interface to work with a function 
*/ 
