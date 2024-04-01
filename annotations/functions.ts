//Type annotation and inference on functions 

/* 
There is NO type inference for ARGUMENTS, so always use type annotations. 
Type inference works for output, but avoid using it, always use type annotations. 
*/ 


const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => { 
 return a - b; 
}

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

//void
const logger = (message: string): void => {
  console.log(message);
};https://www.lafise.com/blb/banca-personal/transferencias#JP-Morgan-Chase-Co-1109

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const weather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};


