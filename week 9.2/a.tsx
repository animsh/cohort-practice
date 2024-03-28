let x: number = 1;
// x = "s";
console.log(x);

const greet = (firstName: string): string => {
  return `Hello ${firstName}`;
};
console.log(greet("John"));

const sum = (a: number, b: number): number => {
  return a + b;
};
console.log(sum(7, 8));

const isLegal = (age: number): boolean => {
  return age > 18;
};
console.log(isLegal(24));
console.log(isLegal(17));

const delayedCall = (fn: () => void): void => {
  setTimeout(fn, 1000);
};

delayedCall(() => {
  console.log("Hello");
});

interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

class Manager implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }

  greet(phrase: string): void {
    console.log(`Hello ${phrase}`);
  }
}

const manager = new Manager("John", 18);
manager.greet("Sir");

type Bird = {
  featherType: string;
  wingSize: string;
};

type Mammle = {
  swimmingSpeed: number;
};

type Xyz = Bird | Mammle;
type Pqr = Bird & Mammle;
