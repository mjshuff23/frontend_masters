"use strict";
// Conditional Types
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#conditional-types
//  - A conditional type is a type that depends on a type parameter.
// Kind of like a ternary for type declarations
//  - Utility types are built on conditional types
const x = 16;
//  condition ? expressionIfTrue : expressionIfFalse with implicit return
const isXNegative = x >= 0 ? 'no' : 'yes';
class Grill {
    startGas() { }
    stopGas() { }
}
class Oven {
    setTemperature(degrees) { }
}
const device1 = new Grill();
const device2 = new Oven();
// const device3: CookingDevice<"grill"> = new Oven(); // Error
const device4 = Math.random() > 0.5 ? new Grill() : new Oven();
console.log('device4', device4);
