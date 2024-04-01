// const drink = {
//   color: "brown",
//   carbonated: true,
//   sugar: 40,
// };

type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", true, 0];

//tuples require the order of the values to be fixed.
//the tuple is abstracted into a type that indicates the order of the values.

//Why aren't tuples as common as say, objects?

//In this example, using a tuple doesn't exactly tell us what is going on in the carSpecs variable.
const carSpecs: [number, number] = [400, 3354];

//When using a traditional JS object, the keys tell us exactly what the value is trying to describe.
const carStats = {
  horsepower: 400,
  weight: 3354,
};
